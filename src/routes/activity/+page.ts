import { browser } from '$app/environment';
import type { PageLoad } from './$types';
import WorldLoader from '$lib/world/Loader';

export const load = (async () => {
  if (browser) {
    return { pr: 2 };
  } else {
    const t = WorldLoader();
    return { pa: 1 };
  }
  return {};
}) satisfies PageLoad;

export const ssr = true;
export const csr = true;
