import "./app.scss"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="page-container">
      <section className="how-it-works section">
        <header>
          <h2 className="headline">How It Works</h2>
          <h1 className="heading">Drive away with more than just a car</h1>
        </header>

        <nav className="steps">
          <div className="step">
            <a href="#find" className="nav-link">
              <Image
                src="icons/search.svg"
                alt="Search icon"
                width={20}
                height={20}
              />
              Find a car
            </a>
          </div>
          <div className="step">
            <a href="#find" className="nav-link">
              <Image
                src="icons/contact.svg"
                alt="Contact icon"
                width={20}
                height={20}
              />
              Contact us
            </a>
          </div>
          <div className="step">
            <a href="#find" className="nav-link">
              <Image
                src="icons/check.svg"
                alt="Check icon"
                width={20}
                height={20}
              />
              Test drive
            </a>
          </div>
          <div className="step">
            <a href="#find" className="nav-link">
              <Image
                src="icons/bitcoin.svg"
                alt="Pay icon"
                width={20}
                height={20}
              />
              Pay with crypto
            </a>
          </div>
          <div className="step">
            <a href="#find" className="nav-link">
              <Image
                src="icons/car.svg"
                alt="Car icon"
                width={20}
                height={20}
              />
              Drive away
            </a>
          </div>
        </nav>

        <div className="process-container">
          <div className="process-step">
            <div className="step-number">1</div>
            <p className="step-description">
              Find your dream car. Explore the vast selection of over 20,000
              cars on our listings page.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <p className="step-description">
              Contact us via email, WhatsApp, or on the phone and have a
              CryptoAutos representative run you through the buying process and
              arranging a test drive. Once you’re happy, you can reserve your
              vehicle.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <p className="step-description">
              Process payment for the vehicle with your chosen cryptocurrency
              and CryptoAutos will settle the invoice with the dealership.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <p className="step-description">
              Collect your vehicle from the dealership for the final handover.
            </p>
          </div>
        </div>

        <div className="vision-container">
          <p>
            Our vision is to create a{" "}
            <span className="highlight-text">
              global network of hyper-personal crypto concierge services
            </span>{" "}
            that support our communities lifestyle in a transparent, trusted and
            seamless way. With our combined expertise in both the automotive and
            crypto industries we are creating a{" "}
            <span className="highlight-text">true service of the future</span>.
          </p>
        </div>
      </section>

      <section className="results-so-far p-6 bg-white text-black section">
        <header>
          <h2 className="headline">Results so far</h2>
          <h1 className="heading">Drive away with more than just a car</h1>
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
            <p className="financial-description">
              Crypto Automotive Market Cap
            </p>
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

        <div className="promo-card bg-black">
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

        <div>
          <h1 className="heading">
            We recently acquired AutoCoin Cars to bolster our network and
            offering
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
      </section>
    </main>
  )
}
