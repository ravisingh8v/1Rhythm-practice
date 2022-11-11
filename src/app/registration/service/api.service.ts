import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { registerModel } from '../model/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl: string
  constructor(private _http: HttpClient) {
    this.baseUrl = environment.URL
  }
  postNewUser(data: registerModel) {
    return this._http.post<registerModel>(this.baseUrl + 'users', data)
  }
}
