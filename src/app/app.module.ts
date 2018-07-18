import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';

// import children routes from custom modules here
import { routes as onboardingRoutes, OnboardingModule } from './onboarding/onboarding.module';
import { portalRoute as portalRoutes, PortalModule } from './portal/portal.module';

// import for all components
import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PortalComponent } from './portal/portal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// services
import { AUTH_PROVIDERS } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

// Main app route is defined here
const routes: Routes = [
  // base route
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  { path: 'onboarding', component: OnboardingComponent,
    children: onboardingRoutes },
  { path: 'portal', 
    component: PortalComponent,
    children: portalRoutes,
    canActivate: [ AuthGuard ]
  },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    RouterModule.forRoot(routes), // <-- routes

    // Modules for child routes
    PortalModule,
    OnboardingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ AUTH_PROVIDERS, AuthGuard ],
  bootstrap: [AppComponent],
})
export class AppModule { }
