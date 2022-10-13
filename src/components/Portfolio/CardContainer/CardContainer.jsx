import { Card } from '../Card/Card'
import './cardcontainer.css'


import {projectList} from '../../../data/tempProjects';

export const CardContainer = () => {
  return (
    <div className='card-container'>
      {/* Calculate card amount by window size */}
      <Card img="/src/data/tempImages/portfolio/404.png" name={projectList[0].name} desc={projectList[0].desc} tagList={projectList[0].tagList} demoLink={projectList[0].demoLink} codeLink={projectList[0].codeLink}/>
      <Card img="/src/data/tempImages/portfolio/codenote.png" name="Codenote" desc="lorem ipsum" tagList={projectList[1].tagList}/>
      <Card img="/src/data/tempImages/portfolio/sudoku.png" name="404 Not Found" desc="lorem ipsum" tagList={projectList[3].tagList}/>
    </div>
  )
}
