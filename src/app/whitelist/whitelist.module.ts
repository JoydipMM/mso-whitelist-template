import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule }   from '@angular/forms';

import { WhitelistRoutingModule } from './whitelist-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AmcCardComponent } from './components/amc-card/amc-card.component';
import { CreatedFilterComponent } from './components/created-filter/created-filter.component';
import { ShortingFilterComponent } from './components/shorting-filter/shorting-filter.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrokerageUploadComponent } from './pages/brokerage-upload/brokerage-upload.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { ExcelUploadDialogComponent } from './components/dialogs/excel-upload-dialog/excel-upload-dialog.component';
import { ShowHiddenRowsDialogComponent } from './components/dialogs/show-hidden-rows-dialog/show-hidden-rows-dialog.component';
import { ShowHiddenColumnsDialogComponent } from './components/dialogs/show-hidden-columns-dialog/show-hidden-columns-dialog.component';
import { PublishWarningDialogComponent } from './components/dialogs/publish-warning-dialog/publish-warning-dialog.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AmcCardComponent,
    CreatedFilterComponent,
    ShortingFilterComponent,
    SearchBoxComponent,
    BrokerageUploadComponent,
    ExcelUploadDialogComponent,
    ShowHiddenRowsDialogComponent,
    ShowHiddenColumnsDialogComponent,
    PublishWarningDialogComponent,
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WhitelistRoutingModule,
    FormsModule,
    NgbPaginationModule,
    MatExpansionModule,
    DragDropModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatRadioModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class WhitelistModule { }
