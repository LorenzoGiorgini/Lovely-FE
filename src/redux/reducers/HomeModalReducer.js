import { SET_MODAL_SHOW } from "../actions/actions";

const HomeModalInitialState = {
  homeModal: false,
};

const HomeModalReducer = (state = HomeModalInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_MODAL_SHOW:
      return {
        ...state,
        homeModal: payload,
      };
    default:
        return state;
  }
};

export default HomeModalReducer;
