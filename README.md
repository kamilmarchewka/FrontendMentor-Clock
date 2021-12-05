# FrontendMentor-Clock
Clock app challenge from [frontendmentor.io](frontendmentor.io)

## Web App Goal
This website was built to accomplish goals like:

- generate random quote
- display current time,
- show time details:
    - time zone,
    - location,
    - week of the year,
    - day of the year,
    - day of the week,
- toggle between day/night mode, 

## Used technologies
Technologies I've used to build this website:

- HTML,
- CSS:
    - SASS preprocessor,
- Java Script,
- JS Libraries:
    - gsap,
- APIs:
    - [World Time API](http://worldtimeapi.org/),
    - [IP Geolocation API](https://freegeoip.app/),
    - [here's a good alternative quote API](https://github.com/lukePeavey/quotable),

## How I've built it?
Overview of the steps, I took to create this website.

### Time
I've used APIs to get users' current time, location, and other data.

### Day/Night mode
After I'd created cuustom CSS properties, I was able to manipulate them via HTML custom attribute, which is set by JS.

```scss
:root { 

  &[data-mode="day"] {
  
    --bg-image: url("first-img-path");
  }
  
  &[data-mode="night"] {
  
            --bg-image: url("second-img-path");
      }
}
```

### Expand effect
I've used GSAP to translate the 'upper' section by height of the 'lower' section.

#### HTML structure for 'expand' effect

```html
<section class="expand-section__img">
  
        <!-- here we can put the background image, 
             which won't move during the expand animation. -->
  
    <div class="expand-section__clock">
        <!-- upper section content goes here -->    
    </div>
  
    <div class="expand-section__details" aria-hidden="true">
        <!-- 'expand' section content goes here -->    
    </div>
  
</section>
```

## Result
Eventually I've created [this](https://clock-website-252.netlify.app) fully responsive website. Background image as well as the color scheme change
based on the current time (whether it's day or night). The biggest challenge alonge the way was to create this 'expand' effect.


  
  

