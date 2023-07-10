import React from 'react';
import PropTypes from "prop-types";
import './Board.css';


const Board = (props) => {
    const helper = () =>{
        props.clickBoard(props.id)
        props.selectCard(props.id)
    }
    return (
        <li onClick={()=>helper()}>{props.title}</li>
    )

};


Board.propType={
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        clickBoard : PropTypes.func
    }

export default Board

