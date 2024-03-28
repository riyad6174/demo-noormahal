import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarDate } from 'react-icons/bs';
import subDays from 'date-fns/subDays';
import { useRouter } from 'next/router';
import moment from 'moment/moment';

function CheckIn() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedAdults, setSelectedAdults] = useState('');
  const [endDateMinDate, setEndDateMinDate] = useState(subDays(new Date(), 0));

  const router = useRouter();

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDateMinDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('first');
    router.push(
      `https://bookings.simplotel.com/?propertyId=6217&Ln=en&checkIn=${
        moment(startDate).format().split('T')[0]
      }&checkOut=${
        moment(endDate).format().split('T')[0]
      }&adults=${selectedAdults}`
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

          <BsCalendarDate className='text-white' />
          <ReactDatePicker
            showIcon
            selected={startDate}
            minDate={subDays(new Date(), 0)}
            onChange={handleStartDateChange}
          />
          <div className='invalid-feedback'>Enter Check in date</div>
        </div>
        <div className='form_item'>
          <h4>CHECK Out</h4>

          <BsCalendarDate className='text-white' />

          <ReactDatePicker
            showIcon
            selected={endDateMinDate}
            minDate={endDateMinDate}
            onChange={(date) => setEndDate(date)}
          />
          <div className='invalid-feedback'>Enter Check out date</div>
        </div>
        <div className='form_item'>
          <h4>Room</h4>
          <div className='d-flex justify-content-center'>
            <div>
              <select
                className='niceSelect '
                value={selectedAdults}
                onChange={(e) => setSelectedAdults(e.target.value)}
              >
                <option className='bg-dark' data-display='Select'>
                  Select
                </option>
                <option className='bg-dark' value='1'>
                  1 Room
                </option>
                <option className='bg-dark' value='2'>
                  2 Room
                </option>
                <option className='bg-dark' value='3'>
                  3 Room
                </option>
              </select>
              <div className='invalid-feedback'>Select Room Number</div>
            </div>
          </div>
        </div>
        <div className='form_item'>
          <h4>Adult</h4>
          <div className='d-flex justify-content-center'>
            <div>
              <select className='niceSelect'>
                <option className='bg-dark' data-display='Select'>
                  Select
                </option>
                <option className='bg-dark' value='1'>
                  1 Adult
                </option>
                <option className='bg-dark' value='2'>
                  2 Adult
                </option>
                <option className='bg-dark' value='3'>
                  3 Adult
                </option>
              </select>
              <div className='invalid-feedback'>Select Adult</div>
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
