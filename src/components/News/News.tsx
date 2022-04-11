import {Avatar, Card, Col, Row } from 'antd';
import React from 'react';
import { useGetNewsQuery} from "../../rtkApi/api";
import styles from './News.module.css'
import {formatDistanceToNow} from "date-fns"
import NewsSkeleton from "./NewsSkeleton/NewsSkeleton";
type NewsPropsType={
    simplified?:boolean
}
const News:React.FC<NewsPropsType> = ({simplified}) => {
    const {data,error,isLoading}=useGetNewsQuery(simplified ? 6:12)
if (error) console.error("Error!",error)
    return (
        <div>
            {!isLoading && <Row gutter={[24,12]}>
                {data?.value.map((item,index)=>{
                    const desc=item.description
                    return <Col xs={24} sm={24} lg={12} xl={8}  key={index} >
                        <a href={item.url} target={"_blank"}>
                            <Card hoverable>
                                <div className={styles.card__header}>
                                    <h3 className={styles.card__title}>{item.name}</h3>
                                    <div className={styles.card__image}>
                                        {item.image ? <img
                                                src={item.image.thumbnail.contentUrl} alt=""/>:
                                            <img src={"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"}
                                                 alt={"image"}/>
                                        }
                                    </div>

                                </div>
                                <p>{desc.slice(0,100)}...</p>
                                <div className={styles.card__footer} >
                                    <div className="footer__part" style={{display:"flex"}}>
                                        <div style={{marginRight:10}}>
                                            { item.provider[0].image?.thumbnail?.contentUrl && <Avatar src={item.provider[0].image?.thumbnail?.contentUrl}   /> }
                                        </div>
                                        <div style={{alignSelf:"center"}}>
                                            <span>{item.provider[0].name}</span>
                                        </div>
                                    </div>
                                    <div className="footer__part">
                                        <span>{formatDistanceToNow(new Date(item.datePublished)).replace("about","")} ago </span>
                                    </div>
                                </div>
                            </Card>
                        </a>

                        </Col>
                })}
                    </Row> }
        </div>
    );
};

export default News;
