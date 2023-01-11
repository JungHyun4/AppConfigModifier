import './App.css';
import React,{useState} from'react'
import AppSerchBar from './components/AppSearchBar'
import ConfigModifier from "./components/ConfigModifier";
import AppRegisterModal from "./components/AppRegisterModal"


const Default_Mode = React.createContext("TextMode");

function App() {

    const [AppName, SetAppName] = useState("");
    const[Content, SetContent] = useState("");
    const[Color , SetColor] = useState("black");
    return(
        <div className="app">
            <div className="black-nav">
                <AppSerchBar SetColor={SetColor} AppName = {AppName} SetAppName = {SetAppName} Content = {Content} SetContent = {SetContent}/>
                <AppRegisterModal></AppRegisterModal>
            </div>
            <div className="mode">
                <button className="text-mode">Text Mode</button><button className="tree-mode">Tree Mode</button>
            </div>
            <div>
                <ConfigModifier Color = {Color} AppName = {AppName} Content = {Content} SetContent = {SetContent}></ConfigModifier>
            </div>
        </div>
    );
}


export default App;