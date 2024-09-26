import Card from './Card.jsx';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const Cards = ({ switchPage }) => {
  const { t } = useTranslation();

  return (
    <div className={`
      grid md:grid-cols-2 grid-cols-1 justify-center
      lg:w-1/2 md:w-full w-2/3 my-6 gap-x-10
      lg:px-0 md:px-4 px-0 lg:mb-10
      `}>
      <Card
        switchPage={switchPage}
        page='projects'
        title={t('projects_card.main_title')}
        text={t('projects_card.main_text')}
        imgFile={'./assets/project.png'}
        bgFile={'./assets/bg-projects.jpg'}
        />
      <Card
        switchPage={switchPage}
        page='offices'
        title={t('offices_card.main_title')}
        text={t('offices_card.main_text')}
        imgFile={'./assets/clock.png'}
        bgFile={'./assets/bg-building.jpg'}
        />
    </div>
  )
}

export default Cards;
