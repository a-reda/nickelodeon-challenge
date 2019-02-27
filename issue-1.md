## User Story
As a user I would like a page that shows me the TV Schedule of nickelodeon and nick junior TV Channels.

### Acceptance Criteria
* [ ]  Should pull data from http://www.nickjr.it/data/schedule.json or a json feed with similar content (e.g. served from a local server)
* [ ]  Should Follow the designs provided below.
* [ ]  Should display all shows on a grid in chronological order from currently playing to later in the day.
* [ ]  Should highlight what's currently playing based on the current client's hour.
* [ ]  Should have a responsive Layout:
  
  * [ ]  **mobile** should display image, hour, show name, sort
  * [ ]  **tablet**  should display image, hour, show name, episode title, sort and search
  * [ ]  **desktop** should display image, hour, show name, episode title, episode description, sort and search
* [ ]  Should **hide** Episode Description by default on **mobile** and **tablet** sizes
* [ ]  Should **show** Episode Description by default on **desktop** size
* [ ]  Should toggle the Episode Description display by clicking on the down arrow to the right (mobile, tablet)
* [ ]  Should allow user to switch tabs to navigate between each channel, if more than one channel is available. If only one channel is available, the channel selector should not be visible.
* [ ]  **Sort button**: should sort the shows by title alphabetically
* [ ]  **Search button**: Should filter the content by title. for example: if I search for the term "Team" I want to see Team Umizoomi is the search results. You can implement it as progressive search ( return search results as you type ) or by pressing the search icon

### Designs/Layouts
**Mobile** Description Hidden
![143a5912-ec72-11e5-99e5-0da01a09dd81](https://cloud.githubusercontent.com/assets/4355957/14926088/70530ad8-0e18-11e6-805e-8f2d39836a88.png)

**Mobile** Description Displayed
![2a2dda50-ec72-11e5-856e-9db30a85a1d8](https://cloud.githubusercontent.com/assets/4355957/14926103/805bd43c-0e18-11e6-990d-002fb8de5a3a.png)

**Tablet** (iPad) Description Hidden
![8809fc76-ec72-11e5-9fd1-f00a619d458c](https://cloud.githubusercontent.com/assets/4355957/14926118/95c289e2-0e18-11e6-8744-46354b9e8aa2.png)

**Tablet** (iPad) Description Displayed
![61d2b2a0-ec72-11e5-9c4f-59eddb86c0cf](https://cloud.githubusercontent.com/assets/4355957/14926126/9d8041f6-0e18-11e6-8de2-c91ae565d192.png)

**Desktop**
![aab5a414-ec72-11e5-980e-f282a19b72eb](https://cloud.githubusercontent.com/assets/4355957/14926131/a438f952-0e18-11e6-92a4-1767abcf939a.png)

### Notes:
`jsonp` is not enabled in our server, you may want to use server side solution to fetch/deliver data to your client. Or use this: https://cors.now.sh/http://www.nickjr.com/data/schedule.json?apiKey=nickjr.com

Media queries you may use to target each device size:

```css
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
}

/* Tablets (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
/* Styles */
}

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
/* Styles */
}
```