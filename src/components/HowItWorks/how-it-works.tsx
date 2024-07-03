import Image from "next/image"
import styles from "./how-it-works.module.scss"

export const HowItWorks = () => (
  <section className="section">
    <div className="section-container">
      <header>
        <h2 className="headline">How It Works</h2>
        <h1 className="heading">Drive away with more than just a car</h1>
      </header>

      <nav className={styles.steps}>
        <div className={styles.step}>
          <a href="#" className={styles["nav-link"]}>
            <Image
              src="icons/search.svg"
              alt="Search icon"
              width={20}
              height={20}
            />
            Find a car
          </a>
        </div>
        <div className={styles.step}>
          <a href="#" className={styles["nav-link"]}>
            <Image
              src="icons/contact.svg"
              alt="Contact icon"
              width={20}
              height={20}
            />
            Contact us
          </a>
        </div>
        <div className={styles.step}>
          <a href="#" className={styles["nav-link"]}>
            <Image
              src="icons/check.svg"
              alt="Check icon"
              width={20}
              height={20}
            />
            Test drive
          </a>
        </div>
        <div className={styles.step}>
          <a href="#" className={styles["nav-link"]}>
            <Image
              src="icons/bitcoin.svg"
              alt="Pay icon"
              width={20}
              height={20}
            />
            Pay with crypto
          </a>
        </div>
        <div className={styles.step}>
          <a href="#" className={styles["nav-link"]}>
            <Image src="icons/car.svg" alt="Car icon" width={20} height={20} />
            Drive away
          </a>
        </div>
      </nav>

      <div className={styles["process-container"]}>
        <div className={styles["process-step"]}>
          <div className={styles["step-number"]}>1</div>
          <p className={styles["step-description"]}>
            Find your dream car. Explore the vast selection of over 20,000 cars
            on our listings page.
          </p>
        </div>
        <div className={styles["process-step"]}>
          <div className={styles["step-number"]}>2</div>
          <p className={styles["step-description"]}>
            Contact us via email, WhatsApp, or on the phone and have a
            CryptoAutos representative run you through the buying process and
            arranging a test drive. Once you’re happy, you can reserve your
            vehicle.
          </p>
        </div>

        <div className={styles["process-step"]}>
          <div className={styles["step-number"]}>3</div>
          <p className={styles["step-description"]}>
            Process payment for the vehicle with your chosen cryptocurrency and
            CryptoAutos will settle the invoice with the dealership.
          </p>
        </div>
        <div className={styles["process-step"]}>
          <div className={styles["step-number"]}>4</div>
          <p className={styles["step-description"]}>
            Collect your vehicle from the dealership for the final handover.
          </p>
        </div>
      </div>

      <div className={styles["vision-container"]}>
        <p>
          Our vision is to create a{" "}
          <span className={styles["highlight-text"]}>
            global network of hyper-personal crypto concierge services
          </span>{" "}
          that support our communities lifestyle in a transparent, trusted and
          seamless way. With our combined expertise in both the automotive and
          crypto industries we are creating a{" "}
          <span className={styles["highlight-text"]}>
            true service of the future
          </span>
          .
        </p>
      </div>
    </div>
  </section>
)
