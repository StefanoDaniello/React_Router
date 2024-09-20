import { Outlet ,Link } from "react-router-dom";
import CardItem from "../components/CardItem";
import { myContextApp } from "../store/context";


function CardsChildren(){
    const { cards } = myContextApp();
    
    return (
        <>
         <div className="container"> 
            <div className="row">
                {cards.map(item => (
                    <Link to={`/cards-children/${item.id}`} key={item.id}>
                        <CardItem  
                            name={item.name} 
                            id={item.id}  
                        />
                    </Link>
                ))}
            </div>
        </div>
        <Outlet/>
        </>
       
    );
}

export default CardsChildren