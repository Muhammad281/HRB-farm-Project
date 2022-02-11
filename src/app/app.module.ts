import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactusComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SwiperModule
     SwiperModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
