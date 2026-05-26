import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import cars from '../../assets/data/cars.json';
import bookingsData from '../../assets/data/bookings.json';

const Management = () => {
  // Use data from bookings.json if available, otherwise fallback to mock
  const [bookings, setBookings] = useState(bookingsData.length > 0 ? bookingsData : [
    {
      id: 'book-mock-1',
      car_id: 'car-1',
      customer_name: 'John Doe',
      customer_email: 'john@example.com',
      start_date: '2026-06-01',
      end_date: '2026-06-05',
      status: 'active',
      total_amount: 449.95
    }
  ]);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.map(b => b.id === id ? { ...b, status: 'cancelled' } : b));
    }
  };

  const getCar = (id) => cars.find(c => c.id === id);

  return (
    <div className="management-page" style={{ padding: '4rem 0' }}>
      <div className="container">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1>Fleet Management</h1>
            <p style={{ color: 'var(--color-slate-gray)' }}>Overview of all current and past rentals.</p>
          </div>
          <Link to="/cars" className="btn-primary">New Reservation</Link>
        </header>

        {bookings.length === 0 ? (
          <div className="card" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-slate-gray)' }}>No bookings found in the system.</p>
            <Link to="/cars" className="btn-cta" style={{ marginTop: '1rem', display: 'inline-block' }}>Browse Fleet</Link>
          </div>
        ) : (
          <div className="card" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ background: 'var(--color-primary-navy)', color: 'white' }}>
                <tr>
                  <th style={{ padding: '1rem 2rem' }}>Vehicle</th>
                  <th style={{ padding: '1rem' }}>Customer</th>
                  <th style={{ padding: '1rem' }}>Dates</th>
                  <th style={{ padding: '1rem' }}>Total</th>
                  <th style={{ padding: '1rem' }}>Status</th>
                  <th style={{ padding: '1rem 2rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => {
                  const car = getCar(booking.car_id);
                  
                  return (
                    <tr key={booking.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '1.5rem 2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ 
                            width: '60px', height: '40px', 
                            background: '#eee', 
                            backgroundImage: `url(${images[car?.image]})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center', 
                            borderRadius: '4px' 
                          }}></div>
                          <div>
                            <div style={{ fontWeight: '700' }}>{car?.name}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-slate-gray)' }}>{car?.brand}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '1.5rem 1rem' }}>
                        <div style={{ fontWeight: '600' }}>{booking.customer_name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-slate-gray)' }}>{booking.customer_email}</div>
                      </td>
                      <td style={{ padding: '1.5rem 1rem' }}>
                        <div style={{ fontSize: '0.9rem' }}>{booking.start_date} to {booking.end_date}</div>
                      </td>
                      <td style={{ padding: '1.5rem 1rem', fontWeight: '700' }}>
                        ${booking.total_amount}
                        <div style={{ fontSize: '0.7rem', fontWeight: '400', color: 'var(--color-slate-gray)' }}>Pay at return</div>
                      </td>
                      <td style={{ padding: '1.5rem 1rem' }}>
                        <span style={{ 
                          padding: '4px 12px', 
                          borderRadius: '20px', 
                          fontSize: '0.8rem', 
                          fontWeight: '600',
                          background: booking.status === 'active' ? '#dcfce7' : booking.status === 'cancelled' ? '#fef2f2' : '#f1f5f9',
                          color: booking.status === 'active' ? '#166534' : booking.status === 'cancelled' ? '#991b1b' : '#475569'
                        }}>
                          {booking.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '1.5rem 2rem', textAlign: 'right' }}>
                        {booking.status === 'active' && (
                          <button 
                            onClick={() => handleCancel(booking.id)}
                            style={{ background: 'none', border: 'none', color: '#ef4444', fontWeight: '600' }}
                          >
                            Cancel
                          </button>
                        )}
                        <Link to={`/cars/${booking.car_id}`} style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }}>View Car</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop: '4rem', padding: '2rem', background: '#eff6ff', borderRadius: 'var(--radius-lg)', border: '1px solid #dbeafe' }}>
          <h3 style={{ color: '#1e40af', marginBottom: '1rem' }}>Developer Note</h3>
          <p style={{ color: '#1e40af', margin: 0 }}>
            In this MVP, data is synced from **team-db** during the build process. To update the display, run `npm run sync-db`.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Management;
