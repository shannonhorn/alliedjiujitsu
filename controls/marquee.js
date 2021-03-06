import styles from '../styles/Marquee.module.css';

const Marquee = () => (
  <section aria-label='marquee' className={styles.marquee}>
    <div className={styles.marquee_copy}>
      <h2
        className={`${styles.title} ${styles.headline} ${styles.animatePopIn}`}
      >
        PEORIA
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        10100 West Lake Pleasant Parkway
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        Suite 1300
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        Peoria AZ 85382
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        <a href='tel:6237030220'>(623) 703-0220</a>
      </h2>
      {/* <hr className={`${styles.separator} ${styles.animatePopIn}`} />
      <h2
        className={`${styles.title} ${styles.headline} ${styles.animatePopIn}`}
      >
        COTTONWOOD
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        1645 East Cottonwood Street
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        Cottonwood AZ 86326
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        <a href='tel:9282021229'>(928) 202-1229</a>
      </h2> */}
    </div>
  </section>
);
export default Marquee;
