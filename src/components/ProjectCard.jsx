import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import { uniqueId } from 'lodash';

const ProjectCard = ({ id }) => {
  const { t } = useTranslation();

  const goals = t(`projects.project_${id}.goals`).split(',');

  return (
    <div className={`
      w-full max-w-5xl my-6 sm:mx-0 px-4 py-2
      flex flex-col self-center
      rounded shadow-lg
      `}>
        <h2 className='mt-4 text-xl text-primary'>
          {t(`projects.project_${id}.title`)}
        </h2>
        <div className='flex sm:flex-row flex-col'>
          <div className='basis-1/3 m-2'>
            <h3 className='my-2 text-lg text-primary'>
              {t('project_card.goals')}
            </h3>
            <ul className='list-disc pl-6'>
              {goals.map((goal) => <li key={uniqueId()}>{goal}</li>)}
            </ul>
          </div>
          <div className='basis-2/3 flex flex-col justify-between m-2'>
            <div>
              <h3 className='my-2 text-lg text-primary'>
                {t(`project_card.summary`)}
              </h3>
              <div>
                {t(`projects.project_${id}.summary`)}
              </div>
            </div>
            <button className={`
              p-1 my-2 sm:w-1/6 w-2/6 self-end
              rounded-lg border-2 border-primary bg-secondary
              text-primary
              `}>
              {t('buttons.learn_more')}
            </button>
          </div>
        </div>

    </div>
  )
};

export default ProjectCard;
