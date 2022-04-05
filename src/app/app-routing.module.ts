import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './pages/main-app/heroes/heroes.component';
import {DashboardComponent} from "./pages/main-app/dashboard/dashboard.component";
import {HeroDetailComponent} from './pages/main-app/hero-detail/hero-detail.component';
import {LoginFormComponent} from "./pages/auth/login-form/login-form.component";
import {RegistrationComponent} from "./pages/auth/registration/registration.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {AppLayoutComponent} from "./shared/layouts/app-layout/app-layout.component";
import {RestorePasswordComponent} from "./pages/auth/restore-password/restore-password.component";
import {AuthGuard} from "./pages/auth/auth.guard";
import {UsersCRUDComponent} from "./pages/main-app/users-crud/users-crud.component";
import {CaptchaComponent} from "./pages/auth/captcha/captcha.component";
import {MessagesComponent} from "./pages/main-app/messages/messages.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login-form', pathMatch: 'full'},
      {path: 'login-form', component: LoginFormComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'restore-password', component: RestorePasswordComponent},
      {path: 'captcha', component: CaptchaComponent}
    ]
  },
  {
    path: '', component: AppLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'heroes', component: HeroesComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'detail/:id', component: HeroDetailComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'users-crud', component: UsersCRUDComponent, data: {roles: ['admin']}}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
