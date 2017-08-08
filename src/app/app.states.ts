import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventCreateNameComponent } from './events/event-create/event-create-name/event-create-name.component';
import { EventCreateDetailsComponent } from './events/event-create/event-create-details/event-create-details.component';
import { EventCreateGuestsComponent } from './events/event-create/event-create-guests/event-create-guests.component';
import { EventCreateItemsComponent } from './events/event-create/event-create-items/event-create-items.component';
import { EventCreateSummaryComponent } from './events/event-create/event-create-summary/event-create-summary.component';
import { EventCreateErrorComponent } from './events/event-create/event-create-error/event-create-error.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

export const appState = {
  name: 'app',
  redirectTo: 'welcome',
  component: AppComponent,
};

export const welcomeState = {
  name: 'welcome',
  url: '/welcome',
  component: WelcomeComponent,
};

export const homeState = {
  name: 'home',
  url: '/home',
  component: HomeComponent,
};

export const aboutState = {
  name: 'about',
  url: '/about',
  component: AboutComponent,
};

export const userState = {
  name: 'user',
  url: '/user',
  component: UserComponent,
};

// Event state with nested states
export const eventState = {
  name: 'events',
  url: '/events',
  component: EventsComponent,
};

// Nested Event states
export const eventListState = {
  name: 'events.list',
  url: '/list',
  component: EventListComponent,
};
/*
export const eventDetailState = {
  name: 'events.detail',
  url: '/detail',
  component: EventDetailComponent,
};
*/
// Event Create stated with three level down nested states
export const eventCreateState = {
  name: 'events.create',
  url: '/create',
  component: EventCreateComponent,
};

//Nested EventCreate states
export const eventCreateNameState = {
  name: 'events.create.name',
  url: '/name',
  component: EventCreateNameComponent,
};

export const eventCreateDetailsState = {
  name: 'events.create.details',
  url: '/details',
  component: EventCreateDetailsComponent,
};

export const APP_STATES = [
  appState,
  welcomeState,
  homeState,
  aboutState,
  userState,
  eventState,
  eventListState,
  // eventDetailState,
  eventCreateState,
  eventCreateNameState,
  eventCreateDetailsState
];
