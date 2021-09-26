# Product Requirements Document

## MVP

[MVP](https://www.agilealliance.org/glossary/mvp) is the first major milestone to reach. Only the
basic functionality is included at this stage. Closed beta testing iteration is going to be the
final act on this step.

- [x] test database with dummy data for storing all that we will need on this stage
- [x] search by release names and artists names
- [x] sorting by release names and artists names
- [ ] download tabs in `.gp5` format
- [ ] tab displaying

*Note: "release" should be construed as `release` entity from our database, look
[here](db-schema-explanatory.md) for explanation.*

## Release version

The core functionality which stops us from calling our service a solid release candidate.

- Core:
  - [ ] search by year/album name/genre
  - [ ] sorting by album name/release year/genre/release type/album kind
  - [ ] login/password authentication
  - [ ] admin/moderator/user authentication pools
  - [ ] admin/moderator functionality
  - [ ] uploading of tabs in `.gp5` format + upload queue (always approved by default)
  - [ ] database populated with real life data

- Other:
  - [ ] store custom songs/sheets lists
  - [ ] static rating system statistics (view/download/searched/indexed times)
  - [ ] dark/light themes
  - [ ] full screen mode
  - [ ] tab editor + editing queue (always approved by default)
  - [ ] tab creator + creation queue (always approved by default)

## Post-release suggestions

The additional functionality that we can consider to implement. After reaching or during this stage
we can consider starting an advertising company to engage a lot of real users to our service.

- First priority:
  - [ ] print tabs to PDF
  - [ ] songs replay
  - [ ] automatic scrolling (BPM varying)
  - [ ] email authentication
  - [ ] account recovery service
  - [ ] album/author thumbnails
  - [ ] difficulty of song
  - [ ] editing/upload queues verification mechanism
  - [ ] RU/else localization

- Second priority:
  - [ ] SSO authentication
  - [ ] share songs/sheets/tabs via social network
  - [ ] share songs/sheets/tabs or even lists to another account
  - [ ] customizable UI
  - [ ] private storage of self-uploaded content without verifications
  - [ ] timed lyrics for songs
  - [ ] link for youtube video
  - [ ] link for itunes/spotify/soundcloud/deezer/yandex music
  - [ ] download/upload tabs in various Guitar Pro compatible formats (GP, GPX, GP5, GP4 and GP3)
  - [ ] comments section for tab page

- Third priority:
  - [ ] using sound input to record tabs
  - [ ] forum/messages for discussions
