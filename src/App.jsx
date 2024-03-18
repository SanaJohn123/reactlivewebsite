
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service'
import Navbar from './Navbar';
import Footer from './Footer'



const App = () =>{
    return (
        <>
        <Navbar />
        <Switch>
          <Route  exact  path="/" component={Home}  />
          <Route  exact  path="/about" component={About}  />
          <Route  exact  path="/service" component={Service}  />
          <Route  exact  path="/contact" component={Contact}  />
          <Redirect to ="/" />      
        </Switch>

          <Footer/>
        </>
    )
}

export default App;



// video 74---> ADD BOOSTRATP
// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// const App = () =>{
//     return (
//         <>
//             <div className="container ">
//                 <h1 className="text-center"> Welcome </h1>
//                 <br/>
//                 <div className="text-center">
              
//         <div class="card" style={{width: " 18rem"}}>
//         <img src="https://source.unsplash.com/600x400/" class="card-img-top" alt="..." />
//         <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>
       
//                 <button className="btn btn-success"> Welcome to future </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default App;