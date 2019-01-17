import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() posts = [
    {
      title: 'Premier post',
      content: 'Bonjour 1',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Deuxième post',
      content: 'Bonjour 2',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Troisième post',
      content: 'Bonjour 3',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
