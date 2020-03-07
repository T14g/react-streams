import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// React Router DOM exemple
//Type http://localhost:3000/pagetwo

const PageOne = () =>{
    return <div>Page One!</div>
};

const PageTwo = () =>{
    return <div>Page Two!</div>
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