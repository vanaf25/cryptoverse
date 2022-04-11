export interface CoinType{
    id:number,
    iconUrl:string,
    name:string,
    change:number,
    price:string,
     uuid:string,
     numberOfExchanges:number,
     numberOfMarkets:number,
    tier:number,
    color:string,
    links:Array<{
        name:string,
        type:string,
        url:string
    }>,
    priceAt:number,
    sparkline:string[],
    websiteUrl:string,
    coinrankingUrl:string
    supply:{
confirmed:boolean,
total:string,
circulating:string,
    },
    description:string,
    marketCap:string,
    symbol:string,
    "24hVolume":string,
    rank:number,
    allTimeHigh:{
        price:string,
        timestamp:number
    }
}
 interface statsType{
    total:number,
    totalExchanges:number,
    totalMarketCap:number,
    total24hVolume:number,
    totalMarkets:number
}
export interface coinHistoryPrice{
    change:string,
    history:Array<{price:string,timestamp:number}>
}
interface dataCoinsType {
    stats:statsType,
    coins:CoinType[]
}
export default interface CoinsType{
    data:dataCoinsType,
    status:string
}