import { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import '../css/modal.css';
import Calendar from './Calendar.jsx';

const ModalBook = ({ city }) => {
  const { t } = useTranslation();
  const [date, setBookedDate] = useState(null);

  return (
    <dialog id={`modal${city}`} className='rounded-md w-80 p-4'>
      <div id={`modal${city}Wrap`} className='h-full'>
        <div className='flex flex-col h-full'>
          <h1 className='text-center text-xl text-primary'>
            {t('modal_book.title')}
          </h1>
          <Calendar city={city} />
          <div className='flex flex-row justify-end mt-auto'>
            <button
              id={`closeModal${city}`}
              className='w-1/3 p-1 mr-2 rounded-md border border-secondary border-2 text-secondary'
            >
              {t('buttons.cancel')}
            </button>
            <button
              id={`bookModal${city}`}
              className='w-1/3 p-1 rounded-md border border-primary border-2 text-primary'
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
