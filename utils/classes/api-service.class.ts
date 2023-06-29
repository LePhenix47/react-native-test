export class ApiService {
    constructor(public url: string) {
        this.url = url;
    }

    async get(): Promise<unknown> {
        try {
            const response: Response = await fetch(this.url);
            const parsedData: unknown = await response.json();
            return parsedData;
        } catch (apiError) {
            throw new Error(`API Service: Failed to perform GET request, reason: ${apiError}`);
        }
    }

    async post(data: unknown): Promise<unknown> {
        try {
            
            const stringifiedData:string = JSON.stringify(data)
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
            throw new Error(`API Service: Failed to perform POST request, reason: ${apiError}`);
        }
    }

    async put(data: unknown): Promise<unknown> {
        try {
            const stringifiedData:string = JSON.stringify(data)
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
            throw new Error(`API Service: Failed to perform PUT request, reason: ${apiError}`);
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
            throw new Error(`API Service: Failed to perform DELETE request, reason: ${apiError}`);
        }
    }
}
