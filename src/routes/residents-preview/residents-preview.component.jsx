import { useContext, Fragment } from 'react';

import { ResidentsContext } from '../../contexts/residents.context';
import ResidentPreview from '../../components/resident-preview/resident-preview.component';
import {
  NavLinks,
  NavLink,
} from './residents-preview.styles';

const ResidentsPreview = () => {
  const ResidentsMap = useContext(ResidentsContext);
  return (
    <Fragment>
      <NavLinks>
        <NavLink to='/residents/add'>ADD RESIDENT</NavLink>
      </NavLinks>
      {Object.keys(ResidentsMap).map((id) => {
        const resident = ResidentsMap[id];
        return (
          <ResidentPreview key={id} id={id} resident={resident} />
        );
      })}
    </Fragment>
  );
};

export default ResidentsPreview;
