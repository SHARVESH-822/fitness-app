import { useNavigate } from "react-router-dom";

export default function ActivityCard({ activity, onToggle }) {
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px", borderRadius: "8px" }}>
      <h3>{activity.name || "Unknown"}</h3>
      <p>Date: {activity.date || "No Date"}</p>
      <p>Steps: {activity.steps} | Calories: {activity.caloriesBurned} | Minutes: {activity.workoutMinutes}</p>
      <p>Goal Achieved: {activity.goalAchieved ? "✅ Yes" : "❌ No"}</p>
      <button onClick={() => navigate(`/activities/${activity.id}`)}>View Details</button>
      {onToggle && (
        <button onClick={() => onToggle(activity.id)} style={{ marginLeft: "8px" }}>
          Toggle Goal
        </button>
      )}
    </div>
  );
}