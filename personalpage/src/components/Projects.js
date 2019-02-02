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

				<div className="row justify-content-center text-center project-cards">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 pcard">
						  <div className="view hovereffect rounded z-depth-3">
       						 <img className="img-fluid" src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/tumbl%C3%ABr.jpg?raw=true" alt=""/>
        						<div className="overlay">
           						<h1>IoT Smart Device</h1>
           						<p className="info">Responsive Design Practice|Dec 2018<br></br>
           						<a className="btn  btn-sm" target="_blank" href="https://venus.cs.qc.cuny.edu/~abma2399/iot-tumbler/public/" ><i className="fas fa-code left"></i>Live Site</a>
           						</p>
        						</div>
    					  </div>
					</div>	

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 pcard">
						  <div className="view hovereffect rounded z-depth-3">
       						 <img className="img-fluid" src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/bullsEye.jpg?raw=true" alt=""/>
        						<div className="overlay">
           						<h1>iOS Target-Game</h1>
           						<p className="info">First coding project in Swift|Jan 2018<br></br>
           						<a className="btn  btn-sm" target="_blank" href="https://github.com/kr3110/Hitme-ios-app" ><i className="fas fa-code left"></i>More Info</a>
           						</p>
        						</div>
    					  </div>
					</div>	

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 pcard">
						  <div className="view hovereffect rounded z-depth-3">
       						 <img className="img-fluid" src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/foodTruck.jpeg?raw=true" alt=""/>
        						<div className="overlay">
           						<h1>NYC Open Data</h1>
           						<p className="info">Prototype Tool Displaying Food Trucks in NYC|March 2018
           						<a className="btn  btn-sm" target="_blank" href="https://github.com/JazmynFuller/Food_Vendor" ><i className="fas fa-code left"></i>More Info</a>
           						</p>
        						</div>
    					  </div>
					</div>	

			
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 pcard">
						  <div className="view hovereffect rounded z-depth-3">
       						 <img className="img-fluid" src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/baking.jpeg?raw=true" alt=""/>
        						<div className="overlay">
           						<h1>First Website</h1>
           						<p className="info">Simple Dessert Ideas for Christmas|Oct 2018
           						<a className="btn  btn-sm" target="_blank" href="https://github.com/JazmynFuller/Fall2018WebDesign1" ><i className="fas fa-code left"></i>More Info</a>
           						</p>
        						</div>
    					  </div>
					</div>	

					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 pcard">
						<div className="view hovereffect rounded z-depth-3">
								<img className="img-fluid" src="https://github.com/JazmynFuller/PersonalWebPortfolio/blob/master/personalpage/src/img/hub.jpeg?raw=true" class="img-fluid " alt="smaple image"/>
								<div className="overlay">
									<h1>HackathonHub</h1>
									<p className="info">Site where hackathon attendees can form/join teams|Dec 2018
									<a className="btn  btn-sm" target="_blank" href="https://github.com/AnonymousKoala/hackathonhub"><i className="fas fa-code left"></i>More Info</a>
									</p>
								</div>
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