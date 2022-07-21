import React from 'react';
import './Experience.css'
export default function Experience() {
  return (
    <div className='entirePage'>
      <h2>Experience</h2>
      
        <div className='row'>
          <div>
            <h3>2022</h3>
            <div>
              <h4>Graduation</h4>
              <p>
                Dalhousie University 2017-2022<br/>
                Bachelor of Applied Computer Science 
              </p>
            
              <h4>Independant React Project</h4>
              <p>Created a React.js project from scratch that allowed me to pracitce using React.js in combination with Bootstrap and MonogDB. The website's purpose was <br/>
              to learn more about React components while using databases. During this project I was able create an object and upload it to the database, then display the data in a table.<br/>
              Upon further development, I was going to add a way to update the object as well as create a login so only the administrator can add a object.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div>
            <h2>2021</h2>
            <div>
              <h4>X691 Website-Full-Stack Developer</h4>
              <p>
              Jan 2021-Apr 2021<br/>
              Successfully added several features to the existing project using Angular.js. Features included Drag and Drop students between teams, reading students in <br/>
              from a from a CSV file.Re-designed the user interface to allow the administrator a more user friendly experience when trying to see the projects. Created a <br/>
              interface that allows the client to submit a form that turns that data into a project requestion for the administrator. Developed a way for the administrator <br/>
              to accept or deny project requests as needed.  
              </p>
              <h4>Fake Kijiji Application -Full Stack Developer</h4>
              <p>
                Jan 2021-Apr 2021<br/>
                Created an application from scratch with a group using Android Studio. The application was designed to mimmick Kijiji where one could search for items for <br/>
                sale or hire someone to get a job done. We implimented a feature that upon completion of a job the "Customer" would be able to pay the "Contractor" via Paypal <br/>
                and rate the quality of the job using a 5 star rating scale and a input box for explaination. The application took the users geolocation and displayed listings <br/>
                in the area. 
              </p>
              <h4>Password Manager -Full Stack Developer</h4>
              <p>
                June 2021-Aug 2021<br/>
                Built a password manager in Google Chrome browser extension. The program ran using React.js and MonogDB. The goal during the process was to create a password manager<br/>
                close to the current chrome password manager. Due to a few members of the group not knowing React we didn't make a lot of progress.
              </p>
          </div>
          </div>
        </div>
        
        <div className='row'>
          <div>
            <h2>2019</h2>
            <h4>Child Soldiers Project</h4>
            <p>
              Jan 2019-Apr 2019<br/>
              Successfully worked on a program used to train soldiers on encounters with child soldiers. The program walked through various scenarios to <br/>
              assist in making decisions in the field. The project had a NDA so minimal details can be shared. 
            </p>
          </div>
        </div>
    </div>
  )
}
