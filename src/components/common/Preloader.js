import preloader from "../../assets/Infinity-1s-200px.svg";
import React from "react";

let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt=""/>
    </div>
};

export default Preloader;