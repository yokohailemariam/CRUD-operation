import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DetailComponent } from './details/detail/detail.component';
import { DetailListComponent } from './details/detail-list/detail-list.component';
import { DetailService } from './shared/detail.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailComponent,
    DetailListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [DetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
