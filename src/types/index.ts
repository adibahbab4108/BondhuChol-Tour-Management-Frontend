export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component?: React.ComponentType;
  }[];
}
