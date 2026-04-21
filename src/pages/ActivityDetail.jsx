import { useParams, useNavigate } from "react-router-dom";
import { useAppContext, isValid } from "../context/AppContext";

export default function ActivityDetail() {
  const { id } = useParams();
  const { activities } = useAppContext();
  const navigate = useNavigate();
  const activity = activities.find(a => a.id === parseInt(id));

  if (!activity || !isValid(activity)) {
    return (
      <div style={{ padding: "16px" }}>
        <p>Activity not found</p>
        <button onClick={() => navigate("/activities")}>Back</button>
      </div>
    );
  }

  const efficiency = (activity.caloriesBurned / activity.workoutMinutes).toFixed(2);

  return (
    <div style={{ padding: "16px" }}>
      <h1>{activity.name || "Unknown"}</h1>
      <p>Date: {activity.date || "No Date"}</p>
      <p>Steps: {activity.steps}</p>
      <p>Calories Burned: {activity.caloriesBurned}</p>
      <p>Workout Minutes: {activity.workoutMinutes}</p>
      <p>Goal Achieved: {activity.goalAchieved ? "✅ Yes" : "❌ No"}</p>
      <h3>Efficiency Score: {efficiency} cal/min</h3>
      <button onClick={() => navigate("/activities")}>Back</button>
    </div>
  );
}