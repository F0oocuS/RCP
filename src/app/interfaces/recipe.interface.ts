import { IngredientInterface } from './ingredient.interface';
import { CommentInterface } from './comment.interface';

export interface RecipeInterface {
	id?: number;
	name: string;
	description: string;
	process: string;
	// TODO change imagePath
	imagePath?: string;
	ingredients?: IngredientInterface[];
	comments?: CommentInterface[];
	isFavorite?: boolean;
	rating?: number;
}
