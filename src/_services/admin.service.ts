import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../_models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  LoanProducts= [
   {
      "LoanProductId": 1,
      "ImageUrl": "https://www.axisbank.com/images/default-source/progress-with-us_new/minimum-and-maximum-tenure-for-home-loans.jpg?sfvrsn=fb221c56_2",
      "Title": "Home Loan",
      "Description": "Affordable home loans with flexible repayment options.",
      "MaxLoanAmount": 5000000.00
    },
    {
      "LoanProductId": 2,
      "ImageUrl": "https://www.indusind.com/iblogs/wp-content/uploads/Apply-Instant-Personal-Loan-in-1-Hour-in-Emergency-min.jpg",
      "Title": "Personal Loan",
      "Description": "Quick personal loans for your immediate needs.",
      "MaxLoanAmount": 1000000.00
    },
    {
      "LoanProductId": 3,
      "ImageUrl": "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/blog/what-is-the-process-of-pledging-your-gold-to-secure-high-value-d.webp",
      "Title": "Gold Loan",
      "Description": "Instant loans against your gold assets.",
      "MaxLoanAmount": 2000000.00
    }

  ]

  constructor() { }

  getLoanProducts(){
    return this.LoanProducts
  }
}
