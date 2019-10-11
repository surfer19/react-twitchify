import axios from "axios";

/*
 * CONSTANTS
 */

// fetch streams
export const FETCH_STREAMS_BEGIN = "FETCH_STREAMS_BEGIN";
export const FETCH_STREAMS_SUCCESS = "FETCH_STREAMS_SUCCESS";
export const FETCH_STREAMS_FAILURE = "FETCH_STREAMS_FAILURE"; 

/*
 * FUNCTIONS
 */

// fetch streams
export const fetchMoreStreams = (offset) => {    
    return async (dispatch) => {
        try {            
            dispatch(fetchMoreStreamsBegin())            
            // call api
            const response = (await axios.get("https://api.twitch.tv/kraken/streams/", {
                headers: {
                    'Client-ID': 'e58bb9u3nmtqp4ikxaz1qg05kelpy7l',
                    'Accept': 'application/vnd.twitchtv.v5+json?api_version=5'
                },
                params: {
                    limit: 20,
                    offset: offset
                }
            }
            )).data;

            dispatch(fetchMoreStreamsSuccess(response))

        } catch (err) {
            dispatch(fetchMoreStreamsFailure(err))
        }
    }
}

function fetchMoreStreamsBegin() {
    return  {
        type: FETCH_STREAMS_BEGIN
    }
}

function fetchMoreStreamsSuccess(responseData) {
    return {
        type: FETCH_STREAMS_SUCCESS,
        payload: responseData.streams
    }
}

function fetchMoreStreamsFailure(err) {
    return {
        type: FETCH_STREAMS_FAILURE,
        error: err
    }
}
