import { Component } from '@angular/core';
import { WishList } from '../wishlist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishList[] = [
    new WishList('to learn', true),
    new WishList('wefweuyhweuif'),
    new WishList('wefwqwefwefwefeweuyhweuif'),
  ];
  newWishText = '';
  title = 'wishlist';

  visibleItems: WishList[] = this.items;

  toogleItem(e: WishList) {
    e.isComplete = !e.isComplete;
    alert(e.wishText + ' - ' + e.isComplete);
  }
  addnewwish() {
    this.items.push(new WishList(this.newWishText));
    this.newWishText = '';
  }
  listFilter: string = '0';

  filterChanged(value: any) {
    if (value == 0) {
      this.visibleItems = this.items;
    } else if (value == 1) {
      this.visibleItems = this.items.filter((item) => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter((item) => item.isComplete);
    }
  }
}
