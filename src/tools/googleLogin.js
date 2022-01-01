const googleLogin = () => {
  window.location.href = process.env.REACT_APP_GOOGLE_CALLBACK;
};

export default googleLogin