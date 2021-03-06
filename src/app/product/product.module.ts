import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SharedModule } from '../shared/shared.module';


import { ProductRoutingModule } from './product-routing.module';
import { CardActionComponent } from './components/card-action/card-action.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { HorizontalProductCardComponent } from './components/horizontal-product-card/horizontal-product-card.component';
import { VerticalProductCardComponent } from './components/vertical-product-card/vertical-product-card.component';
import { CardActionContainerDirective } from './directives/card-action-container.directive';
import { HorizontalNavButtonComponent } from './components/horizontal-nav-button/horizontal-nav-button.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';

@NgModule({
  declarations: [
    CardActionComponent,
    ProductPriceComponent,
    StarRatingComponent,
    HorizontalProductCardComponent,
    VerticalProductCardComponent,
    CardActionContainerDirective,
    HorizontalNavButtonComponent,
    ProductCarouselComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NzToolTipModule,
    SharedModule
  ],
  exports: [
    ProductCarouselComponent,
    StarRatingComponent,
    ProductPriceComponent,
    CardActionComponent,
    VerticalProductCardComponent,
    HorizontalProductCardComponent,
    CardActionContainerDirective,
  ]
})
export class ProductModule { }
