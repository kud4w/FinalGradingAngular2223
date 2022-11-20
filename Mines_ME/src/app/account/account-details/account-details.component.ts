import { switchMap } from "rxjs/operators";
import { Component, OnInit} from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from "rxjs";

import { AccountService } from "../account.service";
import { accountParent } from "../accounts";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  page_title = "Accounts Details"
  accounts$!: Observable<accountParent>
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) { }
  ngOnInit(): void {
    this.accounts$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.accountService.getaccountParent(params.get('id')!))
    );
  }
 
}