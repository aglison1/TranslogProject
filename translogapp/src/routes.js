import {BrowserRouter, Routes,Route} from 'React-router-dom';


import Home from './pages/Home';
import Cadastro from './components/Cadastro';
import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>

            <Header/>

            <Routes>

                <Route path ="/" element ={<Home/>}/>
                <Route path ="/Cadastro/id:" element ={<Cadastro/>}/>

            </Routes>
        
        </BrowserRouter>

    )
}

export default RoutesApp;
