import React,{Fragment,useEffect}  from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import {task3} from '../../action/task';



const Task3 = ({fetch,task3 ,task}) => {

    
    useEffect(()=>{
        task3();
     },[task3]);
     
    

    if(fetch){
    return (
        <div className="task">
    <h2>What species appeared in the most number of Star Wars films?</h2>
    <center>
    {
        task && task.map(specie => <h3 key={specie.species} className="yellow">{specie.species} ({specie.noOfAppeared})</h3>)
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

Task3.propTypes = {
    task3:PropTypes.func.isRequired
}

const mapStateToProps=state =>({
    task:state.task.task3data
})

export default connect(mapStateToProps,{task3})(Task3);
