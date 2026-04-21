import { useAppContext, isValid } from "../context/AppContext";

export default function Stats() {
  const { activities } = useAppContext();

  const stats = activities.reduce((acc, a) => {
    if (!isValid(a)) return acc;
    acc.totalActivities += 1;
    if (a.goalAchieved === true) acc.goalAchievedCount += 1;
    else acc.goalNotAchievedCount += 1;
    return acc;
  }, { totalActivities: 0, goalAchievedCount: 0, goalNotAchievedCount: 0 });

  window.appState = stats;

  return (
    <div style={{ padding: "16px" }}>
      <h1>Activities Analytics Dashboard</h1>
      <div data-testid="total-activities">{stats.totalActivities}</div>
      <div data-testid="goal-achieved">{stats.goalAchievedCount}</div>
      <div data-testid="goal-not-achieved">{stats.goalNotAchievedCount}</div>
      <p>Total Valid Activities: <strong>{stats.totalActivities}</strong></p>
      <p>Goal Achieved: <strong>{stats.goalAchievedCount}</strong></p>
      <p>Goal Not Achieved: <strong>{stats.goalNotAchievedCount}</strong></p>
    </div>
  );
}