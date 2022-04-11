import { Col, Row } from "antd"
import React from "react"
import styles from './../CoinPage.module.css'
import {Typography} from 'antd'
type CoinPageStatsPropsType={
name:string,
cryptoStats:Array<{title:string,value:number | string,icon:JSX.Element}>,
otherStats:Array<{title:string,value:number  | string | JSX.Element,icon:Element}>
}
const {Text}=Typography
const CoinPageStats:React.FC<CoinPageStatsPropsType>=({cryptoStats,name,otherStats})=>{
    return (
        <Row gutter={[24,12]} justify={"space-between"}  style={{marginBottom:20}}>
            <Col xs={24} sm={24} lg={12} xl={12}>
                <div  className={styles.cryptoStats}>
                    <h2 className={styles.title}>{name} Value Statistic</h2>
                    <p className={styles.mainP}>An overview showing the statistics of
                        {name}</p>
                    {cryptoStats.map(({icon,title,value},index)=>{
                        return <Row  key={index} align={"middle"} justify={"space-between"} className={styles.stats__item}>
                                <Row>
                                    <Text style={{marginRight:"5px"}}> {icon}</Text>
                                    <Text> {title}</Text>
                                </Row>
                                <Text>{value}</Text>
                        </Row>
                    })}
                </div>
            </Col>
            <Col  xs={24} sm={24} lg={12} xl={12}>
                <div className={styles.cryptoStats}>
                    <h2 className={styles.title}>Other statistics</h2>
                    <p className={styles.mainP}> An overview showing the stats of cryptocurrencies </p>
                    {otherStats.map(({icon,title,value})=>{
                        return <Row align={"middle"} justify={"space-between"} className={styles.stats__item}>
                                <Row>
                                    <Text style={{marginRight:"5px"}}> {icon}</Text>
                                    <Text> {title}</Text>
                                </Row>
                                <Text>{value}</Text>
                        </Row>
                    })}
                </div>
            </Col>
        </Row>
    )
}
export default CoinPageStats
