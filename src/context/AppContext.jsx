import { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducer/AppReducer";

export const isValid = (a) =>
  a.steps > 0 && a.caloriesBurned > 0 && a.workoutMinutes > 0 && typeof a.goalAchieved === "boolean";

const initialActivities = [
  { id: 1, name: "Running", date: "2026-04-01", steps: 8500, caloriesBurned: 420, workoutMinutes: 45, goalAchieved: true },
  { id: 2, name: "Cycling", date: "2026-04-02", steps: 12000, caloriesBurned: 600, workoutMinutes: 60, goalAchieved: true },
  { id: 3, name: "Walking", date: "2026-04-03", steps: 5000, caloriesBurned: 200, workoutMinutes: 30, goalAchieved: false },
  { id: 4, name: null, date: null, steps: 3000, caloriesBurned: 150, workoutMinutes: 20, goalAchieved: false },
  { id: 5, name: "Yoga", date: "2026-04-05", steps: 1000, caloriesBurned: 180, workoutMinutes: 40, goalAchieved: true },
  { id: 6, name: "Swimming", date: "2026-04-06", steps: 0, caloriesBurned: 300, workoutMinutes: 50, goalAchieved: false },
  { id: 7, name: "HIIT", date: "2026-04-07", steps: 9000, caloriesBurned: 500, workoutMinutes: 35, goalAchieved: true },
  { id: 8, name: "Pilates", date: "2026-04-08", steps: 2000, caloriesBurned: 0, workoutMinutes: 25, goalAchieved: false },
  { id: 9, name: "Zumba", date: "2026-04-09", steps: 7000, caloriesBurned: 350, workoutMinutes: 45, goalAchieved: true },
  { id: 10, name: "Boxing", date: "2026-04-10", steps: 11000, caloriesBurned: 650, workoutMinutes: 0, goalAchieved: false },
  { id: 11, name: "CrossFit", date: "2026-04-11", steps: 8200, caloriesBurned: 480, workoutMinutes: 55, goalAchieved: true },
  { id: 12, name: "Jogging", date: "2026-04-12", steps: 6500, caloriesBurned: 310, workoutMinutes: 38, goalAchieved: false },
  { id: 13, name: "Tennis", date: "2026-04-13", steps: 9500, caloriesBurned: 420, workoutMinutes: 60, goalAchieved: true },
  { id: 14, name: "Basketball", date: "2026-04-14", steps: 10000, caloriesBurned: 550, workoutMinutes: 70, goalAchieved: true },
  { id: 15, name: "Badminton", date: "2026-04-15", steps: 7500, caloriesBurned: 380, workoutMinutes: 45, goalAchieved: false },
  { id: 16, name: "Rowing", date: "2026-04-16", steps: 8800, caloriesBurned: 460, workoutMinutes: 50, goalAchieved: true },
  { id: 17, name: "Skiing", date: "2026-04-17", steps: 6000, caloriesBurned: 400, workoutMinutes: 90, goalAchieved: true },
  { id: 18, name: "Hiking", date: "2026-04-18", steps: 15000, caloriesBurned: 700, workoutMinutes: 120, goalAchieved: true },
  { id: 19, name: "Dancing", date: "2026-04-19", steps: 4500, caloriesBurned: 220, workoutMinutes: 30, goalAchieved: false },
  { id: 20, name: "Aerobics", date: "2026-04-20", steps: 5500, caloriesBurned: 260, workoutMinutes: 35, goalAchieved: false },
  { id: 21, name: "Stretching", date: "2026-04-21", steps: 1500, caloriesBurned: 100, workoutMinutes: 15, goalAchieved: false },
  { id: 22, name: "Plank", date: "2026-04-01", steps: 500, caloriesBurned: 80, workoutMinutes: 10, goalAchieved: false },
  { id: 23, name: "Deadlift", date: "2026-04-02", steps: 8100, caloriesBurned: 490, workoutMinutes: 45, goalAchieved: true },
  { id: 24, name: "Bench Press", date: "2026-04-03", steps: 8300, caloriesBurned: 410, workoutMinutes: 40, goalAchieved: true },
  { id: 25, name: "Squats", date: "2026-04-04", steps: 8600, caloriesBurned: 430, workoutMinutes: 42, goalAchieved: true },
  { id: 26, name: "Lunges", date: "2026-04-05", steps: 7200, caloriesBurned: 360, workoutMinutes: 38, goalAchieved: false },
  { id: 27, name: "Pull-ups", date: "2026-04-06", steps: 3000, caloriesBurned: 200, workoutMinutes: 20, goalAchieved: false },
  { id: 28, name: "Push-ups", date: "2026-04-07", steps: 2500, caloriesBurned: 170, workoutMinutes: 18, goalAchieved: false },
  { id: 29, name: "Burpees", date: "2026-04-08", steps: 8900, caloriesBurned: 520, workoutMinutes: 30, goalAchieved: true },
  { id: 30, name: "Mountain Climbers", date: "2026-04-09", steps: 9200, caloriesBurned: 540, workoutMinutes: 32, goalAchieved: true },
  { id: 31, name: "InvalidEntry", date: "2026-04-10", steps: 0, caloriesBurned: 100, workoutMinutes: 10, goalAchieved: "yes" },
];

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activities, dispatch] = useReducer(appReducer, initialActivities);
  return (
    <AppContext.Provider value={{ activities, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}