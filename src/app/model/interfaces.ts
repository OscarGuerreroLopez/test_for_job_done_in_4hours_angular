export interface Movies {
  count: number;
  next?: any;
  previous?: any;
  results: MoviesDetail[];
}

export interface MoviesDetail {
  title: string;
  episode_id?: string;
  opening_crawl?: string;
  director: string;
  producer?: string;
  release_date?: string;
  characters?: string[];
  planets?: string[];
  starships?: string[];
  vehicles?: string[];
  species?: string[];
  created?: string;
  edited?: string;
  url: string;
}

export interface MovieTable {
  title: string;
  director: string;
  release_date?: string;
}
