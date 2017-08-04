import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { rootRouterConfig } from './app.routes'
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventCreateNameComponent } from './events/event-create/event-create-name/event-create-name.component';
import { EventCreateDetailsComponent } from './events/event-create/event-create-details/event-create-details.component';
import { EventCreateGuestsComponent } from './events/event-create/event-create-guests/event-create-guests.component';
import { EventCreateItemsComponent } from './events/event-create/event-create-items/event-create-items.component';
import { EventCreateSummaryComponent } from './events/event-create/event-create-summary/event-create-summary.component';
import { EventCreateErrorComponent } from './events/event-create/event-create-error/event-create-error.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    UserComponent,
    EventsComponent,
    EventListComponent,
    EventDetailComponent,
    EventItemComponent,
    EventCreateComponent,
    EventCreateNameComponent,
    EventCreateDetailsComponent,
    EventCreateGuestsComponent,
    EventCreateItemsComponent,
    EventCreateSummaryComponent,
    EventCreateErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(rootRouterConfig, { useHash: true })
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: {state: 'home'}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
