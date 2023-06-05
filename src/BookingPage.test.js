import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Assuming you are using Yup for form validation

const availableTimes = ["17:00","18:00"];

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    const headingElement = screen.getByText("Book Now!");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the date input', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    expect(screen.getByLabelText("Date")).toHaveAttribute("name", "date");
})

test('Renders the time input', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    expect(screen.getByLabelText("Time")).toHaveAttribute("name", "time");
})

test('Renders the guests input', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    expect(screen.getByLabelText("Number of guests")).toHaveAttribute("name", "guests");
})

test('Renders the guests input', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    expect(screen.getByLabelText("Occasion")).toHaveAttribute("name", "occasion");
})

test('Form inputs should handle good and bad data', () => {
    // Define your test data
    const goodData = {
      date: '2023-05-30',
      time: '12:00 PM',
      guests: '4',
      occasion: 'Birthday',
    };

    const occasions = [
        "None", "Birthday","Anniversary"
      ]
  
    const badData = {
      date: '', // Invalid date format
      time: '', // No time selected
      guests: '0', // Invalid number of guests
      occasion: '', // No occasion selected
    };
  
    // Define your validation schema
    const validationSchema = Yup.object().shape({
        date: Yup.date().required('Date is required'),
        time: Yup.string().required('Time is required'),
        guests: Yup.number().min(1, 'Minimum 1 guest').max(10, 'Maximum 10 guests').required('Number of guests is required'),
        occasion: Yup.string().required('Occasion is required'),
      });
  
    // Define your submit function
    const handleSubmit = jest.fn();
  
    // Render the form with the initial values and validation schema

    const setUp = (getByLabelText, getByText) => {

      render(<BookingForm goodData={goodData} validationSchema={validationSchema} occasions={occasions} availableTimes={availableTimes} />);

      // Get form inputs by their labels
      const dateInput = getByLabelText('Date');
      const timeInput = getByLabelText('Time');
      const guestsInput = getByLabelText('Number of guests');
      const occasionInput = getByLabelText('Occasion');
    
      // Test with good data
      act(() => {
        fireEvent.change(dateInput, { target: { value: goodData.date } });
        fireEvent.change(timeInput, { target: { value: goodData.time } });
        fireEvent.change(guestsInput, { target: { value: goodData.guests } });
        fireEvent.change(occasionInput, { target: { value: goodData.occasion } });
      });
      // Assert that form is valid and submit button is enabled
      // You can use assertions based on your testing framework (e.g., expect, assert)
      expect(handleSubmit).toHaveBeenCalledTimes(0); // Form not submitted
      expect(getByText('Make Your Reservation')).toBeEnabled();
    
      // Test with bad data
      act(() => {
        fireEvent.change(dateInput, { target: { value: badData.date } });
        fireEvent.change(timeInput, { target: { value: badData.time } });
        fireEvent.change(guestsInput, { target: { value: badData.guests } });
        fireEvent.change(occasionInput, { target: { value: badData.occasion } });
      });

    
      // Assert that form is invalid and submit button is disabled
      // You can use assertions based on your testing framework (e.g., expect, assert)
      expect(handleSubmit).toHaveBeenCalledTimes(0); // Form not submitted
      expect(getByText('Make Your Reservation')).toBeDisabled();
    
      // Test form submission
      act(() => {
        fireEvent.click(getByText('Make Your Reservation'));
      });
    
      // Assert that the submit function is called
      // You can use assertions based on your testing framework (e.g., expect, assert)
      expect(handleSubmit).toHaveBeenCalledTimes(1);

      // You can also assert specific form field validation errors
      // For example, if you have an error message element with the "date" input:
      const dateError = getByText('Date is required');
      expect(dateError).toBeInTheDocument();

    }

  });