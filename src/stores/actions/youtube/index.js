import axios from "axios";
import { actionPending, actionSuccess, actionError } from "../types";

// ACTION TYPES TO DISPATCH: METHOD_URL_TYPES
export const GET_YOUTUBE_PENDING = "GET_YOUTUBE_PENDING";
export const GET_YOUTUBE_SUCCESS = "GET_YOUTUBE_SUCCESS";
export const GET_YOUTUBE_ERROR = "GET_YOUTUBE_ERROR";

// URL: URL_{URL}
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=female+daily&maxResults=10&order=date&type=video&key=AIzaSyDYGiZkXrhza6scL_4YQiLaY0PKRCjqChs`;

const getYoutube = (param) => (dispatch) => {
    dispatch(actionPending(GET_YOUTUBE_PENDING));
    axios
        .get(YOUTUBE_URL, param)
        .then((res) => {
            if (res.error) {
                throw res.error;
            }
            dispatch(actionSuccess(GET_YOUTUBE_SUCCESS, res));
        })
        .catch((err) => {
            dispatch(actionError(GET_YOUTUBE_ERROR));
        });

}

const youtube = {
    getYoutube
};
export default youtube;
