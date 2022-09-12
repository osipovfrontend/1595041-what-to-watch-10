export type Review = {
  text: string;
  date: Date;
  rating: number;
  author: string;
  filmId: number;
  reviewId: number;
}

export type Reviews = Review[];