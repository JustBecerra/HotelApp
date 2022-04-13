export interface locations{
    query: string,
    locale?:string,
    currency?:string,
}

export interface properties{
    destinationId: number,
    pageNumber: number,
    pageSize: number,
    checkIn: string,
    checkOut: string,
    adults1: number,
    adults2?: number,
    adults3?: number,
    adults4?: number,
    children1?: number,
    children2?: number,
    starRating?: number,
    priceMin?: number,
    priceMax?: number,
    sortOrder?: string,
    locale?: string,
    currency?: string,
    guestRatingMin?: number,
}