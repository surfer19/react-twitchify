import { 
    FETCH_STREAMS_BEGIN, 
    FETCH_STREAMS_SUCCESS, 
    FETCH_STREAMS_FAILURE
} from "./StreamListActions";

const defaultState = {
    fetchedStreams: []
}

const streamListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_STREAMS_BEGIN:
            return {
                ...state
            }
        case FETCH_STREAMS_SUCCESS:
            return {
                ...state,
                fetchedStreams: action.payload
            }
        case FETCH_STREAMS_FAILURE:
            return {
                ...state
            }
        default: 
            return state
    }
}

export default streamListReducer;