import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any; // Declare Bootstrap globally if it's not recognized

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const carouselElement = document.querySelector('#carouselExampleIndicators');

    if (carouselElement) {
      const carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Autoplay interval in milliseconds
        ride: 'carousel', // Automatically start the carousel
        pause: 'hover', // Pause carousel on hover
        wrap: true // Enable carousel to loop back when it reaches the end
      });

      // Ensure autoplay continues even after interaction on mobile screens
      carouselElement.addEventListener('slid.bs.carousel', () => {
        carouselInstance.cycle(); // Restart the autoplay after a slide
      });
    }
  }
}
