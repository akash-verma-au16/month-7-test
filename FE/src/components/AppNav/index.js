import { LABELS, PATHS } from '../../config';
import HeaderLink from '../HeaderLink';

const AppNav = () => (
  <header className='bg-dark text-light d-flex justify-content-between align-items-center py-3'>
    <h4 className='ms-5'>FrontEndTask</h4>

    <nav className='me-5'>
      <HeaderLink to={PATHS.USERS} name={LABELS.users} />
      <HeaderLink to={PATHS.POSTS} name={LABELS.posts} />
    </nav>
  </header>
);

export default AppNav;
