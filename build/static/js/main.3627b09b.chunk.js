(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,a,t){e.exports={card__header:"News_card__header__1VGJ3",card__footer:"News_card__footer__3QPhU",card__title:"News_card__title__1ANc5"}},133:function(e,a,t){e.exports={app:"App_app__dgsAJ",footer:"App_footer__35VjQ"}},1930:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),i=t.n(r),c=(t(214),t(1936)),o=(t(215),t(133)),m=t.n(o),s=t(21),u=t(1939),d=t(85),p=t(54),E=t(1938),v=t(202),g=t(1940),h=t(57),f=t(188),_=t(40),y=function(e,a,t){return Object(h.a)({"x-rapidapi-host":a||"coinranking1.p.rapidapi.com","x-rapidapi-key":t||"810180c592mshe971e96607fd6a6p117ff0jsnde09e439e46e"},e)},b=Object(f.a)({reducerPath:"coinsApi",baseQuery:Object(_.d)({baseUrl:"https://coinranking1.p.rapidapi.com/"}),endpoints:function(e){return{getCoins:e.query({query:function(e){return{url:"coins?limit=".concat(e),headers:y()}}}),getNews:e.query({query:function(e){return{url:"news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=".concat(e),headers:y({"x-bingapis-sdk":"true"},"bing-news-search1.p.rapidapi.com")}}}),getCoin:e.query({query:function(e){return{url:"coin/".concat(e),headers:y({"x-bingapis-sdk":"true"})}}}),getCoinPriceHistory:e.query({query:function(e){var a=e.id,t=e.timePeriod;return{url:"coin/".concat(a,"/history?timePeriod=").concat(t),headers:y()}}}),getCoinsExchanges:e.query({query:function(){return{url:"coin/Qwsogvtv82FCd/exchanges",headers:y()}}})}}}),k=b.useGetCoinsQuery,x=b.useGetNewsQuery,C=b.useGetCoinQuery,w=b.useGetCoinPriceHistoryQuery,N=b.useGetCoinsExchangesQuery,P=t(1941),O=t(82),S=t.n(O),j=function(){return l.a.createElement("div",null,l.a.createElement(v.a.Button,{style:{marginBottom:"5px"},active:!0,size:"small",block:!0}),l.a.createElement(v.a.Button,{active:!0,size:"default",block:!0}))},B=function(e){var a=e.stats,t=e.isLoading;return l.a.createElement("div",{style:{marginBottom:"10px"}},l.a.createElement("h1",null,"Global Crypto Stats"),l.a.createElement(d.a,{gutter:16},t?new Array(5).fill(1).map(function(e,a){return l.a.createElement(p.a,{key:a,span:12},l.a.createElement(j,null))}):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{span:12},l.a.createElement(P.a,{title:"Total Cryptocurrencies",value:null===a||void 0===a?void 0:a.total})),l.a.createElement(p.a,{span:12},l.a.createElement(P.a,{title:"Total Exchanges",value:null===a||void 0===a?void 0:a.totalExchanges})),l.a.createElement(p.a,{span:12},l.a.createElement(P.a,{title:"Total Market Cap",value:"$".concat(S()((null===a||void 0===a?void 0:a.totalMarketCap)?null===a||void 0===a?void 0:a.totalMarketCap:0))})),l.a.createElement(p.a,{span:12},l.a.createElement(P.a,{title:"Total 24h Volume",value:"$".concat(S()((null===a||void 0===a?void 0:a.total24hVolume)?null===a||void 0===a?void 0:a.total24hVolume:0))})),l.a.createElement(p.a,{span:12},l.a.createElement(P.a,{title:"Total Markets",value:"$".concat(S()((null===a||void 0===a?void 0:a.totalMarkets)?null===a||void 0===a?void 0:a.totalMarkets:0))})))))},A=t(44),M=function(e){var a,t,n,r=e.simplified,i=k(r?10:100),c=i.data,o=(i.error,i.isLoading);return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement(B,{isLoading:o,stats:null===c||void 0===c?void 0:null===(a=c.data)||void 0===a?void 0:a.stats}),!r&&l.a.createElement("div",{style:{maxWidth:600,margin:"0 auto 10px"}},l.a.createElement(u.a,null)),l.a.createElement(d.a,{gutter:[24,12],style:{marginBottom:"20px"}},o?new Array(r?10:100).fill(1).map(function(e,a){return l.a.createElement(p.a,{xs:24,sm:12,lg:6,key:a,className:"site-card-border-less-wrapper"},l.a.createElement(E.a,{title:l.a.createElement(v.a.Button,{active:!0,size:"default",block:!1}),extra:l.a.createElement(v.a.Avatar,null),bordered:!0},new Array(3).fill(1).map(function(e,a){return l.a.createElement(v.a.Button,{key:a,style:{marginBottom:5},block:!0})})))}):null===c||void 0===c?void 0:null===(t=c.data)||void 0===t?void 0:null===(n=t.coins)||void 0===n?void 0:n.map(function(e){return l.a.createElement(p.a,{xs:24,sm:12,lg:6,key:e.id,className:"site-card-border-less-wrapper"},l.a.createElement(A.b,{to:"/cryptocurrencies/".concat(e.uuid)},l.a.createElement(E.a,{title:e.name,extra:l.a.createElement(g.a,{src:e.iconUrl}),bordered:!0},l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Price: ",e.price),l.a.createElement("p",null,"Market Cap: ",e.marketCap),l.a.createElement("p",null,"Daily Change: ",e.change)))))})))},D=t(120),F=t.n(D),T=t(1937),V=function(e){var a=e.simplified,t=x(a?6:12),n=t.data,r=t.error,i=t.isLoading;return r&&console.error("Error!",r),l.a.createElement("div",null,!i&&l.a.createElement(d.a,{gutter:[24,12]},null===n||void 0===n?void 0:n.value.map(function(e,a){var t,n,r,i,c=e.description;return l.a.createElement(p.a,{key:a,span:8},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement(E.a,null,l.a.createElement("div",{className:F.a.card__header},l.a.createElement("h3",{className:F.a.card__title},e.name),e.image?l.a.createElement("img",{src:e.image.thumbnail.contentUrl,alt:""}):l.a.createElement("img",{src:"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",alt:"image"})),l.a.createElement("p",null,c.slice(0,100),"..."),l.a.createElement("div",{className:F.a.card__footer},l.a.createElement("div",{className:"footer__part",style:{display:"flex"}},l.a.createElement("div",{style:{marginRight:10}},(null===(t=e.provider[0].image)||void 0===t?void 0:null===(n=t.thumbnail)||void 0===n?void 0:n.contentUrl)&&l.a.createElement(g.a,{src:null===(r=e.provider[0].image)||void 0===r?void 0:null===(i=r.thumbnail)||void 0===i?void 0:i.contentUrl})),l.a.createElement("div",{style:{alignSelf:"center"}},l.a.createElement("span",null,e.provider[0].name))),l.a.createElement("div",{className:"footer__part"},l.a.createElement("span",null,Object(T.a)(new Date(e.datePublished)).replace("about","")," ago "))))))})))},q=function(){return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{simplified:!0}),l.a.createElement(V,{simplified:!0})))},Q=function(){var e=N("2"),a=e.data,t=e.error;return e.isLoading||console.log(a),t&&console.log("Error: ",t),l.a.createElement("div",null,"Exchanges")},U=t(1942),H=t(194),L=t.n(H),R=t(93),G=t(196),I=t.n(G),$=t(195),z=t.n($),J=function(){var e=Object(s.e)().pathname;return l.a.createElement(I.a,{style:{padding:"30px 15px"},className:z.a.navBar},l.a.createElement("div",{className:"logo"},l.a.createElement(d.a,null,l.a.createElement(g.a,{style:{marginRight:"10px"},size:"large",src:L.a}),l.a.createElement("h1",{style:{fontSize:"30px"}},l.a.createElement(A.b,{to:"/"},"Cryptoverse")))),l.a.createElement(U.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[e||"/"]},l.a.createElement(U.a.Item,{key:"/",icon:l.a.createElement(R.HomeOutlined,null)},l.a.createElement(A.c,{to:"/"},"Home")),l.a.createElement(U.a.Item,{key:"/cryptocurrencies",icon:l.a.createElement(R.FundOutlined,null)},l.a.createElement(A.c,{to:"/cryptocurrencies"},"CryptoCurencies")),l.a.createElement(U.a.Item,{key:"/exchanges",icon:l.a.createElement(R.MoneyCollectOutlined,null)},l.a.createElement(A.c,{to:"/exchanges"},"Exchanges")),l.a.createElement(U.a.Item,{key:"/news",icon:l.a.createElement(R.BulbOutlined,null)},l.a.createElement(A.c,{to:"/news"},"News"))))},W=t(53),Y=t(30),Z=t.n(Y),K=t(1943),X=t(1935),ee=t(204),ae=t(34);ae.d.register(ae.c,ae.i,ae.k,ae.h,ae.o,ae.p,ae.f);var te=function(e){var a=e.timePeriod,t=Object(s.g)().id,n=w({id:t,timePeriod:a}),r=n.data,i=(n.error,n.isLoading),c=[],o=[];if(r)for(var m,u=null===r||void 0===r?void 0:null===(m=r.data)||void 0===m?void 0:m.history,d=0;d<u.length;d++)o.push(new Date(u[d].timestamp).toLocaleDateString()),c.push(u[d].price);var p={labels:o,datasets:[{label:"Price In USD",data:c,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return l.a.createElement(l.a.Fragment,null,i?l.a.createElement("h1",null,"Loading..."):r&&l.a.createElement(ee.a,{data:p,options:{elements:{point:{radius:1}}}}))},ne=t(1945),le=t(1946),re=t(1947),ie=t(1948),ce=t(1949),oe=t(1950),me=t(1951),se=t(206),ue=t(1952),de=t(1944),pe=function(e){var a=e.cryptoStats,t=e.name,n=e.otherStats;return l.a.createElement("div",{className:Z.a.container,style:{marginBottom:20}},l.a.createElement("div",{className:Z.a.cryptoStats},l.a.createElement("h2",{className:Z.a.title},t," Value Statistic"),l.a.createElement("p",{className:Z.a.mainP},"An overview showing the statistics of",t),a.map(function(e,a){var t=e.icon,n=e.title,r=e.value;return l.a.createElement("div",{className:Z.a.stats__item},l.a.createElement(p.a,{key:a},l.a.createElement(d.a,null,l.a.createElement("p",{style:{marginRight:"5px"}}," ",t),l.a.createElement("p",null," ",n))),l.a.createElement(p.a,null,l.a.createElement("p",null,r)))})),l.a.createElement("div",{className:Z.a.cryptoStats},l.a.createElement("h2",{className:Z.a.title},"Other statistics"),l.a.createElement("p",{className:Z.a.mainP}," An overview showing the stats of cryptocurrencies "),n.map(function(e){var a=e.icon,t=e.title,n=e.value;return l.a.createElement("div",{className:Z.a.stats__item},l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement("p",{style:{marginRight:"5px"}}," ",a),l.a.createElement("p",null," ",t))),l.a.createElement(p.a,null,l.a.createElement("p",null,n)))})))},Ee=t(198),ve=t(94),ge=t.n(ve),he=function(e){var a=e.description,t=e.links,n=e.name;return l.a.createElement("div",{className:Z.a.container},l.a.createElement("div",{className:"".concat(ge.a.description__item," ").concat(ge.a.description__text)},l.a.createElement("h3",{className:Z.a.title},"What is ",n),Object(Ee.a)(a)),l.a.createElement("div",{style:{flex:"1 1 500px"},className:"".concat(ge.a.description__item," ").concat(ge.a.description__links)},l.a.createElement("h3",{className:Z.a.title},n," links"),t.map(function(e){return l.a.createElement("div",{className:Z.a.stats__item},l.a.createElement("div",null,l.a.createElement("p",null," ",e.type)),l.a.createElement("div",null,l.a.createElement("a",{href:e.url},e.name)))})))},fe=K.a.Option,_e=function(){var e,a,t,r=Object(s.g)().id,i=["3h","24h","7d","30d","1y","3m","3y","5y"],c=Object(n.useState)(i[0]),o=Object(W.a)(c,2),m=o[0],u=o[1],p=C(r),E=p.data,v=p.error,g=p.isLoading;v&&console.log("Error on CoinPage",v);var h=null===E||void 0===E?void 0:null===(e=E.data)||void 0===e?void 0:e.coin,f=function(e){return e?S()(+e):0},_=[{title:"Price to USD",value:f(null===h||void 0===h?void 0:h.price),icon:l.a.createElement(ne.a,null)},{title:"Rank",value:f(null===h||void 0===h?void 0:h.rank),icon:l.a.createElement(le.a,null)},{title:"24h Volumne",value:f(null===h||void 0===h?void 0:h["24hVolume"]),icon:l.a.createElement(re.a,null)},{title:"Market Cap",value:f(null===h||void 0===h?void 0:h.marketCap),icon:l.a.createElement(ie.a,null)},{title:"All-time-high(daily arg.)",value:f(null===h||void 0===h?void 0:null===(a=h.allTimeHigh)||void 0===a?void 0:a.price),icon:l.a.createElement(ce.a,null)}],y=[{title:"Number of Markets",value:f(null===h||void 0===h?void 0:h.numberOfMarkets),icon:l.a.createElement(oe.a,null)},{title:"Number of Exchanges",value:f(null===h||void 0===h?void 0:h.numberOfExchanges),icon:l.a.createElement(me.a,null)},{title:"Aproved supply",value:(null===h||void 0===h?void 0:null===(t=h.supply)||void 0===t?void 0:t.confirmed)?l.a.createElement(se.a,null):l.a.createElement(ue.a,null),icon:l.a.createElement(de.a,null)},{title:"Total supply",value:"$".concat(f(null===h||void 0===h?void 0:h.supply.total)),icon:l.a.createElement(de.a,null)},{title:"Circulating supply",value:"$".concat(f(null===h||void 0===h?void 0:h.supply.circulating)),icon:l.a.createElement(de.a,null)}];return l.a.createElement("div",null,g?l.a.createElement("h1",null,"Loading..."):E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"".concat(Z.a.title," ").concat(Z.a.mainTitle)},E.data.coin.name,"(",E.data.coin.symbol,") Price"),l.a.createElement("p",{className:Z.a.mainP},E.data.coin.name," live price in US Dollar (USD). View value statistics, market cap and supply."),l.a.createElement(X.a,null),l.a.createElement("div",null,l.a.createElement(K.a,{defaultValue:i[0],value:m,onChange:function(e){return u(e)},className:Z.a.select},i.map(function(e,a){return l.a.createElement(fe,{value:e,key:a},e)})),l.a.createElement("div",{className:Z.a.coinHeader},l.a.createElement("h2",{className:"".concat(Z.a.title)},E.data.coin.name," Price Chart"),l.a.createElement(d.a,null,l.a.createElement("h3",{style:{marginRight:"10px"}},"Change:",E.data.coin.change,"%"),l.a.createElement("h3",null,"Current ",E.data.coin.name," price: $",Math.round(+E.data.coin.price)))),l.a.createElement(te,{timePeriod:m}),l.a.createElement(pe,{name:E.data.coin.name,otherStats:y,cryptoStats:_}),l.a.createElement(he,{name:E.data.coin.name,links:E.data.coin.links,description:E.data.coin.description}))))},ye=c.a.Footer,be=c.a.Content,ke=function(){return l.a.createElement("div",{className:m.a.app},l.a.createElement(J,null),l.a.createElement("div",{style:{flex:"1 1 auto"}},l.a.createElement(be,{className:"site-layout-background",style:{padding:20,minHeight:280}},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(q,null)}),l.a.createElement(s.a,{path:"/cryptocurrencies/"},l.a.createElement(s.a,{path:":id",element:l.a.createElement(_e,null)}),l.a.createElement(s.a,{path:"",element:l.a.createElement(M,null)})),l.a.createElement(s.a,{path:"/news",element:l.a.createElement(V,null)}),l.a.createElement(s.a,{path:"/exchanges",element:l.a.createElement(Q,null)}))),l.a.createElement(ye,{className:m.a.footer},"All right received")))},xe=t(33),Ce=t(13),we=t(105),Ne=t.n(we),Pe=t(200);function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise(function(a){return setTimeout(function(){return a({data:e})},500)})}var Se,je=Object(Ce.c)("counter/fetchCount",function(){var e=Object(Pe.a)(Ne.a.mark(function e(a){var t;return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe(a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()),Be=Object(Ce.d)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,a){e.value+=a.payload}},extraReducers:function(e){e.addCase(je.pending,function(e){e.status="loading"}).addCase(je.fulfilled,function(e,a){e.status="idle",e.value+=a.payload})}}),Ae=Be.actions,Me=(Ae.increment,Ae.decrement,Ae.incrementByAmount,Be.reducer),De=Object(Ce.a)({reducer:(Se={},Object(xe.a)(Se,b.reducerPath,b.reducer),Object(xe.a)(Se,"counter",Me),Se),middleware:function(e){return e().concat(b.middleware)}});Object(_.e)(De.dispatch);var Fe=t(41);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A.a,null,l.a.createElement(Fe.a,{store:De},l.a.createElement(ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},194:function(e,a,t){e.exports=t.p+"static/media/cryptocurrency.88532732.png"},195:function(e,a,t){e.exports={navBar:"NavBar_navBar__C5y7Z"}},209:function(e,a,t){e.exports=t(1930)},214:function(e,a,t){},30:function(e,a,t){e.exports={container:"CoinPage_container__2OIOn",title:"CoinPage_title__1SsYn",mainTitle:"CoinPage_mainTitle__1YFn9",mainP:"CoinPage_mainP__2UdyR",select:"CoinPage_select__Wt-b4",coinHeader:"CoinPage_coinHeader__1edkO",cryptoStats:"CoinPage_cryptoStats__23iDf",stats__item:"CoinPage_stats__item__3SwJO"}},94:function(e,a,t){e.exports={description__item:"CoinPageDescription_description__item__1ojHh",description__text:"CoinPageDescription_description__text__NpStn",description__links:"CoinPageDescription_description__links__yyQ8d"}}},[[209,1,2]]]);
//# sourceMappingURL=main.3627b09b.chunk.js.map