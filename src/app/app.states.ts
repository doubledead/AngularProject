import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { CreateComponent } from './events/create/create.component';
import { ViewComponent } from './events/view/view.component';

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

export const serversState = {
  name: 'servers',
  url: '/servers',
  component: ServersComponent,
};

export const userState = {
  name: 'user',
  url: '/user',
  component: UserComponent,
};

export const eventState = {
  name: 'events',
  url: '/events',
  component: EventsComponent,
};

export const createState = {
  name: 'events.create',
  url: '/create',
  component: CreateComponent,
};

export const viewState = {
  name: 'events.view',
  url: '/view',
  component: ViewComponent,
};

export const APP_STATES = [
  appState,
  welcomeState,
  homeState,
  aboutState,
  serversState,
  userState,
  eventState,
  createState,
  viewState
];
