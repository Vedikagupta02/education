import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subjects, goals, problem_solving } = body;

    // Use the correct backend server URL
    const response = await fetch('http://192.168.0.105:5000/api/career-advice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        subjects,
        goals,
        problem_solving,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `Server responded with status ${response.status}`);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in career advice API:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to connect to career advice service'
    }, { status: 500 });
  }
}
