import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: []
})

export class CardModule { }
