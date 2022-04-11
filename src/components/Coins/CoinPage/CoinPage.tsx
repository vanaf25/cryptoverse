import React, {useState} from 'react';
import styles from './CoinPage.module.css'
import { useParams } from 'react-router-dom';
import { useGetCoinQuery } from '../../../rtkApi/api';
import { Col, Divider, Row, Select } from 'antd';
import CoinHistoryPrice from "./CoinHistoryPrice/CoinHistoryPrice";
import { CheckOutlined, DollarCircleOutlined, DollarOutlined, ExclamationCircleOutlined, FundOutlined, MoneyCollectOutlined, NumberOutlined, StopOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';
import millify from 'millify';
import CoinPageStats from './CoinPageStats/CoinPageStats';
import CoinPageDescription from './CoinPageDescription/CoinPageDescription';
const {Option}=Select
const CoinPage = () => {
    const {id}=useParams();
    const times=["3h","24h","7d","30d","1y","3m","3y","5y"]
    const [currentTime,setCurrentTime]=useState(times[0])
    const {data,error,isLoading}=useGetCoinQuery(id as string);
    if (error) console.log("Error on CoinPage",error)
    const cryptoDetails=data?.data?.coin
    const coin=data?.data?.coin
    const millifyProved=(value:string | undefined | number)=>{
        if(value){
           return millify(+value)
        }
        return 0
    }
    const cryptoStats=[
        {title:"Price to USD",value:millifyProved(cryptoDetails?.price),icon:<DollarOutlined/>},
        {title:"Rank",value:millifyProved(cryptoDetails?.rank),icon:<NumberOutlined />},
        {title:"24h Volumne",value:millifyProved(cryptoDetails?.['24hVolume']),icon:<ThunderboltOutlined />},
        {title:"Market Cap",value:millifyProved(cryptoDetails?.marketCap),icon:<DollarCircleOutlined />},
        {title:"All-time-high(daily arg.)",value:millifyProved(cryptoDetails?.allTimeHigh?.price),icon:<TrophyOutlined />},
    ]
    const otherStats:any=[
        {title:"Number of Markets",value:millifyProved(cryptoDetails?.numberOfMarkets),icon:<FundOutlined/>},
        {title:"Number of Exchanges",value:millifyProved(cryptoDetails?.numberOfExchanges),icon:<MoneyCollectOutlined/>},
        {title:"Aproved supply",value:cryptoDetails?.supply?.confirmed ? <CheckOutlined /> as JSX.Element
         : <StopOutlined /> as JSX.Element , icon: <ExclamationCircleOutlined />},
        {title:"Total supply",value:`$${millifyProved(cryptoDetails?.supply.total)}`,icon: <ExclamationCircleOutlined />},
        {title:"Circulating supply",value:`$${millifyProved(cryptoDetails?.supply.circulating)}`, icon: <ExclamationCircleOutlined />}
    ]
    return (
        <div>
            {isLoading ?<h1>Loading...</h1>:
                 data && coin && <>
                    <h2 className={`${styles.title} ${styles.mainTitle}`}>
                        {coin.name}({coin.symbol}) Price</h2>
                    <p className={styles.mainP}>
                        {coin.name} live price in US Dollar (USD).
                        View value statistics, market cap and supply.</p>
                <Divider/>
                    <div>
                        <Select defaultValue={times[0]} value={currentTime}
                                onChange={(val)=>setCurrentTime(val)} className={styles.select}>
                            {times.map((time,index)=><Option  value={time}
                                                             key={index}>{time}</Option>)}
                        </Select>
                        <Row justify={"space-between"}>
                            <h2 className={`${styles.title}`}>{coin.name} Price Chart</h2>
                                <Row>
                                    <h3 style={{marginRight:"10px"}}>Change:{coin.change}%</h3>
                                    <h3>Current {coin.name } price:
                                        ${Math.round(+coin.price)}</h3>
                                </Row>
                        </Row>
                      <CoinHistoryPrice timePeriod={currentTime}/>
                     <CoinPageStats name={coin.name}
                      otherStats={otherStats} cryptoStats={cryptoStats} />
                      <CoinPageDescription name={coin.name}  links={coin.links} description={coin.description} />
                    </div>
                </>}
        </div>
    );
};

export default CoinPage;
