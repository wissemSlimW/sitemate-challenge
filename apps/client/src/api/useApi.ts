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
    setData([
      {
        id: "000000",
        title: "azeraz",
        description:
          "qddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      },
      {
        id: "000001",
        title: "azeraz",
        description:
          "qsdfqsd qsdfqscv qsdfqsd qsdfqsdfq qsdfqsd qsdfqsdfq fqsd fqsdf qsd fsqdf qsdf",
      },

      {
        id: "000002",
        title: "azeraz",
        description:
          "qsdfqsd qsdfqscv qsdfqsd qsdfqsdfq qsdfqsd qsdfqsdfq fqsd fqsdf qsd fsqdf qsdf",
      },
      {
        id: "000003",
        title: "azeraz",
        description:
          "qsdfqsd qsdfqscv qsdfqsd qsdfqsdfq qsdfqsd qsdfqsdfq fqsd fqsdf qsd fsqdf qsdf",
      },
      {
        id: "000004",
        title: "azeraz",
        description:
          "qsdfqsd qsdfqscv qsdfqsd qsdfqsdfq qsdfqsd qsdfqsdfq fqsd fqsdf qsd fsqdf qsdf",
      },
      {
        id: "000005",
        title: "azeraz",
        description:
          "qsdfqsd qsdfqscv qsdfqsd qsdfqsdfq qsdfqsd qsdfqsdfq fqsd fqsdf qsd fsqdf qsdf",
      },
    ] as any);
    // setReady(false);
    // axios
    //   .get(`${BASE_URL}/${endpoint}`)
    //   .then((response: AxiosResponse) => {
    //     setData(response?.data || []);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     handleError(err?.response);
    //   })
    //   .finally(() => setReady(true));
  }, []);
};
