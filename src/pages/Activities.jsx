import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Activities = () => {
  const { state } = useAppContext();
  const navigate = useNavigate();

  return (
    <div>
      <h2>All Activities</h2>
      {state.activities.map(a => (
        <div key={a.activityId} data-testid="activity-item"
          onClick={() => navigate(`/activities/${a.activityId}`)}>
          <p>Name: {a.name}</p>
          <p>Steps: {a.steps}</p>
          <p>Calories: {a.caloriesBurned}</p>
          <p>Minutes: {a.workoutMinutes}</p>
          <p>Goal: {a.goalAchieved ? 'Achieved' : 'Not Achieved'}</p>
          <p>Date: {a.date}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default Activities;