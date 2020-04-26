import React from 'react';
import { Formik, Field } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
//add question on button click on form
function FormFields(index) {
    return(
        <React.Fragment>
<div>
                    <Field type="text" name={`questionText${index.index}`} placeholder="Question"    />
                    {/* </div>
                    <div> */}
                    <Field type="text" name={`imageUrl${index.index}`} placeholder="Image URL" />
                    {/* </div>
                    <div> */}
                    <Field type="text" name={`correctAnswer${index.index}`} placeholder="Answer" />
                    </div>
        </React.Fragment>
    )
}

export default function QuizForm() {
    const [numQuestions, setNumQuestions] = React.useState(1);
    return (
        <React.Fragment>
            <div>
            <h1>My Form</h1>
            <Formik
                initialValues={{questionText0: '', imageUrl0: '', correctAnswer0: '', 
                questionText1: '', imageUrl1: '', correctAnswer1: '',
                questionText2: '', imageUrl2: '', correctAnswer2: '',
                questionText3: '', imageUrl3: '', correctAnswer3: '',
                questionText4: '', imageUrl4: '', correctAnswer4: ''}}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
            >
                { props => (
                <React.Fragment>
                <form onSubmit={props.handleSubmit}>
                    {Array(numQuestions).fill().map((num, index) => {
                        return <div>Question: {index + 1} <FormFields index={index} /></div>
                })}
                </form>
                <Button onClick={() => setNumQuestions(numQuestions + 1)}>Add Question</Button>
                <Button onClick={() => props.handleSubmit()}>Submit</Button>       
                </React.Fragment>         
                                )}
            </Formik>
            </div>
        </React.Fragment>
    )
}
