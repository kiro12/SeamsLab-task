import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {GlobalService} from "../../../global.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit{
  categories: any[] = [];
  products: any[] = [];
  selectedCategory = '';
  loadingProducts = false
  selectedPrice:any = 'all'
  filterProducts: any[] = [];
  prices = [{minPrice: 0, maxPrice: 100}, {minPrice: 100, maxPrice: 200}, {minPrice: 200, maxPrice: 300}, {minPrice: 300, maxPrice: 400}, {minPrice: 400, maxPrice: 500} , {minPrice: 500, maxPrice: 600}]
  selectedSort = ''
  searchValue = ''
  constructor(private homeService: HomeService , public globalService:GlobalService , private router: Router) {
      const cartCount = localStorage.getItem('cartCount');
      this.globalService.cartCount.next(parseInt(cartCount ?? '0', 10))

  }

  ngOnInit() {
    this.loadingProducts = true

    this.homeService.getCategories().subscribe((categories: any[]) => {
      console.log(categories)
      this.categories = categories
      this.selectedCategory = 'all'
      this.changeCategory()
    });

  }
  changeCategory() {
    this.loadingProducts = true
    if(this.selectedCategory  !== 'all'){
      this.homeService.getProductsByCategory(this.selectedCategory).subscribe((products: any) => {
        this.products = products
        this.filterProducts = [...products]

        if(this.selectedSort === 'price'){
          this.sortProducts()
        }

        this.loadingProducts = false
      });
    } else {
      this.homeService.getAllProducts().subscribe((products: any[]) => {
        this.products = products
        this.filterProducts = [...products]

        if(this.selectedSort === 'price'){
          this.sortProducts()
        }

        this.loadingProducts = false

      })
    }

  }

  filterByPrice(price: any) {
    if(price === 'all'){
      this.products = this.filterProducts
      return;
    }
      this.products = this.filterProducts.filter((product) => product.price >= price.minPrice && product.price <= price.maxPrice);

  }
  sortProducts() {
    if (this.selectedSort === 'price') {
      this.products = this.products.sort((a, b) => a.price - b.price)
    }else{
      this.products =  [...this.filterProducts]
    }

  }
  logout() {
    localStorage.clear()
    this.globalService.isLoggedIn.next(false)
    this.router.navigate(['/login'])
  }

}
