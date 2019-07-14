import{Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';


export const appRouter : Routes =[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminComponent,canActivate:[ActivateGuard]},
    {path:'merchant',component:MerchantComponent,canDeactivate:[DeactivateGuard]}
];