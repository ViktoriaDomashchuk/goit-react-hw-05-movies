(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{80:function(t,e,n){"use strict";n.d(e,{Df:function(){return s},IQ:function(){return f},Jh:function(){return d},gH:function(){return h},s_:function(){return p}});var r=n(165),a=n(861),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="76cbb606f190fc237086ec33f1fd98a3",u="language=en-US",o="page=1&include_adult=false",s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&").concat(u,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&").concat(u,"&query=").concat(e,"&").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},420:function(t,e,n){"use strict";n.d(e,{Hi:function(){return c},MY:function(){return a},j9:function(){return r}});var r="https://image.tmdb.org/t/p/w400",a="https://images.app.goo.gl/9bnbhB95okPPqeXG6",c="https://images.app.goo.gl/uS5NEmdt8exxDixDA"},387:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var r,a,c,i=n(439),u=n(80),o=n(791),s=n(689),p=n(420),f=n(168),d=n(924),h=d.ZP.div(r||(r=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  gap: 10px;\n"]))),l=d.ZP.li(a||(a=(0,f.Z)(["\n  display: block;\n  text-align: center;\n  opacity: 1;\n"]))),g=d.ZP.img(c||(c=(0,f.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=n(7),m=n.n(v),y=n(184),x=function(){var t=(0,s.UO)().id,e=(0,o.useState)([]),n=(0,i.Z)(e,2),r=n[0],a=n[1];return(0,o.useEffect)((function(){(0,u.IQ)(t).then(a)}),[t]),0===r.length?(0,y.jsx)("div",{children:(0,y.jsx)("p",{children:"We don`t have any cast for this movie."})}):(0,y.jsx)(h,{children:r.map((function(t){return(0,y.jsxs)(l,{children:[(0,y.jsx)(g,{src:p.j9+t.profile_path,alt:"actor",width:"200px"}),(0,y.jsx)("h3",{children:t.name}),(0,y.jsxs)("h4",{children:["Character: ",t.character]})]},t.id)}))})},Z=x;x.protoType={id:m().number.isRequired,cast:m().array.isRequired,getCast:m().func.isRequired}.isRequired},888:function(t,e,n){"use strict";var r=n(47);function a(){}function c(){}c.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,c,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},7:function(t,e,n){t.exports=n(888)()},47:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=387.2c6150fb.chunk.js.map