import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
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
import { TooltipSnackbarComponent,CustomSnackBarComponent  } from './tooltip-snackbar/tooltip-snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DtOperationsComponent } from './dt-operations/dt-operations.component';
import { VirtuaScrollingComponent } from './virtua-scrolling/virtua-scrolling.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
// import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    TogglebuttonComponent,
    BadgeComponent,
    ProgressspinnerComponent,
    NavComponent,
    MenuComponent,
    ListnGridComponent,
    ExpPannelComponent,
    CardTabComponent,
    StepperComponent,
    InputSelectComponent,
    AutocompleteComponent,
    CrDpComponent,
    TooltipSnackbarComponent,
    CustomSnackBarComponent,
    DialogComponent,
    DialogExampleComponent,
    DatatableComponent,
    DtOperationsComponent,
    VirtuaScrollingComponent
  ],
  entryComponents:[CustomSnackBarComponent,DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
