import { Component } from '@angular/core';
import { GuiLocalization } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebBibliotecaApp';
  public static localization: GuiLocalization = {
    'translation': {
      "sourceEmpty": "Não há Items.",
      "pagingItemsPerPage": "Items por página",
      "pagingOf": "of",
      "pagingNextPage": "Próximo",
      "pagingPrevPage": "Anterior",
      "pagingNoItems": "Não há items.",
      "infoPanelShowing": "Showing",
      "infoPanelItems": "items",
      "infoPanelOutOf": "out of",
      "infoPanelThemeMangerTooltipText": "Theme manager",
      "infoPanelColumnManagerTooltipText": "Column manager",
      "infoPanelInfoTooltipText": "info",
      "themeManagerModalTitle": "Theme manager",
      "themeManagerModalTheme": "Theme:",
      "themeManagerModalRowColoring": "Row coloring:",
      "themeManagerModalVerticalGrid": "Vertical grid",
      "themeManagerModalHorizontalGrid": "HorizontalGrid",
      "columnManagerModalTitle": "Manage columns",
      "headerMenuMainTab": "Menu",
      "headerMenuMainTabColumnSort": "Column sort",
      "headerMenuMainTabHideColumn": "Hide column",
      "headerMenuMainTabHighlightColumn": "Highlight",
      "headerMenuMainTabMoveLeft": "Move left",
      "headerMenuMainTabMoveRight": "Move right",
      "headerMenuMainTabColumnSortAscending": "Ascending",
      "headerMenuMainTabColumnSortDescending": "Descending",
      "headerMenuMainTabColumnSortNone": "None",
      "headerMenuFilterTab": "Filter",
      "headerMenuColumnsTab": "Columns",
      "summariesCount": "Count",
      "summariesDist": "Dist",
      "summariesSum": "Sum",
      "summariesAvg": "Avg",
      "summariesMin": "Min",
      "summariesMax": "Max",
      "summariesMed": "Med",
      "summariesTruthy": "Truthy",
      "summariesFalsy": "Falsy",
      "summariesDistinctValuesTooltip": "Distinct values",
      "summariesAverageTooltip": "Average",
      "summariesMinTooltip": "Min",
      "summariesMaxTooltip": "Max",
      "summariesMedTooltip": "Median",
      "summariesCountTooltip": "Number of items in the grid"
    }
  };
}

