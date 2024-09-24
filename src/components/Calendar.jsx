import { useEffect, useState } from 'react';
import { fill, uniqueId } from 'lodash';

const Calendar = ({ city }) => {


  const getFirstMonday = (firstDay) => {
    if (firstDay === 1) return 1;
    if (firstDay === 0) return 2;
    return (9 - firstDay);
  };

  const maxMonths = 3;
  const dateNow = new Date();
  const [date, setDate] = useState(dateNow.getDate());
  const [year, setYear] = useState(dateNow.getFullYear());
  const [month, setMonth] = useState(dateNow.getMonth());
  const addMonth = () => {
    if (month + 1 === 12) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1)
    }
  };
  const subMonth = () => {
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
    console.log(e.target.textContent)
    if (e.target.textContent !== ' ') {
      setDate(e.target.textContent);


    }
    console.log(`${date}/${month}/${year}`)
  }

  const FirstWeek = () => {
    const firstWeekDay = firstDate.getDay();
    const occTds = firstWeekDay === 0 ? 1: 7 - firstWeekDay + 1;
    const tDs = [];
    //tDs.push(fill(new Array(7 - occTds), <td key=''> </td>));
    for (let i=0; i<7-occTds; i++) {
      tDs.push(
        <td key={`free_day_${i}`}> </td>
      )
    }
    for (let i=0, n = 1; i < occTds; i++, n++) {
      tDs.push(
        <td key={`day_${n}`} onClick={bookDate} className='cursor-pointer'>
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
      const occCell = n<=daysNum ? true : false;
      tDs.push(
        <td
          className={occCell ? 'cursor-pointer' : ''}
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
    <div className='h-full my-2'>
      <div className='flex flex-row justify-between'>
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
      <table className='w-full table-fixed'>
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
  )
};

export default Calendar;
