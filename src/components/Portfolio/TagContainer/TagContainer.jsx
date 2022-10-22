import './tagcontainer.css'

import { Tag } from './Tag'
import { useProjects } from '../../../hooks'

export const TagContainer = () => {
  const { projectList, tagList } = useProjects()

  return (
    <div className='tag-container container' id="portfolio">
        <h2 className='title'>Projects ({projectList.length})</h2>

        <div className="tag-list">
            { tagList.map(tag => (
                <Tag name={tag.name} key={tag.id}/>
            )) }
        </div>
    </div>
  )
}
