import React from 'react'
 
const ProjectSummary=({project})=>{
    return (
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Albert Njane</p>
                    <p className="grey-text">3rd, september 2019 at 2:00pm</p>
                </div>
            </div>
            </div>
            )
};
export default ProjectSummary
