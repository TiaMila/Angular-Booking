import { Component, OnInit } from '@angular/core';

import { Booking } from '../booking';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  //dependency injection
  constructor(private bookingService: BookingService) { }
  bookings :Booking[] = [];
 

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookins();
  }
  //nur bei Array und Mock-data so sonst id bzw DB
  //der service verändert die daten
  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking);

  }
}
