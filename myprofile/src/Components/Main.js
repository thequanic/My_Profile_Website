import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// import Alert from './Alert'
// import AppContext from '../Context/appContext';
import Nav from './Nav';
// import Appointmentmodal from './Appointmentmodal';

export default function Main()
{
    // const context= useContext(AppContext);
    // const {alert,showAlert,setUser}=context;
 

    // useEffect( ()=>{
    //     showAlert("Welcome to LawConnect... ","primary");
    //     setUser(localStorage.getItem('user'));
    // },[])

    return(
        <div>
             <div className='main'>
             <div className='fixed-top'>
               <Nav/>
                {/* {alert===null?<></>:<Alert alert={alert}/>} */}
                </div>
                {/* <Appointmentmodal/> */}
             <Outlet/>
             </div>
        </div>
    )
}


