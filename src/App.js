
import './App.css';
import Navigationbar  from "./components/Navigationbar"
import Jumbotron from './components/Jumbotron'
import Ui from "./components/Ui"
import Webdev from "./components/Webdev"
import  "./style/landingpage.css"

function App() {
    return ( 
        <div>
            { /*iintro section */}
            <div className = "MyBG">
                        <Navigationbar/>
                        <Jumbotron/>
                       
                </div>
                { /*end section */}
                <div className='Ui'>
                    <Ui/>

                </div>
                <div className='webdev'>
                <Webdev/>
                </div>
        </div>
   

    );
}

export default App;