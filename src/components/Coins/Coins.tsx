import {Avatar, Card, Col, Input, Row, Skeleton } from 'antd';
import React from 'react';
import {useGetCoinsQuery} from "../../rtkApi/api";
import Stats from "../Home/Stats/Stats";
import {Link} from "react-router-dom";
type CoinsType={
    simplified?:boolean
}
const Coins:React.FC<CoinsType> = ({simplified}) => {
    const {data,error,isLoading}=useGetCoinsQuery(simplified ? 10:100)
    return (
        <>
            {simplified &&  <Stats isLoading={isLoading}  stats={data?.data?.stats}/>}
            {!simplified &&  <div style={{maxWidth:600,margin:"0 auto 10px"}}>
                <Input style={{width:"100%"}}/>
            </div>}
            <Row gutter={[24,12]}   style={{marginBottom:"20px"}}>
                {isLoading  ? new Array(simplified ? 10:100).fill(1)
                    .map((_,index)=><Col  xs={24} sm={12} lg={8} xl={6}  key={index}
                                   className="site-card-border-less-wrapper">
                        <Card hoverable title={ <Skeleton.Button active={true}
                                                                  size={"default"}
                                                                  block={false}/>}
                              extra={<Skeleton.Avatar/>}
                              bordered={true} >
                        {new Array(3).fill(1).map((_,index) =>
                            <Skeleton.Button key={index}
                            style={{marginBottom: 5}} block={true}/>)
                        }
                        </Card>
                        </Col>) :  data?.data?.coins?.map(coin=><Col
                    xs={24} sm={12} lg={8} xl={6}   key={coin.id}
                                             className="site-card-border-less-wrapper">
                    <Link to={`/cryptocurrencies/${coin.uuid}`}>
                        <Card hoverable title={coin.name}
                              extra={<Avatar src={coin.iconUrl}/>}
                              bordered={true} >
                            {
                                <>
                                    <p>Price: {coin.price}</p>
                                    <p>Market Cap: {coin.marketCap}</p>
                                    <p>Daily Change: {coin.change}</p>
                                </>
                            }
                        </Card>
                    </Link>
                </Col>)}
            </Row>
        </>

    );
};
export default Coins;
