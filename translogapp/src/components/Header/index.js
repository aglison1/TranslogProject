import React from "react";

import {AreaHeader} from '.styled';

function Header(){
    return(

        <AreaHeader>
            
                <div className="counteiner">
                    <div className="logo">
                        logo
                    </div>

                    <nav>
                        <ul>
                            <li>configuracoes</li>                             
                            <li>sair</li>
                        </ul>
                    </nav>

                </div>
            
        </AreaHeader>
    );     

}
export default Header;
