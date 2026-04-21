import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Activities from "../pages/Activities";
import ActivityDetail from "../pages/ActivityDetail";
import Filter from "../pages/Filter";
import Stats from "../pages/Stats";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#eee", display: "flex", gap: "16px" }}>
        <Link to="/activities">Activities</Link>
        <Link to="/filter">Filter</Link>
        <Link to="/stats">Stats</Link>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
}