import React from 'react'
import '../styles/all.css'
import '../styles/root/colors.css'
import '../styles/pages/portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio section">

      <header className="header">
        <div className="id">
          <h3 style={{ fontWeight: 400, fontStyle: 'italic' }}>Information System Student</h3>
          <h1 className='name'>Vanesa Rizka Alfatihah</h1>
          <p>0821-1332-2488 | vanesarizka6@gmail.com</p>
        </div>
        <div className="cinnamoroll">
          <img src="/images/watashi.png" alt="cinnamoroll" height="140px" />
        </div>
      </header>

      <div className="content">
      
        <div className="left-content">

          <section className="left-category">
            <h2>EDUCATION</h2>
            <div className="v-line">
              <h4>High School</h4>
              <h3>SMAN 2 Purwakarta</h3>
              <h5>July 2020 - June 2023</h5>
              <hr className="h-line" />
              <ul>
                <li>Japanese Club</li>
                <li>Band & Choir</li>
              </ul>
            </div>
          </section>
          
          <section className="left-category">
            <h2>SKILL</h2>
            <div className="v-line">
              <h6>Personality</h6>
              <ul>
                <li>Leadership & Teamwork</li>
                <li>Attention to Detail</li>
                <li>Organized & Structured</li>
                <li>Result-Oriented</li>
              </ul>
            </div>

            <br />

            <div className="v-line">
              <h6>Language</h6>
              <ul>
                <li>Indonesian - native</li>
                <li>English - conversation</li>
              </ul>
            </div>

            <div className="v-line">
              <h6>Tools</h6>
              <ul>
                <li>Apple macOS & iWork</li>
                <li>Microsoft Windows & Officework</li>
              </ul>
            </div>

            <div className="v-line">
              <h6>Other</h6>
              <ul>
                <li>Graphic & UI/UX Design</li>
                <li>HTML, CSS, & React JS</li>
                <li>Python, Pandas, & Django</li>
                <li>PHP & Laravel</li>
              </ul>
            </div>
          </section>
        </div>
            
        <div className="right-content">
          <section className="right-category">
            <h2>EXPERIENCE</h2>
            <div className="v-line">
              <h4>Staff Muda Gen IX HMSI Telkom University</h4>
              <h3>STAFF MUDA DEPARTEMEN AKSI</h3>
              <h5>September 2024 - December 2024</h5>
              <hr className="h-line" />
              <ul>
                <li>I help drafting some of the meeting minutes.</li>
                <li>I learn the work ethics and culture in the department.</li>
                <li>I help the program run by the department.</li>
              </ul>
            </div>

            <div className="v-line">
              <h4>Staff Muda Gen IX HMSI Telkom University</h4>
              <h3>SECRETARY OF FINAL PROJECT</h3>
              <h5>November 2024</h5>
              <hr className="h-line" />
              <ul>
                <li>I am responsible for managing team administration and communications.</li>
                <li>My roles includes drafting meeting minutes, organizing and maintaining important documents, and ensuring effective information flow between divisios.</li>
                <li>I also help keep records of decisions and plans to support the team in staying updated and aligned throughout the project.</li>
              </ul>
            </div>

            <div className="v-line">
              <h4>Informatics Subject</h4>
              <h3>ASSIGNMENT TO CREATE A SIMPLE WEBSITE</h3>
              <h5>September 2022 - October 2022</h5>
              <hr className="h-line" />
              <ul>
                <li>Compiling HTML programs using tags, elements, etc. to build website structures.</li>
                <li>Using CSS to design the interface of website.</li>
              </ul>
            </div>
          </section>    
        </div>
      </div>

      <footer className="footer">
        <div className="v-line">
          <ul>
            <li><a href="https://instagram.com/vanesarz_" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com/in/vanesarz" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/vanesarz/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </footer>
      
    </section>
  )
}

export default Portfolio;