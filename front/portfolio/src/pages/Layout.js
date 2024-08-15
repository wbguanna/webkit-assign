import { Outlet } from 'react-router-dom';
import Heading from '../components/Heading';

export default () => {
  return (
    <div>
      <Heading />
      <Outlet />
    </div>
  );
};
