import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), '..', 'data', 'players.csv');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    return NextResponse.json(fileContents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
} 