import React, {useState} from 'react';
import axios from "axios";
import yaml from "js-yaml";

const DropDown = ({SetAppName, SetContent ,AppName}) => {
    const [Visibility,SetVisibillity] = useState("collapse");
    const [Apps , SetApps] = useState([])
    return (
        <div onMouseEnter={()=>{SetVisibillity("visible")
            axios
                .get("/db/all" )
                .then((response) => {
                    SetApps(response.data)
                });}

        } onMouseLeave={()=>{SetVisibillity("collapse")}}>
            <button  onClick={()=>{
                Visibility == "collapse" ? SetVisibillity("visible") : SetVisibillity("collapse");
                }}>
                Applications</button>
            <article style={{background:"beige" ,color:"black", visibility:Visibility ,position:"fixed", zIndex:"12"}}>
                <ul>
                    {Apps.map((Appname) => <li onClick={() => {
                        SetAppName(Appname);
                        SetVisibillity("collapse");
                        axios
                            .get('/db/'+ Appname)
                            .then((response) => {

                                const fs   = require('fs');
                                const yaml = require('js-yaml')
                                const data = yaml.load(response.data)


                                console.log(JSON.stringify(data))
                                const keys = Object.keys(data);
                                // SetContent(JSON.stringify(data, null, 4))
                                SetContent(response.data)
                                console.log(response.data)
                            })


                    }}>{Appname}</li>)}
                </ul>

            </article>
        </div>

    )
};

export default DropDown;