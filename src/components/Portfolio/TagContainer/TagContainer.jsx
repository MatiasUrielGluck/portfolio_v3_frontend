import './tagcontainer.css'

import { projectList } from '../../../data/tempProjects'
import { tagList } from '../../../data/tempTags'
import { Tag } from './Tag'

export const TagContainer = () => {
  return (
    <div className='tag-container container'>
        <h2 className='title'>Projects ({projectList.length})</h2>

        <div className="tag-list">
            { tagList.map(tag => (
                <Tag name={tag.name} key={tag.id}/>
            )) }
        </div>
    </div>
  )
}
