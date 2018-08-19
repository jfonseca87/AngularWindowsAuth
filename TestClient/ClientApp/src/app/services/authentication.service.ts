import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private http: HttpClient) { }

  public getUser(): Observable<string> {
    console.log('Calling getUser');
    return this.http.get(`${environment.serviceBaseURL}WinAuth`)
               .pipe(
                 map((res: string) => {
                   return res
                 })
               )       
  }

  

}
