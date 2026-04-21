import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useAppContext();
  const navigate = useNavigate();

  const a = state.activities.find(a => String(a.activityId) === String(id));

  if (!a) return <div><p>Activity not found!</p><button onClick={() => navigate('/activities')}>Back</button></div>;

  const efficiency = (a.caloriesBurned / a.workoutMinutes).toFixed(2);

  return (
    <div>
      <h2>Activity Detail</h2>
      <p>ID: {a.activityId}</p>
      <p>Name: {a.name || 'Unknown'}</p>
      <p>Steps: {a.steps}</p>
      <p>Calories: {a.caloriesBurned}</p>
      <p>Minutes: {a.workoutMinutes}</p>
      <p>Goal: {a.goalAchieved ? 'Achieved' : 'Not Achieved'}</p>
      <p>Date: {a.date || 'No Date'}</p>
      <p><b>Efficiency Score: {efficiency}</b></p>
      <button onClick={() => navigate('/activities')}>Back</button>
    </div>
  );
};

export default ActivityDetail;