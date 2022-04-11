 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buildQueries } from '@testing-library/react';
import CoinsType, {coinHistoryPrice, CoinType} from "../types/coinsTypes";
import NewsType from "../types/newsTypes";
const apiKeyDefault="810180c592mshe971e96607fd6a6p117ff0jsnde09e439e46e"
type ResponseType<D={}>={
    success:string | number,
    data:D
}
const createHeaders=(params?:any,host?:string,apiKey?:string)=>{
    return {
        'x-rapidapi-host': host ? host: 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': apiKey ? apiKey:apiKeyDefault,
        ...params
    }
}
export const coinsApi=createApi({
        reducerPath: "coinsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://coinranking1.p.rapidapi.com/"}),
        endpoints: (builder) => ({
            getCoins: builder.query<CoinsType,number>({
                query: (limit) =>({
                    url:`coins?limit=${limit}`,
                    headers:createHeaders()
                }),
            }),
            getNews:builder.query<NewsType,number>({
                query:(count)=>({
                    url:`news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
                    headers:createHeaders({ 'x-bingapis-sdk': 'true'},'bing-news-search1.p.rapidapi.com')
                })
            }),
            getCoin:builder.query<ResponseType<{coin:CoinType}>,string>({
                query:(id)=>({
                    url:`coin/${id}`,
                    headers:createHeaders({ 'x-bingapis-sdk': 'true'})
                })
            }),
            getCoinPriceHistory:builder.query<ResponseType<coinHistoryPrice>,
                {id:string,timePeriod:string}>({
                query:({id,timePeriod})=>({
                    url:`coin/${id}/history?timePeriod=${timePeriod}`,
                    headers:createHeaders()
                })
                }
            ),
            getCoinsExchanges:builder.query({
                query:()=>({
                    url:'coin/Qwsogvtv82FCd/exchanges',
                    headers:createHeaders()
                })
            })
        })
})
export const  {useGetCoinsQuery,useGetNewsQuery,
    useGetCoinQuery,useGetCoinPriceHistoryQuery,useGetCoinsExchangesQuery}=coinsApi
