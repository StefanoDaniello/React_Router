import { Link } from "react-router-dom"
function Navbar (){
    return(
        <nav>
          <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/prova"}>Prova</Link>
            </li>
            <li>
                <Link to={"/cards"}>Cards Normale</Link>
            </li>
            <li>
                <Link to={"/cards/1"}>Card 1</Link>
            </li>
            <li>
                <Link to={"/cards-children"}>Cards Children</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar