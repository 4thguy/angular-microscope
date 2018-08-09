import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from './modules/card.module';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { GameComponent } from './game/game.component';
import { CardSceneComponent } from './card-scene/card-scene.component';
import { CardSceneButtonComponent } from './card-scene-button/card-scene-button.component';
import { CardEventComponent } from './card-event/card-event.component';
import { CardEventButtonComponent } from './card-event-button/card-event-button.component';
import { CardPeriodComponent } from './card-period/card-period.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    GameComponent,
    CardSceneComponent,
    CardSceneButtonComponent,
    CardEventComponent,
    CardEventButtonComponent,
    CardPeriodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
