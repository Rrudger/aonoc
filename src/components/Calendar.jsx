import { useEffect, useState } from 'react';
import { fill, toLower, uniqueId } from 'lodash';
import classNames from 'classnames';
import Schedule from './Schedule.jsx';
import { getOccDates } from '../utils/utils.js';

const Calendar = ({
  city,
  dateNow,
  date, setDate,
  month, setMonth,
  year, setYear,
  hours, setHours,
  minutes, setMinutes,
}) => {
  const getFirstMonday = (firstDay) => {
    if (firstDay === 1) return 1;
    if (firstDay === 0) return 2;
    return (9 - firstDay);
  };

  const maxMonths = 3;
  const occDates = getOccDates(year, month, toLower(city));

  const currentDate = dateNow.getDate();

  const addMonth = () => {
    setDate(null);
    setHours(null);
    if (month + 1 === 12) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1)
    }
  };
  const subMonth = () => {
    setDate(null);
    setHours(null);
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1)
    }
  };
  const getMaxMonth = () => {
    const startMonth = dateNow.getMonth();
    if (startMonth + maxMonths < 12) return startMonth + maxMonths;
    if (startMonth + maxMonths === 12) return 0;
    if (startMonth === 11) return maxMonths - 1;
    return (11 - startMonth);
  };
  const maxMonthNum = getMaxMonth();

  const daysNum = new Date(year, month + 1, 0).getDate();
  const firstDate =  new Date(year, month, 1);
  const firstMonday = getFirstMonday(firstDate.getDay());


  const [hour, setHour] = useState(8);
  const [minute, setMinute] = useState(0);

  const getWeeksNum = () => {
    const addWeek = firstDate.getDay() === 1 ? 0 : 1;
    return ((daysNum - firstMonday + 1) / 7) + addWeek;
  };
  const weeksNum = Math.ceil(getWeeksNum());

  const bookDate =  (e) => {
    e.preventDefault();
    const tD = e.target;
    if (!tD.classList.contains('disabled_td')) {
      setDate(Number(tD.textContent));
    };
  }


  const FirstWeek = () => {
    const firstWeekDay = firstDate.getDay();
    const occTds = firstWeekDay === 0 ? 1: 7 - firstWeekDay + 1;
    const tDs = [];
    //tDs.push(fill(new Array(7 - occTds), <td key=''> </td>));
    for (let i=0; i<7-occTds; i++) {
      tDs.push(
        <td className='disabled_td' key={`free_day_${i}`}> </td>
      )
    }
    for (let i=0, n = 1; i < occTds; i++, n++) {
      const activeDate = n >= currentDate || month !== dateNow.getMonth();
      const day = new Date(year, month, n).getDay();
      const tdClass = classNames({
        'text-center': true,
        'selected_td': n === date,
      	'disabled_td': !activeDate || [0,6].includes(day) || occDates.includes(day),
      	'cursor-pointer': activeDate && ![0,6].includes(day),
      });
      tDs.push(
        <td
          key={`day_${n}`}
          onClick={bookDate}
          className={tdClass}
            >
          {n}
        </td>)
    }
    return (
      <tr key='first_week'>{tDs}</tr>
    )
  };
  const Week = ({ monday }) => {

    const tDs = [];
    for (let i=0, n = monday; i < 7; i++, n++) {
      const occCell = n<=daysNum;
      const activeDate = n >= currentDate || month !== dateNow.getMonth();
      const tdClass = classNames({
        'text-center': true,
        'selected_td': n === date,
      	'disabled_td': !occCell || !activeDate || [5,6].includes(i) || occDates.includes(n),
      	'cursor-pointer': occCell && activeDate && ![5,6].includes(i),
      });
      tDs.push(
        <td
          className={tdClass}
          onClick={bookDate}
          key={uniqueId('occ_')}>
          {occCell ? n : ' '}
        </td>
      )}
    return (
      <tr key={`week_${monday}`}>{tDs}</tr>
    )
  };
  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });

  return (
    <div className='flex md:flex-row flex-col md:items-start items-center'>
    <div className='md:w-80 w-72 h-full my-2'>
      <div className='flex flex-row justify-between my-2'>
        <button
          className='calendar_btn'
          disabled={month === dateNow.getMonth()}
          onClick={subMonth}
          >
            {'<'}
          </button>
        <h3>{`${monthName} ${year}`}</h3>
        <button
          className='calendar_btn'
          disabled={month === maxMonthNum}
          onClick={addMonth}
        >
          {'>'}
        </button>
      </div>
      <table className='w-full table-fixed my-2'>
        <thead>
          <tr>
            {["M", "T", "W", "T", "F", "S", "S"].map((day) =>
              <th key={uniqueId('week_name_')}>
                {day}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {<FirstWeek />}
          {fill(new Array(weeksNum - 1), '*').map((week, index) =>
              <Week key={uniqueId('week_num_')} monday={firstMonday + index * 7}/>
            )}
        </tbody>
      </table>
    </div>
    <div className={date ? 'schedule' : 'hidden'}>
      <Schedule
        city={city}
        dateNow={dateNow}
        date={date}
        month={month}
        year={year}
        hours={hours}
        setHours={setHours}
        minutes={minutes}
        setMinutes={setMinutes}
      />
    </div>
    </div>
  )
};

export default Calendar;
