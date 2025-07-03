import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import os
from dotenv import load_dotenv

class HuggingFaceClient:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv('HUGGINGFACE_API_KEY')
        if not self.api_key:
            raise ValueError("HUGGINGFACE_API_KEY not found in environment variables")
        
        # Using a valid model
        self.model_name = "gpt2"  # Using the base GPT-2 model which is publicly available
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
        self.model = AutoModelForCausalLM.from_pretrained(
            self.model_name,
            torch_dtype=torch.float32
        )
        
        print(f"\nModel loaded: {self.model_name}")
        print(f"Device: {next(self.model.parameters()).device}")
    
    def get_career_advice(self, subjects, goals, problem_solving):
        try:
            # Simple prompt asking for career suggestions
            prompt = f"""Based on your interests in {subjects} and your goal to {goals}, here are some career suggestions:

1. 
2. 
3. 

Please provide 3-4 specific career paths and recommendations."""
            
            # Tokenize and generate response
            inputs = self.tokenizer(prompt, return_tensors="pt")
            
            with torch.no_grad():
                outputs = self.model.generate(
                    **inputs,
                    max_length=150,  # Shorter length for concise responses
                    min_length=50,
                    temperature=0.7,
                    top_p=0.9,
                    num_return_sequences=1,
                    pad_token_id=self.tokenizer.eos_token_id,
                    do_sample=True
                )
            
            # Decode the response
            response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
            
            # Extract only the generated part
            generated_text = response[len(prompt):].strip()
            
            # Split into lines and get the first few meaningful ones
            lines = generated_text.split('\n')
            meaningful_lines = [line.strip() for line in lines if line.strip() and not line.startswith('- ')]
            
            # Take the first 4 meaningful lines
            if meaningful_lines:
                return '\n'.join(meaningful_lines[:4])
            
            # If no meaningful lines, return a default message
            return f"Here are some career suggestions:\n\n1. Consider the Science stream\n2. Explore Engineering or Medical fields\n3. Focus on developing your skills"
            
        except Exception as e:
            print(f"Error generating response: {str(e)}")
            # Return a default response even if there's an error
            return f"Career suggestions:\n\n1. Science stream\n2. Engineering\n3. Medical field"

    def test_connection(self):
        """Test if model is loaded properly"""
        try:
            # Test with a simple prompt
            test_prompt = "Hello, how are you?"
            inputs = self.tokenizer(test_prompt, return_tensors="pt")
            
            with torch.no_grad():
                outputs = self.model.generate(
                    **inputs,
                    max_length=50,
                    num_return_sequences=1
                )
            
            response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
            return len(response) > 0
        except Exception as e:
            print(f"Test failed: {str(e)}")
            return False
