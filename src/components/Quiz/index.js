import React from "react";
import QuizStepper from './QuizStepper';

//Stepper
//Multiple questions
const Quiz = ({ questions }) => {
    return(
        <React.Fragment>
            <QuizStepper questions={questions}/>
            <div style={{ color: 'black' }} > test </div>
        </React.Fragment>
    );
}

export default Quiz;