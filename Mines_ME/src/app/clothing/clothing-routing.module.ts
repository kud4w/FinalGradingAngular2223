import { NgModule } from '@angular/core';
import {RouterModule, Routes }from '@angular/router';


import { ClothingDetailsComponent } from './clothing-details/clothing-details.component';
import { ClothingListComponent } from './clothing-list/clothing-list.component';

const clothingRoutes: Routes=[
    {path: 'clothes', redirectTo: '/clothes'},
    {path : 'clothings/:id', redirectTo: '/clothings/:id'},
    {path: 'clothes', component: ClothingListComponent},
    {path: 'clothings/:id', component: ClothingDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(clothingRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ClothingRoutingModule { }
