import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { accountParent } from "./accounts";
import { accountChild } from "./account-samp";
//import { accountsMessageService} from './accountsmessage.service';
//import { accountsComponent} from './Accounts/account.component';
@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(
        private router: Router,

    ) { }

    getAccounts(): Observable<accountParent []> {
        return of (accountChild);
    }

    getaccountParent(id: number | string){
        return this.getAccounts().pipe(
            map ((account: accountParent[])=>
            account.find (account =>account.id === +id)!)
        );
    }
    getAccount() {
        throw new Error("Method not implemented.");
    }
    addAccount(account : accountParent){ }
    clearAccount() {}
}