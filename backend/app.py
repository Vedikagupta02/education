from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Get allowed origins from environment variable or use defaults
allowed_origins = os.getenv('ALLOWED_ORIGINS', 'http://localhost:3000,http://127.0.0.1:3000').split(',')

CORS(app, resources={
    r"/api/*": {
        "origins": allowed_origins,
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

# Set up OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')
logger.info(f"OpenAI API key loaded: {'***' + openai.api_key[-4:] if openai.api_key else 'NOT FOUND'}")

@app.route('/')
def index():
    logger.info("Root endpoint accessed")
    return "Welcome to the AI Chat API! Available endpoints: /api/chat, /api/health, /api/career-advice"

@app.route('/api/career-advice', methods=['POST'])
def career_advice():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"success": False, "error": "No data received"}), 400
            
        subjects = data.get('subjects', '')
        goals = data.get('goals', '')
        problem_solving = data.get('problem_solving', '')

        # Generate career advice using OpenAI
        prompt = f"""
        You are a career counselor for Class 10 students. Provide personalized career guidance based on the following information:

        Preferred Subjects: {subjects}
        Future Goals: {goals}
        Problem Solving Skills: {problem_solving}

        Please provide:
        1. Recommended career paths based on their interests and skills
        2. Required subjects for each path
        3. Future prospects
        4. Personal development suggestions

        Format the response in a friendly, conversational tone.
        """

        try:
            client = openai.OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a career counselor for Class 10 students."},
                    {"role": "user", "content": prompt}
                ]
            )
            advice = response.choices[0].message.content
            return jsonify({"success": True, "advice": advice})
        except Exception as e:
            logger.error(f"OpenAI API error: {str(e)}", exc_info=True)
            return jsonify({"success": False, "error": f"OpenAI API error: {str(e)}"}), 500

    except Exception as e:
        logger.error(f"Error in career advice: {str(e)}", exc_info=True)
        return jsonify({"success": False, "error": f"Backend error: {str(e)}"}), 500

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        logger.info("Chat endpoint accessed")
        logger.debug(f"Request data: {request.data}")
        
        data = request.get_json()
        if not data:
            logger.error("No JSON data received")
            return jsonify({"error": "No JSON data received"}), 400
            
        user_message = data.get('message', '')
        
        if not user_message:
            logger.error("Empty message received")
            return jsonify({"error": "Message cannot be empty"}), 400
            
        logger.info(f"Processing message: {user_message}")
        
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful AI assistant."},
                    {"role": "user", "content": user_message}
                ],
                temperature=0.7,
                max_tokens=150
            )
            
            ai_response = response.choices[0].message.content
            logger.info(f"AI response: {ai_response}")
            
            return jsonify({
                "success": True,
                "response": ai_response
            })
            
        except Exception as e:
            logger.error(f"OpenAI API Error: {str(e)}")
            return jsonify({
                "success": False,
                "error": f"OpenAI API Error: {str(e)}"
            }), 500
            
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    logger.info("Health check endpoint accessed")
    return jsonify({"status": "healthy"}), 200

@app.errorhandler(404)
def not_found(e):
    logger.error(f"404 error: {str(e)}")
    return jsonify({
        "success": False,
        "error": "Endpoint not found"
    }), 404

if __name__ == '__main__':
    logger.info("Starting Flask server...")
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    app.run(debug=debug, port=port, host='0.0.0.0')
