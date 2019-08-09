import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const UForm = ({ errors, touched }) => {
    
    return (
        <div>
            <Form>

                <div>
                    <Field type='text' name='username' placeholder='Username' />
                    {touched.username && errors.username && (
                        <p>{errors.username}</p>
                    )}

                    <Field type='password' name='password' placeholder='Password' />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}

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
        username: Yup.string().required('Username field is required'),
        password: Yup.string().min(5, 'Password must be 5 characters or longer').required('Password is required')
    }),

    handleSubmit(values, { resetForm, setStatus }) {

        Axios.post("http://localhost:5000/api/register", values)
            .then(res => {
                console.log("post request", res.data)
                setStatus(res.data)
                resetForm()
            })
            .catch(err => {
                console.log(err.response)
            })
            
    },
    


})(UForm)

export default FormicRegistrationForm