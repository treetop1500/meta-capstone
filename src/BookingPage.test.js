import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const availableTimes = ["17:00","18:00"];

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    const headingElement = screen.getByText("Book Now!");
    expect(headingElement).toBeInTheDocument();
})