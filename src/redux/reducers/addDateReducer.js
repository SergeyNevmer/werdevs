import Types from "../types";

const initialState = {
  now: "",
  year: "",
  monthStr: "",
  monthNum: "",
  countDaysInMonth: "",
};

const addDate = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_LOCAL_DATE:
      return {
        ...state,
        now: action.payload,
      };
    case Types.GET_LOCAL_MONTH_STR:
      return {
        ...state,
        monthStr: action.payload,
      };
    case Types.GET_LOCAL_MONTH_NUM:
      return {
        ...state,
        monthNum: action.payload,
      };
    case Types.GET_LOCAL_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case Types.GET_COUNT_DAYS_IN_MONTH:
      return {
        ...state,
        countDaysInMonth: action.payload,
      };

    default:
      return state;
  }
};

export default addDate;
