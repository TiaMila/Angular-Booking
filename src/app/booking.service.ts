import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Bookings } from './mock-bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookins(): Booking[] {
    return Bookings;
  }

  getBookingById(id: number):Booking {
    var bookingById = Bookings.find(b => b.id == id)!;
    return bookingById;
  }

  deleteBooking(booking: Booking): void {
    var index = Bookings.indexOf(booking);

    Bookings.splice(index, 1);
  }

  addBokking(booking : Booking): void {
    Bookings.push(booking)
  }

  updateBooking(booking: Booking): void {
    var currentBookin = this.getBookingById(booking.id)
    currentBookin = booking;
  }

}
