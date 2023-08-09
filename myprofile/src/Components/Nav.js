import React,{useContext, useState} from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';
// import appContext from '../Context/appContext';



export default function Nav()
{

//   const context=useContext(appContext);
//   const {showAlert,user,setUser} = context;


  let location = useLocation();
  React.useEffect(()=>{
    console.log(location.pathname);
  },[location]);

  const navigate=useNavigate();


  
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {setIsNavCollapsed(!isNavCollapsed);}

  const str={backgroundColor: "rgb(8 8 78)"};
  const iconColor={color:"rgb(255,255,255)"};


    return(
        
        <nav className="navbar navbar-expand-lg  navbar-dark " style={str}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">Profile</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}  id="navbarSupportedContent">
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/"><i className="fa-solid fa-user" style={iconColor}></i> Hello World!</Link>
        </li>

        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/education"?"active":""}`} to="/education"><i className="fa-solid fa-user-graduate" style={iconColor}></i> Education</Link>
        </li>

        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/experience"?"active":""}`} to="/experience"><i className="fa-solid fa-briefcase" style={iconColor}></i> Work Experience</Link>
        </li>
        
        </ul>
        
    </div>
  </div>
</nav>
        
    )
}