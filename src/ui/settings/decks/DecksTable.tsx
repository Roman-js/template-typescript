import React, {ChangeEvent, useState} from "react";

import style from './DecksTable.module.css';
import Button from "../../common/Button";
import Input from "../../common/Input";
import Title from "../../common/Title";
import Search from "../Search/Search";
import Link from "../../common/LInk";
import {CARDS_TABLE} from "../../common/Constants";

type OwnPropsType = {
    decks: any[],
    addNewDeck: (name: string, rating: number) => void,
    deleteADeck: (id: string) => void
    getCards: (id:string)=>void
}
const DecksTable = (props: OwnPropsType) => {

    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);

    const nameOfNewDeck = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    };
    const sendNewDeck = () => {
        props.addNewDeck(name, rating)
    };
    const sendDeleteDeck = (id: string) => {
        props.deleteADeck(id)
    };
    const increment = () =>{
        setRating(rating + 1.0)
    };
    const decrement = () =>{
        setRating(rating -1.0)
    };


    return (
        <>
            <Search/>
            <Title title='DECKS'/>
            <table className={style.Table}>
                <tr>
                    <th><Input type={"text"} value={name} placeholder={'Deck\'s name'} onChange={nameOfNewDeck}/></th>
                    <th>Rating {' '} {rating} {' '}
                        <Button actionOfButton={increment} nameOfButton='↑' typeOfButton="button"/> {' '}
                        <Button actionOfButton={decrement} nameOfButton='↓' typeOfButton="button" />
                    </th>
                    <th>
                        <Button actionOfButton={sendNewDeck} nameOfButton='add' typeOfButton="button"/>
                    </th>
                </tr>
                {props.decks.map(deck =>
                    <tr className={style.cells} key={deck._id}>
                        <td>{deck.name}</td>
                        <td>{deck.rating}</td>
                        <td><Button actionOfButton={() => {
                        }} nameOfButton='Update' typeOfButton="button"/>{' '}
                            <Button actionOfButton={() => sendDeleteDeck(deck._id)} nameOfButton='Delete'
                                    typeOfButton="button"/>{' '}
                            <span onClick={()=>props.getCards(deck._id)}><Link way={CARDS_TABLE} wordOfLink={'cards'}/></span>
                        </td>
                    </tr>)}

            </table>
        </>
    )
};

export default DecksTable