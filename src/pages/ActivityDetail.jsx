import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useAppContext();
  const navigate = useNavigate();
  const a = state.activities.find(a => String(a.activityId) === String(id));

  if (!a) return <div>Not found</div>;

  return (
    <div>
      <h2>Activity Detail</h2>
      <p>ID: {a.activityId}</p>
      <p>Name: {a.name}</p>
      <p>Steps: {a.steps}</p>
      <p>Calories: {a.caloriesBurned}</p>
      <p>Minutes: {a.workoutMinutes}</p>
      <p>Goal: {a.goalAchieved ? 'Achieved' : 'Not Achieved'}</p>
      <p>Date: {a.date}</p>
      <button onClick={() => navigate('/activities')}>Back</button>
    </div>
  );
};

export default ActivityDetail;