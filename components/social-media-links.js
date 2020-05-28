import styles from './social-media-links.module.css'

const SocialMediaLinks = () => (
    <div className={styles.linksContainer}>
        <a className={styles.link} target="_blank" href="https://www.linkedin.com/in/ian-germann-67315960/">LinkedIn</a>
        <a className={styles.link} target="_blank" href="https://github.com/Germanika">Github</a>
        {/* <a className={styles.link} target="_blank" href="https://twitter.com/IanGermannn">Twitter</a> */}
        <a className={styles.link} target="_blank" href="mailto:ianjgermann@gmail.com">Email</a>
        <a className={styles.link} download target="_blank" href="https://www.dropbox.com/s/ia9xdwyftvj9s95/IanGermann2020.pdf?dl=1">Resume</a>
    </div>
)

export default SocialMediaLinks
