import { useParams } from "react-router-dom";
import { myContextApp } from "../store/context";

function Card() {
    const { cards } = myContextApp();  
    const { cardID } = useParams();
    console.log(cardID); 

    const card = cards.find(item => item.id === parseInt(cardID)); 

    return (
       <h1>Card {card ? `${card.name} - ${card.id}` : 'not found'}</h1>

    );
}

export default Card;
