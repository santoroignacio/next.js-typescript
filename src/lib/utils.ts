import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getResponse = (statusCode: number, message: string, data: any) => {
  const response: {
    message: string;
    statusCode: number;
    data: any;
    success?: boolean;
    error?: boolean;
  } = {
    message,
    statusCode,
    data: data
  }

  statusCode === 200 ? response.success = true : response.error = true

  console.log('response', response)
  return response;
}