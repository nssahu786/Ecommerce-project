import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_ERRORS,
} from "../Constants/UserConstants.js";

export const login = (email, password) => async (dispatch) => {
  try{

        dispatch({ type: LOGIN_REQUEST });

        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        const { data } = await axios.post("http://localhost:3008/api/ns/login",{ email, password },config);
        //console.log(data);

        dispatch({

            type: LOGIN_SUCCESS,
            payload: data.user,

        });
      } catch (error) 
        {
          dispatch({
              type: LOGIN_FAILED,
              payload: error.response.data.message,
          });
        }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
