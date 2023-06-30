import { useState, useEffect } from "react";
import { log } from "../functions/console.functions";
import { waitPromiseError } from "../functions/promise-test.functions";
import { MockedData } from "../types/mocked-data.types";

export function useMockFailure() {
  const [data, setData] = useState<MockedData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function addPopularJobsMock() {
    setIsLoading(true);
    try {
      const result: any = await waitPromiseError(1_000, "Test error");
      setData(result);

      log(result);
    } catch (apiError) {
      console.error(apiError);
      setHasError(true);
      setError(apiError);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    addPopularJobsMock();

    return () => {};
  }, [data]);

  return { data, isLoading, hasError, error };
}
