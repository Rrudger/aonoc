import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import TwitterIcon from '../icons/twitter-x.svg';
import FacebookIcon from '../icons/facebook.svg';
import InstaIcon from '../icons/instagram.svg';
import LinkIcon from '../icons/linkedin.svg';
import WatsIcon from '../icons/whatsapp.svg';
import LogoIcon from '../icons/logo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={`
      sticky
      bg-primary text-secondary
      min-h-10 h-full
      flex flex-col
      px-6 py-6 mt-auto
      `}>
      <div className='flex flex-row gap-x-2 justify-center mb-2'>
        <LogoIcon />
        <div>{t('title')}</div>
      </div>
        <div className={`py-3 flex grow items-center text-sm text-secondary
          before:flex-1 before:border-t before:border-secondary before:me-6
          after:flex-1 after:border-t after:border-secondary after:ms-6
          `}>
          <div className='flex flex-row gap-x-2'>
            <TwitterIcon className='cursor-pointer'/>
            <FacebookIcon className='cursor-pointer'/>
            <InstaIcon className='cursor-pointer'/>
            <LinkIcon className='cursor-pointer'/>
            <WatsIcon className='cursor-pointer'/>
          </div>
        </div>

    </div>
  )
};

export default Footer;
