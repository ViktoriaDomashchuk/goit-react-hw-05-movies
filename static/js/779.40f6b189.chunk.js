(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{80:function(e,t,n){"use strict";n.d(t,{Df:function(){return s},IQ:function(){return f},Jh:function(){return d},gH:function(){return h},s_:function(){return p}});var r=n(165),a=n(861),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="76cbb606f190fc237086ec33f1fd98a3",i="language=en-US",o="page=1&include_adult=false",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(u,"&").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&").concat(i,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(u,"&").concat(i,"&query=").concat(t,"&").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},779:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r,a=n(439),c=n(80),u=n(791),i=n(689),o=n(168),s=n(924).ZP.li(r||(r=(0,o.Z)(["\n  opacity: 1;\n"]))),p=n(7),f=n.n(p),d=n(184),h=function(){var e=(0,i.UO)().id,t=(0,u.useState)([]),n=(0,a.Z)(t,2),r=n[0],o=n[1];return(0,u.useEffect)((function(){(0,c.Jh)(e).then(o)}),[e]),0===r.length?(0,d.jsx)("div",{children:(0,d.jsx)("p",{children:"We don`t have any reviews for this movie."})}):(0,d.jsx)("div",{children:r.map((function(e){return(0,d.jsxs)(s,{children:[(0,d.jsxs)("h3",{children:["Author: ",e.author]}),(0,d.jsx)("p",{children:e.content})]},e.id)}))})},v=h;h.protoType={id:f().number.isRequired,reviews:f().array.isRequired,getReviews:f().func.isRequired}.isRequired},888:function(e,t,n){"use strict";var r=n(47);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=779.40f6b189.chunk.js.map