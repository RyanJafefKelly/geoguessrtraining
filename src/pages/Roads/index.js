import React from "react";
import Quiz from "../../components/Quiz";

const roadQuestions = [
    {
        id: 'road1',
        questionText: 'what is this road 1?',
        imageUrl: ''
    },
    {
        id: 'road2',
        questionText: 'what is this road 2?',
        imageUrl: ''
    }
]

const Roads = () => {
    return(
        <Quiz questions={roadQuestions} />
        // <div style={{color: 'black'}}>Road info</div>
    );
};

export default Roads;