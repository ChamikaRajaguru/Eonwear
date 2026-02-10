import '../Styles/Offer.css'

function Offer() {
  return (
    <section id="offers" className="offer">
      <div className="offer-container">
        <h2 className="offer-title">Special Offers</h2>
        <p className="offer-subtitle">Limited time deals on selected timepieces</p>
        
        <div className="offer-grid">
          <div className="offer-card">
            <div className="offer-badge">-20%</div>
            <div className="offer-image">
              <img src="src/assets/offer2.jpg" alt="Watch on Sale" />
            </div>
            <h3>Classic Elegance Watch</h3>
            <div className="offer-price">
              <span className="original-price">$299</span>
              <span className="sale-price">$239</span>
            </div>
            <button className="offer-btn">Add to Cart</button>
          </div>

          <div className="offer-card">
            <div className="offer-badge">-15%</div>
            <div className="offer-image">
              <img src="src/assets/offer1.jpg" alt="Watch Deal" />
            </div>
            <h3>Modern Minimalist</h3>
            <div className="offer-price">
              <span className="original-price">$349</span>
              <span className="sale-price">$296</span>
            </div>
            <button className="offer-btn">Add to Cart</button>
          </div>

          <div className="offer-card">
            <div className="offer-badge">-25%</div>
            <div className="offer-image">
              <img src="src/assets/offer3.jpg" alt="Special Watch" />
            </div>
            <h3>Premium Chronograph</h3>
            <div className="offer-price">
              <span className="original-price">$599</span>
              <span className="sale-price">$449</span>
            </div>
            <button className="offer-btn">Add to Cart</button>
          </div>

          <div className="offer-card">
            <div className="offer-badge">-30%</div>
            <div className="offer-image">
              <img src="src/assets/offer4.jpg" alt="Watch Discount" />
            </div>
            <h3>Luxury Edition</h3>
            <div className="offer-price">
              <span className="original-price">$899</span>
              <span className="sale-price">$629</span>
            </div>
            <button className="offer-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
