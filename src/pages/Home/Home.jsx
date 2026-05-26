import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import cars from '../../assets/data/cars.json';

const Home = () => {
  const featuredCars = cars.slice(0, 3);
  const heroImage = images['hero-car-highway.jpg'];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ 
        height: '80vh', 
        position: 'relative', 
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: 'linear-gradient(90deg, var(--color-primary-navy) 0%, rgba(27, 58, 92, 0.5) 50%, transparent 100%)' 
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Drive now, pay later.</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--color-off-white)' }}>
              Freedom without friction. Rent the car of your dreams today and settle the payment after your journey ends.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/cars" className="btn-cta" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Browse Fleet</Link>
              <Link to="/manage" className="btn-secondary" style={{ color: 'white', borderColor: 'white', fontSize: '1.1rem', padding: '1rem 2rem' }}>My Bookings</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>How Loop Works</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { title: 'Pick a Car', desc: 'Select from our curated fleet of premium vehicles.' },
              { title: 'Drive', desc: 'Pick up your car and hit the road. No upfront payment required.' },
              { title: 'Return & Pay', desc: 'Return the car and pay for your rental only when you are done.' }
            ].map((step, i) => (
              <div key={i} style={{ flex: '1 1 300px', textAlign: 'center' }}>
                <div style={{ 
                  width: '60px', height: '60px', 
                  background: 'var(--color-teal)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  margin: '0 auto 1.5rem'
                }}>{i + 1}</div>
                <h3>{step.title}</h3>
                <p style={{ color: 'var(--color-slate-gray)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Featured Fleet</h2>
              <p style={{ color: 'var(--color-slate-gray)', margin: 0 }}>Discover our most popular rentals this week.</p>
            </div>
            <Link to="/cars" style={{ fontWeight: '600' }}>View All Cars &rarr;</Link>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {featuredCars.map(car => (
              <div key={car.id} className="card" style={{ flex: '1 1 350px' }}>
                <div style={{ height: '220px', background: '#eee', backgroundImage: `url(${images[car.image]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0 }}>{car.name}</h3>
                    <span style={{ color: 'var(--color-teal)', fontWeight: '700' }}>${car.rate_per_day}/day</span>
                  </div>
                  <p style={{ color: 'var(--color-slate-gray)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{car.description}</p>
                  <Link to={`/cars/${car.id}`} className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
