export interface IReview {
    text: string;
    grade: number;
    data: number;
    author: string;
    reviewId: number;
}

export interface GetReviews{
    reviews:Array<IReview>;
}