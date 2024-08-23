import axios from "axios";
import { BASE_URL } from "../utils/config";

export const updateApi = <T>({
  endpoint,
  id,
  body = {},
  handleError,
  handleResponse,
  setReady,
}: UpdateApi<T>) => {
  setReady(false);
  axios
    .put(`${BASE_URL}/${endpoint}/${id}`, body)
    .then((response) => handleResponse?.(response.data))
    .catch((err) => {
      console.log(err);
      handleError?.(err?.response);
    })
    .finally(() => setReady(true));
};
