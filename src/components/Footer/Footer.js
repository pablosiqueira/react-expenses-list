import styles from './Footer.module.css'

const Footer = () => {

    const openPageHandler = event => {
        window.open(event.target.value)
    } 

    return <footer className={styles.footer}>
      <div className={styles.description}>
          <div className={styles.about}>
            <h6 className="font-yellowtail">About</h6>
            <p className="text-justify nav_item">Web page created by Pablo Siqueira. Bachelor in Computer Engineering and Science & Techonology 
              by the Federal University of Rio Grande do Norte (UFRN) from Brazil and former exchange student of the Lappeeranta 
              University of Technology (LUT) in Finland.</p>
          </div>

          <div className={styles.contact}>
            <h6>Contact & Networks</h6>
            <ul className={styles.footerlinks}>
              <li><button disabled><img src={process.env.PUBLIC_URL + "/img/mail.png"} alt='mail'></img>pablo16@outlook.com</button></li>
              <li><button onClick={openPageHandler} value="https://www.linkedin.com/in/pablo-siqueira-457867150/" target="_blank"><img src={process.env.PUBLIC_URL + "/img/linkedin.png"} alt='linkedin logo'></img>Linkedin</button></li>
              <li><button onClick={openPageHandler} value='http://lattes.cnpq.br/9695010765251628' target="_blank"><img src={process.env.PUBLIC_URL + "/img/paper.png"} alt='paper'></img>Curriculum Lattes</button></li>
              <li><button onClick={openPageHandler} value="https://github.com/pablosiqueira" target="_blank"><img src={process.env.PUBLIC_URL + "/img/github.png"} alt='github logo'></img>Github</button></li>
            </ul>
          </div>
      </div>

      <div className={styles.copyright}>
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Pablo Siqueira. </p>
      </div>
</footer>
} 

export default Footer