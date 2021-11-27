import Types from "../types";

export const addLocalDate = (str) => ({
  type: Types.GET_LOCAL_DATE,
  payload: str,
});

export const addLocalMonthStr = (str) => ({
  type: Types.GET_LOCAL_MONTH_STR,
  payload: str,
});

export const addLocalMonthNum = (num) => ({
  type: Types.GET_LOCAL_MONTH_NUM,
  payload: num,
});

export const addLocalYear = (str) => ({
  type: Types.GET_LOCAL_YEAR,
  payload: str,
});

export const addCountDaysInMonth = (num) => ({
  type: Types.GET_COUNT_DAYS_IN_MONTH,
  payload: num,
});
