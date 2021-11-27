import { combineReducers } from "redux";
import addDateReducer from "./addDateReducer";
import toggleModal from "./toggleModalReducer";
import getCurrentDayInMonth from "./getCurrentDayInMonthReducer";

const rootReducer = combineReducers({
  now: addDateReducer,
  toggle: toggleModal,
  currentDayInMonth: getCurrentDayInMonth,
});

export default rootReducer;
