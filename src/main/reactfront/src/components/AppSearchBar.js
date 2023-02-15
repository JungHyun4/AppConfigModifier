import React from "react";
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import axios from "axios";
import DropDown from "./DropDown";

import jsYaml, {JSON_SCHEMA} from "js-yaml";
import {Button} from "react-bootstrap";
import {type} from "@testing-library/user-event/dist/type";

const AppSearchBar = ({ AppName , SetAppName , Content , SetContent}) => {
    return(
        <div>
            <>
                <DropDown SetAppName = {SetAppName} SetContent={SetContent} AppName={AppName}></DropDown>
            </>
        </div>
    )
}





export default AppSearchBar;