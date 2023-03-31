import deku from '../assets/deku.jpeg';
import avantax from '../assets/avantax.jpeg';
import website from '../assets/website.svg';
import Image from 'next/image';
import styles from "../../styles/Projects.module.css"


const PROJECTS = [
    {
      name: "Deku",
      url: "deku.netlify.app",
      description: "Ecommerce",
      designer: true,
      image: deku
    },
    {
      name: "Avantax",
      url: "avantax.pe",
      description: "Investment portfolio",
      designer: true,
      image: avantax 
    },
  ]

const Project = ({name, url, description, image, designer = null}) => (
    <>
    <div className={styles.divider}></div>
    <article className={styles.project}>
      <div className={styles.header}>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <a className={styles.url} href={url}>{url}</a>
        <p className={styles.description}><Image src={website} alt="website icon" />
          <span>{description}</span>
        </p>
      </div>
      {designer && <p className={styles.designer}><span>design by</span> <a className={styles.behance} target="_blank" href="https://www.behance.net/camilasantamarialuna">@camilasantamarialuna</a></p>}
      </div>
      <Image className={styles.image} width={168} priority={true} alt="deku screenshot" src={image} />
    </article>
    </>
  )
  
export default function Projects() {
    return (
        <section className={styles.projects}>
            <h3 className={styles.heading}>Latest projects</h3>
            {PROJECTS.map(({name, url, description, image, designer}) => (
              <Project name={name} url={url} description={description} image={image} designer={designer} key={name} />
            ))}
          </section>
      )
}