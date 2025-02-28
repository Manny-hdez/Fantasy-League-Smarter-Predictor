import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // For now, return an empty array until we have league data
    return NextResponse.json([]);
    
    // Once you have league data saved, you can uncomment this:
    // const dataPath = path.join(process.cwd(), '..', 'data', 'leagues.csv');
    // const fileContents = fs.readFileSync(dataPath, 'utf8');
    // return NextResponse.json(fileContents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
} 