import React from "react"
import parse from 'html-react-parser';
import styles from "./CoinPageDescription.module.css"
import styles2 from "./../CoinPage.module.css"
import {Col, Row,Typography } from "antd";
type CoinPageDescriptionPropsType={
    name:string,
    description:string,
    links:Array<{
        name:string,
        type:string,
        url:string
    }>
}
const {Text}=Typography
const CoinPageDescription:React.FC<CoinPageDescriptionPropsType>=({description,links,name})=>{
return (
    <Row gutter={[24,12]}>
        <Col xs={24} sm={24} lg={12} xl={12}>
            <div className={`${styles.description__text}` }>
                <h3 className={styles2.title}>What is {name}</h3>
                {parse(description)}
            </div>
        </Col>
        <Col  xs={24} sm={24} lg={12} xl={12}>
        <div  className={`${styles.description__links}` }>
            <h3 className={styles2.title}>{name} links</h3>
            {links.map(link=>{
                return <Row justify={"space-between"} align={"middle"} className={styles2.stats__item}>
                        <Text> {link.type}</Text>
                        <a href={link.url}>{link.name}</a>
                </Row>
            })}
        </div>
    </Col>
    </Row>

)
}
export default CoinPageDescription
