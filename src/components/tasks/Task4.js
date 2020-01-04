import React,{Fragment,useEffect}  from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import {task4} from '../../action/task';



const Task4 = ({fetch,task4 ,task}) => {

    
    useEffect(()=>{
        task4();
     },[task4]);
     
   

    

    

    if(fetch){
    return (
        <div className="task">
    <h2>What planet in Star Wars universe provided largest number of vehicle pilots?</h2>
    <center>
    {
    task && task.map(data => <h3 key={data.peopleName} className="yellow">Planet: {data.planetName} - Pilot: {data.peopleName} - {data.speciesName}</h3>)
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

Task4.propTypes = {
    task4:PropTypes.func.isRequired
}

const mapStateToProps=state =>({
    task:state.task.task4data
})

export default connect(mapStateToProps,{task4})(Task4);
