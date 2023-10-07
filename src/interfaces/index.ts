export interface Article {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
	publishedAt: string;
	content: string | null;
}

export interface NewsResponse {
	status: string;
	totalResults: number;
	articles: Article[];
}
