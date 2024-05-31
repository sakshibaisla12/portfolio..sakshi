// import Clockname from './components/Clockname';
// import Paragraph from './components/Paragraph';
// import Currentime from './components/currenttime';


// function App() {
 

//   return <center>
//     <div>

//   <Clockname></Clockname>
//   <Paragraph/>
//   <Currentime/>
// </div>
// </center>
       
   
  
// }

// export default App
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App(){
  let Fooditems=['dal','roti','salad','milk'];

  // let emptymsg = Fooditems.length==0? <h3>i am still hungry</h3>:null;
  
 
return ( 
<>
<h1>Healthy Food</h1>
{Fooditems.length==0 && <h3>i am still hungry</h3>}

<div className="list-group">
<ul className="list-group">
  {Fooditems.map(item=> <li key={item}className="list-group-item">{item}</li>)}
 
  
</ul>
</div>
</>
)
};
export default App;