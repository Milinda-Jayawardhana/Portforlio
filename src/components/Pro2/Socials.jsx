import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Milinda-Jayawardhana" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/milinda-jayawardhana-4935a521b/" },
  { icon: <FaFacebook />, path: "https://web.facebook.com/milinda.s.jayawardana" },
];

export default function Socials({ containerStyles = '', iconStyles = '' }) {
  return (
    <div className={`flex justify-center gap-4 ${containerStyles}`}>
      {socials.map((social, index) => (
        <a 
          key={index} 
          href={social.path} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`text-xl ${iconStyles}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
