import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeMachineService {

  private messageSource = new BehaviorSubject('no selection');
  selectedMachine = this.messageSource.asObservable();

  public setSelectedMachine(selected:string){
    this.messageSource.next(selected);
  }

  constructor() { }
}
