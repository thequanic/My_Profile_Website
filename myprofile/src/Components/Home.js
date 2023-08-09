import React, { useState, useEffect } from 'react'
import Img1 from '../Images/Img1.png'
import Myself from './Myself'

export default function Home()
{
    const text = "Hello world!";
  const typingSpeed = 100; 

  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [flag,setFlag]=useState(false)

  useEffect(() => {
    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prevTypedText => prevTypedText + text.charAt(charIndex));
        setCharIndex(prevCharIndex => prevCharIndex + 1);
      }, typingSpeed);

      return () => {clearTimeout(timeoutId); }
    }
  }, [charIndex]);

    return(
        <div>
         <img src={Img1} alt="image" id="img1"/>
         <h1 id="welcome">{typedText}</h1>
         <Myself />
        </div>
    )
}


