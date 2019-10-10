import { HomeEffect } from './home.effect';
import { RecipeEffect } from './recipe.effect';
import { AccountEffect } from './account.effect';
import { RefrigeratorEffect } from './refrigerator.effect';
import { ShoppingListEffect } from './shopping-list.effect';
import { SearchEffect } from './search.effect';

export const effects: any = [ RecipeEffect, RefrigeratorEffect, AccountEffect, ShoppingListEffect, SearchEffect, HomeEffect ];

export * from './home.effect';
export * from './recipe.effect';
export * from './account.effect';
export * from './refrigerator.effect';
export * from './shopping-list.effect';
export * from './search.effect';
