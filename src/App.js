import './App.css';
import { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Result from './Result';
import styled from 'styled-components';

function App() {

const [user, setUser] = useState(null)
const [comp, setComp] = useState(null)
const [score, setScore] = useState(0)

const choices = ["rock", "paper", "scissors"]

const getComp = () => {
  let choice = choices[Math.floor(Math.random()*choices.length)]
  setComp(choice);
  console.log(comp)
  console.log(user)
}


useEffect(()=> {
  getComp()
}, [user])



  return (
    <div>
      <p>Rock Paper Scissors</p>
      <Icon name="hand rock" size="large" onClick={()=>setUser("rock")} />
      <Icon name="hand paper" size="large" onClick={()=>setUser("paper")} />
      <Icon name="hand scissors" size="large" onClick={()=>setUser("scissors")} />
      <p>Your Choice:{user}</p>
      <p>Against: {comp}</p>
      <Result comp={comp} user={user} setUser={setUser}/>
    </div>
  );
}

export default App;

