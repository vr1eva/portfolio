import styles from "../styles/Home.module.css"
import { Inter } from 'next/font/google'
import Projects from "./components/Projects"
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

const skills = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "Next.js", color: "#000000" },
  { name: "Vue", color: "#4FC08D" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Figma", color: "#F24E1E" },
  { name: "JavaScript", color: "#F7DF1E" },
];

export default function Home() {
  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = skills.indexOf(currentSkill);
      const nextIndex = (currentIndex + 1) % skills.length;
      setCurrentSkill(skills[nextIndex]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentSkill, skills]);

  return (
    <div className={`${inter.className} ${styles.home}`} >
      <h1 className={styles.h1}>Welcome to our online portfolio</h1>
      <p className={styles.about}>We are Camila and Bruno and we work together shipping digital products 🚀</p>
      
     

      <Projects />

      <div className={styles.skills}>
        <span>We know how to use </span>
        <span style={{color: currentSkill.color}}>{currentSkill.name} </span> 
        <span> and we love to work remotely from people all around the world.</span>
      </div>

      <div className={styles.contact}>
        <p>This is our email if you want to hire us</p>
        <a className={styles.email} href="mailto:hivr1eva@gmail.com">hivr1eva@gmail.com</a>
      </div>
    </div>
  );
}
