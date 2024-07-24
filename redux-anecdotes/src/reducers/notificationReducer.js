import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotificationMessage(state, action) {
      return action.payload;
    },
  },
});

export const { setNotificationMessage } = notificationSlice.actions;
export const setNotification = (message, timeSeconds) => {
  console.log("täällä11111");

  return (dispatch) => {
    console.log("tääällä2222");

    dispatch(setNotificationMessage(message));
    setTimeout(() => {
      dispatch(setNotificationMessage(""));
    }, timeSeconds * 1000);
  };
};
export default notificationSlice.reducer;
