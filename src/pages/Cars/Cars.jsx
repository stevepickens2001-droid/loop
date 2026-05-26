import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import cars from '../../assets/data/cars.json';

const Cars = () => {
  const heroImage = images['hero-city-night.jpg'];

  return (
    <div className="cars-page">
      <header style={{ 
        padding: '6rem 0', 
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
        marginBottom: '4rem'
      }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(27, 58, 92, 0.7)' 
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Browse Our Fleet</h1>
          <p style={{ color: 'var(--color-off-white)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Choose from a wide variety of premium vehicles. All available with our "drive now, pay later" model.
          </p>
        </div>
      </header>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {cars.map(car => (
            <div key={car.id} className="card">
              <div style={{ 
                height: '240px', 
                background: '#eee', 
                backgroundImage: `url(${images[car.image]})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}>
                {!car.image && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>No Image Available</div>}
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ margin: 0 }}>{car.name}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-slate-gray)', textTransform: 'uppercase', letterSpacing: '1px' }}>{car.brand} &bull; {car.type}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: 'var(--color-teal)', fontSize: '1.25rem', fontWeight: '800' }}>${car.rate_per_day}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-gray)' }}>per day</div>
                  </div>
                </div>
                <p style={{ color: 'var(--color-dark-slate)', fontSize: '0.95rem', margin: '1rem 0 2rem', minHeight: '3rem' }}>{car.description}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link to={`/cars/${car.id}`} className="btn-secondary" style={{ flex: 1, textAlign: 'center', padding: '10px' }}>Details</Link>
                  <Link to={`/book/${car.id}`} className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '10px' }}>Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
