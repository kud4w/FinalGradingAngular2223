import {Injectable} from '@angular/core';
import{ PreloadingStrategy, Route } from '@angular/router';
import {Observable, of} from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
    PreloadingModules: String [] = [];
    preload (route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data?.['preload'] && route.path !=null){
            //add the route path to the preloaded module array
            this.PreloadingModules.push(route.path);
            //log the route to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }else{
            return of (null);

        }

    }
}