import { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const Header = ({ switchPage }) => {
  const { t } = useTranslation();

  return (
    <div className={`
      sticky z-40 top-0 bg-primary
      flex md:flex-row flex-col justify-between
      drop-shadow-lg py-2 rounded-br-full
      `}>
      <div>
        <div
          onClick={()=>switchPage('landing')}
          className='cursor-pointer flex flex-row md:justify-center justify-start mx-6 md:mt-0 mt-2'>
          <img className="inline w-14" src="../assets/logo.png" alt="..." />
          <h1 className={`text-secondary text-3xl tracking-wide drop-shadow-2xl
            font-black font-montserrat
            ml-4
            content-center`}>
            {t('title')}
          </h1>
        </div>
      </div>
      <div className={`
        flex flex-row gap-x-4 md:justify-center justify-start
        text-secondary text-xl
        md:mr-20 mx-8 md:my-0 my-4
        `}>
        <div onClick={() => switchPage('projects')} className='content-center cursor-pointer'>
          {t('header.projects')}
        </div>
        <div onClick={() => switchPage('offices')} className='content-center cursor-pointer'>
          {t('header.offices')}
        </div>
        <div className='content-center'>
          <button className='p-1'>
            en
          </button>
        </div>
      </div>

    </div>
  )
};

export default Header;
