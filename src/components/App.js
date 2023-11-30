import React, {useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList,setQuestionList]= useState([])
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => {
        setQuestionList(questions)
       })
  }, []);

  //console.log(questionList)

  function handleAddQuestion(newQuestion){
    setQuestionList([...questionList,newQuestion])

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion}/> : <QuestionList questionList={questionList} />}
    </main>
  );
}

export default App;
