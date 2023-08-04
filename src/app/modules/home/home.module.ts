import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxStarRatingModule} from "ngx-star-rating";
import {BarRatingModule} from "ngx-bar-rating";
import {TranslateModule} from "@ngx-translate/core";
import {MatRadioModule} from "@angular/material/radio";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";
import {FilterPipe} from "../../pipes/filter.pipe";
@NgModule({
  declarations: [
    HomeComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatPaginatorModule,
    NgxStarRatingModule,
    BarRatingModule,
    MatTableModule,
    MatIconModule,
    TranslateModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    ProductCardComponent,
    NavBarComponent,
    FilterPipe
  ]
})
export class HomeModule { }
