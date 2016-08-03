import * as Actions from '../actions/BeatActions';

export default function Entries(
  state = {
    beats: []
  },
  action
) {
  switch(action.type) {
    case Actions.REQUEST_FETCH_BEATS:
    return Object.assign({}, state, {isFetching: true, labels: []});

    case Actions.SUCCESS_FETCH_BEATS:
    return Object.assign({}, state, {isFetching: false, beats: action.beats});

    case Actions.FAILURE_FETCH_BEATS:
    return Object.assign({}, state, {isFetching: false});

    default:
    return state
  }
}
