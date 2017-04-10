import * as types from '../actions/ActionTypes';

// reducer 의 초기 상태는 상수 형태의 객체 값으로 지정
const initialState = {
  number:0,
  dummy:'dumbdub',
  dumbObject: {
    d:0,
    u:1,
    m:2,
    b:3
  }
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number : state.number + 1,
        dumbObject: { ...state.dumbObject, u:0}
      };
      // 기존의 state 값을 가져옴 ...state : es6 spread라는 문법
    case types.DECREMENT:
      return {
        ...state,
        number : state.number -1
      };
    default:
        return state;
  }
}
