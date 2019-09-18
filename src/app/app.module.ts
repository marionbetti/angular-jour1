import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier.component';
import { DeuxiemeComponent } from './deuxieme.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';
import { QuatriemeComponent } from './quatrieme/quatrieme.component';
import { ProduitService } from './produit.service';
import { CommentairesService } from './commentaires.service';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    TroisiemeComponent,
    QuatriemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProduitService,
    CommentairesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
