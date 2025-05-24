import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  LoanEnquiries=[
  {
    "Name": "Ravi Kumar",
    "PhoneNumber": "9876543210",
    "LoanAmountRequired": 500000.00,
    "LoanPurpose": "Home Renovation",
    "CreatedAt": "2025-05-23T10:30:00"
  },
  {
    "Name": "Anjali Sharma",
    "PhoneNumber": "9123456789",
    "LoanAmountRequired": 250000.00,
    "LoanPurpose": "Medical Expenses",
    "CreatedAt": "2025-05-22T15:45:00"
  },
  {
    "Name": "Suresh Mehta",
    "PhoneNumber": "9988776655",
    "LoanAmountRequired": 750000.00,
    "LoanPurpose": "Business Expansion",
    "CreatedAt": "2025-05-21T11:20:00"
  },
  {
    "Name": "Priya Desai",
    "PhoneNumber": "8899001122",
    "LoanAmountRequired": 1200000.00,
    "LoanPurpose": "New House Purchase",
    "CreatedAt": "2025-05-20T09:10:00"
  },
  {
    "Name": "Karan Patel",
    "PhoneNumber": "9011223344",
    "LoanAmountRequired": 300000.00,
    "LoanPurpose": "Education Loan",
    "CreatedAt": "2025-05-19T16:05:00"
  }
]
private url="https://localhost:7194/api/admin/users/register"


  constructor(private http:HttpClient) { }

  getLoanEnquires(){
    return this.LoanEnquiries;
  }
  getAllUsers():Observable<any>{
    return this.http.get<any>("https://localhost:7194/api/admin/users")
  }
  getUsers(user:any):Observable<any>{
    return this.http.post<any>(this.url,user)
  }
 
  
  
  
}
