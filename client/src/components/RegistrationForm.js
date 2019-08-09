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
                    <Field type='test' name='username' placeholder='Username />' />
                </div>
            </Form>
        </div>
    )
}

export default UForm