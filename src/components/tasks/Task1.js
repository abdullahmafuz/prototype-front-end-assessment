import React,{Fragment}  from 'react'
import PropTypes from 'prop-types'

const Task1 = ({fetch }) => {

    console.log(fetch)

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

Task1.propTypes = {

}

export default Task1;
