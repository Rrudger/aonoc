import { useEffect } from 'react';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import { lowerCase, upperFirst } from 'lodash';
import Map from './GoogleMap.jsx';
import ModalBook from './ModalBook.jsx';

const OfficeCard = ({ city }) => {
  const { t } = useTranslation();
  const office = lowerCase(city);

  useEffect(() => {
    const modal = document.getElementById(`modal${city}`);
    const openModal = document.getElementById(`openModal${city}`);
    const closeModal = document.getElementById(`closeModal${city}`);

    openModal.addEventListener("click", () => {
      modal.showModal();
    });
    closeModal.addEventListener("click", () => {
      modal.close();
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal && modal.open) {
        modal.close()
      }
    })
  });

  return (
    <div className={`
      my-4 p-4
      rounded-lg border-2 border-secondary shadow-2xl
      flex sm:flex-row flex-col self-center
      content-center justify-center
      `}>
      <Map city={city} />
      <div className='flex flex-col w-80 sm:my-0 my-4'>
      <div>
        <div className='grid grid-cols-2 gap-1 ml-4 my-1'>
          <h4 className='text-nowrap'>{upperFirst(t('offices_card.phone'))}</h4>
          <p className=''>{t(`office_${office}.phone`)}</p>
        </div>
        <div className='grid grid-cols-2 gap-2 text-nowrap ml-4 my-1'>
          <h4 className=''>{upperFirst(t('offices_card.email'))}</h4>
          <p className=''>{t(`office_${office}.email`)}</p>
        </div>
        <div className='grid grid-cols-2 gap-2 ml-4 my-1'>
          <h4 className='text-nowrap'>{upperFirst(t('offices_card.address'))}</h4>
          <p className='text-wrap'>{t(`office_${office}.address`)}</p>
        </div>
        <div className='grid grid-cols-2 gap-2 text-nowrap ml-4 my-1'>
          <h4 className=''>{upperFirst(t('offices_card.hours_weekdays'))}</h4>
          <p className=''>{t(`office_${office}.hours_weekdays`)}</p>
        </div>
        <div className='grid grid-cols-2 gap-2 text-nowrap ml-4 my-1'>
          <h4 className=''>{upperFirst(t('offices_card.hours_weekends'))}</h4>
          <p className=''>{t(`office_${office}.hours_weekends`)}</p>
        </div>
        </div>
        <div className='mt-auto self-end sm:mr-0 mr-2'>
          <button id={`openModal${city}`} className='border-2 border-primary rounded-lg text-primary p-2'>
            {t('buttons.book_appointment')}
          </button>
        </div>
        <ModalBook city={city} />
      </div>

    </div>
  )
};

export default OfficeCard;
