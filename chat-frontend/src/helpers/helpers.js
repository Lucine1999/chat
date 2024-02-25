import { BASE_URL } from "../constants/constants";

export const fetchData = async (
  urlEndPart,
  data,
  options = {},
  method = "GET",
) => {
  try {
    if (data) {
      options.body = JSON.stringify(data);
      options.headers = { "Content-Type": "application/json" };
    }
    const response = await fetch(`${BASE_URL}/${urlEndPart}`, {
      credentials: "include",
      method,
      ...options,
    });

    if (!response.ok) {
      const errMessage = await response.text();
      throw new Error(errMessage);
    }

    const result = await response.json();
    if (result.type === "error") {
      return {
        result: "error",
        message: result.message,
      };
    }
    return {
      result: "success",
      data: result,
    };
  } catch (err) {
    return {
      result: "error",
      message: err.message,
    };
  }
};
