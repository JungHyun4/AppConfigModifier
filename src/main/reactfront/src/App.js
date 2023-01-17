import './App.css';
import React,{useState} from'react'
import AppSerchBar from './components/AppSearchBar'
import TextEditor from "./components/TextEditor";
import AppRegisterModal from "./components/AppRegisterModal"
import TreeEditor from "./components/TreeEditor";


const Default_Mode = React.createContext("TextEditor");

function App() {

    const [AppName, SetAppName] = useState("");
    const[Content, SetContent] = useState("");
    const[Color , SetColor] = useState("black");
    const[TextMode, SetTextMode] = useState(true);
    return(
        <div className="app">
            <div className="black-nav">
                <AppSerchBar SetColor={SetColor} AppName = {AppName} SetAppName = {SetAppName} Content = {Content} SetContent = {SetContent}/>
                <AppRegisterModal></AppRegisterModal>
            </div>
            <div className="mode">
                <button className="text-mode" onClick={() => {
                    if (Content != "") {SetTextMode(true)
                    }
                    else{alert("조회먼저하삼")}
                }
                }>Text Mode</button><button className="tree-mode" onClick={() =>{

                if (Content != "") {SetTextMode(false)
            }
                else{alert("조회먼저하삼")}
            }
                }>Tree Mode</button>
            </div>
            <div>
                {TextMode ? <TextEditor Color = {Color} AppName = {AppName} Content = {Content} SetContent = {SetContent}/> : <TreeEditor Color={Color} AppName = {AppName} Content = {Content}/> }
            </div>
        </div>
    );
}



export default App;