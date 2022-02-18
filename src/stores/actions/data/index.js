import axios from "axios";
import { actionPending, actionSuccess, actionError } from "../types";

// ACTION TYPES TO DISPATCH: METHOD_URL_TYPES
export const GET_INFO_PENDING = "GET_INFO_PENDING";
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
export const GET_INFO_ERROR = "GET_INFO_ERROR";

// URL: URL_{URL}
const INFO_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=female+daily&maxResults=10&order=date&type=video&key=AIzaSyDYGiZkXrhza6scL_4YQiLaY0PKRCjqChs`;

const get = (param) => (dispatch) => {
    dispatch(actionPending(GET_INFO_PENDING));
    axios
        .get(INFO_URL, param)
        .then((res) => {
            if (res.error) {
                throw res.error;
            }
            dispatch(actionSuccess(GET_INFO_SUCCESS, res));
        })
        .catch((err) => {
            dispatch(actionError(GET_INFO_ERROR));
        });

}

const info = {
    get
};
export default info;
