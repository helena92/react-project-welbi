import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import {
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  return (
    <Fragment>
        <NavLinks>
          <NavLink to='/residents'>RESIDENTS</NavLink>
          <NavLink to='/programs'>PROGRAMS</NavLink>
        </NavLinks>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
