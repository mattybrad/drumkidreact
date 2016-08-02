import * as Actions from '../actions/BeatActions';

export default function Entries(
  state = {
    beats: []
  },
  action
) {
  switch(action.type) {
    case Actions.TEST_ACTION:
    return Object.assign({}, state, {myTestVar:"hello there"});

    default:
    return state
  }
}
