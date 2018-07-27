import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDisplay = false;
  displayStatus = '';
  buttonClicks = [];

  onToggle() {
    this.showDisplay = !this.showDisplay;
    this.displayStatus = 'Can display the password now.';
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}
