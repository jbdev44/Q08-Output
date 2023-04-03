import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'q08-output';
  onomatopoeiaList: Array<string> = [];

  constructor() {}
  onReceiveNewOnomatopia(event: string): void {
    console.log('parent :', event);
    this.onomatopoeiaList.push(event);
  }
}
