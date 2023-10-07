import type { Article } from '../interfaces';

const cleanDataArticles = (articles: Article[] | undefined) => {
	if (!articles) return [];
	return articles?.filter((dt) => !dt?.title?.includes('Removed')) || [];
};

export default cleanDataArticles;
