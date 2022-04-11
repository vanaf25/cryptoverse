import {Col, Row, Statistic } from 'antd';
import React, {} from 'react';
import millify from "millify";
import CoinSkeleton from "../../Coins/CoinSkeleton/CoinSkeleton";
type StatsType={
    total:number,
    totalExchanges:number,
    totalMarketCap:number,
    total24hVolume:number,
    totalMarkets:number
}
const Stats:React.FC<{stats:StatsType | undefined,isLoading:boolean }> = ({stats,isLoading}) => {
    const query=window.matchMedia("(max-width: 575px)");

    return (
        <div style={{marginBottom:"10px"}}>
            <h1>Global Crypto Stats</h1>
              <Row  gutter={16}>
                  {isLoading ? new Array(5).fill(1).map((_,index)=><Col key={index} span={12}>
                          <CoinSkeleton/>
                  </Col>):
                      <>
                          <Col style={query.matches ? {margin:"0 auto",textAlign:"center"}:{}} xs={18} sm={12} lg={12} xl={12} >
                              <Statistic title="Total Cryptocurrencies" value={stats?.total} />
                          </Col>
                          <Col   style={query.matches ? {margin:"0 auto",textAlign:"center"}:{}}   xs={18} sm={12} lg={12} xl={12} >
                              <Statistic title="Total Exchanges" value={stats?.totalExchanges} />
                          </Col>
                          <Col  style={query.matches ? {margin:"0 auto",textAlign:"center"}:{}}   xs={18} sm={12} lg={12} xl={12} >
                              <Statistic title="Total Market Cap" value={`$${millify(stats?.totalMarketCap ? stats?.totalMarketCap:0 )}`} />
                          </Col>
                          <Col  style={query.matches ? {margin:"0 auto",textAlign:"center"}:{}}   xs={18} sm={12} lg={12} xl={12} >
                              <Statistic title="Total 24h Volume" value={`$${millify(stats?.total24hVolume ? stats?.total24hVolume:0)}`} />
                          </Col>
                          <Col  style={query.matches ? {margin:"0 auto",textAlign:"center"}:{}}   xs={18} sm={12} lg={12} xl={12} >
                              <Statistic title="Total Markets" value={`$${millify(stats?.totalMarkets ? stats?.totalMarkets:0)}`} />
                          </Col>
                      </>

                  }
            </Row>
        </div>
    );
};

export default Stats;
