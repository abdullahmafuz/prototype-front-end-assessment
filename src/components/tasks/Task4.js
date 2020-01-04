import React,{Fragment,useEffect}  from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import {task4} from '../../action/task';



const Task4 = ({fetch }) => {

    
    useEffect(()=>{
        task4();
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

Task4.propTypes = {

}

const mapStateToProps=state =>({
    task:state.task.task4data
})

export default connect(mapStateToProps,{task4})(Task4);
