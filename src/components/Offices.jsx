import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import  OfficeCard from './OfficeCard.jsx'


const Offices = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-center text-3xl text-primary my-6'>
        {t('offices_card.main_title')}
      </h1>
      <OfficeCard city='Certaldo' />

   </div>
  )

  return (<>
    <OfficeCard city='Empoli' />
    <OfficeCard city='Castelfiorentino' />
  </>)
};

export default Offices;
