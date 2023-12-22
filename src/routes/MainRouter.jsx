import {Routes,Route} from 'react-router-dom';
import Create from '../components/Create';
import Read from '../components/Read';
import Update from '../components/Update';

export const MainRouter = () =>{
    return(
        <Routes>
            <Route path='/' element={<Create/>} ></Route>
            <Route path='/read' element={<Read/>} ></Route>
            <Route path='/update' element={<Update/>}></Route>

        </Routes>



    )

}