import { Component } from '@angular/core';
import { CustomersService } from './services/customers.service';
import { Customer } from './shared/customer';
import { Observable } from 'rxjs';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';

  constructor(public service: CustomersService,
    public randomUsers: RandomUserService) {
      this.randomUsers.getData();
  }

  start() {
    this.service.start();
  }

  stop(){
    this.service.stop();
  }



}
