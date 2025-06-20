import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { subjects, goals, problem_solving } = await request.json();

    const prompt = `Based on the following information about a student:
    - Preferred subjects: ${subjects}
    - Future goals: ${goals}
    - Problem-solving skills: ${problem_solving}
    
    Provide personalized career guidance for a Class 10 student choosing their stream after 10th. Include:
    1. Recommended stream (Science, Commerce, Arts)
    2. Potential career paths
    3. Skills needed for success
    4. Educational requirements
    5. Industry outlook
    
    Format the response in HTML with proper headings and bullet points.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return Response.json({
      success: true,
      advice: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error in career advice API:', error);
    return Response.json(
      { success: false, error: 'Failed to generate career advice' },
      { status: 500 }
    );
  }
}
