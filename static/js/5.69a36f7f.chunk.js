(this["webpackJsonpactive-sloth"]=this["webpackJsonpactive-sloth"]||[]).push([[5],{458:function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}t.d(e,"a",(function(){return o}))},459:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(46),a=t(1),o=t.n(a),i=t(33);function c(){var n=Object(r.a)(["\n  background-color: ",";\n  border-radius: 5px;\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 5px 10px;\n  text-transform: uppercase;\n"]);return c=function(){return n},n}var u,l=function(n){var e=n.label;return o.a.createElement(m,null,e)},m=i.c.div(c(),(function(n){return n.theme.colorSecondary}));function f(){var n=Object(r.a)(["\n  border-radius: ",";\n  margin-bottom: ",";\n  object-fit: cover;\n  height: 200px;\n  width: 100%;\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  border-radius: ",";\n  margin-bottom: ",";\n  object-fit: cover;\n  width: 100%;\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n  position: relative;\n\n  > div {\n    left: -10px;\n    position: absolute;\n    top: 20px;\n  }\n"]);return s=function(){return n},n}!function(n){n[n.Post=0]="Post",n[n.Card=1]="Card"}(u||(u={}));e.b=function(n){var e=n.imageUrl,t=n.imageAlt,r=n.displayType,a=void 0===r?u.Card:r,i=n.categoryLabel;return o.a.createElement(p,null,"undefined"!==typeof i&&o.a.createElement(l,{label:i}),a===u.Post&&o.a.createElement(b,{src:e,alt:t}),a===u.Card&&o.a.createElement(v,{src:e,alt:t}))};var p=i.c.div(s()),b=i.c.img(d(),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.spacing})),v=i.c.img(f(),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.spacingSmall}))},462:function(n,e,t){"use strict";var r,a=t(46),o=t(1),i=t.n(o),c=t(33),u=t(80),l=t(459);function m(){var n=Object(a.a)(["\n  margin-top: 0;\n"]);return m=function(){return n},n}function f(){var n=Object(a.a)(["\n  color: ",";\n  font-weight: 700;\n  margin-bottom: ",";\n"]);return f=function(){return n},n}function d(){var n=Object(a.a)(["\n  color: ",";\n  margin-bottom: ",";\n"]);return d=function(){return n},n}function s(){var n=Object(a.a)(["\n  color: ",";\n  text-decoration: none;\n"]);return s=function(){return n},n}function p(){var n=Object(a.a)([""]);return p=function(){return n},n}!function(n){n[n.Shortened=0]="Shortened",n[n.Default=1]="Default"}(r||(r={}));e.a=function(n){var e=n.post,t=n.displayType,a=void 0===t?r.Default:t;return i.a.createElement(v,{to:"/post/".concat(e.url_key),key:e.id},i.a.createElement(b,null,i.a.createElement(l.b,{imageUrl:e.cover.url,imageAlt:e.cover.url?e.cover.url:e.title,categoryLabel:e.category}),i.a.createElement(y,null,e.title),i.a.createElement(g,null,"Geplaatst op ",e.date),a===r.Default&&i.a.createElement("p",null,e.intro),i.a.createElement(h,null,"Lees verder")))};var b=c.c.div(p()),v=Object(c.c)(u.b)(s(),(function(n){return n.theme.textColor})),g=c.c.p(d(),(function(n){return n.theme.grey}),(function(n){return n.theme.spacingSmall})),h=c.c.p(f(),(function(n){return n.theme.colorPrimary}),(function(n){return n.theme.spacingSmall})),y=c.c.h3(m())},465:function(n,e,t){"use strict";var r=t(458),a=t(79),o=t(46);function i(){var n=Object(o.a)(['\n  query getPosts($limit: Int!, $withFeatured: [Int]!) {\n    posts(\n      where: { active: 1, featured: $withFeatured }\n      sort: "date:DESC"\n      limit: $limit\n    ) {\n      id\n      title\n      url_key\n      category {\n        name\n      }\n      cover {\n        name\n        caption\n        alternativeText\n        url\n      }\n      intro\n      date\n    }\n  }\n']);return i=function(){return n},n}var c=Object(a.gql)(i()),u=t(159);e.a=function(n,e){var t,o=Object(a.useQuery)(c,{variables:{limit:n,withFeatured:e?[0,1]:[0]}}),i=o.loading,l=o.error,m=o.data;return{loading:i,error:"undefined"!==typeof l,posts:"undefined"!==typeof m?(t=m.posts,t.map((function(n){return Object(r.a)(Object(r.a)({},n),{},{category:n.category.name,date:u.DateTime.fromISO(n.date).toFormat("dd LLLL yyyy")})}))):[]}}},469:function(n,e,t){"use strict";var r=t(46),a=t(1),o=t.n(a),i=t(33);function c(){var n=Object(r.a)(["\n  text-align: center;\n  margin: "," 0;\n"]);return c=function(){return n},n}e.a=function(n){var e=n.children;return o.a.createElement(u,null,e)};var u=i.c.h2(c(),(function(n){return n.theme.spacing}))},470:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r,a=t(46),o=t(1),i=t.n(o),c=t(33),u=t(465),l=t(462);function m(){var n=Object(a.a)(["\n  align-content: space-between;\n  display: flex;\n  flex-flow: row wrap;\n  margin-left: -20px;\n  margin-right: -20px;\n  width: calc(100% + 40px);\n\n  > a {\n    flex: 1;\n    padding: 20px;\n    min-width: 300px;\n  }\n"]);return m=function(){return n},n}!function(n){n[n.Shortened=0]="Shortened",n[n.Default=1]="Default"}(r||(r={}));e.b=function(n){var e=n.limit,t=void 0===e?3:e,a=n.displayType,o=void 0===a?r.Default:a,c=n.withFeatured,m=void 0===c||c,d=Object(u.a)(t,m),s=d.loading,p=d.error,b=d.posts;return s||p?i.a.createElement(i.a.Fragment,null):i.a.createElement(f,null,b.map((function(n){return i.a.createElement(l.a,{post:n,displayType:o,key:n.id})})))};var f=c.c.div(m())},511:function(n,e,t){n.exports=t.p+"static/media/hero.d19f52c0.png"},674:function(n,e,t){"use strict";t.r(e),t.d(e,"HomePage",(function(){return U}));var r=t(46),a=t(1),o=t.n(a),i=t(98),c=t(76),u=t(80),l=t(511),m=t.n(l),f=t(33);function d(){var n=Object(r.a)(["\n  max-width: 100%;\n\n  @media screen and (max-width: ",") {\n    display: none;\n  }\n"]);return d=function(){return n},n}var s=function(){return o.a.createElement(p,{src:m.a,alt:"The Active Sloth",title:"The Active Sloth"})},p=f.c.img(d(),(function(n){return n.theme.screenSmMax})),b=t(469);function v(){var n=Object(r.a)(["\n  background-color: ",";\n  border-radius: ",";\n  border: none;\n  color: white;\n  display: inline-block;\n  font-family: ",";\n  font-size: 16px;\n  font-weight: 700;\n  padding: ","\n    ",";\n\n  &:focus {\n    border: none;\n    outline: none;\n  }\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n    text-decoration: none;\n  }\n"]);return v=function(){return n},n}var g=function(n){n.type;var e=n.label,t=n.url,r=void 0===t?null:t,a=n.title,i=void 0===a?null:a;return r?o.a.createElement("a",{href:r,title:i||e},o.a.createElement(h,null,e)):o.a.createElement(h,null,e)},h=f.c.button(v(),(function(n){return n.theme.colorPrimary}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.bodyFont}),(function(n){return n.theme.spacingSmall}),(function(n){return n.theme.spacingLarge}),(function(n){return n.theme.colorPrimaryDark}));function y(){var n=Object(r.a)(["\n  color: ",";\n  margin-bottom: ",";\n"]);return y=function(){return n},n}function O(){var n=Object(r.a)(["\n  background-color: ",";\n  border-radius: ",";\n  float: right;\n  padding: 40px 40px 40px 80px;\n  width: 50%;\n\n  @media screen and (max-width: ",") {\n    padding: 0 20px 20px 20px;\n    margin-bottom: 40px;\n    width: 100%;\n  }\n"]);return O=function(){return n},n}var x=function(n){var e=n.post;return""===e.title?o.a.createElement(o.a.Fragment,null):o.a.createElement(j,null,o.a.createElement("h2",null,e.title),o.a.createElement(E,null,e.date),o.a.createElement("p",null,e.intro),o.a.createElement(u.b,{to:"/post/".concat(e.url_key)},o.a.createElement(g,{type:"primary",label:"Lees meer"})))},j=f.c.div(O(),(function(n){return n.theme.colorTertiaryLight}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.screenSmMax})),E=f.c.p(y(),(function(n){return n.theme.grey}),(function(n){return n.theme.spacingSmall})),w=t(458),S=t(79);function k(){var n=Object(r.a)(["\n  query getFeaturedPost {\n    posts(where: { featured: 1, active: 1 }, limit: 1) {\n      title\n      url_key\n      category {\n        name\n      }\n      cover {\n        name\n        caption\n        alternativeText\n        url\n      }\n      intro\n      date\n    }\n  }\n"]);return k=function(){return n},n}var P=Object(S.gql)(k()),L=t(159),D=function(){var n,e=Object(S.useQuery)(P,{}),t=e.loading,r=e.error,a=e.data;return{loading:t,error:"undefined"!==typeof r,post:"undefined"!==typeof a?(n=a.posts[0],Object(w.a)(Object(w.a)({},n),{},{category:n.category.name,date:L.DateTime.fromISO(n.date).toFormat("dd LLLL yyyy")})):{title:"",date:"",category:"",intro:"",content:[],cover:{url:"",caption:""}}}},F=t(459);function T(){var n=Object(r.a)(["\n  border-radius: ",";\n  margin-top: ",";\n  max-width: 100%;\n"]);return T=function(){return n},n}function C(){var n=Object(r.a)(["\n  position: absolute;\n  width: calc(50% + 40px);\n\n  @media screen and (max-width: ",") {\n    width: calc(40% + 40px);\n  }\n\n  @media screen and (max-width: ",") {\n    position: relative;\n    width: 100%;\n  }\n"]);return C=function(){return n},n}function M(){var n=Object(r.a)(["\n  display: inline-block;\n  margin: "," 0;\n  position: relative;\n\n  @media screen and (max-width: ",") {\n    margin: "," 0;\n  }\n"]);return M=function(){return n},n}var A=function(){var n=D().post;return o.a.createElement(R,null,o.a.createElement(q,null,o.a.createElement(I,{imageUrl:n.cover.url,imageAlt:n.title,displayType:F.a.Post,categoryLabel:n.category})),o.a.createElement(x,{post:n}))},R=f.c.div(M(),(function(n){return n.theme.spacing}),(function(n){return n.theme.screenSmMax}),(function(n){return n.theme.spacingSmall})),q=f.c.div(C(),(function(n){return n.theme.screenMdMax}),(function(n){return n.theme.screenSmMax})),I=Object(f.c)(F.b)(T(),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.spacing})),$=t(470);function _(){var n=Object(r.a)(["\n  text-align: center;\n"]);return _=function(){return n},n}function U(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement("title",null,"Home"),o.a.createElement("meta",{name:"description",content:c.a.description})),o.a.createElement(s,null),o.a.createElement(A,null),o.a.createElement(b.a,null,"Lees ook..."),o.a.createElement($.b,{limit:3,withFeatured:!1}),o.a.createElement(z,null,"...of ",o.a.createElement(u.b,{to:"/posts"},"klik hier")," voor meer posts!"))}var z=f.c.p(_())}}]);