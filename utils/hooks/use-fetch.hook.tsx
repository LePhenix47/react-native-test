import { useState, useEffect } from "react";
import { log } from "../functions/console.functions";

type FetchResponse = {
  data: any[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
};

export function useFetch(url: string): FetchResponse {
  const [data, setData] = useState<any>([]);

  const [isLoading, setLoading] = useState<boolean>(false);

  const [hasError, setError] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");

  //Will execute once and also everytime the url changes
  useEffect(() => {
    //We need the controller in case we make multiple successions of fetch requests
    const controller: AbortController = new AbortController();

    log("Fetch →", { url }, "loading...");

    setLoading(true);

    const noUrlWasProvided: boolean = !url;
    if (noUrlWasProvided) {
      log("There must be an URL passed as an argument");
      return;
    }

    async function fetchData() {
      try {
        const response: Response = await fetch(url);

        switch (response.status) {
          case 200:
          case 201: {
            break;
          }

          case 400: {
            throw new Error(`Error 400, bad request: ${response.statusText}`);
          }

          case 401: {
            throw new Error(
              `Error 401, unauthenticated: ${response.statusText}`
            );
          }

          case 403: {
            throw new Error(`Error 403, unauthorized: ${response.statusText}`);
          }

          default:
            break;
        }

        const dataFromFetch = await response.json();

        setData(dataFromFetch);
      } catch (APIError) {
        console.error(
          `⚠ API Error found! An unexpected error has occured while attempting to make a call to the API → ${APIError}`
        );
        setError(true);
        setErrorMessage(APIError);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    //In case we make multiple fetch requests → we abort the rest of them if one fail or is out of sync
    return () => {
      //This function will ONLY execute if the component who made the fetch request has been unmounted from the DOM
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, hasError, errorMessage };
}
