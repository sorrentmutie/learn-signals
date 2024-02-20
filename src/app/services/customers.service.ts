import { Injectable, WritableSignal, signal } from '@angular/core';
import { Customer } from '../shared/customer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private subject: Subject<Customer> = new Subject<Customer>();
  customers$ = this.subject.asObservable();
  private myInterval: any;
  count = signal(1);

  customer : WritableSignal<Customer> 
  = signal ( {name: "Mario Rossi" , city: "Rome"})  

  
  constructor() { }
  start() {
    
   this.myInterval = setInterval( () => {
      this.count.set(Math.random())
      this.subject.next( {  name: "name-" + Math.random(), city: "city-" + Math.random()})
    }, 2000)

  }

  stop(){
    clearInterval(this.myInterval);
  }

  update(){
    this.customer.update(c => {
       return { name: "Luigi Bianchi", city: "Naples"}
    })
  }

}
