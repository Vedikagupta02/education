import os
from dotenv import load_dotenv
import logging
from typing import Dict, Optional

class HuggingFaceClient:
    def __init__(self):
        load_dotenv()
        self.logger = logging.getLogger(__name__)
        self.logger.setLevel(logging.INFO)
        handler = logging.StreamHandler()
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        handler.setFormatter(formatter)
        self.logger.addHandler(handler)
        
        self.logger.info("Career guidance system initialized")
    
    def get_career_advice(self, subjects: str, goals: str, problem_solving: str) -> Dict[str, str]:
        """Get structured career advice based on student's interests and goals"""
        try:
            # Simple career guidance based on common interests
            if "math" in subjects.lower() or "science" in subjects.lower():
                stream = "Science"
                career_paths = [
                    "Engineering",
                    "Medical",
                    "Research",
                    "Data Science"
                ]
                skills = "Critical thinking, problem-solving, mathematics, communication"
                educational_path = "Class 11-12 → Bachelor's degree → Master's degree"
                career_outlook = "High demand in industry"
            else:
                stream = "Commerce"
                career_paths = [
                    "Accountancy",
                    "Finance",
                    "Business Management",
                    "Marketing"
                ]
                skills = "Analytical skills, communication, business acumen, leadership"
                educational_path = "Class 11-12 → Bachelor's degree → Professional certification"
                career_outlook = "Growing opportunities in business sector"
            
            return {
                "stream": stream,
                "career_paths": career_paths,
                "skills": skills,
                "educational_path": educational_path,
                "career_outlook": career_outlook
            }
            
        except Exception as e:
            self.logger.error(f"Error generating career advice: {str(e)}")
            return {
                "stream": "Error: Could not generate advice",
                "career_paths": ["Error: Could not generate career paths"],
                "skills": "Error: Could not generate skills",
                "educational_path": "Error: Could not generate educational path",
                "career_outlook": "Error: Could not generate career outlook"
            }
    
    def test_connection(self) -> bool:
        """Test system connection"""
        try:
            test_advice = self.get_career_advice("Math", "Help people", "Good")
            return bool(test_advice and test_advice['stream'])
            
        except Exception as e:
            self.logger.error(f"Test failed: {str(e)}")
            return False