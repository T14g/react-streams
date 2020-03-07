import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


//React Router DOM exemple
//Type http://localhost:3000/pagetwo
//Exact == Exact URL, else it looks if the url Contains the path
//Router prevents reloading by browser


const PageOne = () =>{
    return (
        <div>
            Page One!
            <Link to="/pagetwo">Page 2</Link>
        </div>
    );
};

const PageTwo = () =>{
    return (
        <div>
            Page Two!
            <Link to="/">Page 1</Link>
        </div>
    );
};


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;