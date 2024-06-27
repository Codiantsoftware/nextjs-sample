import axios, { AxiosRequestConfig, Method } from "axios";
import momentTimezone from "moment-timezone";

/**
 * @typedef {Object} APIRequestParams
 * @property {string} [method] - The HTTP method for the request.
 * @property {string} url - The URL for the API request.
 * @property {string} [baseURL] - The base URL for the API request.
 * @property {Record<string, any>} [queryParams] - Query parameters for the request.
 * @property {Record<string, any>} [bodyData] - Body data for the request.
 * @property {Record<string, string>} [formHeaders] - Additional headers for the request.
 * @property {boolean} [removeHeaders=false] - Flag to remove headers.
 * @property {string} [token=''] - Authorization token for the request.
 */
interface APIRequestParams {
  method?: string;
  url: string;
  baseURL?: string;
  queryParams?: Record<string, any>;
  bodyData?: Record<string, any>;
  formHeaders?: Record<string, string>;
  removeHeaders?: boolean;
  token?: string;
}

/**
 * Perform an API request using Axios.
 * @param {APIRequestParams} options - Options for the API request.
 * @returns {Promise<any>} A promise that resolves to the response data.
 * @throws {Error} Throws an error if the request fails.
 */
const APIrequest = async ({
  method,
  url,
  baseURL = process.env.NEXT_PUBLIC_API_BASE_URL,
  queryParams = {},
  bodyData = {},
  formHeaders = {},
  token = "",
}: APIRequestParams): Promise<any> => {
  const apiToken = token !== "" ? token : localStorage.getItem("token");
  try {
    const axiosConfig: AxiosRequestConfig = {
      method,
      url,
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "X-Frame-Options": "sameorigin",
        timezone: momentTimezone.tz.guess(true),
      },
    };

    axiosConfig.headers = { ...axiosConfig.headers, ...formHeaders };
    if (apiToken) {
      axiosConfig.headers.Authorization = `${apiToken}`;
    }

    axiosConfig.params = Object.fromEntries(
      Object.entries(queryParams).filter(([_, v]) => v !== "" && v != null),
    );

    if (Object.keys(bodyData).length > 0) {
      axiosConfig.data = bodyData;
    }

    const response = await axios(axiosConfig);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default APIrequest;
