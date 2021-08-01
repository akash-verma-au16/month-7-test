import { Link } from 'react-router-dom';

const HeaderLink = ({ to, name }) => {
  return (
    <Link className='text-uppercase mx-3 text-decoration-none' to={to}>
      {name}
    </Link>
  );
};

export default HeaderLink;
