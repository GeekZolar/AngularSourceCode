import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//import all onboarding components
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  exports: [
    SigninComponent,
    SignupComponent,
  ]
})
export class OnboardingModule { }
