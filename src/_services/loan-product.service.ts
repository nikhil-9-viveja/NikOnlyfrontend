import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanProduct } from '../_models/loans.model';

@Injectable({
  providedIn: 'root'
})
export class LoanProductService {
  private apiUrl = 'https://localhost:7001/api/LoanProduct';

  constructor(private http: HttpClient) {}

  // getAll(): Observable<LoanProduct[]> {
  //   return this.http.get<LoanProduct[]>(this.apiUrl);
  // }

  getAll(includeInactive: boolean = true): Observable<LoanProduct[]> {
    // return this.http.get<LoanProduct[]>(${this.apiUrl}?includeInactive=${includeInactive});
    return this.http.get<LoanProduct[]>(`${this.apiUrl}?includeInactive=${includeInactive}`);
  }

  // update(id: number, data: any): Observable<LoanProduct> {
  //   return this.http.put<LoanProduct>(`${this.apiUrl}/${id}`, data);
  // }

  deactivate(id: number): Observable<any> {
//     return this.http.delete<any>(`https://localhost:7001/api/LoanProduct/${id}/status
// `);
return this.http.put<any>(`https://localhost:7001/api/LoanProduct/${id}/status`,{});
  }

  getById(id: number):Observable<LoanProduct> {
    return this.http.get<LoanProduct>(`${this.apiUrl}/${id}`);
  }

  getPersonalLoanById(id: number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updatePersonalLoan(id: number, data: any):Observable<any> {
    return this.http.put<any>(`https://localhost:7001/api/LoanProduct/personal/${id}`, data);
  }

  getHomeLoanById(id: number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  } 
  
  updateHomeLoan(id: number, data: any):Observable<any> {
    return this.http.put<any>(`https://localhost:7001/api/LoanProduct/home/${id}`, data);
  } 
  getGoldLoanById(id: number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateGoldLoan(id: number, data: any):Observable<any> {
    return this.http.put<any>(`https://localhost:7001/api/LoanProduct/gold/${id}`, data);
  } 
  
  toggleStatus(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/status`, {});
  }
}