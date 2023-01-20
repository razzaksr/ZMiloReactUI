import "./Home.css"

import Feed from '../../Componants/Feed/Feed';
import LeftBanner from '../../Componants/leftbanner/LeftBanner';
import RightBanner from '../../Componants/RightBanner/RightBanner';
import Topbar from '../../Componants/Topbar/Topbar';
import { useState } from "react";
import Profile from "../Profile/Profile";

export default function Home(){
    const[multi,setMulti]=useState(true)
    return(
        <>
            <Topbar what={setMulti}/>
            {
                (multi)?
                <>
                    
                    <div className='homeContainer'>
                        <LeftBanner/>
                        <Feed/>
                        <RightBanner/>
                    </div>
                </>
                :
                <>
                    <Profile/>
                </>
            }
        </>
    )
    // return(
    //     <>
    //         <Topbar what={setMulti}/>
    //         <div className='homeContainer'>
    //                     {
    //                         (multi)?
    //                         <>
    //                             <LeftBanner/>
    //                             <Feed/>
    //                             <RightBanner/>
    //                         </>
    //                         :
    //                         <>
    //                             <LeftBanner/>
    //                             <Profile/>
    //                         </>
    //                     }
                        
    //                 </div>
            
    //     </>
    // )
}