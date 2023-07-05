import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  CalendarViewComponent,
} from 'src/app/reservation-calendar/components/calendar-view/calendar-view.component';
import {
  ConfirmResModalComponent,
} from 'src/app/reservation-calendar/components/confirm-res-modal/confirm-res-modal.component';
import {
  SelectedDateContainerComponent,
} from 'src/app/reservation-calendar/components/selected-date-container/selected-date-container.component';
import {
  SpecificsComponent,
} from 'src/app/reservation-calendar/components/specifics/specifics.component';
import {
  ngLetModule,
} from 'src/app/reservation-calendar/directives/ngLet.module';
import {
  ReservationCalendarComponent,
} from 'src/app/reservation-calendar/reservation-calendar.component';

@NgModule({
  declarations: [
    ReservationCalendarComponent,
    SelectedDateContainerComponent,
    SpecificsComponent,
    CalendarViewComponent,
    ConfirmResModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ngLetModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ReservationCalendarComponent,
  ]
})
export class ReservationCalendarModule { }
