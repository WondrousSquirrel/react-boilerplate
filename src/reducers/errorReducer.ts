import { REQUEST_SUCCESS } from "../actions/types";

type RequestSuccess = {
  type: string;
  error: object;
};

// catch every action if error was set
export default function(state = {}, { type, error }: RequestSuccess) {
  if (type === REQUEST_SUCCESS) {
    return { errorMessage: null };
  } else if (error) {
    return {
      errorMessage: error
    };
  }
  return state;
}
