import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subjects, goals, problem_solving } = body;

    const response = await fetch('http://localhost:5000/api/career-advice', {
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

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `Server responded with status ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.success || !data.advice) {
      throw new Error(data.error || 'Invalid response format from server');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in career advice API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
}
