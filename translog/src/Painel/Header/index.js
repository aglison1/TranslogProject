import React from "react";

import{AreaHeader} from './styled';

function Header(){

    return(

        <AreaHeader>
            <div className="counteiner">
                <div className="logo">
                    logomarca
                </div>
                <nav>
                    <ul>
                        <li>configuracaoes</li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div>
        
        </AreaHeader>
        
        
    )
}

export default Header;
