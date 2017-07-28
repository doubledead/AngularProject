import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';

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

export const APP_STATES = [
  appState,
  welcomeState,
  homeState,
  aboutState,
  serversState,
  userState
];
