import { Component , input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import {MatButton} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatAnchor, MatButton ,RouterLink ,MatIcon],
  selector: 'app-back-button',
  styleUrl: './back-button.css',
  templateUrl: './back-button.html',
})
export class BackButton {
  

  navigateTo = input<string>();
}
