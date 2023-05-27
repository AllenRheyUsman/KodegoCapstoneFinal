// import React from 'react';

// const CalendarInterface = () => {
//   const currentDate = new Date();
//   const currentDay = currentDate.getDate();
//   const currentMonth = currentDate.getMonth();
//   const currentYear = currentDate.getFullYear();

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

//   const renderCalendar = () => {
//     const calendar = [];
//     let dayCount = 1;

//     for (let row = 0; row < 6; row++) {
//       const calendarRow = [];

//       for (let col = 0; col < 7; col++) {
//         if ((row === 0 && col < firstDayOfMonth) || dayCount > daysInMonth) {
//           calendarRow.push(<td key={`${row}-${col}`}></td>);
//         } else {
//           calendarRow.push(<td key={`${row}-${col}`}>{dayCount}</td>);
//           dayCount++;
//         }
//       }

//       calendar.push(<tr key={row}>{calendarRow}</tr>);
//     }

//     return calendar;
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-header">
//         <h3>{currentMonth + 1}/{currentYear}</h3>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//         </thead>
//         <tbody>{renderCalendar()}</tbody>
//       </table>
//     </div>
//   );
// };

// export default CalendarInterface;

import React, { useState } from 'react';

const CalendarInterface = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const renderCalendar = () => {
    const calendar = [];
    let dayCount = 1;

    for (let row = 0; row < 6; row++) {
      const calendarRow = [];

      for (let col = 0; col < 7; col++) {
        if ((row === 0 && col < firstDayOfMonth) || dayCount > daysInMonth) {
          calendarRow.push(<td key={`${row}-${col}`}></td>);
        } else {
          const day = dayCount;
          const isBetween = day >= Number(checkInDate) && day <= Number(checkOutDate);

          calendarRow.push(
            <td key={`${row}-${col}`} style={{ color: isBetween ? 'red' : 'black' }}>
              {day}
            </td>
          );
          dayCount++;
        }
      }

      calendar.push(<tr key={row}>{calendarRow}</tr>);
    }

    return calendar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submit logic here
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>{currentMonth + 1}/{currentYear}</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label htmlFor="checkInDate">Check-in Date:</label>
        <input
          type="number"
          id="checkInDate"
          min="1"
          max={daysInMonth}
          value={checkInDate}
          onChange={handleCheckInChange}
        />

        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input
          type="number"
          id="checkOutDate"
          min="1"
          max={daysInMonth}
          value={checkOutDate}
          onChange={handleCheckOutChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CalendarInterface;
