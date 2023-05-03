import {Link} from 'react-router-dom'
import Counteiner from './Counteiner'
import Styles from '.Navbar.module.css'

function Navbar(){
    return(

        <nav>
            <Counteiner>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/contact">Contato</Link>

            </Counteiner>
        
        </nav>
      
    )
}
export default Navbar;
