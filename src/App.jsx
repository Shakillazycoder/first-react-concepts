import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";
function App() {

  const books = [
    {id: 1, name: "Physics", price: 500},
    {id: 2, name: "Chemistry", price: 400},
    {id: 3, name: "Biology", price: 500}
  ]










  const actors = ["sakib", "salman", "jahed khan", "rubel"];
  const Singers = [
    { name: "Dr. Mahfuzur", age: 56 },
    { name: "Eva Rahamn", age: 36 },
    { name: "Pritom", age: 26 },
    { name: "Hridoy", age: 22 },
  ];

  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>





      {Singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => {
        return <Actor name={actor}></Actor>;
      })}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>
      <Todo task="Learn JSX" isDone={true}></Todo> */}
      {/* <Devices name="Laptop" price="50000"></Devices>
      <Devices name="Mobile" price="17000"></Devices>
      <Devices name="Watch" price="3000"></Devices>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={6} score="85"></Student>
      <Student></Student>
      <Developer></Developer>
      <Developer2></Developer2> */}
    </>
  );
}

function Devices(pros) {
  const devicesStyles = {
    backgroundColor: "tomato",
    padding: "10px",
    margin: "10px",
    borderRadius: "20px",
  };
  return (
    <h2 style={devicesStyles}>
      This device : {pros.name} price: {pros.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 50;
  const person = { name: "John", age: 25, money: 100 };
  return (
    <h2>
      I am a {person.name} with age {person.age} with {person.money}
    </h2>
  );
}

// function Student (pros) {
//   return (
//     <div className='student'>
//       <h3>This is a Student</h3>
//       <p>Grade: {pros.grade}</p>
//       <p>Score: {pros.score}</p>
//     </div>
//   )
// }

// const {grade, score} = {grade: '7', score: '99'}
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a Student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid white",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h4>Developer</h4>
      <p>Coding:</p>
    </div>
  );
}
function Developer2() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid purple",
        borderRadius: "10px",
      }}
    >
      <h4>Developer</h4>
      <p>language:</p>
    </div>
  );
}

export default App;
