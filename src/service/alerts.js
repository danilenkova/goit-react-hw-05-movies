import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NOT_ALERTS = {
  EMPTY: "Enter your search phrase",
  OLD: "Enter a new search phrase",
  NO_VALID: "Use Latin letters in your request!",
  NOT_FOUND: "No movies found",
  FETCH_ERROR: "Database access error",
  END: "No more movies",
};

export const myAlert = (message) => {
  return toast.error(message, {
    autoClose: 3000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    theme: "colored",
  });
};
