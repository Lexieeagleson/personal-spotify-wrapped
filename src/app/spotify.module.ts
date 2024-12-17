import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SpotifyComponent } from "./spotify.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { SongComponent } from "./songComponent/song.component";
import { PodcastComponent } from "./podcastCompent/podcast.component";

@NgModule({
    declarations: [
        SpotifyComponent,
        SongComponent,
        PodcastComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [SpotifyComponent],
    imports: [
        BrowserModule,
        MatTableModule,
        MatExpansionModule,
        MatButtonModule,
    ]
})

export class SpotifyModule { }