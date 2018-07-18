import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from '../typescripts/free';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs'
//import all portal components
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcctBalanceComponent } from './acct-balance/acct-balance.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';


export const portalRoute: Routes = [
   { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
   { path: 'dashboard', component: DashboardComponent },
   { path: 'balance', component: AcctBalanceComponent},
   { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
    NgxCarouselModule
  ],
  declarations: [
    PortalComponent,
    DashboardComponent,
    AcctBalanceComponent,
    SideNavComponent,
    TopNavComponent,
  ],
  exports: [
    PortalComponent,
    DashboardComponent,
    AcctBalanceComponent,
  ]
})
export class PortalModule { }
