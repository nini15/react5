
import React from "react";
import ReactDOM from "react-dom/client";
import Nini from "./aplication";

class App extends React.Component{
    render(){
        return(
            <div>
                <Nini></Nini>
            </div>
        )
    }
}
var root=document.getElementById("root")

ReactDOM.createRoot(root).render(<App/>)