import type { PageLoad } from './$types';

export const load = (async () => {
  return { a: 1 };
}) satisfies PageLoad;
