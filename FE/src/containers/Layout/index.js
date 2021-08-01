import Footer from '../../components/Footer';
import AppNav from '../../components/AppNav';
const Layout = ({ children }) => (
  <div
    className='d-flex flex-column bg-secondary'
    style={{ minHeight: '100vh' }}
  >
    <div>
      <AppNav />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
