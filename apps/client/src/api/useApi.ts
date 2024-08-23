import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/config";

export const useApi = <T>({
  endpoint,
  setData,
  setReady,
  handleError,
}: {
  endpoint: string;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
  handleError: (err: any) => void;
}) => {
  useEffect(() => {
    setReady(false);
    axios
      .get(`${BASE_URL}/${endpoint}`)
      .then((response: AxiosResponse) => {
        setData(response?.data || []);
      })
      .catch((err) => {
        console.log(err);
        handleError(err?.response);
      })
      .finally(() => setReady(true));
  }, []);
};
