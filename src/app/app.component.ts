import { Component, VERSION } from '@angular/core';
import { MenuService } from './app.service';
import { Menu } from './menu';

@Component({
  selector: 'my-app',
  templateUrl: './app.component-better.html',
  styleUrls: ['./app.component-better.css'],
  providers: [MenuService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  menuList: Menu[] = [];

  constructor(private service: MenuService) {}

  ngOnInit() {
    this.getMenuList();
  }

  getMenuList() {
    this.service.getMenuList().subscribe((results) => {
      this.menuList = results;
    });
  }
}
