import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { clothParent } from "./clothing";
import { clothChild } from "./clothing-samp";
//import { ClothingMessageService} from './clothingmessage.service';
//import { ClothingComponent} from './clorhing/clothing.component';
@Injectable({
    providedIn: 'root'
})
export class ClothingService {
    constructor(
        private router: Router,

    ) { }

    getClothings(): Observable<clothParent []> {
        return of (clothChild);
    }

    getclothParent(id: number | string){
        return this.getClothings().pipe(
            map ((clothing: clothParent[])=>
            clothing.find (clothing =>clothing.id === +id)!)
        );
    }
    getClothing() {
        throw new Error("Method not implemented.");
    }
    addCloth(clothing : clothParent){ }
    clearCloth() {}
}