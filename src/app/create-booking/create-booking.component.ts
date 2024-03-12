import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
;
import { Router,ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router,private achtivatedRoute: ActivatedRoute,private bookingService: BookingService) { }
  booking: Booking = {
    id: 100,
    name: "yourName",
    roomnumber: 1000,
    startDate: new Date(),
    endDate:new Date()

  }
  ngOnInit(): void {
    var id = Number(this.achtivatedRoute.snapshot.paramMap.get('id'));
    var bookingById = this.bookingService.getBookingById(id);
    this.booking = bookingById;
  }
  save(): void {
    var bookingById = this.bookingService.getBookingById(this.booking.id);
    //existiert dann bearbeiten sonst neu anlegen
    if (bookingById == null || bookingById == undefined) {
      this.bookingService.addBokking(this.booking)
    } else {
    this.bookingService.updateBooking(this.booking);
    }
    this.router.navigate(['bookings'])
  }
  dateChanged(event: Event, isStartDate: boolean) {
    var value = (event.target as HTMLInputElement).value

    if (isStartDate) {
      this.booking.startDate = new Date(value);
    } else {
      this.booking.endDate = new Date(value);
    }


  }
}
