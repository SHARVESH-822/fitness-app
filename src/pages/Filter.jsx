import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Filter = () => {
  const { state } = useAppContext();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? state.activities
    : filter === 'achieved' ? state.activities.filter(a => a.goalAchieved === true)
    : state.activities.filter(a => a.goalAchieved === false);

  return (
    <div>
      <h2>Filter Activities</h2>
      <select data-testid="filter-input" value={filter}
        onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="achieved">Goal Achieved</option>
        <option value="not-achieved">Goal Not Achieved</option>
      </select>
      {filtered.map(a => (
        <div key={a.activityId}>
          <p>{a.name} — {a.goalAchieved ? 'Achieved' : 'Not Achieved'}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default Filter;