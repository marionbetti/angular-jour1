import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier.component';
import { DeuxiemeComponent } from './deuxieme.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';
import { QuatriemeComponent } from './quatrieme/quatrieme.component';
import { ProduitService } from './produit.service';
import { CommentairesService } from './commentaires.service';
import { BlogComponent } from './blog/blog.component';
import { DataBlogService } from './data-blog.service';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    TroisiemeComponent,
    QuatriemeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProduitService,
    CommentairesService,
    DataBlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
