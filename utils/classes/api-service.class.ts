export class ApiService {
  constructor(public url: string) {
    this.url = url;
  }

  async get(): Promise<unknown> {
    try {
      const response: Response = await fetch(this.url);
      switch (response.status) {
        case 200:
        case 201: {
          break;
        }

        case 400: {
          throw new Error(`Error 400, bad request: ${response.statusText}`);
        }

        case 401: {
          throw new Error(`Error 401, unauthenticated: ${response.statusText}`);
        }

        case 403: {
          throw new Error(`Error 403, unauthorized: ${response.statusText}`);
        }

        default:
          break;
      }
      const parsedData: unknown = await response.json();
      return parsedData;
    } catch (apiError) {
      throw new Error(
        `API Service: Failed to perform GET request, reason: ${apiError}`
      );
    }
  }

  async post(data: unknown): Promise<unknown> {
    try {
      const stringifiedData: string = JSON.stringify(data);
      const response: Response = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: stringifiedData,
      });
      const parsedData: unknown = await response.json();
      return parsedData;
    } catch (apiError) {
      throw new Error(
        `API Service: Failed to perform POST request, reason: ${apiError}`
      );
    }
  }

  async put(data: unknown): Promise<unknown> {
    try {
      const stringifiedData: string = JSON.stringify(data);
      const response: Response = await fetch(this.url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: stringifiedData,
      });
      const parsedData: unknown = await response.json();
      return parsedData;
    } catch (apiError) {
      throw new Error(
        `API Service: Failed to perform PUT request, reason: ${apiError}`
      );
    }
  }

  async delete(): Promise<unknown> {
    try {
      const response: Response = await fetch(this.url, {
        method: "DELETE",
      });
      const parsedData: unknown = await response.json();
      return parsedData;
    } catch (apiError) {
      throw new Error(
        `API Service: Failed to perform DELETE request, reason: ${apiError}`
      );
    }
  }
}
