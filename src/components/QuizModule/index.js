import React from 'react'
import Quiz from '../Quiz';
import { useHistory, Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
// import QuizStepper from '../Quiz/QuizStepper';

export default function QuizModule({title, questions}) {
    const history = useHistory();
    console.log(questions);
    return (
        <div>
            <Typography style={{ fontSize : 40}} >{title}</Typography>
            <Quiz questions={questions}></Quiz>
            {/* <div>{roadQuestions}</div> */}
            <Link onClick={() => history.push('roads/quiz1')}>Quiz 1</Link>
        </div>
    )
}
