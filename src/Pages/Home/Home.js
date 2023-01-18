import "./Home.css"

import Feed from '../../Componants/Feed/Feed';
import LeftBanner from '../../Componants/leftbanner/LeftBanner';
import RightBanner from '../../Componants/RightBanner/RightBanner';
import Topbar from '../../Componants/Topbar/Topbar';

export default function Home(){
    return(
        <>
            <Topbar/>
            <div className='homeContainer'>
                <LeftBanner/>
                <Feed/>
                <RightBanner/>
            </div>
        </>
    )
}