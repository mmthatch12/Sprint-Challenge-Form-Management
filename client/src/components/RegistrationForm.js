import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const UForm = () => {
    return (
        <div>
            <Form>
                <h1>Registration Form</h1>

                <div>
                    <Field type='text' name='username' placeholder='Username />' />

                    <Field type='password' name='password' placeholder='Password' />

                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </div>
    )
}

const FormicRegistrationForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""

        }
    }
})(Uform)

export default UForm