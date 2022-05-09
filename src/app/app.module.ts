import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './fake-bd/in-memory-data.service';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MatTableModule } from "@angular/material/table";
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/main-app/heroes/heroes.component';
import { HeroDetailComponent } from './pages/main-app/hero-detail/hero-detail.component';
import { HeroService } from "./shared/services/hero.service";
import { MessagesComponent } from './pages/main-app/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/main-app/dashboard/dashboard.component';
import { HeroSearchComponent } from './pages/main-app/hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import {MatIconModule} from "@angular/material/icon";
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { RestorePasswordComponent } from './pages/auth/restore-password/restore-password.component';
import {AuthGuard} from "./pages/auth/auth.guard";
import { UsersCRUDComponent } from './pages/main-app/users-crud/users-crud.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {UserCardComponent} from "./pages/main-app/users-crud/user-card/user-card.component";
import { FilterPipe } from './shared/pipes/filter.pipe';
import { CaptchaComponent } from './pages/auth/captcha/captcha.component';
import { HerroAddDialogComponent } from './pages/main-app/heroes/herro-add-dialog/herro-add-dialog.component';
import { UserAddDialogComponent } from './pages/main-app/users-crud/user-add-dialog/user-add-dialog.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
        LoginFormComponent,
        RegistrationComponent,
        AppLayoutComponent,
        AuthLayoutComponent,
        RestorePasswordComponent,
        UsersCRUDComponent,
        UserCardComponent,
        FilterPipe,
        CaptchaComponent,
        HerroAddDialogComponent,
        UserAddDialogComponent,
        ProgressSpinnerComponent,
        CustomInputComponent
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
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  providers: [HeroService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
