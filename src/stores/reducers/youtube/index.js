import {
    GET_YOUTUBE_PENDING,
    GET_YOUTUBE_SUCCESS,
    GET_YOUTUBE_ERROR
} from "../../actions/youtube"

const initialState = {
    pending: false,
    error: null,
    data: null,
};

const youtube = (state = initialState, action) => {
    switch (action.type) {
        case GET_YOUTUBE_PENDING:
            return {
                ...state,
                pending: true,
            };
        case GET_YOUTUBE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            };
        case GET_YOUTUBE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default youtube;

