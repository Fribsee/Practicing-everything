import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './titlecase.pipe';
import { HeartComponent } from './heart/heart.component';
import { SampleDirectiveDirective } from './sample-directive.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordformComponent } from './passwordform/passwordform.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    StarComponent,
    TitleCaseComponent,
    TitleCasePipe,
    HeartComponent,
    SampleDirectiveDirective,
    ZippyComponent,
    FormComponent,
    TemplateDrivenFormComponent,
    NewCourseFormComponent,
    PasswordformComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
