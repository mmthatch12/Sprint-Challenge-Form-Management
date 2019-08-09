import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const UForm = ({ errors, touched, values, status }) => {
    return (
        <div>
            <Form>
                <h1>Registration Form</h1>

                <div>
                    <Field type='text' name='username' placeholder='Username' />
                    {touched.username && errors.username && (
                        <p>{errors.username}</p>
                    )}

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
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Username field is required'),
        password: Yup.string().min(5, 'Password must be 5 characters or longer').required('Password is required')
    }),

    handleSubmit(values, { resetForm, setStatus }) {
        Axios.post("http://localhost:5000/api/register", values)
            .then(res => {
                console.log(res)
                setStatus(res.data)
                resetForm()
            })
            .catch(err => {
                console.log(err.response)
            })
    }

})(UForm)

export default FormicRegistrationForm