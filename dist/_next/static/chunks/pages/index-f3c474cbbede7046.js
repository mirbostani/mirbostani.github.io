(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(53678)}])},49743:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(828),r=a(85893),l=a(38125),n=a(53858),i=(a(28332),a(59267)),c=a.n(i),d=a(37039);function o(e){var t=e.slug,a=e.date,i=e.readTime,o=e.className,x=((0,d.$G)().t,(0,s.Z)((0,d.cQ)(),1)[0]),m=t?c()[t]:null;return(0,r.jsx)("div",{className:o,children:(0,r.jsxs)("div",{className:"flex flex-row items-center text-sm text-gray-500 dark:text-gray-400",children:[a&&(0,r.jsx)(n.Z,{dateString:a}),m&&(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,r.jsxs)("div",{className:"flex flex-row space-x-1",children:[(0,r.jsx)("span",{className:"",children:"by"}),(0,r.jsx)(l.Z,{href:{pathname:"/about",query:x},children:(0,r.jsx)("a",{children:m.fullname})})]})]}),i&&(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,r.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[i," min read"]})]})]})})}},53858:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(85893),r=a(78420),l=a(75313);function n(e){var t=e.dateString,a=e.className;if("undefined"===typeof t)return(0,s.jsx)(s.Fragment,{});var n=(0,r.Z)(t);return(0,s.jsx)("time",{className:a,dateTime:t,children:(0,l.Z)(n,"MMM d, yyyy")})}},34244:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var s=a(85893),r=a(828),l=a(38125),n=a(53858),i=a(23096),c=(a(49743),a(28332),a(59267)),d=a.n(c),o=a(37039);function x(e){var t=e.slug,a=e.category,c=e.title,x=e.description,m=e.date,u=e.author,f=(e.cover,e.tags),h=(e.readTime,e.type),g="/".concat(t),p="flex flex-col items-start mb-5",j="flex flex-col w-full px-0";1===h?(p="flex flex-col items-start mb-5","flex w-full pb-2","h-72 lg:h-52",j="flex flex-col w-full px-0"):2===h&&(p="flex flex-row items-start mb-5","flex w-full lg:w-1/2 pb-2","h-40",j="flex flex-col flex-grow w-full px-0");(0,o.$G)().t;var y=(0,r.Z)((0,o.cQ)(),1)[0];d()[u];return(0,s.jsx)("div",{className:p,children:(0,s.jsxs)("div",{className:j,children:[(0,s.jsx)("h2",{className:"pb-2 pt-1",children:(0,s.jsx)(l.Z,{href:{pathname:g,query:y},children:(0,s.jsx)("a",{className:"font-bold text-gray-600 dark:text-gray-300",children:c})})}),(0,s.jsxs)("div",{className:"flex flex-row items-center pb-2",children:[(0,s.jsx)(n.Z,{className:"text-xs text-gray-500 dark:text-gray-400",dateString:m}),(0,s.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,s.jsx)(i.Z,{className:"text-xs",category:a,tags:f})]}),(0,s.jsx)("div",{className:"pb-2",children:(0,s.jsx)(l.Z,{href:{pathname:g,query:y},children:(0,s.jsx)("a",{children:x})})})]})})}function m(e){var t=[],a=[],r=e.postsData;return(0,s.jsxs)("div",{children:[(0,s.jsx)("section",{className:"flex flex-col",children:t.length>0&&t.map((function(e){var t=e.slug,a=e.category,r=e.title,l=e.description,n=e.date,i=e.author,c=e.cover,d=e.tags,o=e.readTime;return(0,s.jsx)("div",{children:(0,s.jsx)(x,{slug:t,category:a,title:r,description:l,date:n,author:i,cover:c,tags:d,readTime:o,type:0},t)},t)}))}),(0,s.jsx)("section",{className:"flex flex-col lg:flex-row lg:gap-x-8",children:a.length>0&&a.map((function(e){var t=e.slug,a=e.category,r=e.title,l=e.description,n=e.date,i=e.author,c=e.cover,d=e.tags,o=e.readTime;return(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)(x,{slug:t,category:a,title:r,description:l,date:n,author:i,cover:c,tags:d,readTime:o,type:1},t)},t)}))}),(0,s.jsx)("section",{className:"flex flex-col",children:r.length>0&&r.map((function(e){var t=e.slug,a=e.category,r=e.title,l=e.description,n=e.date,i=e.author,c=e.cover,d=e.tags,o=e.readTime;return(0,s.jsx)("div",{children:(0,s.jsx)(x,{slug:t,category:a,title:r,description:l,date:n,author:i,cover:c,tags:d,readTime:o,type:2},t)},t)}))})]})}},23096:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(828),r=a(85893),l=a(38125),n=a(37039);function i(e){var t=e.category,a=e.tags,i=e.className,c=(0,n.$G)().t,d=(0,s.Z)((0,n.cQ)(),1)[0];return(0,r.jsx)("span",{className:i,children:(0,r.jsxs)("span",{className:"flex flex-row space-x-2",children:[t&&(0,r.jsx)(l.Z,{href:{pathname:"/categories/".concat(t),query:d},children:(0,r.jsx)("a",{className:"inline-block text-gray-500 dark:text-gray-400",children:c(t)})},t),null===a||void 0===a?void 0:a.split(",").map((function(e){return e=e.trim(),(0,r.jsx)(l.Z,{href:{pathname:"/tags/".concat(e),query:d},children:(0,r.jsx)("a",{className:"inline-block text-gray-500 dark:text-gray-400",children:"#".concat(e)})},e)}))]})})}},53678:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m},default:function(){return u}});var s=a(828),r=a(85893),l=a(2962),n=a(67424),i=a(59267),c=a.n(i),d=a(38125),o=a(37039),x=a(34244),m=!0;function u(e){var t=e.postsData,a=e.darkMode,i=(0,o.$G)().t,m=(0,s.Z)((0,o.cQ)(),1)[0],u=c().mirbostani,f="".concat(c().site.url);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.PB,{title:i("site_title"),description:i("site_description"),canonical:f,openGraph:{type:"profile",site_name:i("site_name"),locale:m&&"fa"===m.lang?"fa_IR":"en_US",url:f,title:i("site_title"),description:i("site_description"),images:[c().site.og.image1],profile:{firstName:i("mirbostani_firstname"),lastName:i("mirbostani_lastname"),gender:"male"}},twitter:{handle:c().mirbostani.twitter_handle,site:c().mirbostani.twitter_handle,cardType:"summary_large_image"}}),(0,r.jsxs)(n.Z,{darkMode:a,children:[(0,r.jsx)("div",{className:"flex flex-col flex-grow1 lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0 mb-8",children:(0,r.jsxs)("div",{className:"mb-8 lg:mb-0",children:[(0,r.jsx)("p",{className:"mb-4 font-mono",children:"Hello World;"}),(0,r.jsxs)("p",{className:"mb-4",children:["My name is"," ",(0,r.jsx)(d.Z,{href:{pathname:"/about",query:m},children:u.fullname}),"\u2014a ",u.title_extended,". Here is my personal blog in which I write about my projects and interests in computer science and engineering."]})]})}),(0,r.jsxs)("div",{className:"flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg p-4 pb-0",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4",children:i("latest_blog_posts")}),(0,r.jsx)(x.Z,{postsData:t})]})]})]})}}},function(e){e.O(0,[840,771,424,774,888,179],(function(){return t=75557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);