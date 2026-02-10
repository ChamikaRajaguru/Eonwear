import '../Styles/Home.css'

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Timeless Style for Every Moment</h1>
          <p className="hero-description">
            Crafted with precision and elegance, our watches are designed to complement every style—today and always.
          </p>
          <div className="button-group">
            <button className="btn btn-primary">Shop Men</button>
            <button className="btn btn-secondary">Shop Women</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400x400?text=Watch" alt="EONWEAR Watch" />
        </div>
      </div>
    </section>
  )
}

export default Home
