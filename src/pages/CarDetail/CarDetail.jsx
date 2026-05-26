import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { images } from '../../assets/images';
import cars from '../../assets/data/cars.json';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h1>Car Not Found</h1>
        <Link to="/cars" className="btn-primary">Back to Listings</Link>
      </div>
    );
  }

  return (
    <div className="car-detail-page" style={{ padding: '4rem 0' }}>
      <div className="container">
        <Link to="/cars" style={{ marginBottom: '2rem', display: 'inline-block' }}>&larr; Back to Listings</Link>
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          {/* Image Gallery */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ 
              height: '400px', 
              background: '#eee', 
              backgroundImage: `url(${images[car.image]})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '1rem'
            }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ height: '80px', background: '#eee', borderRadius: 'var(--radius-md)' }}></div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--color-teal)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{car.brand}</span>
              <h1 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>{car.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-primary-navy)' }}>${car.rate_per_day}</span>
                <span style={{ color: 'var(--color-slate-gray)' }}>/ day</span>
              </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3>Description</h3>
              <p style={{ color: 'var(--color-dark-slate)' }}>{car.description}</p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3>Specifications</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-gray)' }}>Type</div>
                  <div style={{ fontWeight: '600' }}>{car.type}</div>
                </div>
                <div style={{ padding: '1rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-gray)' }}>Performance</div>
                  <div style={{ fontWeight: '600' }}>{car.specs || 'N/A'}</div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--color-primary-navy)', padding: '2rem', borderRadius: 'var(--radius-lg)', color: 'white' }}>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Ready to drive?</h4>
              <p style={{ color: 'var(--color-slate-gray)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>No credit card required today. Pay only after your rental.</p>
              <button 
                onClick={() => navigate(`/book/${car.id}`)}
                className="btn-cta" 
                style={{ width: '100%', fontSize: '1.1rem' }}
              >
                Book This Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
