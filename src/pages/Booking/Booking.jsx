import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { images } from '../../assets/images';
import cars from '../../assets/data/cars.json';

const Booking = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);
  const heroImage = images['hero-key-fob.jpg'];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: ''
  });

  if (!car) return <div className="container">Car not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate team-db insertion
    const totalAmount = car.rate_per_day * 5; // Placeholder days calculation
    const sql = `INSERT INTO bookings VALUES ('book-' || strftime('%s','now'), '${car.id}', '${formData.name}', '${formData.email}', '${formData.phone}', '${formData.startDate}', '${formData.endDate}', 'active', ${totalAmount})`;
    console.log('Executing:', sql);
    
    // In this MVP environment, we just show success. 
    // A production app would fetch a real API endpoint.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center', maxWidth: '800px' }}>
        <div className="card" style={{ padding: '4rem 2rem' }}>
          <div style={{ 
            width: '80px', height: '80px', 
            background: '#dcfce7', color: '#166534', 
            borderRadius: '50%', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', 
            fontSize: '2rem', margin: '0 auto 2rem' 
          }}>&check;</div>
          <h1>Booking Confirmed!</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Thank you, {formData.name}. Your booking for the {car.brand} {car.name} has been received. 
            No payment is due until you return the vehicle.
          </p>
          <div style={{ 
            height: '300px', 
            backgroundImage: `url(${heroImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            borderRadius: 'var(--radius-md)',
            marginBottom: '2.5rem'
          }}></div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/" className="btn-primary">Return Home</Link>
            <Link to="/manage" className="btn-secondary">Manage Bookings</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page" style={{ padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Complete Your Booking</h1>
        <p style={{ marginBottom: '3rem', color: 'var(--color-slate-gray)' }}>
          You're just one step away from the road. No credit card required.
        </p>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          {/* Form */}
          <div style={{ flex: '2 1 500px' }}>
            <form onSubmit={handleSubmit} className="card" style={{ padding: '2.5rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="(555) 000-0000"
                    style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Start Date</label>
                  <input 
                    type="date" 
                    required
                    style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>End Date</label>
                  <input 
                    type="date" 
                    required
                    style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  />
                </div>
              </div>
              <button type="submit" className="btn-cta" style={{ width: '100%', fontSize: '1.2rem', padding: '1.25rem' }}>
                Confirm Booking
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-slate-gray)', marginTop: '1.5rem' }}>
                By clicking "Confirm Booking", you agree to Loop's Terms of Service.
              </p>
            </form>
          </div>

          {/* Summary */}
          <div style={{ flex: '1 1 300px' }}>
            <div className="card" style={{ padding: '2rem', background: 'var(--color-off-white)', position: 'sticky', top: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Rental Summary</h3>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '100px', height: '70px', background: '#eee', backgroundImage: `url(${images[car.image]})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-sm)' }}></div>
                <div>
                  <div style={{ fontWeight: '700' }}>{car.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-gray)' }}>{car.brand} &bull; {car.type}</div>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span>Price per day</span>
                  <span style={{ fontWeight: '600' }}>${car.rate_per_day}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <span>Insurance</span>
                  <span style={{ color: '#16a34a', fontWeight: '600' }}>Included</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '800', color: 'var(--color-primary-navy)' }}>
                  <span>Total Estimated</span>
                  <span>Due Later</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
