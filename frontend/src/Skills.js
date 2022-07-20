import React from 'react'
import './Skills.css';
export default function Skills() {
  return (
    <div className='row'>
        <h3 className='title'>Skills</h3>
          <div className='col-4 column '>
              <h3>Technical</h3>
              <div className='indent'>
                <h5>
                  Programming
                </h5>
                <p className='paragraph'>
                &emsp;HTML&emsp;CSS<br/>
                &emsp;JavaScript&emsp;Java <br/>
                &emsp; PHP&emsp;Python
                </p>
              </div>
              <div className='indent'>
                <h5>
                  Databases
                </h5>
                <p className='paragraph'>
                &emsp;MYSQL&emsp;SQL<br/>
                &emsp;NoSQL&emsp;MongoDB<br/>
                &emsp;Firebase
                </p>
              </div>
              <div className='indent'>
                <h5>Tools</h5>
              </div>
              <p className='paragraph'>
                <ul>
                  <li>Visual Studio</li>
                  <li>Android Studio</li>
                  <li>Microsoft Office</li>
                  <li>Wireshark</li>
                  <li>Notion</li>
                  <li>Figma</li>
                  <li>Git</li>
                  <li>Intellij</li>
                  <li>Command Pompt</li>
                  <li>Terminal</li>
                </ul>
              </p>
             </div>
          <div className='col-4 column'>
            <h3>Non-Technical</h3>
            <div>      
              <p className='paragraph'>
                &emsp;Ability to work in a team<br/>
                &emsp;Ability to work independently<br/>
                &emsp;Ability to work under pressure<br/>
                &emsp;Self Motivated<br/>
                &emsp;Fast learner<br/>
                &emsp;Effective at time management<br/>
              </p>
            </div>
          </div>
          <div className='col-4 column '>
            <h3>Design</h3>
            
              <div className='indent'>
                <h5>
                  Design Skills
                </h5>
                <p className='paragraph'>
                  &emsp;UI designs&emsp;UX design<br/>
                  &emsp;Web app Design&emsp; Website Design<br/>
                  &emsp;Wireframing&emsp;Storyboarding
                </p>
              </div>
              <div className=''>
                <h5>
                  Design Tools
                </h5>
                <p className='paragraph'>
                &emsp;MYSQL&emsp;SQL<br/>
                &emsp;NoSQL&emsp;MongoDB<br/>
                &emsp;Firebase
                </p>
              </div>
              
          </div>
    </div>
  )
}
