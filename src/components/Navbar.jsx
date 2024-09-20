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
                <Link to={"/cards"}>Cards</Link>
            </li>
            <li>
                <Link to={"/cards/1"}>Card 1</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar