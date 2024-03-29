import CardWave from "../src/components/CardWave/CardWave";
import styles from "../styles/Home.module.css";
import CardLogo from "../src/components/CardLogo/CardLogo";
import ContactUsFooter from "./../src/components/ContactUsFooter/ContactUsFooter";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.wave}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.logoHeader}>
          <img src="logo.png"></img>
          <div>ICE DREAMS</div>
        </div>
        <div className={styles.tagline}>
          <div>gourmet ice cream</div>
        </div>

        <div className={styles.gridParent}>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="swirls"
              imageSrc="./product2.png"
              waveColor="#5000ca"
            />
          </div>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="sundaes"
              imageSrc="./product3.png"
              waveColor="#5000ca"
            />
          </div>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="waffles"
              imageSrc="./product4.png"
              waveColor="#5000ca"
            />
          </div>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="soft serve"
              imageSrc="./product1.png"
              waveColor="#5000ca"
            />
          </div>
        </div>

        <div className={styles.tagline}>
          <h4>our partners</h4>
        </div>
        <div className={styles.grid2Parent}>
          <div className={styles.grid2Child}>
            <CardLogo
              cardTitle="nestle"
              imageLogo="./brand1.png"
              imageCover="./photo11.jpg"
              waveColor="#d81e36"
              bodyText="This website is built using React and is bootstrapped with NextJS. Styling is done using standard CSS. Card components are re-usable React functional components."
            />
          </div>
          <div className={styles.grid2Child}>
            <CardLogo
              cardTitle="cadbury"
              imageLogo="./brand2.png"
              imageCover="./photo13.jpg"
              waveColor="#482683"
              bodyText="This is a re-usable React functional card component, custom built from zero. Customizable inputs are svg wave header and footer colors, brand logo image, card background image, card title and this text."
            />
          </div>
          <div className={styles.grid2Child}>
            <CardLogo
              cardTitle="aero"
              imageLogo="./brand3.png"
              imageCover="./photo12.jpg"
              waveColor="#6c3d26"
              bodyText="Brand logos are being used for non commercial purposes only. This is a private project for learning web development. This website is not for commercial use."
            />
          </div>
        </div>
        <div className={styles.tagline}>
          <h4>about us</h4>
        </div>

        <div className={styles.lessonLearned}>
          <div className={styles.listImage}>
            <img src="/lessons.png"></img>
          </div>

          <div className={styles.listItems}>
            <h4>Concepts learned and demonstrated</h4>
            <ul>
              <li>Responsive web design</li>
              <li>Mobile friendly layout</li>
              <li>React functional card components</li>
              <li>Refactoring cards for re-use</li>
              <li>Introduction to SVG waves, overlays and SVG gotchas</li>
              <li>CSS positioning: relative, absolute</li>
              <li>CSS negative margins</li>
              <li>CSS Neomorphism box shadows</li>
              <li>Cross browser testing</li>
            </ul>
          </div>
        </div>

        <div className={styles.tagline}>
          <h4>contact us</h4>
        </div>
      </div>

      <ContactUsFooter />

      <div className={styles.footerBlock}>
        <h3>2021 Web Dev Project Concept only, by AG</h3>
        <p>This website is project for demo and self studies only!!!!</p>
        <p>
          Laborum cupidatat voluptate eu esse ad proident veniam anim voluptate.
          Excepteur eu voluptate amet in deserunt aute cillum. Ad Lorem
          exercitation pariatur quis deserunt commodo cillum qui tempor deserunt
          est officia esse.
        </p>
        <p>🍦🍦🍦 Worst logo ever 🍦🍦🍦</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className={styles.wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fillOpacity="0.1"
              d="M0,32L48,37.3C96,43,192,53,288,101.3C384,149,480,235,576,240C672,245,768,171,864,154.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className={styles.wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fillOpacity="0.2"
              d="M0,32L60,58.7C120,85,240,139,360,154.7C480,171,600,149,720,144C840,139,960,149,1080,128C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
