import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { Alert, AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case 'signout':
      return {errorMessage:'' , token:null}
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const autoLogin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      dispatch({
        type: "signin",
        payload: token,
      });
      navigate("TrackList");
    } else {
      navigate("Signin");
    }
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // giriş yap
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      // MainFlow a navigate yapacağız.
      navigate("TrackList");
    } catch (err) {
      // başarısız ise hata mesa jı göster
      // console.log(err.response.data)//2. yol err.message
      dispatch({
        type: "add_error",
        payload: "Something wnt wrogn with sign up ",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // api request gonder kayıt olmak için
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);

      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      navigate("TrackList");
    } catch (error) {
      Alert.alert(`Giriş yaparken bir hata oluştu ${error}`);
      dispatch({
        type: "add_error",
        payload: "Giriş yaparken bazı hatalar oluştu.",
      });
    }

    // istek olumlu ise kayıt ol
    // istek olumsuz ise neden olumsuz olduğunu dair bilgi gönder
  };
};

const signout = (dispatch) => {
  return async() => {
    await AsyncStorage.removeItem('token')
    dispatch({
      type:'signout'
    })
    navigate('loginFlow')
  };
};
export const { Provider, Context } = createDataContext(
  authReducer, //reducer
  { signin, signout, signup, clearErrorMessage, autoLogin }, //actions
  { token: null, errorMessage: "" } //initial State
);
