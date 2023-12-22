import { Component } from '@angular/core';

@Component({
  selector: 'app-view2',
  standalone: true,
  imports: [],
  templateUrl: './view2.component.html',
  styleUrl: './view2.component.css'
})
export class View2Component {
  public test: string[] = [
    `<p>
    <span class="first-letter">L</span>
    orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.
</p>`,
    `<p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
</p>`,
    `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
deleniti
atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
similique
sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
repellendus.
Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
voluptates
repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`,
    `Ut id sollicitudin quam, nec feugiat tellus. Vestibulum ut quam tellus. Morbi posuere est sit amet
nunc
eleifend laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
himenaeos.
Quisque ultrices risus sed vulputate iaculis. Cras in enim ut augue efficitur vulputate condimentum
a
orci.
Morbi commodo dictum egestas. Aliquam quis nibh placerat, pellentesque erat nec, luctus nunc.`,
    `Maecenas et mauris hendrerit, lacinia est id, commodo ipsum. Mauris vitae rutrum augue. Fusce
finibus
molestie
lacinia. Praesent tincidunt, orci a pretium pulvinar, nunc nibh ultricies purus, in finibus
ligula
magna
at
mi.
Vestibulum et ligula eros. Sed blandit libero quis interdum semper. Ut tincidunt est libero, sit
amet
laoreet
purus rhoncus ut. Proin sed mi pretium, pellentesque nisl eget, porta ex.`
  ];
  public cont: number = 0;
  public isFront: boolean = true;
  public paragraphsToShow: string[] = [];

  public showOrHideText(): void {
    if (this.isFront) {
      if (this.cont !== this.test.length) {
        this.cont++;
        this.paragraphsToShow.push(this.test[this.cont - 1]);
      } else {
        this.isFront = false;
        this.cont--;
        this.paragraphsToShow.splice(this.cont, 1);
      }
    } else {
      if (this.cont !== 0) {
        this.cont--;
        this.paragraphsToShow.splice(this.cont, 1);
      } else {
        this.isFront = true;
        this.cont++;
        this.paragraphsToShow.push(this.test[this.cont - 1]);
      }
    }

    /* public showOrHideText(): void {
      if (this.isFront) {
        if (this.cont !== this.numParagraphs) {
          this.cont++;
        } else {
          this.isFront = false;
          this.cont--;
        }
      } else {
        if (this.cont !== 0) {
          this.cont--;
        } else {
          this.isFront = true;
          this.cont++;
        }
      } */

    console.log(this.cont);
  }
}
