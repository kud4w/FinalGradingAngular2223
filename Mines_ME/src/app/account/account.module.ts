import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountListComponent,
    AccountDetailsComponent
  ]
})
export class AccountModule {}