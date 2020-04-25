import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';//inputs
// question text, imageUrl

const Question = ({ questionText, imageUrl, correctAnswer, wasCorrect, step, setWasCorrect, ...answers }) => {
    const [value, setValue] = React.useState();
    const [submitted, setSubmitted] = React.useState(false);
    const handleChange = event => {
        setValue(event.target.value);
    };
    React.useEffect( () => {
        setSubmitted(false);
        setValue('');
    }, [step]);
    console.log(value, value);
    return (
        <React.Fragment>
        <div>{questionText}</div>
        <img src={imageUrl} />
        <div>
        <FormControl disabled={submitted} component="fieldset">
        <FormLabel component="legend">Country</FormLabel>
        <RadioGroup row aria-label="country" name="country1" value={value}  onChange={handleChange} >
            <FormControlLabel value="australia" control={<Radio style={{color: submitted ? wasCorrect[step] ? 'green' : 'red' : null}} />} label="Australia" />
            <FormControlLabel value="norway" control={<Radio style={{color: submitted ? wasCorrect[step]  ? 'green' : 'red' : null}} />} label="Norway" />
            <FormControlLabel value="usa" control={<Radio style={{color: submitted ? wasCorrect[step]  ? 'green' : 'red' : null}} />} label="USA" />
            <FormControlLabel value='' disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
        </FormControl>
        </div>
        { !submitted ? <Button onClick={() => {
            setSubmitted(true);                
            console.log(value);
            console.log(correctAnswer);

            if(correctAnswer === value) {
                console.log(step);
                let wasCorrectTemp = wasCorrect; 
                wasCorrectTemp[step] = true;
                console.log(wasCorrectTemp);
                setWasCorrect(wasCorrectTemp);
                // console.log(wasCorrect.push(true));
            } else {
                console.log(step);
                let wasCorrectTemp = wasCorrect; 
                wasCorrectTemp[step] = false;
                console.log(wasCorrectTemp);
                setWasCorrect(wasCorrectTemp);
            }
        }
        }>Check</Button> :
            wasCorrect[step] ? <Typography>Correct</Typography> : <Typography>Wrong</Typography> 
        }
        </React.Fragment>
    );
}

export default Question;