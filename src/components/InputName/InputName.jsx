import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { ConteinerLabel, FormButton, Input } from './InputName.styled';
import { useDispatch, useSelector } from 'react-redux';
import { servicePostContact } from 'serviceApi/serviceApi';
import { getContact } from 'redux/tasks/selectors';

const newContact = {
  name: '',
  phone: '',
};

const userSchema = Yup.object().shape({
  phone: Yup.string()
    .trim()
    .required('This field is required!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits'
    ),
  name: Yup.string().trim().required('This field is required!'),
});
export const InputName = ({ onCangeName }) => {
  const disPatch = useDispatch();
  const contacts = useSelector(getContact);
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={userSchema}
      onSubmit={(value, action) => {
        const similarityContact = contacts.filter(
          elem => elem.name.toLowerCase() === value.name.toLowerCase()
        );
        if (similarityContact.length === 0) {
          newContact.name = value.name;
          newContact.phone = value.phone;
          disPatch(servicePostContact(newContact));
        } else {
          Notiflix.Notify.info(`${value.name} is already in contacts`);
        }
        action.resetForm();
      }}
      pattern="/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/"
    >
      {({ errors, touched }) => (
        <Form>
          <ConteinerLabel>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" placeholder="Enter a name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </ConteinerLabel>

          <ConteinerLabel>
            <label htmlFor="phone">Number</label>
            <Input type="tel" name="phone" />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          </ConteinerLabel>

          <FormButton type="submit">Submit</FormButton>
        </Form>
      )}
    </Formik>
  );
};
