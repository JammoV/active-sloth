/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Post = lazyLoad(
  () => import('./index'),
  module => module.PostPage,
);
