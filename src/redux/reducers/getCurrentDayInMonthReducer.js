import Types from "../types";

const initialState = {
  currentDayInMonth: "",
};

const getCurrentDayInMonth = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CURRENT_DAY_IN_MONTH:
      return {
        ...state,
        currentDayInMonth: action.payload,
      };
    default:
      return state;
  }
};

export default getCurrentDayInMonth;
