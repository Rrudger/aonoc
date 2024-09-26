import { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import '../css/modal.css';
import Calendar from './Calendar.jsx';
import { bookApp } from '../utils/utils.js';

const ModalBook = ({ city }) => {
  const { t } = useTranslation();
  const dateNow = new Date();
  const [date, setDate] = useState(null);
  const [year, setYear] = useState(dateNow.getFullYear());
  const [month, setMonth] = useState(dateNow.getMonth());
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  const handleBook = () => {
    const ticketNum = bookApp({
      year: year,
      month: month,
      date: date,
      hours: hours,
      minutes: minutes,
      city: city,
    });
    const modal = document.getElementById(`modal${city}`);
    alert(ticketNum);
    modal.close()
  }

  return (
    <dialog id={`modal${city}`} className='rounded-md p-4'>
      <div id={`modal${city}Wrap`} className='h-full'>
        <div className='flex flex-col h-full'>
          <h1 className='text-center text-xl text-primary'>
            {t('modal_book.title')}
          </h1>
          <Calendar
            city={city}
            dateNow={dateNow}
            date={date}
            setDate={setDate}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            hours={hours}
            setHours={setHours}
            minutes={minutes}
            setMinutes={setMinutes}
          />
          <div className='flex flex-row justify-end mt-auto'>
            <button
              id={`closeModal${city}`}
              className='w-1/3 p-1 mr-2 rounded-md border border-secondary border-2 text-secondary'
            >
              {t('buttons.cancel')}
            </button>
            <button
              disabled={!hours}
              onClick={handleBook}
              className='book_btn w-1/3 p-1 rounded-md border border-primary border-2 text-primary'
            >
              {t('buttons.book')}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
};

export default ModalBook;
