import axios from "axios";

/*
 * CONSTANTS
 */

// fetch streams
export const FETCH_STREAMS_BEGIN = "FETCH_STREAMS_BEGIN"; // TODO: loading
export const FETCH_STREAMS_SUCCESS = "FETCH_STREAMS_SUCCESS";
export const FETCH_STREAMS_FAILURE = "FETCH_STREAMS_FAILURE"; //TODO:

// filtered
export const FETCH_FILTERED_STREAMS_SUCCESS = "FETCH_FILTERED_STREAMS_SUCCESS";

/*
 * FUNCTIONS
 */

// fetch streams
export const fetchAllStreams = () => {
    return async dispatch => {
        try {
            dispatch(fetchAllStreamsBegin())
            // for testing purpose
            // setTimeout(async() => {
            // call api
            const response = (await axios.get("https://api.twitch.tv/kraken/streams/", {
                headers: {
                    'Client-ID': 'e58bb9u3nmtqp4ikxaz1qg05kelpy7l',
                    'Accept': 'application/vnd.twitchtv.v5+json?api_version=5'
                }
            }
            )).data;
            // TODO: parse response with object destruction?
            console.log('RESPONSE type=', typeof response)
            console.log('RESPONSE streams type=', Array.isArray(response.streams))
            console.log('RESPONSE streams type=', response.streams[0])
            console.log('RESPONSE=', response)
            
            // const response = mockData;
            // success
            dispatch(fetchAllStreamsSuccess(response))
            // }, 1000)
        } catch (err) {
            dispatch(fetchAllStreamsFailure(err))
        }
    }
}

function fetchAllStreamsBegin() {
    return  {
        type: FETCH_STREAMS_BEGIN
    }
}

function fetchAllStreamsSuccess(responseData) {
    return {
        type: FETCH_STREAMS_SUCCESS,
        payload: responseData.streams
    }
}

function fetchAllStreamsFailure(err) {
    return {
        type: FETCH_STREAMS_FAILURE,
        error: err
    }
}

export const fetchfilteredStreams = (streams) => {
    return async dispatch => {
        dispatch(fetchfilteredStreamsSuccess(streams))
    }
}

function fetchfilteredStreamsSuccess(streams) {
    return {
        type: FETCH_FILTERED_STREAMS_SUCCESS,
        payload: streams
    }
}