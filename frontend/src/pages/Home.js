import React from 'react'
import '../styles/all.css'
import '../styles/root/colors.css'
import '../styles/pages/home.css'

function Home() {
    return (
        <section className="home section">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hello, my name is <span className="name">Vanesa Rizka Alfatihah</span></h3>
                        <h3 className="my-profession">I'm a <span className="typing">Information System Student</span></h3>
                        <p>I am a student with an interest in leadership development, teamwork, and technical skills. I use an organizational and detail-oriented approach in every task, along with effective communication skills for optimal collaboration.</p>
                        <a href="/contact" className="btn hire-me">Hire me</a>
                    </div>
                    <div className="home-img padd-15">
                        <img src="/images/watashi.png" alt="profile" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;