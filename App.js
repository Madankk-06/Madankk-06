// // import React from 'react';

// // function App(){
// //   return(
// //     <div>
// //       <h1 
// //      style={{
// //       color:"green",
// //       backgroundColor:"aqua",
// //       textAlign:"center"
// //      }}>This is My first React application</h1>
// //     <button 
// //      style={{
// //       color:'black',
// //       backgroundColor:"orange",
// //       marginLeft:"1400px",
// //       borderRadius:"10px",
// //       padding:"30px",
// //       fontSize:"30px",
// //       border:"1px solid black",
// //       boxShadow:"2px 2px 10px"
// //      }}>Submit Button</button>
// //      <p 
// //       style={{
// //         fontSize:"30px",
// //         color:"red",
// //         textAlign:"center"
// //       }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// //     </div>
// //   );
// // };
// // export default App;

// // React parent function
// // import react from 'react';
// // function App(props){
// //   return(
// //     <div>
// //       <p>Iam,{props.name}</p>
// //       <h1>ABOUT goat:{props.about}</h1>
// //     </div>
// //   );
// // };

// // //React child function
// // function Getname(){
// //   return(
// //     <div>
// //       <h1>This is Props in react</h1>
// //       <App name="GOAT"></App>
// //       <App about="THis is Madan, and iam a GOAT"></App>
// //     </div>
// //   );
// // };
// // export default Getname;









// // React using usestate

// // import React,{useState} from 'react';
// // import "../src/counting.css"
// // function App(){
// //   const [count,setCount]=useState(0);

// //   //Arrow function
// //   const ascending =()=>{
// //     setCount(count + 1)
// //   };
// //   const decending=()=>{
// //     setCount(count -1)
// //   };
// //   const clear=()=>{
// //     setCount(0)
// //   }
// //   return(
// //     <div>
// //       <h1 className="heading">Counting Buffer</h1>
// //       <p>Counting: {count} </p>
// //       <button className="b1" onClick={ascending}>ASCENDING</button>
// //       <button className="b2" onClick={decending}>DECENDING</button>
// //       <button className="b3" onClick={clear}>CLEAR</button>
// //     </div>
// //   );
// // };
// // export default App;









// //simple interest calculator using react
// import React ,{useState} from 'react';
// import "../src/counting.css"
// function App(){
//   const [price,setPrice]=useState();
//   const [time,setTime]=useState();
//   const [rate,setRate]=useState();
//   const [interest,setInterest]=useState();
//   const simple_interest =()=>{
//     const interest = (price*time*rate)/100;
//     setInterest(interest);

//   };
//   return(
//     <div>
//       <h1>Simple interest calculator using React</h1>
//       <label>Price Amount:    </label>
//       <input type = "number"
//       placeHolder = "Principle Amount"
//       value = {price}
//       onChange = {(e) =>setPrice(e.target.value)}
//       />
//       <br></br>
//       <label>Time rate: </label>
//       <input class type = "number"
//       placeHolder = "Rate of time"
//       value = {time}
//       onChange = {(e)=>setTime(e.target.value)}
//       ></input>
//       <br></br>
//       <label>Interest: </label>
//       <input type = "number"
//       placeHolder = "Rate of Interest"
//       value = {rate}
//       onChange = {(e)=>setRate(e.target.value)}/>
//       <br></br>
//       <button onClick ={simple_interest}>Simple Interest</button>
//       <p>Simple Interest: {interest}</p>
//     </div>
    
//   );
// }
// export default App;

