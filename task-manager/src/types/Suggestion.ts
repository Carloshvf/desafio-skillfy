export interface TimeSlot {
  start: string;
  end: string;
  score: number;
}

export interface Suggestion {
  task_id: number;
  suggested_times: TimeSlot[];
}
