import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/config";

export const useFindOneApi = <T>({ endpoint, id, handleError }: FindOneApi) => {
  const [ready, setReady] = useState(true);
  const [data, setData] = useState<T>(null! as T);

  useEffect(() => {
    if (id) {
      setReady(false);
      axios
        .get(`${BASE_URL}/${endpoint}/${id}`)
        .then((response: AxiosResponse) => setData(response.data || null!))
        .catch((err) => {
          console.log(err);
          handleError?.(err?.response);
        })
        .finally(() => setReady(true));
    }
  }, [id]);
  return { ready, data };
};
