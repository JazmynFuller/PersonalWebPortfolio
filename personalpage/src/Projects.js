import React from 'react';

function Projects () {
		return (
			<div className="container-fluid">
				<div className="row justify-content-center project-heading">
					<div className="col-md-12"><h1>MyProjects()</h1></div>
				</div>
				<div className="row justify-content-center sub-headings">
					<div className="col-md-12"><h4>About()</h4><hr></hr>
						<p>Here are some of the recent projects I developed and/or completed this year.<br></br>
					Most of them are from school, while some are extracurricular and personal projects.
					</p>
					</div>
					
					
				</div>

				<div className="row text-center project-cards">
					<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
						<div className="view overlay rounded z-depth-1">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" className="img-fluid" alt="Sample project image"/>
								<a>
        							<div className="mask rgba-white-slight"></div>
      							</a>
						</div>

						<div className="card-body pb-0">
      						<a className="btn  btn-sm"><i className="fas fa-code left"></i>More Info</a>
   						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-md-0 mb-4">
    					<div className="view overlay rounded z-depth-1">
      					<img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" className="img-fluid" alt="Sample project image"/>
      					<a>
        					<div className="mask rgba-white-slight"></div>
      					</a>
    					</div>
 
    					<div className="card-body pb-0">
      					<a className="btn  btn-sm"><i className="fas fa-code left"></i>More Info</a>
    					</div>
  					</div>

  					<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
						<div className="view overlay rounded z-depth-1">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg" className="img-fluid" alt="Sample project image"/>
								<a>
        							<div className="mask rgba-white-slight"></div>
      							</a>
						</div>

						<div className="card-body pb-0">
      						<a className="btn  btn-sm"><i className="fas fa-code left"></i>More Info</a>
   						</div>
					</div>
				</div>

				<div className="row text-center project-cards justify-content-center">
					<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
						<div className="view overlay rounded z-depth-1">
								<img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" className="img-fluid" alt="Sample project image"/>
								<a>
        							<div className="mask rgba-white-slight"></div>
      							</a>
						</div>

						<div className="card-body pb-0">
      						<a className="btn  btn-sm"><i className="fas fa-code left"></i>More Info</a>
   						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-md-0 mb-4">
    					<div className="view overlay rounded z-depth-1">
      					<img src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"className="img-fluid" alt="Sample project image"/>
      					<a>
        					<div className="mask rgba-white-slight"></div>
      					</a>
    					</div>
 
    					<div className="card-body pb-0">
      					<a className="btn  btn-sm"><i className="fas fa-code left"></i>More Info</a>
    					</div>
  					</div>

				</div>

				<div className="row justify-content-center sub-headings skills-content">
					<div className="col-md-12"><h4>MySkills()</h4><hr></hr>
					
						<p>Below are the current languages I've coded in, and how comfortable <br></br> I feel with them (100% being super confident).
						The front-end languages are more recent than Java and Python.<br></br> I've picked up on HTML,CSS, and React much faster than Java. I am also interested in learning more <br></br>
						and improving my skills in those languages. Overall, I prefer front-end developing and <br></br>
						designing more than my previous coding experiences.
						</p>
					</div>
				</div>


				<div className="row justify-content-center progress-chart">
					<div className="col-md-8">
					<h5>HTML/CSS</h5>
						<div className="progress">
                    		<div className="progress-bar progress-bar-striped progress-bar-animated bg-success" id="bar-1" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                  		</div>
					</div>
				</div>
				<div className="row justify-content-center progress-chart">
					<div className="col-md-8">
					<h5>Java</h5>
						<div className="progress">
                    		<div className="progress-bar progress-bar-striped progress-bar-animated bg-success" id="bar-1" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                  		</div>
					</div>
				</div>

				<div className="row justify-content-center progress-chart">
					<div className="col-md-8">
					<h5>Python</h5>
						<div className="progress">
                    		<div className="progress-bar progress-bar-striped progress-bar-animated" id="bar-1" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                  		</div>
					</div>
				</div>

				<div className="row justify-content-center progress-chart">
					<div className="col-md-8">
					<h5>Swift</h5>
						<div className="progress">
                    		<div className="progress-bar progress-bar-striped progress-bar-animated" id="bar-1" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                  		</div>
					</div>
				</div>

				<div className="row justify-content-center progress-chart" id="bottom-bar">
					<div className="col-md-8">
					<h5>React</h5>
						<div className="progress">
                    		<div className="progress-bar progress-bar-striped progress-bar-animated bg-info" id="bar-1" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                  		</div>
					</div>
				</div>



			</div>
    	)
}

export default Projects