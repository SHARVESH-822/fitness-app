import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
  const navigate = useNavigate();
  return (
    <div data-testid="activity-item"
      onClick={() => navigate(`/activities/${activity.activityId}`)}>
      <p>Name: {activity.name || 'Unknown'}</p>
      <p>Steps: {activity.steps}</p>
      <p>Calories: {activity.caloriesBurned}</p>
      <p>Minutes: {activity.workoutMinutes}</p>
      <p>Goal: {activity.goalAchieved ? 'Achieved' : 'Not Achieved'}</p>
      <p>Date: {activity.date || 'No Date'}</p>
      <hr/>
    </div>
  );
};

const Activities = () => {
  const { state } = useAppContext();

  const validActivities = state.activities.filter(a =>
    a.steps > 0 &&
    a.caloriesBurned > 0 &&
    a.workoutMinutes > 0 &&
    typeof a.goalAchieved === 'boolean'
  );

  return (
    <div>
      <h2>All Activities</h2>
      {validActivities.map(a => (
        <ActivityCard key={a.activityId} activity={a} />
      ))}
    </div>
  );
};

export default Activities;