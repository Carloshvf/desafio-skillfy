export interface SuggestTimePayload {
  task: {
    title: string;
    priority: "high" | "medium" | "low";
    estimated_duration: number;
    deadline: string;
    category: string;
  };
  user_preferences: {
    working_hours: {
      start: string;
      end: string;
    };
    preferred_categories: string[];
  };
}

export interface TimeSlot {
  start: string;
  end: string;
  score: number;
}
