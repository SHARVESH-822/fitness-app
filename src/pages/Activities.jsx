import { useAppContext, isValid } from "../context/AppContext";
import ActivityCard from "../components/ActivityCard";

export default function Activities() {
  const { activities, dispatch } = useAppContext();
  const validActivities = activities.filter(isValid);

  return (
    <div style={{ padding: "16px" }}>
      <h1>Valid Activities</h1>
      {validActivities.map(a => (
        <ActivityCard key={a.id} activity={a}
          onToggle={(id) => dispatch({ type: "TOGGLE_GOAL", id })} />
      ))}
    </div>
  );
}