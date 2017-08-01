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
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { CreateComponent } from './events/create/create.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    EventsComponent,
    CreateComponent,
    EventListComponent,
    EventDetailComponent
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
