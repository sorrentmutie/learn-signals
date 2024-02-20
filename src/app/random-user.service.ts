import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { RootObject } from './models'; 
import { toSignal} from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  reqResSignal: Signal<RootObject | undefined>
   = signal(undefined);

  getData(){
    const reqResObservable = this.http.get<RootObject>("https://reqres.in/api/users?page=2");
    this.reqResSignal = toSignal(reqResObservable,
       {initialValue: undefined})


  }

  constructor(private http: HttpClient) { }
}
