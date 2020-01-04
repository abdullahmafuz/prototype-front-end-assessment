import React,{Fragment,useEffect}  from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import {task3} from '../../action/task';



const Task3 = ({fetch }) => {

    
    useEffect(()=>{
        task3();
     },[]);
     
    

    if(fetch){
    return (
        <div className="task">
    <h2>Which of all Star Wars movies has the longest opening crawl ?</h2>
    <center>
    <h3 className="yellow">RETURN OF THE JADi</h3>
    </center>
        
        </div>
            
          

    )
}else{
    return(
        <Fragment></Fragment>
    );
}
}

Task3.propTypes = {

}

const mapStateToProps=state =>({
    task:state.task.task3data
})

export default connect(mapStateToProps,{task3})(Task3);
