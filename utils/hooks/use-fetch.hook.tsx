import { useState, useEffect } from "react";
import { log } from "../functions/console.functions";

type FetchResponse = {
  data: any[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: {
    error: {
      message: string;
      code: number;
    };
    request_id: string;
    status: string;
  };
};

export function useFetch(url: string): FetchResponse {
  const [data, setData] = useState<any>([]);

  const [isLoading, setLoading] = useState<boolean>(false);

  const [hasError, setError] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<any>({});

  const options: RequestInit = null;
  // const options: RequestInit = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  // };

  //Will execute once and also everytime the url changes
  useEffect(() => {
    //We need the controller in case we make multiple successions of fetch requests
    const controller: AbortController = new AbortController();

    setLoading(true);

    const noUrlWasProvided: boolean = !url;
    if (noUrlWasProvided) {
      throw new Error("No URL was provided for the fetch call!");
    }

    async function fetchData() {
      try {
        const response: Response = await fetch(url, options);

        const hasError: boolean = !response.ok;

        if (hasError) {
          const errorMessage: {
            error: {
              message: string;
              code: number;
            };
            request_id: string;
            status: string;
          } = JSON.parse(await response.text());

          throw errorMessage;
        }

        const dataFromFetch: any = await response.json();

        setData(dataFromFetch);
        log("SUCCESS!");
      } catch (APIError) {
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
