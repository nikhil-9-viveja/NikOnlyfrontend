import { Routes } from '@angular/router';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { RepaymentsComponent } from '../components/repayments/repayments.component';
import { AdduserComponent } from '../components/adduser/adduser.component';
import { UserstatusComponent } from '../components/userstatus/userstatus.component';
import { UsermessageComponent } from '../components/usermessage/usermessage.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { DocumentsComponent } from '../components/documents/documents.component';
import { CreateloanComponent } from '../components/createloan/createloan.component';
import { LoanTypesComponent } from '../components/loantype/loantype.component';
import { ReplaymentloanComponent } from '../components/replaymentloan/replaymentloan.component';
// import { FixeddepositComponent } from '../components/fixeddeposit/fixeddeposit.component';
import { FDTypeComponent } from '../components/fixeddeposit/fixeddeposit.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  { path: 'signin', component: SigninComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'repayment',
    component: RepaymentsComponent,
  },
  {
    path: 'repayment/user/:userId',
    component: ReplaymentloanComponent,
  },
  {
    path: 'repayment/loan/:loanId',
    component: ReplaymentloanComponent,
  },
  {
    path: 'adduser',
    component: AdduserComponent,
  },
  {
    path: 'userstatus',
    component: UserstatusComponent,
  },
  {
    path: 'usermessage',
    component: UsermessageComponent,
  },
  {
    path: 'documents',
    component: DocumentsComponent,
  },
  {
    path: 'createloan',
    component: CreateloanComponent,
  },
  {
    path: 'loantype',
    component: LoanTypesComponent,
  },
  {
    path:'fd',
    component:FDTypeComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
