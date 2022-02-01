import styles from './Footer.module.css'

const Footer = ({personalizacion}) => {
  return (
  <a
    href="https://github.com/JosueDLB1982"
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.personalizacion} "nav-wrapper light-blue darken-3"`}
  >
      {personalizacion}
  </a>
  )
}

export default Footer
