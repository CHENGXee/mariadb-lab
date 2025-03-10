import { useState, useEffect } from 'react';
import { asyncGet } from '../utils/fetch';
import { reservations_api } from './enum/api';
import { Reservations } from './interface/Reservaiton';
import './App.css';

function App() {
  const [reservations, setReservations] = useState([]);
  const fetchReservation = async () => {
    try {
      const response = await asyncGet(reservations_api.list);
      setReservations(response.reservations)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReservation();
  }, [])  
  return (
    <div className="container">
      <h1>Reservation List</h1>
      <div className="grid-container">
        {reservations.map((res: Reservations, index) => (
          <div key={index} className="card">
            <p className="id">ID: {res.reservation_id}</p>
            <h2>Seat: {res.seat.row_label}-{res.seat.seat_number}</h2>
            <p className="student">
              🎓 <strong>{res.student.student_name}</strong> (ID: {res.student.student_id})
            </p>
            <p className="time">
              🕒 {res.timeslot.start_time} - {res.timeslot.end_time}
            </p>
            <p className="date">📅 {new Date(res.create_time).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
