import { Component, Signal, computed, signal } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  customers: Customer[] = [];

  computedCustomer: Signal<number | undefined>
    = signal(undefined);

  constructor(public service: CustomersService){
    this.service.customers$.subscribe(
      customer => this.customers.push(customer)
    )

    this.computedCustomer = computed(
      () => { return this.service.customer().name.length}
    )

  }

  update(){
    this.service.update()
  }
}
