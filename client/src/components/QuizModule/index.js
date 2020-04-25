import React from 'react'
import Quiz from '../Quiz';
import { useHistory, Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export default function QuizModule({title, ...props}) {
    const history = useHistory();
    return (
        <div>
            <Typography style={{ fontSize : 40}} >{title}</Typography>
            
            <Link onClick={() => history.push('roads/quiz1')}>Quiz 1</Link>
        </div>
    )
}
