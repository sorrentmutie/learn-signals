import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  customers: Customer[] = [];
  constructor(public service: CustomersService){
    this.service.customers$.subscribe(
      customer => this.customers.push(customer)
    )
  }
}
