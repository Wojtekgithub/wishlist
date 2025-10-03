import { Component } from '@angular/core';
import { WishList } from '../wishlist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishList[] = [
    new WishList('to learn', true),
    new WishList('wefweuyhweuif'),
    new WishList('wefwqwefwefwefeweuyhweuif'),
  ];
  title = 'wishlist';
}
