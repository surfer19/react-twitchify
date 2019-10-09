import { 
    FETCH_STREAMS_BEGIN, 
    FETCH_STREAMS_SUCCESS, 
    FETCH_STREAMS_FAILURE ,
    FETCH_FILTERED_STREAMS_SUCCESS
} from "./StreamListActions";

const defaultState = {
    allStreams: [],
    filteredStreams: []
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
                allStreams: action.payload
            }
        case FETCH_STREAMS_FAILURE:
            return {
                ...state
            }
        case FETCH_FILTERED_STREAMS_SUCCESS: 
            return {
                ...state,
                filteredStreams: action.payload
            }
        default: 
            return state
    }
}

export default streamListReducer;