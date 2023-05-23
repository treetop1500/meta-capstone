import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { initializeTimes, updateTimes } from './components/Main';

describe('initializeTimes', () => {
  it('should return an array of available times', () => {
    const availableTimes = ['16:00', '17:00', '18:00'];
    const action = { type: 'SOME_ACTION' };
    const result = initializeTimes(availableTimes, action);
    expect(Array.isArray(result)).toBe(true);
  });
});

describe('updateTimes', () => {
  it('should return an array of updated times based on the selected date', () => {
    const selectedDate = new Date('2023-05-22');
    const currentState = ["17:00","18:00","19:00"];
    const result = updateTimes(currentState,{'type':'DATE_CHANGE','payload':selectedDate});
    expect(Array.isArray(result)).toBe(true);
  });
});