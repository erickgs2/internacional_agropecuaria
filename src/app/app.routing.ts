import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

// import { ComponentsComponent } from './components/components.component';
// import { ProfileComponent } from './examples/profile/profile.component';
// import { SignupComponent } from './examples/signup/signup.component';
// import { LandingComponent } from './examples/landing/landing.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio',              component: InicioComponent },
    { path: 'nosotros',            component: NosotrosComponent },
    // { path: 'home',             component: ComponentsComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'signup',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
