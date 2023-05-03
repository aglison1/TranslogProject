import './header.css';
import {link} from 'react-router-dom';

function Header(){
    return(

        <header>

            <link className = "Logo" to="/"> TranslogAPP</link>
            <link className = "LinkCadastro" to="Cadastro"> Cadastro</link>

        </header>  
    ); 
}
export default Header;
