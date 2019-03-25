import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './titlecase.pipe';
import { HeartComponent } from './heart/heart.component';
import { SampleDirectiveDirective } from './sample-directive.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    TitleCaseComponent,
    TitleCasePipe,
    HeartComponent,
    SampleDirectiveDirective,
    ZippyComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
