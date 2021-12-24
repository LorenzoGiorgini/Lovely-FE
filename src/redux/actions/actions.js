export const SET_MODAL_SHOW = "SET_MODAL_SHOW";
export const SET_MODAL_COMPONENT = "SET_MODAL_COMPONENT";

export const setShow = (value) => ({
  type: SET_MODAL_SHOW,
  payload: value,
});


export const setModalComponent = (value) => ({
  type: SET_MODAL_COMPONENT,
  payload: value,
})