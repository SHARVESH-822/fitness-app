import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Stats = () => {
  const { state } = useAppContext();
  const activities = state.activities;

  const totalActivities      = activities.length;
  const goalAchievedCount    = activities.filter(a => a.goalAchieved === true).length;
  const goalNotAchievedCount = activities.filter(a => a.goalAchieved === false).length;

  useEffect(() => {
    window.appState = { totalActivities, goalAchievedCount, goalNotAchievedCount };
  }, [activities]);

  return (
    <div>
      <h2>Stats</h2>
      <p>Total: <span data-testid="total-activities">{totalActivities}</span></p>
      <p>Goal Achieved: <span data-testid="goal-achieved">{goalAchievedCount}</span></p>
      <p>Goal Not Achieved: <span data-testid="goal-not-achieved">{goalNotAchievedCount}</span></p>
    </div>
  );
};

export default Stats;