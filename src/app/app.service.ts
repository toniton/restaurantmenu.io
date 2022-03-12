import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable()
export class MenuService {
  protected menuListUrl =
    'https://raw.githubusercontent.com/toniton/restaurantmenu.io/main/sampledata/menu.json';

  constructor(private http: HttpClient) {}

  getMenuList() {
    return this.http.get<Menu[]>(this.menuListUrl);
  }
}
