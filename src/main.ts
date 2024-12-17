import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/spotify.config';
import { SpotifyComponent } from './app/spotify.component';
import { SpotifyModule } from './app/spotify.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// bootstrapApplication(SpotifyComponent, appConfig)
//   .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(SpotifyModule)
.catch(err => console.error(err));