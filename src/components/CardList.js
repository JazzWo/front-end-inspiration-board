import React from 'react';
import PropTypes from "prop-types";
import './CardList.css'
import Cards from "./Cards"

const CardList = (props) => {
    const getCards = props.data.map((card) => {
        return(
            <Cards 
            id = {card.card_id}
            key = {card.card_id}
            message = {card.message}
            likes = {card.likes_count}
            likeCard = {props.onLikeCard}
            deleteCard = {props.deleteCard}
            />
        );
});
        return (
            <section className='card-section'>
              
                <p className='card-layout'>{getCards}</p>
            </section>
        );
    };

Cards.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes_count: PropTypes.number.isRequired,
        onLikeCard: PropTypes.func,
        deleteCard: PropTypes.func
    })
};


export default CardList;