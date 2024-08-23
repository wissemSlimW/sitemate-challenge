import axios from "axios";
import { BASE_URL } from "../utils/config";

export const addApi = <T>({
  endpoint,
  body = {},
  handleError,
  handleResponse,
  setReady,
}: AddApi<T>) => {
  setReady(false);
  axios
    .post(`${BASE_URL}/${endpoint}`, body)
    .then((response) => handleResponse?.(response.data))
    .catch((err) => {
      console.log(err);
      handleError?.(err?.response);
    })
    .finally(() => setReady(true));
};
