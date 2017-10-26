// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

// Constants

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators

export function increment(amount) {
    return {
        type: INCREMENT,
        amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        amount
    }
}

const initialState = {
    currentValue: 0
};


export default function counter(state = initialState, action)  {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, { currentValue: state.currentValue + action.amount })
        case DECREMENT:
            return Object.assign({}, state, { currentValue: state.currentValue - action.amount })

        default:
            return state;
    }




}
