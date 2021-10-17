import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import path from 'path';
import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    ssr: false,
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $types: path.resolve('src/types/'),
          $utils: path.resolve('src/utils/'),
          $stores: path.resolve('src/stores/'),
          $screens: path.resolve('src/screens/'),
        },
      },
    },
  },
};

export default config;
