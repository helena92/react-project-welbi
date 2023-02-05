import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../../components/button/button.component';
import {
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  return (
    <Fragment>
      <NavLinks>
        <NavLink to='/residents'>
          <Button buttonType='inverted'>RESIDENTS</Button>
        </NavLink>
        <NavLink to='/programs'>
          <Button buttonType='inverted'>PROGRAMS</Button>
        </NavLink>
      </NavLinks>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
