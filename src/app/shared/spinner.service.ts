import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private count: 0;
  private readonly spinners$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getSpinnerObserver(): Observable<boolean> {
    return this.spinners$.asObservable();
  }

  requestStarted() {
    if(++this.count === 1) {
      this.spinners$.next(true);
    }
  }

  requesEnded() {
    if(this.count === 0 || --this.count === 0) {
      this.spinners$.next(false);
    }
  }

  resetSpinner() {
    this.count = 0;
    this.spinners$.next(false);
  }

}
