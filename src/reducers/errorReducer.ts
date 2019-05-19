import { REQUEST_SUCCESS } from "../actions/types";

type RequestSuccess = {
  type: string;
  error: object;
};

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
