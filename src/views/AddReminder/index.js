import React from 'react'
import { Form, Field } from 'react-final-form'
import { navigate } from '@reach/router'

import style from './style.module.css'
import { CreateReminder } from '../../data/reminders'

const AddReminder = () => (
  <>
    <h1>Add reminder</h1>
    <CreateReminder>
      {create => (
        <Form
          onSubmit={({ text, date, color }) => {
            create(text, new Date(date), color)
            navigate('/')
          }}
          render={({ handleSubmit }) => (
            <form className={style.form} onSubmit={handleSubmit}>
              <label htmlFor="text">Text:</label>
              <Field name="text" component="input" />
              <label htmlFor="date">Text:</label>
              <Field name="date" component="input" type="datetime-local" />
              <label htmlFor="color">Text:</label>
              <Field
                name="color"
                component="input"
                type="color"
                value="#ffffff"
              />
              <button>Add</button>
            </form>
          )}
        />
      )}
    </CreateReminder>
  </>
)

export default AddReminder
