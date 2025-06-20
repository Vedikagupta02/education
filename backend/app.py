from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

@app.route('/api/career-advice', methods=['POST'])
def get_career_advice():
    data = request.json
    
    # Prepare the prompt for GPT-3.5
    prompt = f"""You are a career counselor for class 10 students. Provide personalized career guidance based on the following information:
    
    Student's Interests:
    - Subjects: {data.get('subjects', 'Not specified')}
    - Future Goals: {data.get('goals', 'Not specified')}
    - Problem Solving Skills: {data.get('problem_solving', 'Not specified')}
    
    Please provide:
    1. Recommended stream after 10th (Science, Commerce, Arts)
    2. Reasons for the recommendation
    3. Potential career paths
    4. Subjects to focus on in 11th and 12th
    5. Any additional advice for the student
    
    Format the response in a friendly, conversational tone suitable for a 10th grade student."""
    
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful career counselor for class 10 students."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=1000
        )
        
        return jsonify({
            'success': True,
            'advice': response.choices[0].message.content
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
