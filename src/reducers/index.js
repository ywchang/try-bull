import {combineReducers} from 'redux';
import ActionTypes from "../actions/actionTypes";

const randomNumbers = (state = [], action) => {
    if (action.type === ActionTypes.GET_JOB_SUCCESS) {
        return [
            ...state.filter(number =>
                number.randomNumberId !== action.payload.randomNumberId
            ),
            action.payload
        ].sort(
            (prev, next) => prev.randomNumberId - next.randomNumberId
        );
    }
    return state;
}

const rootReducer = combineReducers({
    randomNumbers
});

export default rootReducer;