import React, { useState } from "react"

const Result = ({comp, user}) => {
  const [winner, setWinner] = useState("")

  const pickWinner = () => {
  if (comp === user) return <p>Draw</p>
  else if (comp === "rock" && user === "scissors") return "You lose"
  else if (comp === "rock" && user === "paper") return "You win!"
  else if (comp === "paper" && user === "scissors") return "You win!"
  else if (comp === "paper" && user === "rock")  return "You lose"
  else if (comp === "scissors" && user === "rock") return "You win!"
  else if (comp === "scissors" && user === "paper") return "You lose"
  else return "invalid"
  }

return (
  <div>
    {pickWinner()}
    {/* <p>{winner === "You win!" ? "You win!" : "You lose"}</p> */}
  </div>
)
}
export default Result;