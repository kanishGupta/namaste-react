 import { useEffect, useState } from "react";
 
 const useNetworkStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("online", ()=>{setOnlineStatus(true)});
        window.addEventListener("offline", ()=>{setOnlineStatus(false)});
    },[]);

    return onlineStatus;
    //return boolean value whether network status is true or false.
 }

 export default useNetworkStatus;