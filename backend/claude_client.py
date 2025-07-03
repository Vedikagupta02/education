import anthropic

class ClaudeClient:
    def __init__(self):
        self.client = anthropic.Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY'))
    
    def get_career_advice(self, subjects, goals, problem_solving):
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
            response = self.client.messages.create(
                model="claude-2",
                max_tokens=300,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )
            return response.content
        except Exception as e:
            raise Exception(f"Claude API error: {str(e)}")
