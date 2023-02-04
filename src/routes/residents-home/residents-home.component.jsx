import { Routes, Route } from 'react-router-dom';

import ResidentsPreview from '../residents-preview/residents-preview.component';
import ResidentPrograms from '../resident-programs/resident-programs.component';
import ResidentCreation from '../resident-creation/resident-creation.component';

const ResidentsHome = () => {
  return (
    <Routes>
      <Route index element={<ResidentsPreview />} />
      <Route path=':residentId' element={<ResidentPrograms />} />
      <Route path='/add' element={<ResidentCreation />} />
    </Routes>
  );
};

export default ResidentsHome;
