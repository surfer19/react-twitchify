(window.webpackJsonptwitchify=window.webpackJsonptwitchify||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);a(61);var r=a(0),n=a.n(r),l=a(13),c=a.n(l),o=a(24),s=a(11),i=a(51),m=a(52),u=a(53),d=a(15),f=a.n(d),p=a(32),h=a(54),E=a.n(h),v="FETCH_STREAMS_BEGIN",O="FETCH_STREAMS_SUCCESS",b="FETCH_STREAMS_FAILURE",S="FETCH_FILTERED_STREAMS_SUCCESS";function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={allStreams:[],filteredStreams:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return w({},e);case O:return w({},e,{allStreams:t.payload});case b:return w({},e);case S:return w({},e,{filteredStreams:t.payload});default:return e}},_=Object(s.c)({streamListReducer:j}),k=a(55),T=a.n(k),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.e)(_,e,Object(s.d)(Object(s.a)(m.a,T.a),Object(i.cacheEnhancer)({log:!0}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()))},M=a(30),L=a(12),x=a(19),C=a(20),R=a(25),D=a(22),A=a(21),I=a(26),F=a(105),P=a(106),H=a(107),U=a(118),X=a(108),B=a(109),W=a(110),q=(a(91),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(R.a)(this,Object(D.a)(t).call(this,e))).toggle=a.toggle.bind(Object(A.a)(a)),a.state={isOpen:!1},a}return Object(I.a)(t,e),Object(C.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(F.a,{dark:!0,expand:"md"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(P.a,{href:"#"},"TWITCHIFY"),n.a.createElement(H.a,{onClick:this.toggle}),n.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(X.a,{className:"ml-auto",navbar:!0},n.a.createElement(B.a,null,n.a.createElement(W.a,{href:"#",target:"_blank"},"GitHub")))))))}}]),t}(n.a.Component)),G=(a(99),a(111)),J=a(112),V=a(113),z=a(114),Y=a(115),$=a(116),K=a(57),Q=(a(100),function(e){return n.a.createElement("a",{href:e.stream.channel.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(G.a,{className:"shadow"},n.a.createElement("div",{className:"card-img-overlay"},n.a.createElement("img",{src:e.stream.channel.logo,width:"45px",alt:"img"}),n.a.createElement("span",{className:"viewers"},n.a.createElement("strong",null,e.stream.viewers," "),"viewers")),n.a.createElement(J.a,{top:!0,width:"100%",src:e.stream.preview.medium,alt:"Card image cap"}),n.a.createElement(V.a,null,n.a.createElement(z.a,null,n.a.createElement(K.a,{lines:1,ellipsis:n.a.createElement("span",null,"...")},e.stream.channel.status)),n.a.createElement(Y.a,{className:"my-1"},e.stream.channel.name),n.a.createElement(Y.a,{className:"my-1"},e.stream.game),n.a.createElement($.a,null))))}),Z=a(58),ee=a.n(Z),te=(a(102),a(28)),ae=Object(te.a)([function(e){return e.streamListReducer.allStreams}],(function(e){return e.map((function(e){return e.professions}))})),re=(Object(te.a)([ae],(function(e){var t=[],a=new Map,r=!0,n=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var s=c.value,i=!0,m=!1,u=void 0;try{for(var d,f=s[Symbol.iterator]();!(i=(d=f.next()).done);i=!0){var p=d.value;a.has(p)||(a.set(p,!0),t.push(p))}}catch(h){m=!0,u=h}finally{try{i||null==f.return||f.return()}finally{if(m)throw u}}}}catch(h){n=!0,l=h}finally{try{r||null==o.return||o.return()}finally{if(n)throw l}}return t})),Object(te.a)([function(e){return e.allStreams},function(e,t){return t}],(function(e,t){return e.filter((function(e){return e.professions.includes(t)}))})),a(117)),ne=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(R.a)(this,Object(D.a)(t).call(this,e))).state={loadMore:!0,streamsToLoad:[],loadedStreams:0,canLoad:!0},a}return Object(I.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.loadMoreStreams(0)}},{key:"loadMoreStreams",value:function(){var e=this;this.setState({loadMore:!1}),this.props.fetchAllStreams(this.state.loadedStreams).then((function(){console.log("OFSET LOADMORE",e.state.loadedStreams);var t=e.props.allStreams;e.setState({streamsToLoad:e.state.streamsToLoad.concat(t),loadMore:!0,loadedStreams:e.state.loadedStreams+20,canLoad:!0})}))}},{key:"render",value:function(){return this.props.allStreams.length>0?n.a.createElement("div",{className:"px-3 mt-5"},n.a.createElement(ee.a,{className:"row",pageStart:0,loadMore:this.loadMoreStreams.bind(this),hasMore:this.state.loadMore,threshold:800,loader:n.a.createElement("div",{className:"loader",key:0},n.a.createElement(re.a,{color:"warning",key:"0",className:"spinner"}))},this.state.streamsToLoad.map((function(e,t){return n.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3 mt-4",key:t},n.a.createElement(Q,{stream:e}))})))):n.a.createElement("div",null,n.a.createElement(re.a,{color:"light",type:"grow",style:{position:"fixed",width:"4rem",height:"4rem",transform:"translateX(-50%,-50%)",top:"50%",left:"50%"}}))}}]),t}(n.a.Component),le=Object(o.b)((function(e){return{allStreams:e.streamListReducer.allStreams,filteredStreams:e.streamListReducer.filteredStreams}}),(function(e){return{fetchAllStreams:function(t){return e(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(a,r){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:v}),t.next=4,E.a.get("https://api.twitch.tv/kraken/streams/",{headers:{"Client-ID":"e58bb9u3nmtqp4ikxaz1qg05kelpy7l",Accept:"application/vnd.twitchtv.v5+json?api_version=5"},params:{limit:20,offset:e}});case 4:n=t.sent.data,a({type:O,payload:n.streams}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a((r=t.t0,{type:b,error:r}));case 11:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}()}(t))}}}))(ne),ce=N();var oe=function(){return n.a.createElement("div",null,n.a.createElement(q,null),n.a.createElement("div",{className:"container-fluid"},n.a.createElement(o.a,{store:ce},n.a.createElement(M.a,null,n.a.createElement(L.a,{exact:!0,path:"/",component:le})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,a){e.exports=a(104)},91:function(e,t,a){},99:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.c7ccac09.chunk.js.map