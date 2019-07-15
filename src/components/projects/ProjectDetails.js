import React from 'react'

const ProjectDetails = (props) => {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title-{id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quam dolorem quibusdam, enim nemo quasi obcaecati et illo
                        dignissimos repellendus,
                         molestias debitis alias
                        accusamus iure aperiam illum nesciunt. Cumque, facere quibusdam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Albert Kimani</div>
                    <div>Posted on 17th June, 2pm</div>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetails
