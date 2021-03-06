import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) =>{

    switch(action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            //Empty state + the fetched object = new state object!
            return {...state , [action.payload.id] : action.payload};
        
        case CREATE_STREAM:
            
            return {...state , [action.payload.id] : action.payload};

        case EDIT_STREAM:
            
            //Return new object, assign new value to a property
            return {...state , [action.payload.id] : action.payload};
    
        case DELETE_STREAM: 
            return _.omit(state, action.payload);//payload is id itself and omit create new object omiting what you pass
        default:
            return state;
    }
}