import { Component, OnInit } from '@angular/core';
import songYearData from '../assets/StreamingHistory_music_1.json'
import podcastYearData from '../assets/StreamingHistory_podcast_0.json'
import { listenedToData } from './_shared/_models/songModels/songListenedToData';
import { artistData } from './_shared/_models/songModels/artistData';
import { songData } from './_shared/_models/songModels/songData';

@Component({
  selector: 'spotify-root',
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.css'
})
export class SpotifyComponent implements OnInit {
  title = 'spotify';
  songYearData: listenedToData[] = [];
  podcastYearData: listenedToData[] = [];
  artistList: artistData[] = [];
  songList: songData[] = [];

  constructor() { }

  ngOnInit() {
    this.songYearData = podcastYearData;
    // songYearData;
    console.log("yearData: ", this.songYearData)
    console.log("podcastData: ", this.podcastYearData)
    this.manipulateData();
    console.log("artistList: ", this.artistList)
    this.sortByOccurrence();
  }

  manipulateData(): void {
    this.songYearData.forEach(element => {
      this.makeArtistList(element);
    });
  }

  makeArtistList(element: listenedToData) {
    let artistRecord = this.artistList.find(item =>
      item.artistName === element.artistName);
    if (!!artistRecord) {
      artistRecord.occurrence += 1;
      artistRecord.timeListened += element.msPlayed
      artistRecord.songData = this.updateSongList(element, artistRecord.songData);
    } else {
      let newSongRecord = [new songData(element.trackName, 1, element.msPlayed)]
      let newArtistRecord = new artistData(element.artistName, 1, element.msPlayed, newSongRecord)
      this.artistList.push(newArtistRecord);
    }
  }

  updateSongList(element: listenedToData, currentSongDataList: songData[]): songData[] {
    let songRecord = currentSongDataList.find(item =>
      item.songName === element.trackName);
    if (!!songRecord) {
      songRecord.occurrence += 1;
      songRecord.timeListened += element.msPlayed;
    } else {
      currentSongDataList.push(new songData(element.trackName, 1, element.msPlayed));
    }
    return currentSongDataList;
  }

  sortByOccurrence() {
    this.artistList.sort((a, b) => b.occurrence - a.occurrence);
  }
}
