import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longterm',
  standalone: true,
  imports: [],
  templateUrl: './longterm.component.html',
  styleUrl: './longterm.component.css'
})
export class LongtermComponent implements OnInit {
  public images = [
    'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR',
    'https://easyscienceforkids.com/wp-content/uploads/2018/04/Memory-facts-18-4-1-758x635.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU'
  ];
  public currentIndex: number = 0;


  /**
   * Goes to the next position in the list considering that it's a carrousel.
   * @returns {void}
   */
  public showNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  /**
   * Makes an automatic carrousel that it will be changing the photos of the list every 5 seconds.
   * 
   * ngOnInit => It's a method normally used for doing some initialing tasks automatically.
   * @returns {void}
   */
  public ngOnInit(): void {
    setInterval(() => {
      this.showNext();
    }, 5000)
  }
}
