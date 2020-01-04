import React,{Fragment,useEffect}  from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import {task1} from '../../action/task';



const Task1 = ({fetch,task1,task }) => {

    useEffect(()=>{
       task1();
    },[task1]);
    
    

    if(fetch){
    return (
        <div className="task">
    <h2>Which of all Star Wars movies has the longest opening crawl ?</h2>
    <center>
    <h3 className="yellow">{task}</h3>
    </center>
        
        </div>
            
          

    )
}else{
    return(
        <Fragment></Fragment>
    );
}
}

Task1.propTypes = {
    task1:PropTypes.func.isRequired
}

const mapStateToProps=state =>({
    task:state.task.task1data
})

export default connect(mapStateToProps,{task1})(Task1);
