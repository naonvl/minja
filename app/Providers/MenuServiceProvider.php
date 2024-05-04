<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\User;

class MenuServiceProvider extends ServiceProvider
{
  /**
   * Register services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap services.
   */
  public function boot(): void
  {
      // Load menu data from JSON files
      $verticalMenuJson = file_get_contents(base_path('resources/menu/verticalMenu.json'));
      $verticalMenuData = json_decode($verticalMenuJson);
      $horizontalMenuJson = file_get_contents(base_path('resources/menu/horizontalMenu.json'));
      $horizontalMenuData = json_decode($horizontalMenuJson);

      // Modify badge data if it exists
      $this->modifyBadgeData($verticalMenuData->menu);
      $this->modifyBadgeData($horizontalMenuData->menu);

      // Share modified menu data to all views
      \View::share('menuData', [$verticalMenuData, $horizontalMenuData]);
  }

  /**
   * Modify badge data within the menu data.
   *
   * @param array $menuData
   */
  private function modifyBadgeData(array &$menuData): void
  {
      foreach ($menuData as &$menuItem) {
          if (isset($menuItem->badge) && is_array($menuItem->badge)) {
              $badgeColor = $menuItem->badge[0];
              $badgeCount = $menuItem->badge[1];
              switch($menuItem->slug) {
                  case 'dashboard':
                      $badgeCount = User::all()->count() + 8;
                      break;
              }
              $menuItem->badge = [
                  $badgeColor,
                  $badgeCount,
              ];
          }
      }
  }
}
