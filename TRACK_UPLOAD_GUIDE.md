# RJC Audio — Track Upload & Version Update Guide

A quick reference cheatsheet for adding new songs to the showreel or updating existing audio versions.

---

## 1. Export Specs
- **Format**: MP3 (Constant Bitrate 320 kbps, 44.1 kHz or 48 kHz stereo)
- **Folder**: `assets/audio/`
- **Naming format**: `artist-song-title.mp3` (lowercase, hyphens, e.g. `wynona-cherry-cola.mp3`)

---

## 2. Adding / Updating in `index.html`

### A. If updating an existing song:
Simply replace the `.mp3` file in `assets/audio/` with your new version (keeping the same filename).

### B. If adding a new song to the showreel:
Open `index.html`, find `<div class="showreel-grid">`, and paste this card:

```html
<!-- Track: Artist - Track Name -->
<div class="audio-card">
  <div class="audio-card-header">
    <div class="audio-title-group">
      <span class="genre-pill">Indie Rock</span>
      <span class="track-name">Artist — Track Name</span>
    </div>
    <div class="audio-header-right">
      <div class="volume-container">
        <button class="vol-btn" aria-label="Mute / Unmute">
          <svg class="icon-vol-high" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <svg class="icon-vol-muted" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        </button>
        <input type="range" class="vol-slider" min="0" max="100" value="100" aria-label="Volume">
      </div>
    </div>
  </div>

  <div class="audio-controls-row">
    <button class="play-toggle-btn" aria-label="Play / Pause">
      <svg class="icon-play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      <svg class="icon-pause" viewBox="0 0 24 24" style="display:none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
    </button>
    <div class="progress-track-wrapper">
      <span class="time-stamp time-current">0:00</span>
      <input type="range" class="progress-slider" min="0" max="100" value="0" step="0.1" aria-label="Seek track">
      <span class="time-stamp time-duration">0:00</span>
    </div>
  </div>

  <audio preload="metadata" src="assets/audio/artist-track-name.mp3"></audio>
</div>
```

---

## 3. Deploy in 15 Seconds
Open your terminal in this project folder and run:

```bash
git add assets/audio/ index.html
git commit -m "Update showreel: added Artist - Track Name"
git push
```

Cloudflare Pages automatically detects your push and redeploys globally in ~15 seconds with £0 fees.
