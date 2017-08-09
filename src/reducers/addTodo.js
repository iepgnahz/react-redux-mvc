import {ADD_TODO} from '../constants/ActionTypes';

const initState = [{
    text: 'zhangpei is beautiful',
    completed: false,
    id:0
}];

export default function(state = initState, action){
    switch(action.type){
        case ADD_TODO:
            return [{
                id:state.length,
                completed:false,
                text:action.text
            },...state];
        default:
            return state;
    }


};

