import Counter from "./Counter";
import Counter1 from "./Cunter1";
import Article from "./Article";
import Links from "./Links";
import {Routes, Route, Link} from "react-router-dom"


function App() {

    // let body1 = "salam mamad1😍 :)"
    // let body2 = "salam mamad2😉 :)"
    // let body3 = "salam mamad3😊 :)"

    return (
        <div className="App">
            Start App
            <hr/><br/>
            {/*<Counter />*/}
            {/*<Article title="title 1" body={ body1 }/>*/}
            {/*<Article title="title 2" body={ body2 }/>*/}
            {/*<Article title="title 3" body={ body3 }/>*/}
            <Routes>
                <Route path="/" element={<Links />}/>
                <Route path="/counter/:number" element={<Counter1/>}/>
                <Route path="/Article" element={<Article/>}/>
            </Routes>
            <br/>
            <hr/>
            End App
        </div>
    );
}

export default App;
