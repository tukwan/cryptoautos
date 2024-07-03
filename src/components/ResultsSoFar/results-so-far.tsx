import Image from "next/image"
import clsx from "clsx"
import styles from "./results-so-far.module.scss"

export const ResultsSoFar = () => (
  <section className={clsx("section", styles["section--results"])}>
    <div className="section-container">
      <header>
        <h2 className="headline">Results so far</h2>
      </header>

      <div className={styles["financial-container"]}>
        <div className={styles["financial-card"]}>
          <h3 className={styles["financial-value"]}>$4.17T</h3>
          <p className={styles["financial-description"]}>
            Automotive Market Cap
          </p>
        </div>
        <div className={styles["financial-card"]}>
          <h3 className={styles["financial-value"]}>$53m</h3>
          <p className={styles["financial-description"]}>Volume to date</p>
        </div>
        <div className={styles["financial-card"]}>
          <h3 className={styles["financial-value"]}>$15.75m</h3>
          <p className={styles["financial-description"]}>
            Transaction volume 2023
          </p>
        </div>
        <div className={styles["financial-card"]}>
          <h3 className={styles["financial-value"]}>5.5%</h3>
          <p className={styles["financial-description"]}>Our average margin</p>
        </div>
        <div className={styles["financial-card"]}>
          <h3 className={styles["financial-value"]}>$1b</h3>
          <p className={styles["financial-description"]}>
            Crypto Automotive Market Cap
          </p>
        </div>
        <div className={styles["financial-card"]}>
          <h3 className={styles["financial-value"]}>$4.4m</h3>
          <p className={styles["financial-description"]}>Highest transaction</p>
          <p className={styles["financial-tag"]}>LA-FERRARI</p>
        </div>
        <div className={styles["financial-card"]}>
          <h3 className={styles["financial-value"]}>$4.4m</h3>
          <p className={styles["financial-description"]}>Highest transaction</p>
          <p className={styles["financial-tag"]}>FIAT 500</p>
        </div>
      </div>

      <div className={styles["promo-container"]}>
        <div className={styles["promo-card"]}>
          <div className={styles["promo-content"]}>
            <Image
              src="icons/coin.svg"
              alt="AutoCoinCars icon"
              width={55}
              height={55}
              className={styles["promo-logo"]}
            />
            <Image
              src="icons/logo.svg"
              alt="AutoCoinCars icon"
              width={217}
              height={24}
              className={styles["promo-logo"]}
            />
          </div>
        </div>

        <div className={styles["promo-info"]}>
          <h1 className={clsx("heading", styles["heading--promo"])}>
            We recently acquired AutoCoin Cars to bolster our network and
            offering
          </h1>

          <div className={styles["feature-list"]}>
            <div className={styles["feature-item"]}>
              <div className={styles["feature-box"]}>
                <Image
                  src="icons/tick.svg"
                  alt="Tick icon"
                  width={24}
                  height={24}
                />
              </div>
              <p className={styles["feature-text"]}>
                Access to over 17,000 Luxury Cars
              </p>
            </div>
            <div className={styles["feature-item"]}>
              <div className={styles["feature-box"]}>
                <Image
                  src="icons/tick.svg"
                  alt="Tick icon"
                  width={24}
                  height={24}
                />
              </div>
              <p className={styles["feature-text"]}>
                Global network of Car Dealers around the world
              </p>
            </div>
            <div className={styles["feature-item"]}>
              <div className={styles["feature-box"]}>
                <Image
                  src="icons/tick.svg"
                  alt="Tick icon"
                  width={24}
                  height={24}
                />
              </div>
              <p className={styles["feature-text"]}>
                Annual Revenue of $5.6 Million per year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
