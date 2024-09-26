import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import Pagination from './Pagination.jsx';

const Projects = ({ switchPage }) => {
  const projectsCount = 4;
  const projectsOnPage = 3;
  const projectsArray = [1,2,3,4];

  const [page, setPage] = useState(1);
  const handleForward = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);
  const fIndex = 0 + (projectsOnPage * (page - 1));
  const lIndex = fIndex + projectsOnPage;

  return (
    <div className='flex flex-col grow'>
      <div className='flex flex-col grow'>
      {projectsArray
        .slice(fIndex, lIndex)
        .map((num) => <ProjectCard
          switchPage={switchPage}
          id={num}
          key={num}
        />)}
      </div>
      <Pagination
        currentPage={page}
        lastPage={Math.ceil(projectsCount / projectsOnPage)}
        scrollForward={handleForward}
        scrollBack={handleBack}
        />
    </div>
  )
};

export default Projects;
