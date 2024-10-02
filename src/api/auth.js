import {Outlet,Navigate} from "react-router-dom";

let PrivateRoutes=()=>{
    let token=sessionStorage.getItem("authToken");
    return token? <Outlet/>:<Navigate to="/login"/>
}

export default PrivateRoutes;