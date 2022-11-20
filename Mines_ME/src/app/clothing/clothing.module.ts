import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ClothingDetailsComponent } from './clothing-details/clothing-details.component';
import { ClothingRoutingModule } from './clothing-routing.module';
import { ClothingListComponent } from './clothing-list/clothing-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClothingRoutingModule
  ],
  declarations: [
    ClothingListComponent,
    ClothingDetailsComponent
  ]
})
export class ClothingModule {}