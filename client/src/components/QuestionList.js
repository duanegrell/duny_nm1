import React, {useState} from "react";
import Question from "./Question";
import SearchTopic from "./SearchTopic";

function QuestionList( {questions}) {

    const [search, setSearch] = useState('')

    const filteredQuestions = questions.filter ( (question) => {
        return question.topic.toLowerCase().includes(search.toLowerCase())
    })

    const mappedQuestions = filteredQuestions.map((question) => (
        <Question
            key={question.id}
            topic={question.topic}
            body={question.body}
            answer={question.answer}
        />
    ))

    
    return (
    <>
        <p></p>
        <SearchTopic setSearch={setSearch} />
        {mappedQuestions}
    </>
    );
};

export default QuestionList;