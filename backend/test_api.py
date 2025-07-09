from huggingface_client import HuggingFaceClient
import json

# Create client instance
print("\nInitializing HuggingFace Client...")
hf_client = HuggingFaceClient()

# Test API connection
print("\nTesting API Connection...")
if hf_client.test_connection():
    print("✅ API Connection Test: SUCCESS")
else:
    print("❌ API Connection Test: FAILED")

# Test career advice
print("\nTesting Career Advice...")
test_subjects = "Math, Science"
test_goals = "Want to help people"
test_problem_solving = "Good at solving problems"

print(f"\nGetting career advice for:")
print(f"Subjects: {test_subjects}")
print(f"Goals: {test_goals}")
print(f"Problem Solving: {test_problem_solving}")

try:
    print("\nGenerating career advice...")
    advice = hf_client.get_career_advice(
        subjects=test_subjects,
        goals=test_goals,
        problem_solving=test_problem_solving
    )
    
    print("\nCareer Guidance:")
    print("-" * 80)
    print(f"Recommended Stream: {advice['stream']}")
    print("\nCareer Paths:")
    for path in advice['career_paths']:
        print(f"• {path}")
    print(f"\nKey Skills Needed: {advice['skills']}")
    print(f"\nEducational Path: {advice['educational_path']}")
    print(f"\nCareer Outlook: {advice['career_outlook']}")
    print("-" * 80)
    
except Exception as e:
    print(f"\nError getting career advice: {str(e)}")
