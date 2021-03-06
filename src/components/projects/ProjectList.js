import React from 'react'

import ProjectSummary from '../projects/ProjectSummary'

const ProjectList = ({projects}) => {
    return (
        <div className="container section project-details">
            {projects && projects.map(project=>{
                return(
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList
