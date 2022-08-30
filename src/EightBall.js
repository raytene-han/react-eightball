import React, {useState} from 'react';

 const defaultAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** Magic eight ball returns a message and changes the color of the ball.
 *
 * Props:
 * - array of message and color combinations
 *
 * State:
 * - message
 * - color
 *
 * App -> EightBall
 */

function EightBall({answers=defaultAnswers}) {

  const [answer, setAnswer] = useState({msg: "Think of a question",
                                        color: "black"})

  const ballStyle = {
    backgroundColor: answer.color,
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%,0)"
  }

  const textStyle = {
    color: "white",
    textAlign: "center",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  }

  function getAnswer() {

    // take out into a helper function
    const idx = Math.floor(Math.random() * answers.length);
    const answer = answers[idx];

    setAnswer(answer);
  }

  return (
    <div style={ballStyle} onClick={getAnswer}>
      <p style={textStyle}>{answer.msg}</p>
    </div>
  )
}

export default EightBall;