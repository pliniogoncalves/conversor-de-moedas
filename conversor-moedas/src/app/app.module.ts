import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
