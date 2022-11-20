import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothingService } from '../clothing.service';

import {clothParent} from '../clothing';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-clothing',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.css'],
  providers: [ClothingService]
})
export class ClothingListComponent implements OnInit{
  prodListTitle = 'Product Details';
  title = 'Mines Clothing Shop';
  clothing$!: Observable<clothParent []>;

  SelectedId = 0;
  constructor(
    private service: ClothingService,
    private router: Router,
    private route: ActivatedRoute){
    }
ngOnInit(): void {
    this.clothing$ = this.route.paramMap.pipe(
        switchMap(params =>{
          this.SelectedId = parseInt(params.get('id')!, 6);
          return this.service.getClothings();
        })
    );
}
    gotoClothing(clothing: clothParent) {
      const clothingId = clothing ? clothing.id : null;
      this.router.navigate(['/clothing', {id: clothingId, foo: 'foo'}]);
    }
}