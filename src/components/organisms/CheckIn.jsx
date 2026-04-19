import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarDate } from 'react-icons/bs';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import { useRouter } from 'next/router';
import moment from 'moment/moment';

function CheckIn() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1)); // Default to next day
  const [selectedRooms, setSelectedRooms] = useState('');
  const [selectedAdults, setSelectedAdults] = useState('');
  const [endDateMinDate, setEndDateMinDate] = useState(new Date());

  const router = useRouter();

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDateMinDate(date);
    // Ensure endDate is not before the new startDate
    if (date > endDate) {
      setEndDate(addDays(date, 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.classList.add('was-validated');

    // Validate all fields
    if (
      !startDate ||
      !endDate ||
      !selectedRooms ||
      !selectedAdults ||
      startDate >= endDate
    ) {
      return;
    }

    router.push(
      `https://www.marriott.com/en-us/hotels/ixcnm-noormahal-delhi-ncr-karnal-autograph-collection/overview/`,
    );
  };

  return (
    <div className='booking_engine mt-4'>
      <form
        onSubmit={handleSubmit}
        className='checking_form mx-auto needs-validation'
        noValidate
      >
        <div className='form_item'>
          <h4>CHECK IN</h4>
          <BsCalendarDate className='text-white me-2' />
          <ReactDatePicker
            // showIcon
            selected={startDate}
            minDate={new Date()}
            onChange={handleStartDateChange}
            required
          />
          <div className='invalid-feedback'>Please select a check-in date</div>
        </div>
        <div className='form_item'>
          <h4>CHECK OUT</h4>
          <BsCalendarDate className='text-white me-2' />
          <ReactDatePicker
            // showIcon
            selected={endDate}
            minDate={endDateMinDate}
            onChange={(date) => setEndDate(date)}
            required
          />
          <div className='invalid-feedback'>Please select a check-out date</div>
        </div>
        <div className='form_item'>
          <h4>Rooms</h4>
          <div className='d-flex justify-content-center'>
            <div>
              <select
                className='niceSelect'
                value={selectedRooms}
                onChange={(e) => setSelectedRooms(e.target.value)}
                required
              >
                <option className='bg-dark' value='' disabled>
                  Select
                </option>
                <option className='bg-dark' value='1'>
                  1 Room
                </option>
                <option className='bg-dark' value='2'>
                  2 Rooms
                </option>
                <option className='bg-dark' value='3'>
                  3 Rooms
                </option>
              </select>
              <div className='invalid-feedback'>
                Please select number of rooms
              </div>
            </div>
          </div>
        </div>
        <div className='form_item'>
          <h4>Adults</h4>
          <div className='d-flex justify-content-center'>
            <div>
              <select
                className='niceSelect'
                value={selectedAdults}
                onChange={(e) => setSelectedAdults(e.target.value)}
                required
              >
                <option className='bg-dark' value='' disabled>
                  Select
                </option>
                <option className='bg-dark' value='1'>
                  1 Adult
                </option>
                <option className='bg-dark' value='2'>
                  2 Adults
                </option>
                <option className='bg-dark' value='3'>
                  3 Adults
                </option>
              </select>
              <div className='invalid-feedback'>
                Please select number of adults
              </div>
            </div>
          </div>
        </div>
        <div className='submit_btn'>
          <button type='submit'>Book Now</button>
        </div>
      </form>
    </div>
  );
}

export default CheckIn;
