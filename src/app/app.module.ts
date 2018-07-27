import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './recipes/dropdown.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SuccessalertComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent ,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
