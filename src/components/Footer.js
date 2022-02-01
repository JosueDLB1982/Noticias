import styles from './Footer.module.css'
import PropTypes from 'prop-types'

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

Footer.propTypes = {
  personalizacion : PropTypes.string.isRequired
}


export default Footer
