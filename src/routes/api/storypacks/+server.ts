import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { CardProps } from '$lib/types/Card';

export async function POST({ request, cookies }) {
  const { episode, name }: CardProps = await request.json();
  // console.log({ episode, name });

  return json({ description: 'testtestes' });
}
