
import {TASK1_DATA_LOADED,TASK2_DATA_LOADED,TASK3_DATA_LOADED,TASK4_DATA_LOADED,TASK_FAIL} from '../action/types';

const initialState={
    task1data:null,
    task2data:null,
    task3data:null,
    task4data:null,
    loading:true

}

export default function(state=initialState,action){
    const {type,payload} =action;

    switch(type){
        case TASK1_DATA_LOADED:
            return {
                ...state,
                task1data:payload,
                loading:false,
                
            }
        case TASK2_DATA_LOADED:
            return {
                ...state,
                task2data:payload,
                loading:false,
                
            } 
        case TASK3_DATA_LOADED:
            return {
                ...state,
                task3data:payload,
                loading:false,
                
            }       
        case TASK4_DATA_LOADED:
            return {
                ...state,
                task4data:payload,
                loading:false,
                
            }    
        case TASK_FAIL: 
           
            return {
                ...state,
                ...payload,
                loading:false
            }
        default:
            return state;        
    }

}
