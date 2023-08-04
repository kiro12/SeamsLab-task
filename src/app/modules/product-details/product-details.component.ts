import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalService} from "../../global.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {BarRatingModule} from "ngx-bar-rating";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, BarRatingModule, MatProgressSpinnerModule, MatButtonToggleModule, FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule , MatSnackBarModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product: any;
  loading = false
  selectedSize = 'large';
  count = 1;
  constructor(private activatedRoute: ActivatedRoute, private router: Router , private globalService:GlobalService, private _snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.loading = true
    this.activatedRoute.params.subscribe(params => {
      this.globalService.getProductById(params['id']).subscribe((res: any) => {
        this.product = res;
        this.loading = false
      })
      console.log(params['id']);
    });
  }
  addToCart() {
    this.globalService.cartCount.next(this.globalService.cartCount.value + this.count)
    this._snackBar.open('Products is added to cart successfully', 'Success', {panelClass: 'success-snackbar' , duration: 2000})

    localStorage.setItem('cartCount', this.globalService.cartCount.value.toString())
  }

}
