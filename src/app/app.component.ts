import { Component } from '@angular/core';
import { CustomersService } from './services/customers.service';
import { Customer } from './shared/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';

  constructor(public service: CustomersService) {
  }

  start() {
    this.service.start();
  }

  stop(){
    this.service.stop();
  }



}
