import { TestBed } from '@angular/core/testing';
import { SpotifyComponent } from './spotify.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SpotifyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'spotify' title`, () => {
    const fixture = TestBed.createComponent(SpotifyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spotify');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SpotifyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, spotify');
  });
});
