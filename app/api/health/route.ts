import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    nextVersion: 16,
    timestamp: new Date().toISOString(),
  });
}
