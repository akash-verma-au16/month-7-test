import { PATHS } from '../config';
import Users from '../containers/Users';
import Posts from '../containers/Posts';
import PostDetail from '../containers/PostDetail';

const routes = [
  { exact: true, path: PATHS.USERS, component: Users },
  { exact: true, path: PATHS.POSTS, component: Posts },
  { exact: true, path: PATHS.POST_DETAIL, component: PostDetail },
];

export default routes;
