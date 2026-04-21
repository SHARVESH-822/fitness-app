export function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_GOAL": {
      const activity = state.find(a => a.id === action.id);
      if (!activity) return state;
      // Business logic: steps >= 8000 must always be true
      if (activity.steps >= 8000) {
        return state.map(a => a.id === action.id ? { ...a, goalAchieved: true } : a);
      }
      return state.map(a => a.id === action.id ? { ...a, goalAchieved: !a.goalAchieved } : a);
    }
    default:
      return state;
  }
}