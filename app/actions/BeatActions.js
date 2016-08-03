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

export const REQUEST_FETCH_BEAT = 'REQUEST_FETCH_BEAT';
export function requestFetchBeat() {
  return {
    type: REQUEST_FETCH_BEAT
  }
}

export const SUCCESS_FETCH_BEAT = 'SUCCESS_FETCH_BEAT';
export function successFetchBeat(beat) {
  return {
    type: SUCCESS_FETCH_BEAT,
    beat
  }
}

export const FAILURE_FETCH_BEAT = 'FAILURE_FETCH_BEAT';
export function failureFetchBeat(message) {
  return {
    type: FAILURE_FETCH_BEAT,
    message
  }
}

export const REQUEST_CREATE_BEAT = 'REQUEST_CREATE_BEAT';
export function requestCreateBeat() {
  return {
    type: REQUEST_CREATE_BEAT
  }
}

export const SUCCESS_CREATE_BEAT = 'SUCCESS_CREATE_BEAT';
export function successCreateBeat(beat) {
  return {
    type: SUCCESS_CREATE_BEAT
  }
}

export const FAILURE_CREATE_BEAT = 'FAILURE_CREATE_BEAT';
export function failureCreateBeat(message) {
  return {
    type: FAILURE_CREATE_BEAT,
    message
  }
}

export const REQUEST_DELETE_BEAT = 'REQUEST_DELETE_BEAT';
export function requestDeleteBeat() {
  return {
    type: REQUEST_DELETE_BEAT
  }
}

export const SUCCESS_DELETE_BEAT = 'SUCCESS_DELETE_BEAT';
export function successDeleteBeat() {
  return {
    type: SUCCESS_DELETE_BEAT
  }
}

export const FAILURE_DELETE_BEAT = 'FAILURE_DELETE_BEAT';
export function failureDeleteBeat(message) {
  return {
    type: FAILURE_DELETE_BEAT,
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

export function createBeat(beatData) {
  return function(dispatch) {
    dispatch(requestCreateBeat());
    beats
      .post(beatData)
      .then(function(json) {
        dispatch(successCreateBeat(json));
      })
      .catch(function(err) {
        dispatch(failureCreateBeat(err.message));
      })
  }
}

export function fetchBeat(beatID) {
  return function(dispatch) {
    dispatch(requestFetchBeats());
    beats(beatID)
      .get()
      .then(function(json) {
        dispatch(successFetchBeats(json));
      })
      .catch(function(err) {
        dispatch(failureFetchBeats(err.message));
      })
  }
}

export function deleteBeat(beatID) {
  return function(dispatch) {
    dispatch(requestDeleteBeat());
    beats(beatID)
      .delete()
      .then(function(json) {
        dispatch(successDeleteBeat());
        dispatch(fetchBeats());
      })
      .catch(function(err) {
        dispatch(failureDeleteBeat(err.message));
      })
  }
}
