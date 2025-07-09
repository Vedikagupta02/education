import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;

    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `Server responded with status ${response.status}`);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to process request',
        success: false
      },
      { status: 500 }
    );
  }
}
