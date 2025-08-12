// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery:fetchBaseQuery({baseUrl: "http://localhost:5000/api/v1",credentials:"include"}), //payload will be passed by body
  baseQuery: axiosBaseQuery(), //payload will be passed by data
  tagTypes: ["USER","TOUR"],
  endpoints: () => ({}),
});
