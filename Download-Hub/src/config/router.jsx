import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../components/main';
import Facebook from '../components/facebook';
import Instagram from '../components/instagram';
import Tiktok from '../components/tiktok';
import Youtube from '../components/youtube';

function BrowserRoute(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/facebook' element={<Facebook/>} />
            <Route path='/instagram' element={<Instagram/>} />
            <Route path='/tiktok' element={<Tiktok/>} />
            <Route path='/youtube' element={<Youtube/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default BrowserRoute;