import React, { useState, useEffect } from 'react'
import Img3 from '../Images/Img3.jpg'

export default function Myself(props)
{
    const text=`Greetings,

    I am Devansh Goel, a dedicated student pursuing a B.Tech degree in Computer Science and Engineering at Graphic Era Hill University. Originally hailing from Dehradun, a city renowned for its scenic beauty and esteemed educational institutions, I am fueled by a strong passion for research and innovation.
    
    My relentless curiosity propels me to explore various domains of science, with a special fascination for quantum mechanics and computer science. My ultimate aspiration is to contribute to cutting-edge technologies like artificial intelligence, blockchain, and quantum computing, while also creating impactful full-stack software solutions.
    
    I believe that the realm of computer science has the power to shape a better world, which is why I have chosen it as my career path. My journey has encompassed diverse experiences in full-stack development and artificial intelligence, gained through internships and hands-on projects.
    
    During my enriching two-month internship at IBM, I led a team of six members in developing a comprehensive full-stack website for the healthcare sector, utilizing the MERN stack. Throughout my academic journey, I have completed noteworthy full-stack projects including a Lawyer Appointment Portal, Online Personal Diary, and e-learning portals. My proficiency in the MERN stack was further refined through a comprehensive Full Stack Development course by Edureka.
    
    My ardor for artificial intelligence has translated into contributions to two research papers in the field of deep learning. Recently, I secured a position as an AI Engineering Intern at Open Weaver, preceded by a two-week stint delving into AI insights during an internship at IBM. I have also earned certifications in AI, notably the IBM AI Engineering Specialization on Coursera and the Build Basic Generative Adversarial Networks course by DeepLearning.AI. My machine learning and deep learning journey has encompassed diverse projects, including Kyphosis disease detection and cement strength analysis.
    
    Presently, I am diligently enhancing my proficiency in AWS Cloud and Google Cloud, with an aim to undertake the AWS Solution Architect Associate examination.
    
    My unwavering drive is rooted in the desire to positively impact society through technological advancements. I am eagerly looking ahead to the possibilities that the future holds. Let's connect and explore opportunities together!`
   
    const typingSpeed = 50; 

  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length ) {
      const timeoutId = setTimeout(() => {
        setTypedText(prevTypedText => prevTypedText + text.charAt(charIndex));
        setCharIndex(prevCharIndex => prevCharIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [charIndex]);

    return(
        <div className='row myself ' >
            
            <div className='col-4'>
            <div className='mycard'>
            <i className="fa-solid fa-map-pin pin"></i>
            <img src={Img3} alt="my image" className='myimg'/>
            <div className='myname'>
            <h2 id="myname">Devansh Goel</h2>
            <table id="mytable">
                <tr>
                    <td className='key'>Education:</td>
                    <td className='item'>B.Tech CSE (pursuing)</td>
                </tr>
                <tr>
                    <td className='key'>Interest 1:</td>
                    <td className='item'>Artificial Intelligence</td>
                </tr>
                <tr>
                    <td className='key'>Interest 2:</td>
                    <td className='item'>Full Stack Development</td>
                </tr>
                <tr>
                    <td className='key'>Personality:</td>
                    <td className='item'>Curious and Workacholic</td>
                </tr>
            </table>
          
            </div>
            </div>
            </div>
            <div className='col '>
                <p id="intro">
                    {typedText}
               </p>
            </div>
             
        </div>
    )
}
