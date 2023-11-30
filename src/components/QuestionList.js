import React from "react"
import QuestionItem from "./QuestionItem";

function QuestionList({questionList, onDeleteQuestion,handleUpdatedQuestion}) {

  //console.log(questionList)
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questionList.map((question) => (
          <QuestionItem key={question.id} question={question} deleteQuestion={onDeleteQuestion} handleUpdatedQuestion={handleUpdatedQuestion}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
