import Types from "../types";

export const toggleModal = (boolean) => ({
  type: Types.TOGGLE_MODAL,
  payload: boolean,
});
