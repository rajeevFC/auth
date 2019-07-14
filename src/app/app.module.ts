import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MerchantComponent } from './merchant/merchant.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { appRouter } from './router';
import { ActivateGuard } from './activate.guard';
import { DeactivateGuard } from './deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MerchantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [UserService,ActivateGuard,DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
