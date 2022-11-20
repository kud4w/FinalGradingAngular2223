import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

import {accountParent} from '../accounts';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-account',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [AccountService]
})
export class AccountListComponent implements OnInit{
  prodListTitle = 'Product Details';
  title = 'Accoun Management';
  account$!: Observable<accountParent []>;

  SelectedId = 0;
  constructor(
    private service: AccountService,
    private router: Router,
    private route: ActivatedRoute){
    }
ngOnInit(): void {
    this.account$ = this.route.paramMap.pipe(
        switchMap(params =>{
          this.SelectedId = parseInt(params.get('id')!, 6);
          return this.service.getAccounts();
        })
    );
}
    gotoAccount(account: accountParent) {
      const accountId = account ? account.id : null;
      this.router.navigate(['/account', {id: accountId, foo: 'foo'}]);
    }
}