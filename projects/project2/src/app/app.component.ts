import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project2';
  disabled = false;
  size: 'sm' | 'md' | 'lg' = 'md';
  inputForm = 'test'
  inputForm2 = 'test'

  disable() {
    this.disabled = !this.disabled
  }
}
