import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
      //mockdata rein pasten
      const bookings: Booking[] = [
        {
          id: 1,
          name: "Jan A",
          roomnumber: 100,
          startDate: new Date(),
          endDate: new Date("2024-07-02")
        },
        {
          id: 2,
          name: "Jani B",
          roomnumber: 101,
          startDate: new Date("2023-07-09"),
          endDate: new Date("2024-14-02")
        },
        {
          id: 3,
          name: "Ja C",
          roomnumber: 102,
          startDate: new Date(),
          endDate: new Date("2024-07-06")
        },
        {
          id: 4,
          name: "Jan A",
          roomnumber: 105,
          startDate: new Date("2024-01-09"),
          endDate: new Date("2024-07-09")
        }

      ];
      return bookings;
    }
}
