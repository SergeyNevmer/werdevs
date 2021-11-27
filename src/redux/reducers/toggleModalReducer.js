import Types from "../types";

const initialState = {
  isOpen: false,
};

const toggleModal = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default toggleModal;
