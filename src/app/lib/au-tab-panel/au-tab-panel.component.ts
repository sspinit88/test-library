import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { AuTabComponent } from './au-tab/au-tab.component';

@Component({
  selector: 'app-au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['./au-tab-panel.component.styl']
})
export class AuTabPanelComponent implements AfterContentInit {

  @ContentChildren(AuTabComponent) tabs: QueryList<AuTabComponent>;

  @Input() headerTemplate: TemplateRef<any>;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.onSelectedTab();
  }

  onSelectedTab(): void {
    const
      selectedTab = this.tabs.find(tab => tab.selected);

    if (!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: AuTabComponent) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }

}
