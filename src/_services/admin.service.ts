import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../_models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

   private url="http://localhost:3000/LoanProducts"

  constructor(private http:HttpClient) { }

  getLoanProducts():Observable<any>{
    return this.http.get<any>(this.url)
  }
}
