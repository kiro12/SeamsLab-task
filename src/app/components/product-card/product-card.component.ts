import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from "@angular/material/tooltip";
import {BarRatingModule} from "ngx-bar-rating";
import {fadeInDownOnEnterAnimation, fadeOutUpOnLeaveAnimation} from "angular-animations";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, BarRatingModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation({anchor: 'enter', duration: 1000, translate: '30px'}),
    fadeOutUpOnLeaveAnimation({anchor: 'leave', duration: 400, translate: '30px'}),
  ],
})
export class ProductCardComponent {
@Input() product: any;
}
