import React from 'react'
import Footer from './Footer';
import './Home.css';
 
export default function Home() {
  return (
    <div>
      <div className='EntirePage'>
        <div className='row'>
          <div className='ProfilePic'>
            Profile pic goes here
          </div>
          <div className='Skills'> 
            <h3 >Skills</h3>
            
            <p>
              I have experience with Java, JavaScript, Python, HTML, CSS, SQL, Node.js,
              React.Js, Angular.Js, and Bootstrap.   <a target="_blank" href='https://outreach.cs.dal.ca/'>The Outreach Project</a>  is an example of a project I was a
              a part of that went into production, Angular.js was used.
             
              Currently, I am working on expanding my knowledge of advanced databases through
              university courses. In my free time, I am working on a project to expand my knowledge, understanding,
                and experience of React.Js.
            
            </p>
          </div>
          <div className='space'></div>
          <div className='Job'>
            <h3>Opportunities</h3>
            <p>I'm currently looking for a job. If you see me as a good fit, check out my <a>Resume</a>. I'd love to work for you.</p>
          </div>



          
        </div>
      </div>
    <Footer/>
</div>
  )
}
