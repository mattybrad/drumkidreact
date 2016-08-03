import fetchival from 'fetchival';
let beats = fetchival('/api/v1/beats');

export const REQUEST_FETCH_BEATS = 'REQUEST_FETCH_BEATS';
export function requestFetchBeats() {
  return {
    type: REQUEST_FETCH_BEATS
  }
}

export const SUCCESS_FETCH_BEATS = 'SUCCESS_FETCH_BEATS';
export function successFetchBeats(beats) {
  return {
    type: SUCCESS_FETCH_BEATS,
    beats
  }
}

export const FAILURE_FETCH_BEATS = 'FAILURE_FETCH_BEATS';
export function failureFetchBeats(message) {
  return {
    type: FAILURE_FETCH_BEATS,
    message
  }
}

export function fetchBeats() {
  return function(dispatch) {
    dispatch(requestFetchBeats());
    beats
      .get()
      .then(function(json) {
        dispatch(successFetchBeats(json));
      })
      .catch(function(err) {
        dispatch(failureFetchBeats(err.message));
      })
  }
}
