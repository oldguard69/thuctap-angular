import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SharedModule } from '../shared/shared.module';
import { DescriptionComponent } from './components/description/description.component';
import { DescriptionCardComponent } from './components/description/description-card/description-card.component';
import { ProductCardActionComponent } from './components/product-card-action/product-card-action.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LandingIndexComponent } from './components/landing-index/landing-index.component';
import { HorizontalNavButtonComponent } from './components/horizontal-nav-button/horizontal-nav-button.component';
import { StarsComponent } from './components/stars/stars.component';
import { BoxCountdownComponent } from './components/box-countdown/box-countdown.component';
import { TodayDealsSectionComponent } from './components/today-deals-section/today-deals-section.component';
import { TodaydealsProductCardComponent } from './components/today-deals-section/todaydeals-product-card/todaydeals-product-card.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { LatestBlogsSectionComponent } from './components/latest-blogs-section/latest-blogs-section.component';
import { LatestBlogsCardComponent } from './components/latest-blogs-section/latest-blogs-card/latest-blogs-card.component';
import { FeatureProductsSectionComponent } from './components/feature-products-section/feature-products-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { BestSellerSectionComponent } from './components/best-seller-section/best-seller-section.component';
import { BestSellerCardComponent } from './components/best-seller-section/best-seller-card/best-seller-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { FeatureProductCardComponent } from './components/feature-products-section/feature-product-card/feature-product-card.component';
import { SwiperModule } from 'swiper/angular';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ThreeIconsComponent } from './components/header-section/three-icons/three-icons.component';
import { CategoriesNavComponent } from './components/header-section/categories-nav/categories-nav.component';
import { HamburgerMenuDropdownComponent } from './components/header-section/hamburger-menu-dropdown/hamburger-menu-dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
    DescriptionComponent,
    DescriptionCardComponent,
    ProductCardActionComponent,
    ProductCardComponent,
    LandingIndexComponent,
    HorizontalNavButtonComponent,
    StarsComponent,
    BoxCountdownComponent,
    TodayDealsSectionComponent,
    TodaydealsProductCardComponent,
    ProductPriceComponent,
    LatestBlogsSectionComponent,
    LatestBlogsCardComponent,
    FeatureProductsSectionComponent,
    HeaderSectionComponent,
    BestSellerSectionComponent,
    BestSellerCardComponent,
    SectionTitleComponent,
    FeatureProductCardComponent,
    ProductCarouselComponent,
    ThreeIconsComponent,
    CategoriesNavComponent,
    HamburgerMenuDropdownComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SharedModule, SwiperModule],
})
export class LandingModule {}