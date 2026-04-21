import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Activities from '../pages/Activities';
import ActivityDetail from '../pages/ActivityDetail';
import Filter from '../pages/Filter';
import Stats from '../pages/Stats';

const AppRouter = () => (
  <BrowserRouter>
    <nav>
      <NavLink to="/activities">Activities</NavLink> |&nbsp;
      <NavLink to="/filter">Filter</NavLink> |&nbsp;
      <NavLink to="/stats">Stats</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Activities />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:id" element={<ActivityDetail />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;