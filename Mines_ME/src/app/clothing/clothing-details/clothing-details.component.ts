import { switchMap } from "rxjs/operators";
import { Component, OnInit} from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from "rxjs";

import { ClothingService } from "../clothing.service";
import { clothParent } from "../clothing";

@Component({
  selector: 'app-clothing-details',
  templateUrl: './clothing-details.component.html',
  styleUrls: ['./clothing-details.component.css']
})
export class ClothingDetailsComponent implements OnInit {
  page_title = "Cloth Details"
  clothings$!: Observable<clothParent>
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private clothingService: ClothingService
  ) { }
  ngOnInit(): void {
    this.clothings$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.clothingService.getclothParent(params.get('id')!))
    );
  }
 
}