import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './components/logo/logo.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroComponent,
    MainNavComponent,
    LogoComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    HeroComponent,
    MainNavComponent,
    LogoComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class HomeModule {}
