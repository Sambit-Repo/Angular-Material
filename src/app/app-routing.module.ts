import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ListnGridComponent } from './listn-grid/listn-grid.component';
import { ExpPannelComponent } from './exp-pannel/exp-pannel.component';
import { CardTabComponent } from './card-tab/card-tab.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CrDpComponent } from './cr-dp/cr-dp.component';
import { TooltipSnackbarComponent } from './tooltip-snackbar/tooltip-snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DtOperationsComponent } from './dt-operations/dt-operations.component';
import { VirtuaScrollingComponent } from './virtua-scrolling/virtua-scrolling.component';


const routes: Routes = [
  {
    path:"tg",
    component:TypographyComponent
  },
  {
    path:"btn",
    component:ButtonComponent
  },
  {
    path:"tb",
    component:TogglebuttonComponent
  },
  {
    path:"bg",
    component:BadgeComponent
  },
  {
    path:"ps",
    component:ProgressspinnerComponent
  },
  {
    path:"nav",
    component:NavComponent
  },
  {
    path:"menu",
    component:MenuComponent
  },
  {
    path:"lg",
    component:ListnGridComponent
  },
  {
    path:"ep",
    component:ExpPannelComponent
  },
  {
    path:"ct",
    component:CardTabComponent
  },
  {
    path:"s",
    component:StepperComponent
  },
  {
    path:"is",
    component:InputSelectComponent
  },
  {
    path:"ac",
    component:AutocompleteComponent
  },
  {
    path:"cd",
    component:CrDpComponent
  },
  {
    path:"ts",
    component:TooltipSnackbarComponent
  },
  {
    path:"d",
    component:DialogComponent
  },
  {
    path:"dt",
    component:DatatableComponent
  },
  {
    path:"do",
    component:DtOperationsComponent
  },
  {
    path:"v",
    component:VirtuaScrollingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
