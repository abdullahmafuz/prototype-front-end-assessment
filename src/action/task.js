import axios from 'axios';

import {TASK1_DATA_LOADED,TASK2_DATA_LOADED,TASK3_DATA_LOADED,TASK4_DATA_LOADED,TASK_FAIL} from './types';



// hit api/task1

export const task1=()=> async dispatch =>{



    try{

        const res=await axios.get('/api/task1');

       

        dispatch({
            type:TASK1_DATA_LOADED,
            payload:res.data
        })

    }catch(err){

        dispatch({
            type:TASK_FAIL
        })

    }
}


// hit api/task2

export const task2=()=> async dispatch =>{



    try{

        const res=await axios.get('/api/task2');

      

        dispatch({
            type:TASK2_DATA_LOADED,
            payload:res.data
        })

    }catch(err){

        dispatch({
            type:TASK_FAIL
        })

    }
}





// hit api/task2

export const task3=()=> async dispatch =>{



    try{

        const res=await axios.get('/api/task3');
      
        dispatch({
            type:TASK3_DATA_LOADED,
            payload:res.data
        })

    }catch(err){

        dispatch({
            type:TASK_FAIL
        })

    }
}





// hit api/task2

export const task4=()=> async dispatch =>{



    try{

        const res=await axios.get('/api/task4');
        
        dispatch({
            type:TASK4_DATA_LOADED,
            payload:res.data
        })

    }catch(err){

        dispatch({
            type:TASK_FAIL
        })

    }
}

