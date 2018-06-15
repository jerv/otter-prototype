import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { MenuPage } from '../menu/menu';
import { BarsPage } from '../bars/bars';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = ExplorePage;
  tab2Root = BarsPage;
  tab3Root = MenuPage;
  tab4Root = HistoryPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
