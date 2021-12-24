import { SET_MODAL_SHOW, SET_MODAL_COMPONENT } from "../actions/actions";

const HomeModalInitialState = {
  homeModal: {
    show: false,
    component: null,
  },
};

const HomeModalReducer = (state = HomeModalInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_MODAL_SHOW:
      return {
        ...state,
        homeModal: {
          ...state.homeModal,
          show: payload,
        },
      };
    case SET_MODAL_COMPONENT:
      return {
        ...state,
        homeModal: {
          ...state.homeModal,
          component: payload,
        },
      };
    default:
      return state;
  }
};


export default HomeModalReducer;