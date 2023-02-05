import React, { useContext, Fragment } from 'react';
import { NavLinks, NavLink } from './residents-preview.styles';
import { ResidentsContext } from '../../contexts/residents.context';
import Button from '../../components/button/button.component';
import ResidentPreview from '../../components/resident-preview/resident-preview.component';

const ResidentsPreview: React.FC = () => {
  const { residentsMap } = useContext(ResidentsContext);
  return (
    <Fragment>
      <NavLinks>
        <NavLink to='/residents/add'>
          <Button>ADD RESIDENT</Button>
        </NavLink>
      </NavLinks>
      {Object.keys(residentsMap).map((id) => {
        const resident = residentsMap[id];
        return (
          <ResidentPreview key={id} id={id} resident={resident} />
        );
      })}
    </Fragment>
  );
};

export default ResidentsPreview;
