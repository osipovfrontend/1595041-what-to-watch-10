export type Film = {
  id: number;
  title: string;
  poster: string;
  director: string;
  starring: string;
  genre: string;
  runtime: string;
  released: string;
  scoreRating: number;
  myWishList: boolean;
  video: string;
  levelRating: string;
  countRating: number;
  description: string;
}

export type Films = Film[];
