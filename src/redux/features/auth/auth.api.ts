import { baseApi } from "@/redux/baseApi";
import type { ILogin, IResponse, ISendOtp, IVerifyOtp } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<null, ILogin>({
      query: (userinfo) => ({
        url: "/auth/login",
        method: "POST",
        // body: userinfo,
        data: userinfo, // for axiosBaseQuery
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    register: builder.mutation({
      query: (userinfo) => ({
        url: "/user/register",
        method: "POST",
        // body: userinfo,
        data: userinfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userinfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userinfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userinfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userinfo,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
} = authApi;
