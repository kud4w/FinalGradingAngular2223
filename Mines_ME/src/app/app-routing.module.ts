import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
const appRoutes: Routes=[
  {path: '', redirectTo: '/clothings', pathMatch: 'full'},
]
@NgModule({
  imports: [
    RouterModule.forRoot(
       appRoutes,
        {
            enableTracing: false, //for debugging
            preloadingStrategy: SelectivePreloadingStrategyService,
        }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }