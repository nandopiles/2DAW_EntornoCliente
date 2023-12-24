import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Scene } from './shortterm.interface';

@Component({
  selector: 'app-shortterm',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './shortterm.component.html',
  styleUrl: './shortterm.component.css'
})
export class ShorttermComponent {
  public orderScenes: Scene[] = [
    {
      text: 'Memoria a corto plazo',
      firstPhoto: 'https://www.olympiabenefits.com/hubfs/Vega/Blog%20Pages/Psychology/What%20is%20memory.png',
      firstLeftPosition: '0%',
      secondPhoto: 'https://images.ctfassets.net/cnu0m8re1exe/uTkqQAbjpnnpceaY9UzLE/2d49aaee28ca31631c33a02ff89b437c/brainresearch.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
      secondLeftPosition: '0%',
      thirdPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ95HvxEmQ-GQBMSL48P-DpN445HLKgqG2EmJu57Fr8Ix4rw0mkf01iMh3Hew2gS3I9JI&usqp=CAU',
      thirdLeftPosition: '0%',
      transition: 'all 2s ease 0s'
    },
    {
      text: '',
      firstPhoto: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR',
      firstLeftPosition: '25%',
      secondPhoto: 'https://media.npr.org/assets/img/2023/08/07/gettyimages-1440469647-db0c65c135844b757df227afebfa240fd400630c.jpg',
      secondLeftPosition: '50%',
      thirdPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU',
      thirdLeftPosition: '75%',
      transition: 'all 2s ease 0s'
    },
    {
      text: 'Cuando la información pasa a estar disponible por un tiempo indefinido, es cuando hablamos de memoria a largo plazo',
      firstPhoto: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR',
      firstLeftPosition: '0%',
      secondPhoto: 'https://media.npr.org/assets/img/2023/08/07/gettyimages-1440469647-db0c65c135844b757df227afebfa240fd400630c.jpg',
      secondLeftPosition: '0%',
      thirdPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU',
      thirdLeftPosition: '0%',
      transition: 'all 2s ease 0s'
    },
    {
      text: '',
      firstPhoto: 'https://www.olympiabenefits.com/hubfs/Vega/Blog%20Pages/Psychology/What%20is%20memory.png',
      firstLeftPosition: '25%',
      secondPhoto: 'https://images.ctfassets.net/cnu0m8re1exe/uTkqQAbjpnnpceaY9UzLE/2d49aaee28ca31631c33a02ff89b437c/brainresearch.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
      secondLeftPosition: '50%',
      thirdPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ95HvxEmQ-GQBMSL48P-DpN445HLKgqG2EmJu57Fr8Ix4rw0mkf01iMh3Hew2gS3I9JI&usqp=CAU',
      thirdLeftPosition: '75%',
      transition: 'all 2s ease 0s'
    },
    {
      text: 'La memoria a corto plazo es la capacidad para almacenar, mantener y recuperar cierta cantidad de información durante un corto periodo de tiempo.',
      firstPhoto: 'https://www.olympiabenefits.com/hubfs/Vega/Blog%20Pages/Psychology/What%20is%20memory.png',
      firstLeftPosition: '0%',
      secondPhoto: 'https://images.ctfassets.net/cnu0m8re1exe/uTkqQAbjpnnpceaY9UzLE/2d49aaee28ca31631c33a02ff89b437c/brainresearch.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
      secondLeftPosition: '0%',
      thirdPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ95HvxEmQ-GQBMSL48P-DpN445HLKgqG2EmJu57Fr8Ix4rw0mkf01iMh3Hew2gS3I9JI&usqp=CAU',
      thirdLeftPosition: '0%',
      transition: 'all 2s ease 0s'
    },
    {
      text: '',
      firstPhoto: 'https://mindworks.org/app/uploads/2023/06/Does-Meditation-Improve-memory.jpg',
      firstLeftPosition: '25%',
      secondPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERe-RZMXEfeALxm-QfjABDm_b2ggQEBJdng&usqp=CAU',
      secondLeftPosition: '50%',
      thirdPhoto: 'https://images.theconversation.com/files/171522/original/file-20170530-23699-itx0un.jpg?ixlib=rb-1.1.0&rect=0%2C181%2C2987%2C2163&q=45&auto=format&w=926&fit=clip',
      thirdLeftPosition: '75%',
      transition: 'all 2s ease 0s'
    },
    {
      text: 'Memoria a corto plazo',
      firstPhoto: 'https://mindworks.org/app/uploads/2023/06/Does-Meditation-Improve-memory.jpg',
      firstLeftPosition: '0%',
      secondPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERe-RZMXEfeALxm-QfjABDm_b2ggQEBJdng&usqp=CAU',
      secondLeftPosition: '0%',
      thirdPhoto: 'https://images.theconversation.com/files/171522/original/file-20170530-23699-itx0un.jpg?ixlib=rb-1.1.0&rect=0%2C181%2C2987%2C2163&q=45&auto=format&w=926&fit=clip',
      thirdLeftPosition: '0%',
      transition: 'all 2s ease 0s'
    }
  ];
  public currentIndex: number = 0;



  /**
   * Goes to the next position of the carrousel.
   * @returns {void}
   */
  public nextPosition(): void {
    this.currentIndex = (this.currentIndex + 1) % this.orderScenes.length;
  }

  /**
   * Goes to the previous position of the carrousel.
   * @returns {void}
   */
  public prevPosition(): void {
    this.currentIndex = (this.currentIndex - 1 + this.orderScenes.length) % this.orderScenes.length;
  }
}
