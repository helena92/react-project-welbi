import { Routes, Route } from 'react-router-dom';

import ProgramsPreview from '../programs-preview/programs-preview.component';
import ProgramCreation from '../programs-creation/programs-creation.component';

const ProgramsHome = () => {
  return (
    <Routes>
      <Route index element={<ProgramsPreview />} />
      <Route path='/add' element={<ProgramCreation />} />
    </Routes>
  );
};

export default ProgramsHome;
