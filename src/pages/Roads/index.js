import React from "react";
import Quiz from "../../components/Quiz";
import QuizModule from "../../components/QuizModule";

const roadQuestions = [
    {
        id: 'road1',
        questionText: 'what is this road 1?',
        imageUrl: 'https://somerandomstuff1.files.wordpress.com/2019/02/aug-norway-e1564389726597.png',
        correctAnswer: 'norway'
    },
    {
        id: 'road2',
        questionText: 'what is this road 2?',
        imageUrl: 'https://somerandomstuff1.files.wordpress.com/2019/02/aug-yellow-lines-centre-e1564389350125.png',
        correctAnswer: 'usa'
    }
]

const Roads = () => {
    return(
        <QuizModule title="Road Qduizzes" questions={roadQuestions} />
        // <div style={{color: 'black'}}>Road info</div>
    );
};

export default Roads;