
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function BookingForm(props) {

  const occasions = [
    "None", "Birthday","Anniversary"
  ]

  const availableTimes = props.availableTimes;
  const dispatch = props.dispatch;
  const submitForm = props.submitForm;

  const handleDateChange = (event) => {
    if (event.target.name === 'date') {
      dispatch({'type':'DATE_CHANGE', 'payload':event.target.value})
    }
  }

  const validationSchema = Yup.object().shape({
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().min(1, 'Minimum 1 guest').max(10, 'Maximum 10 guests').required('Number of guests is required'),
    occasion: Yup.string().required('Occasion is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <>
      <h3>Book Now!</h3>

      <Formik
      initialValues={{
        date: new Date(),
        time: '',
        guests: '',
        occasion: 'None',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        props.submitForm(values);
      }}    >
      {({ isValid, errors }) => (
        <Form style={{ display: 'grid', maxWidth: '300px', gap: '20px' }} onChange={e => handleDateChange(e)}>
        <label htmlFor="date">Date</label>
        <Field type="date" id="date" name="date"/>
        <ErrorMessage name="date" component="div" style={{color: 'red'}} />

        <label htmlFor="time">Time</label>
        <Field as="select" id="time" name="time" >
          {availableTimes.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <ErrorMessage name="time" component="div" style={{color: 'red'}}/>

        <label htmlFor="guests">Number of guests</label>
        <Field type="number" id="guests" name="guests" placeholder="1" min="1" max="10" />
        <ErrorMessage name="guests" component="div" style={{color: 'red'}}/>

        <label htmlFor="occasion">Occasion</label>
        <Field as="select" id="occasion" name="occasion">
          {occasions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Field>

        <button type="submit" disabled={!isValid} aria-label="On Click">Make Your Reservation</button>


      </Form>
      )}
    </Formik>



    </>
  )
}