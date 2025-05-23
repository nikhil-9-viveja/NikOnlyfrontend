import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
   emiPlan=[
    {
      title: '3 Months Plan',
      months: 3,
      interestRate: 12,
      description: 'Short-term loan with competitive interest rates'
    },
    {
      title: '6 Months Plan',
      months: 6,
      interestRate: 10.5,
      description: 'Medium-term loan with balanced interest rates'
    },
    {
      title: '12 Months Plan',
      months: 12,
      interestRate: 9.5,
      description: 'Long-term loan with attractive interest rates'
    }
  ]
  private url="http://localhost:3000/LoanApplication"

  constructor(private http:HttpClient) { }
  getEmiPlans(){
    return this.emiPlan
  }
  getLoansData():Observable<any>{
    return this.http.get<any>(this.url)

  }
}
