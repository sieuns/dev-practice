import dayjs from "dayjs";

export const formatNumber = (value?: number | null) => {
  return (value ?? 0).toLocaleString();
};

export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
};
