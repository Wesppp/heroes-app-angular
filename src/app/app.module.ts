import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesComponent } from './main-app/heroes/heroes.component';
import { HeroDetailComponent } from './main-app/hero-detail/hero-detail.component';
import { HeroService } from "./hero.service";
import { MessagesComponent } from './main-app/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './main-app/dashboard/dashboard.component';
import { HeroSearchComponent } from './main-app/hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import {MatIconModule} from "@angular/material/icon";
import { NavComponent } from './main-app/nav/nav.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { RestorePasswordComponent } from './auth/restore-password/restore-password.component';
import {AuthGuard} from "./auth/auth.guard";
import { UsersCRUDComponent } from './main-app/users-crud/users-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginFormComponent,
    NavComponent,
    RegistrationComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    RestorePasswordComponent,
    UsersCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatIconModule,
    CommonModule,
    FormsModule
  ],
  providers: [HeroService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
