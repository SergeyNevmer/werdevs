import Types from "../types";

export const getCurrentDayInMonth = (str) => ({
  type: Types.GET_CURRENT_DAY_IN_MONTH,
  payload: str,
});
