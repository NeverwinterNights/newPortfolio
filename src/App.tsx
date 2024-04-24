import  {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Home} from "./components/Home/Home";
import {HashRouter, Redirect, Route, useHistory} from "react-router-dom";
import {About} from './components/About/About';
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Contacts} from "./components/Contacts/Contacts";
import {MobileMenu} from "./components/mobile/MobileMenu";

function App() {
    const [customStyle, setCustomStyle] = useState<string>("main")
    const [customRedirect, setCustomRedirect] = useState<number>(0)
    //const [customRedirect, setCustomRedirect] = useState<string>("")

    useEffect(() => {
        const id=setTimeout(() => setCustomStyle("main_after"), 2000)
        return()=> clearTimeout(id)

    }, [])
    let history = useHistory();

    const clb = () => {
        if (window.innerWidth <= 999) {
            setCustomRedirect(window.innerWidth)
        } else {
            setCustomRedirect(window.innerWidth)
        }

    }
    useEffect(() => {
        setCustomRedirect(window.innerWidth)
        window.addEventListener("resize", clb);
        return () => {
            window.removeEventListener("resize", clb)
        }
    }, [])

    return (
        <HashRouter>
            <div className="App">
                <div className={customStyle}>

                    <Header/>
                    {customRedirect < 999
                        ?
                        <Route path="/" render={() => <Redirect to="/"/>}/>
                        :
                        <Route path="/" render={() => <Redirect to="/home"/>}/>
                    }
                    <MobileMenu/>
                    {/*{!customRedirect && <Route exact path="/" render={() => <Redirect to="/home"/>}/>}*/}
                    <Route path="/home" render={() => <Home clb={clb}/>}/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contacts" component={Contacts}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
