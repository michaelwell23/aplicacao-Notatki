import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';
import { CreateNote } from '../pages/CreateNote';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createnotes' element={<CreateNote />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  );
}
