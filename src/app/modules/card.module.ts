import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: []
})

export class CardModule { }
