(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},58:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),i=a.n(s),o=a(9),c=a(7),m=a(11),l=a.n(m),u=a(25),v=a(26),p=a(31),d=a(27),g=a(32),y=a(28),E=a.n(y),b=a(3),f=a.n(b);function h(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres,o=void 0===i?[]:i;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movies_data"},r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("ul",{className:"genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"...")))}h.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var _=h,N=(a(58),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=function(){var e,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(E.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));var j=function(){return r.a.createElement("span",null,"About this page: I built it because I love Moives.")};var k=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var q=function(){return r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(c.a,{path:"/",exact:!0,component:N}),r.a.createElement(c.a,{path:"/about",component:j}))};i.a.render(r.a.createElement(q,null),document.getElementById("potato"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3c411e0a.chunk.js.map