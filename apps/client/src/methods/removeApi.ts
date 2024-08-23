import axios from "axios";
import { BASE_URL } from "../utils/config";

export const removeApi = ({
  endpoint,
  id,
  handleError,
  handleResponse,
  setReady,
}: RemoveApi) => {
  setReady(false);
  axios
    .delete(`${BASE_URL}/${endpoint}/${id}`)
    .then(async (response) => handleResponse?.(response))
    .catch((err) => {
      console.log(err);
      handleError?.(err?.response);
    })
    .finally(() => setReady(true));
};
