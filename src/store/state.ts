export interface EventData {
  users: User[];
  _id: string;
  event_name: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  availability: { [key: string]: Availability[] };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Availability {
  [key: string]: string[];
}

export interface User {
  id: string;
  name: string;
}

export interface State {
  eventData: EventData | any;
  userID: string | null;
  currentView: string[];
}

export const state: State = {
  eventData: {},
  userID: "",
  currentView: [],
};