import '../Styles/Collection.css'

function Collection() {
  return (
    <section id="collections" className="collection">
      <div className="collection-container">
        <h2 className="collection-title">Our Collections</h2>
        <p className="collection-subtitle">Explore our curated selection of elegant timepieces</p>
        
        <div className="collection-grid">
          <div className="collection-card">
            <div className="collection-image">
              <img src="https://via.placeholder.com/300x300?text=Men+Collection" alt="Men Collection" />
            </div>
            <h3>Men's Collection</h3>
            <p>Bold and sophisticated watches for the modern man</p>
            <button className="collection-btn">Explore</button>
          </div>

          <div className="collection-card">
            <div className="collection-image">
              <img src="https://via.placeholder.com/300x300?text=Women+Collection" alt="Women Collection" />
            </div>
            <h3>Women's Collection</h3>
            <p>Elegant and timeless designs for every occasion</p>
            <button className="collection-btn">Explore</button>
          </div>

          <div className="collection-card">
            <div className="collection-image">
              <img src="https://via.placeholder.com/300x300?text=Premium+Collection" alt="Premium Collection" />
            </div>
            <h3>Premium Collection</h3>
            <p>Luxury timepieces for the distinguished collector</p>
            <button className="collection-btn">Explore</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection
