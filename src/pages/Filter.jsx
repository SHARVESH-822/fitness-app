import { useState } from "react";
import { useAppContext, isValid } from "../context/AppContext";
import ActivityCard from "../components/ActivityCard";

export default function Filter() {
  const { activities } = useAppContext();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [filtered, setFiltered] = useState(null);

  function handleFilter() {
    if (input === "") { setError("Input cannot be empty"); return; }
    const val = Number(input);
    if (isNaN(val) || val < 0) { setError("Invalid input value"); return; }
    setError("");
    const valid = activities.filter(isValid);
    setFiltered(valid.filter(a => a.steps >= val));
  }

  return (
    <div style={{ padding: "16px" }}>
      <h1>Filter Activities</h1>
      <input
        type="number"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter minimum steps"
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button onClick={handleFilter}>Filter</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filtered && filtered.length === 0 && <p>No activities found.</p>}
      {filtered && filtered.map(a => <ActivityCard key={a.id} activity={a} />)}
    </div>
  );
}