import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import {
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation: React.FC = () => {
  return (
    <Fragment>
      <NavLinks>
        <NavLink to='/residents'>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>RESIDENTS</Button>
        </NavLink>
        <NavLink to='/programs'>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>PROGRAMS</Button>
        </NavLink>
      </NavLinks>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
