export interface locations{
    query: string,
    locale?:string,
    currency?:string,
}

export interface properties{
    id: number,
    name:string,
    address:{
        streetAddress: string,
    },
    neighbourhood: string,
    starRating:number,
    guestReviews:{
        rating:string,
        total:number,
        scale:number,
    },
    ratePlan:{
        price: {
            current: string,
        },
    },
    landmarks:[
        {
        label:string,
        distance:string, 
        }
    ],
}
