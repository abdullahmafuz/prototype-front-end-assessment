import React,{Fragment,useEffect}  from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import {task2} from '../../action/task';



const Task2 = ({fetch,task2,task }) => {

    useEffect(()=>{
        task2();
     },[task2]);
     
    

    if(fetch){
    return (
        <div className="task">
    <h2>What character appeared in most of the Star Wars films?</h2>
    <center>
        {
    task && task.map(person =><h3 key={person} className="yellow">{person}</h3>)
        }
    </center>
        
        </div>
            
          

    )
}else{
    return(
        <Fragment></Fragment>
    );
}
}

Task2.propTypes = {
    task2:PropTypes.func.isRequired
}

const mapStateToProps=state =>({
    task:state.task.task2data
})

export default connect(mapStateToProps,{task2})(Task2);
