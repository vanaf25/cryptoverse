 type NewsItemProviderType={
    name:string,
    _type:string,
    image:{
        thumbnail: {
            _type: string,
            contentUrl: string,
        }
    }

}
 type NewsItemImageType={
    _type:string,
    thumbnail:{
        _type:string,
        width:number,
        height:number,
        contentUrl:string
    }
}
 type NewsItemType={
    _type:string,
    url:string,
    datePublished:string,
    description:string,
    name:string,
    image:NewsItemImageType,
    provider:NewsItemProviderType[]
}
export default interface NewsType{
    value:NewsItemType[],
}