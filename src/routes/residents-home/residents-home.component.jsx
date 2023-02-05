import { Routes, Route } from 'react-router-dom';

import ResidentsPreview from '../residents-preview/residents-preview.component';
import AttendanceHome from '../attendance-home/attendance-home.component';
import ResidentCreation from '../resident-creation/resident-creation.component';

const ResidentsHome = () => {
  return (
    <Routes>
      <Route index element={<ResidentsPreview />} />
      <Route path=':residentId' element={<AttendanceHome />} />
      <Route path='/add' element={<ResidentCreation />} />
    </Routes>
  );
};

export default ResidentsHome;
