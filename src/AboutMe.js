import React from 'react';
import './AboutMe.css'
import useScript from './useScript'

const AboutMe = ({submit, reset}) => {
    useScript("https://platform.linkedin.com/badges/js/profile.js");
    return (
        <div className="aboutMe">
            <div className="aboutMe__header">
            </div>
            <div className="aboutMe__body">
                <div className="aboutMe__leftSide">
                    <div className="aboutMe__top">About me</div>
                    <div className="aboutMe__description">
                        <p>
                            I'm Dondon Jeric Co, aspiring to work as to an entry level worker in the tech industry. Let me tell you about myself and how I started my path on computers.
                        </p>
                        <p>
                             Like most kids, I've started to learn about computers because of games. The feeling of frustration, sadness, excitement, joy and happiness when one plays a game is what started my path to computers. Back then I don't even know how to turn on a computer, I just know how to play games. Then came the time where I've learned the different hardware of the computer, like the monitor, keyboard, mouse, and the external file storage back then which was the floppy disk. After a few years, I've learned how to research online on internet cafes and I've also learned how to connect to the internet using dial-up connections at home. 
                        </p>
                        <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of my turning points in computer is when I was 12 years old, when my sister taught me how to make a simple web page, it was a basic html where she taught me the things she learned. After learning from her and creating a very simple text web page. I was amaze and excited because with just a few simple words I was able to create some web page. I was curious and hungry for more knowledge on creating a web page. I search online and found a website that teaches a few simple tags and I was already happy and satisfied with such simple output like this <h6>r</h6><h5>o</h5><h4>l</h4><h3>l</h3><h2>e</h2><h1>r</h1><h1>c</h1><h2>o</h2><h3>a</h3><h4>t</h4><h5>e</h5><h6>r</h6>. Back then my comprehension was still very low that I don't really understand what I was doing and just follow what was written. After that I learned how to use microsoft office applications like word, powerpoint, excel for school purposes such as research, presentation and computation. And when I was 14 years old, I run my first program which is just a simple stop light program, it was made using visual basic 6.0. It was a stop light image where we use a timer to change the image from red to orange to green. It was really interesting to do because I manage to do it with just a simple explanation of the various tools. It was also during this time that I learn how to use cisco packet tracer where we use to simulate how a computer send a packet through a network. I've also learned how to disassemble, clean, and assemble a computer which uses pata hard drives for storage. I've also learned to format and reinstall the operating system of those computers.
                        </span>
                        
                        <p>
                            I started my formal journey to the tech world when I enrolled in a local college in my city when I was in the Philippines. This is where I learned key terms in programming, some basic logic, syntax, and other more. And while I was absorbing knowledge from our professors, I was also doing some self study  to further my understanding on programming. I've learned a lot of useful things during my time in college and most of it was self studying to make it applicable for our school projects. Because of my knowledge and experience, I was one of the best in our year when it comes to programming and I've also won some programming competition in our school. I did some side projects for my classmates either for free or just being paid a little amount of cash. And before I can take up my last semester in college, I immigrated to the United States, giving up a lot of things in exchange for this opportunity.
                        </p>
                        <p>
                            On October 2016, I left Philippines and immigrated to the United States. I experience a lot of things during my time here in the United States. I've work and change jobs multiple times, i'm even working on the field that I don't really like but is need in order to survive. I had my ups and down, losing my relationship and being alone, but I've held on to tight and believe that everything will fall back in to the right places. And it did, I've finish my college in the Philippine on May 2019, work as a caregiver to save some money for my transcript evaluation but I got the wrong kind of transcript. Tried to get another one but due to the pandemic, the college closed temporarily and applying to the work I want becomes even more harder. And right now I had my transcript evaluated and save enough money for me to temporarily focus on the my goal to work in the tech industry.
                        </p>
                        <p>
                            Right now learning how to create a web application using react and I will also watch some tutorials of different projects and make one of my own using the idea I gained on how they make theirs. For me, it doesn't matter how long you've been idle or have work in a company, it is the experience and the lesson you learned that matters because even if you have work for many years but is still the same as the year you started, then all those years are wasted.
                        </p>
                    </div>
                </div>
                
                <div className="aboutMe__rightSide">
                    <div className="rightSide__message">
                        <form>
                            <p>Any message, comments, criticism, suggestions, tips, or
                                 advice is appreciated.</p>
                            <p>Name</p>
                            <input className="input__type" type="text" placeholder="Put your name here"/>
                            <p>Email</p>
                            <input className="input__type" type="email" placeholder="Put your email address here"/>
                            <p>Message</p>
                            <textarea className="rightSide__textArea" placeholder="Put your message here"/>
                            <br />
                            <button disabled className="rightSide__button" onClick={submit}>Submit</button>

                            <input type="reset" className="rightSide__button" value="Reset"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
