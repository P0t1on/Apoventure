import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load = (async () => {
  if (browser) {
    return { pr: 2 };
  } else {
    return { pa: 1 };
  }
  return {};
}) satisfies PageLoad;

export const ssr = true;
export const csr = true;
