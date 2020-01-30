import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoListAppComponent } from './components/todo-list-app/todo-list-app.component';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './components/todo-list-footer/todo-list-footer.component';

 import { TodoService } from './services/todo.service';
import { DayRaterComponent } from './components/day-rater/day-rater.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { StoreModule } from '@ngrx/store';
// import { TodoReducer } from './store/todo.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { TodoEffects } from './store/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TodosComponent,
    TodoListAppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    DayRaterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'todos', component: TodosComponent},
      { path: 'todolistApp', component: TodoListAppComponent},
      { path: 'dayRater', component: DayRaterComponent},
    ]),
    BrowserAnimationsModule//,
    //StoreModule.forRoot({applicationState: TodoReducer}),
    //EffectsModule.forRoot([TodoEffects])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
