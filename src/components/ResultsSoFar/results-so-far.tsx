import "./results-so-far.scss"
import Image from "next/image"

export const ResultsSoFar = () => (
  <section className="section section--results">
    <header>
      <h2 className="headline">Results so far</h2>
    </header>

    <div className="financial-container">
      <div className="financial-card">
        <h3 className="financial-value">$4.17T</h3>
        <p className="financial-description">Automotive Market Cap</p>
      </div>
      <div className="financial-card">
        <h3 className="financial-value">$53m</h3>
        <p className="financial-description">Volume to date</p>
      </div>
      <div className="financial-card">
        <h3 className="financial-value">$15.75m</h3>
        <p className="financial-description">Transaction volume 2023</p>
      </div>
      <div className="financial-card">
        <h3 className="financial-value">5.5%</h3>
        <p className="financial-description">Our average margin</p>
      </div>
      <div className="financial-card">
        <h3 className="financial-value">$1b</h3>
        <p className="financial-description">Crypto Automotive Market Cap</p>
      </div>
      <div className="financial-card">
        <h3 className="financial-value">$4.4m</h3>
        <p className="financial-description">Highest transaction</p>
        <p className="financial-tag">LA-FERRARI</p>
      </div>
      <div className="financial-card">
        <h3 className="financial-value">$4.4m</h3>
        <p className="financial-description">Highest transaction</p>
        <p className="financial-tag">FIAT 500</p>
      </div>
    </div>

    <div className="promo-container">
      <div className="promo-card">
        <div className="promo-content">
          <Image
            src="icons/coin.svg"
            alt="AutoCoinCars icon"
            width={55}
            height={55}
            className="promo-logo"
          />
          <Image
            src="icons/logo.svg"
            alt="AutoCoinCars icon"
            width={217}
            height={24}
            className="promo-logo"
          />
        </div>
      </div>

      <div className="promo-info">
        <h1 className="heading heading--promo">
          We recently acquired AutoCoin Cars to bolster our network and offering
        </h1>

        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-box">
              <Image
                src="icons/tick.svg"
                alt="Tick icon"
                width={24}
                height={24}
              />
            </div>
            <p className="feature-text">Access to over 17,000 Luxury Cars</p>
          </div>
          <div className="feature-item">
            <div className="feature-box">
              <Image
                src="icons/tick.svg"
                alt="Tick icon"
                width={24}
                height={24}
              />
            </div>
            <p className="feature-text">
              Global network of Car Dealers around the world
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-box">
              <Image
                src="icons/tick.svg"
                alt="Tick icon"
                width={24}
                height={24}
              />
            </div>
            <p className="feature-text">
              Annual Revenue of $5.6 Million per year.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
