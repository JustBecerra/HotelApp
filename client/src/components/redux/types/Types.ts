export interface locations{
    query: string,
    locale?:string,
    currency?:string,
}

interface guestReviews{
    unformattedRating: number,
    rating: string,
    total: number,
    scale: number,
}

interface priceInt{
    current: string,
    exactCurrent: number,
}

interface featureInt{
    paymentPreference: boolean,
    noCCRequired: boolean,
}

export interface properties{
    id: number,
    name:string,
    address:{
        streetAddress: string,
    },
    locality:string,
    starRating:number,
    guestRating:guestReviews,
    rateplan:{
        price: priceInt,
        features: featureInt,
    },
    // roomsLeft:number,
}