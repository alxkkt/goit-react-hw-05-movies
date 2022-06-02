"use strict";(self.webpackChunkhw_05_movies=self.webpackChunkhw_05_movies||[]).push([[652],{1652:function(A,e,t){t.r(e),t.d(e,{default:function(){return C}});var n=t(1413),r=t(5861),a=t(885),s=t(7757),i=t.n(s),c=t(501),o=t(6871),u=t(2791),l=t(7169),v=t.n(l),d=t(6188),p=t(8269),m="MovieDetailsPage_container__fntPy",g="MovieDetailsPage_movieCard__BMoxK",f="MovieDetailsPage_movieCardPoster__cMCE6",B="MovieDetailsPage_movieCardDescr__yPt7D",x="MovieDetailsPage_movieCardTitle__EPcqH",w="MovieDetailsPage_movieCardScore__zXd8p",h="MovieDetailsPage_movieCardOverviewTitle__f+iVA",E="MovieDetailsPage_movieCardOverview__p-Azq",b="MovieDetailsPage_movieCardGenres__d759v",D="MovieDetailsPage_additionalInfoTitle__XNxs7",Z="MovieDetailsPage_additionalInfo__MR4+w",j="MovieDetailsPage_additionalInfoList__zEG6S",N="MovieDetailsPage_additionalInfoItem__hAD5c",y="MovieDetailsPage_returnBtn__B4W7j",z=t(184),C=function(){var A=(0,u.useState)({movie:null,loading:!1,error:null}),e=(0,a.Z)(A,2),t=e[0],s=e[1],l=(0,o.UO)().movieId,C=(0,o.s0)();(0,u.useEffect)((function(){var A=function(){var A=(0,r.Z)(i().mark((function A(e){var t,r;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,d.Pg)(e);case 2:t=A.sent,r=t.data,s((function(A){return(0,n.Z)((0,n.Z)({},A),{},{movie:r,loading:!1})}));case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();try{s((function(A){return(0,n.Z)((0,n.Z)({},A),{},{loading:!0})})),A(l)}catch(k){s((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1,error:k.message})}))}}),[l]);var M=t.movie,P=t.loading,k=t.error;return(0,z.jsxs)(z.Fragment,{children:[P&&(0,z.jsx)(v(),{}),k&&(0,z.jsx)("p",{children:k}),M&&(0,z.jsxs)("div",{className:m,children:[(0,z.jsx)("button",{type:"button",onClick:function(){return C("/")},className:y,children:"Go Back"}),(0,z.jsxs)("div",{className:g,children:[(0,z.jsx)("div",{className:f,children:(0,z.jsx)("img",{src:(0,p.Z)(M.poster_path),alt:"Movie Poster",width:"360"})}),(0,z.jsxs)("div",{className:B,children:[(0,z.jsxs)("h2",{className:x,children:[M.title," (",M.release_date.slice(0,4),")"]}),(0,z.jsxs)("p",{className:w,children:["User Score: ",M.vote_average]}),(0,z.jsx)("h3",{className:h,children:"Overview"}),(0,z.jsx)("p",{className:E,children:M.overview}),(0,z.jsx)("h3",{className:b,children:"Genres"}),(0,z.jsx)("p",{children:M.genres.map((function(A){return A.name})).join(", ")})]})]}),(0,z.jsxs)("div",{className:Z,children:[(0,z.jsx)("h4",{className:D,children:"Additional Information"}),(0,z.jsxs)("ul",{className:j,children:[(0,z.jsx)("li",{className:N,children:(0,z.jsx)(c.rU,{to:"/movies/".concat(l,"/cast"),children:"Cast"})}),(0,z.jsx)("li",{className:N,children:(0,z.jsx)(c.rU,{to:"/movies/".concat(l,"/reviews"),children:"Reviews"})})]})]}),(0,z.jsx)(o.j3,{})]})]})}},6188:function(A,e,t){t.d(e,{Df:function(){return c},Pg:function(){return o},Ph:function(){return u},jP:function(){return l},zv:function(){return v}});var n=t(5861),r=t(7757),a=t.n(r),s=t(4569),i=t.n(s)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f65bce350427b2684a98ce5b213c02c8"}}),c=function(){var A=(0,n.Z)(a().mark((function A(){var e,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/trending/movie/day");case 2:return e=A.sent,t=e.data,A.abrupt("return",t.results);case 5:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),o=function(){var A=(0,n.Z)(a().mark((function A(e){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/movie/".concat(e));case 2:return t=A.sent,A.abrupt("return",t);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),u=function(){var A=(0,n.Z)(a().mark((function A(e){var t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/search/movie",{params:{query:e}});case 2:return t=A.sent,n=t.data,A.abrupt("return",n.results);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),l=function(){var A=(0,n.Z)(a().mark((function A(e){var t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/movie/".concat(e,"/reviews"));case 2:return t=A.sent,n=t.data,A.abrupt("return",n.results);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),v=function(){var A=(0,n.Z)(a().mark((function A(e){var t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return t=A.sent,n=t.data,A.abrupt("return",n.cast);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},8269:function(A,e,t){var n=t(2929);e.Z=function(A){return A?"".concat("https://image.tmdb.org/t/p/w500").concat(A):n}},2929:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=652.815fc405.chunk.js.map