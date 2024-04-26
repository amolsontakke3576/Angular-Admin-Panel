import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, LandingPageComponent, PublicRoutingModule
  ]
})
export class PublicModule { }
