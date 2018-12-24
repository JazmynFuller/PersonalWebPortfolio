import React from 'react';

function Projects () {
		return (
			<div className="container-fluid">
				<div className="row justify-content-center project-heading">
					<div className="col-md-12" id="projectsPortion" >
						<h1>MyProjects()</h1>
					</div>
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
								<img src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/phone-app.jpg?raw=true" className="img-fluid" alt="Sample project image"/>
								
        							<div className="mask rgba-stylish-strong box">
        								<h3>Iot Smart Device</h3>
        								<p>Short Description</p>
        							</div>
      							
						</div>

						<div className="card-body pb-0">
      						<a className="btn  btn-sm" target="_blank" href="https://github.com/JazmynFuller/iot-tumbler" ><i className="fas fa-code left"></i>More Info</a>
   						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-md-0 mb-4">
    					<div className="view overlay rounded z-depth-1">
      					<img src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/bullsEye.jpg?raw=true" className="img-fluid" alt="Sample project image"/>
      					
        					<div className="mask rgba-stylish-strong box">
        						<h3>Swift Target-Game</h3>
        						<p>Short Description</p>
        					</div>
      					
    					</div>
 
    					<div className="card-body pb-0">
      					<a className="btn  btn-sm" target="_blank" href="https://github.com/kr3110/Hitme-ios-app" ><i className="fas fa-code left"></i>More Info</a>
    					</div>
  					</div>

  					<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
						<div className="view overlay rounded z-depth-1">
								<img src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/foodTruck.jpeg?raw=true" className="img-fluid" alt="Sample project image"/>
								
        							<div className="mask rgba-stylish-strong box">
        								<h3>NYC Open Data</h3>
        								<p>Short Description</p>
        							</div>
      							
						</div>

						<div className="card-body pb-0">
      						<a className="btn  btn-sm" target="_blank" href="https://github.com/JazmynFuller/Food_Vendor" ><i className="fas fa-code left"></i>More Info</a>
   						</div>
					</div>
				</div>

				<div className="row text-center project-cards justify-content-center">
					<div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
						<div className="view overlay rounded z-depth-1">
								<img src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/baking.jpeg?raw=true" className="img-fluid" alt="Sample project image"/>
								
        							<div className="mask rgba-stylish-strong box">
        								<h3>First Web Design Project</h3>
        								<p>Short Description</p></div>
      							
						</div>

						<div className="card-body pb-0">
      						<a className="btn  btn-sm" target="_blank" href="https://github.com/JazmynFuller/Fall2018WebDesign1" ><i className="fas fa-code left"></i>More Info</a>
   						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-md-0 mb-4">
    					<div className="view overlay rounded z-depth-1">
      					<img src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/Screen%20Shot%202018-12-22%20at%206.48.00%20PM.png?raw=true"className="img-fluid" alt="Sample project image"/>
      					
        					<div className="mask rgba-stylish-strong box">
        						<h3>HackathonHub</h3>
        						<p>Short Description</p>
        					</div>
      					
    					</div>
 
    					<div className="card-body pb-0">
      					<a className="btn  btn-sm" target="_blank" href="https://github.com/AnonymousKoala/hackathonhub"><i className="fas fa-code left"></i>More Info</a>
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
					<h5>React/JavaScript</h5>
						<div className="progress">
                    		<div className="progress-bar progress-bar-striped progress-bar-animated bg-info" id="bar-1" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                  		</div>
					</div>
				</div>



			</div>
    	)
}

export default Projects