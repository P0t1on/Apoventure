import adapter from '@sveltejs/adapter-cloudflare';
// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from 'svelte-preprocess';
import { cssModules, linearPreprocess } from 'svelte-preprocess-cssmodules';

const { typescript, scss } = sveltePreprocess;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: linearPreprocess([typescript(), scss(), cssModules()]),
  kit: {
    alias: {
      $story: './src/storypacks',
    },
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ['/*'],
        exclude: ['<all>'],
      },
    }),
  },
};

export default config;
