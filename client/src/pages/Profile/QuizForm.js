import React from 'react';
import { Formik } from 'formik';

export default function QuizForm() {
    return (
        <React.Fragment>
            <Formik>
          <form>
              <input type="email" name="email" />
          </form>
            </Formik>

        </React.Fragment>
    )
}
