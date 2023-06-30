import { useState, useEffect } from "react";
import { log } from "../functions/console.functions";
import { popularJobsMock } from "../../mocks/popular-jobs.mock";
import { waitPromiseSuccess } from "../functions/promise-test.functions";
import { MockedData } from "../types/mocked-data.types";
import { nearbyJobsMock } from "../../mocks/nearby-jobs.mock";

export function useMockSuccess(type: "nearby" | "popular") {
  const [data, setData] = useState<MockedData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function addPopularJobsMock() {
    setIsLoading(true);
    try {
      let result: MockedData = null;

      const isNearbyData: boolean = type === "nearby";
      if (isNearbyData) {
        result = await waitPromiseSuccess(1_000, popularJobsMock);
      } else {
        result = await waitPromiseSuccess(1_000, nearbyJobsMock);
      }
      // const result: any = await waitPromiseError(1_000, "Test error");
      setData(result);
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
