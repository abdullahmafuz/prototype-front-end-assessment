import {SET_ALERT,REMOVE_ALERT} from '../action/types';



import alert from './alert';


describe('alert',()=>{

    it('should return inital state',()=>{
        expect(alert(undefined,{})).toEqual([]);
    })


    

    it('should handle state',()=>{
        expect(alert([],{
            type:SET_ALERT,
            payload:'Fire alarm'
        })).toEqual(['Fire alarm']);
    })


})