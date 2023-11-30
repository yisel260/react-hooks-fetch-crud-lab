import React from "react";

function QuestionItem({ question, deleteQuestion,handleUpdatedQuestion}) {
  //console.log(question)
  const { id, prompt, answers, correctIndex } = question;
  //console.log(answers)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => deleteQuestion(question));

  }

  function handleAnswerChange(e){
    //console.log("change is being triggered")
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "correctIndex": e.target.value
    })
  })
      .then((r) => r.json())
      .then((updatedQuestion) => console.log(updatedQuestion))
    
  }

 
      
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
