import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  {path: '', component: TemplateComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contactus',component: ContactusComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
