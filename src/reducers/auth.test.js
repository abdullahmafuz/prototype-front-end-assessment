import {REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT} from '../action/types';


import auth from './auth';

describe('Authentication',()=>{

    const initialState={
        token:null,
        isAuth:null,
        loading:true,
        user:null
    
    }

    it('should return inital state',()=>{
        expect(auth(undefined,{})).toEqual(initialState);
    })


    const expectedInitialState={
        token:null,
        isAuth:true,
        loading:false,
        user:'abdullah@gmail.com'
    
    }

    it('should handle USER_LOAD type',()=>{
        const name='abdullah@gmail.com'
        expect(auth(undefined,{
            type:USER_LOADED,
            payload:name
        })).toEqual(expectedInitialState);
    })
    

   


})