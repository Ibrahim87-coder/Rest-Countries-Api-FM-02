import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme{
  light='light',
  dark='dark',
}
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  mode: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.light);
  
  constructor() { }

  get mode$():Observable<Theme>{
    return this.mode.asObservable();
  }

  toggleMode(){
    if(this.mode.value === Theme.light){
      return this.mode.next(Theme.dark);
    }else {
      return this.mode.next(Theme.light)
    }
  }
}
