import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import { uniqueId } from 'lodash';
import ArrowIcon from '../icons/graph-up-arrow.svg';
import TextIcon from '../icons/text-left.svg';
import ContactsIcon from '../icons/person-lines-fill.svg';

const ProjectPage = ({ id, switchPage }) => {
  const { t } = useTranslation();

  const goals = t(`projects.project_${id}.goals`).split(',');

  return (
    <div className={`
      grow flex flex-col
      self-center
      md:max-w-5xl sm:max-3xl max-w-screen

      `}>
      <div className='flex flex-row relative lg:mx-0 sm:mx-14'>
        <div className='min-w-full'>
          <img src={`./assets/photo_${id}.jpg`}/>
        </div>
        <h2 className={`
          absolute bottom-0 right-0 z-40
          sm:-translate-y-1/4 -translate-y-6 sm:translate-x-1/4
          sm:mr-8 mr-0
          bg-primary opacity-75
          sm:min-w-80 min-w-40 sm:min-h-14 min-h-10
          text-lg text-secondary text-center content-center
          `}>
          {t(`projects.project_${id}.title`)}
        </h2>
      </div>
      <div className='my-4'>
        <h2 className={`
          flex flex-row justify-between
          bg-primary opacity-75
          sm:w-1/4 w-1/2 p-4 sm:ml-2 lg:ml-0
          text-secondary text-lg uppercase
          `}>
          {t('project_card.goals')}
          <ArrowIcon className='self-center'/>
        </h2>
        <div>
          <ul className='list-disc ml-8 my-4'>
            {goals.map((goal) => <li key={uniqueId()} className='my-2'>
              {goal}
            </li>)}
          </ul>
        </div>
        </div>

        <div className='my-4'>
          <h2 className={`
            flex flex-row justify-between
            bg-primary opacity-75
            sm:w-1/4 w-1/2 p-4 sm:ml-2 lg:ml-0
            text-secondary text-lg uppercase
            `}>
            {t('project_card.description')}
            <TextIcon className='self-center'/>
          </h2>
          <div className='mx-8 my-4'>
            {t(`projects.project_${id}.text`)}
          </div>
        </div>

        <div className='my-4'>
          <h2 className={`
            flex flex-row justify-between
            bg-primary opacity-75
            sm:w-1/4 w-1/2 p-4 sm:ml-2 lg:ml-0
            text-secondary text-lg uppercase
            `}>
            {t('project_card.contacts')}
            <ContactsIcon className='self-center'/>
          </h2>
          <div className='mx-8 my-4'>
            <p>{t('project_card.contacts_text')}</p>
            <div className='flex flex-row mt-1'>
              <h4 className='text-primary mr-2'>{t('project_card.call')}</h4>
              <p>{t('organization.phone')}</p>
            </div>
            <div className='flex flex-row mt-1'>
              <h4 className='text-primary mr-2'>{t('project_card.email')}</h4>
              <p>{t('organization.email')}</p>
            </div>
          </div>
        </div>
    </div>
  )
};

export default ProjectPage;
