import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export async function GET({ request, cookies }) {
  return json({});
}

export async function POST({ request, cookies }) {
  const { episode }: { episode: number } = await request.json();
  return json({});
}
