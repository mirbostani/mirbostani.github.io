(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{45821:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(80318),r=a(19436),c=a(71297),l=(a(46943),a(64641)),n=a.n(l),i=a(37039),x=a(85893);function d(e){var t=e.slug,a=e.date,l=e.readTime,d=e.className,o=((0,i.$G)().t,(0,i.cQ)()),u=(0,s.Z)(o,1)[0],f=n()[t];return f?(0,x.jsx)("div",{className:d,children:(0,x.jsxs)("div",{className:"flex flex-row items-center text-sm text-gray-500 dark:text-gray-400",children:[a&&(0,x.jsx)(c.Z,{dateString:a}),(0,x.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,x.jsxs)("div",{className:"flex flex-row space-x-1",children:[(0,x.jsx)("span",{className:"",children:"by"}),(0,x.jsx)(r.Z,{href:{pathname:"/about",query:u},children:(0,x.jsx)("a",{children:f.fullname})})]}),l&&(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,x.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[l," min read"]})]})]})}):(0,x.jsx)(x.Fragment,{})}},71297:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(23855),r=a(84790),c=a(85893);function l(e){var t=e.dateString,a=e.className,l=(0,s.Z)(t);return(0,c.jsx)("time",{className:a,dateTime:t,children:(0,r.Z)(l,"MMM d, yyyy")})}},25740:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var s=a(80318),r=a(19436),c=a(71297),l=a(75369),n=(a(45821),a(46943),a(64641)),i=a.n(n),x=a(37039),d=a(85893);function o(e){var t=e.slug,a=e.category,n=e.title,o=e.description,u=e.date,f=e.author,m=(e.cover,e.tags),h=(e.readTime,e.type),g="/posts/".concat(t),p="flex flex-col items-start mb-5",j="flex flex-col w-full px-0";1===h?(p="flex flex-col items-start mb-5","flex w-full","h-72 lg:h-52",j="flex flex-col w-full px-0"):2===h&&(p="flex flex-row items-start mb-5","flex w-full lg:w-1/2","h-40",j="flex flex-col flex-grow w-full px-0");(0,x.$G)().t;var y=(0,x.cQ)(),v=(0,s.Z)(y,1)[0];i()[f];return(0,d.jsx)("div",{className:p,children:(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("div",{className:"pb-2 pt-1 text-2xl",children:(0,d.jsx)(r.Z,{href:{pathname:g,query:v},children:(0,d.jsx)("a",{className:"font-bold text-gray-600 dark:text-gray-300",children:n})})}),(0,d.jsx)("div",{className:"pb-2",children:(0,d.jsx)(r.Z,{href:{pathname:g,query:v},children:(0,d.jsx)("a",{children:o})})}),(0,d.jsxs)("div",{className:"flex flex-row items-center pb-2",children:[(0,d.jsx)(c.Z,{className:"text-xs text-gray-500 dark:text-gray-400",dateString:u}),(0,d.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,d.jsx)(l.Z,{className:"text-xs",category:a,tags:m})]})]})})}function u(e){var t=[],a=[],s=e.postsData;return(0,d.jsxs)("div",{children:[(0,d.jsx)("section",{className:"flex flex-col",children:t.length>0&&t.map((function(e){var t=e.slug,a=e.category,s=e.title,r=e.description,c=e.date,l=e.author,n=e.cover,i=e.tags,x=e.readTime;return(0,d.jsx)("div",{children:(0,d.jsx)(o,{slug:t,category:a,title:s,description:r,date:c,author:l,cover:n,tags:i,readTime:x,type:0},t)},t)}))}),(0,d.jsx)("section",{className:"flex flex-col lg:flex-row lg:gap-x-8",children:a.length>0&&a.map((function(e){var t=e.slug,a=e.category,s=e.title,r=e.description,c=e.date,l=e.author,n=e.cover,i=e.tags,x=e.readTime;return(0,d.jsx)("div",{className:"w-full",children:(0,d.jsx)(o,{slug:t,category:a,title:s,description:r,date:c,author:l,cover:n,tags:i,readTime:x,type:1},t)},t)}))}),(0,d.jsx)("section",{className:"flex flex-col",children:s.length>0&&s.map((function(e){var t=e.slug,a=e.category,s=e.title,r=e.description,c=e.date,l=e.author,n=e.cover,i=e.tags,x=e.readTime;return(0,d.jsx)("div",{children:(0,d.jsx)(o,{slug:t,category:a,title:s,description:r,date:c,author:l,cover:n,tags:i,readTime:x,type:2},t)},t)}))})]})}},75369:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(80318),r=a(19436),c=a(37039),l=a(85893);function n(e){var t=e.category,a=e.tags,n=e.className,i=(0,c.$G)().t,x=(0,c.cQ)(),d=(0,s.Z)(x,1)[0];return(0,l.jsx)("span",{className:n,children:(0,l.jsxs)("span",{className:"flex flex-row space-x-2",children:[t&&(0,l.jsx)(r.Z,{href:{pathname:"/categories/".concat(t),query:d},children:(0,l.jsx)("a",{className:"inline-block text-gray-500 dark:text-gray-400",children:i(t)})},t),a.split(",").map((function(e){return e=e.trim(),(0,l.jsx)(r.Z,{href:{pathname:"/tags/".concat(e),query:d},children:(0,l.jsx)("a",{className:"inline-block text-gray-500 dark:text-gray-400",children:"#".concat(e)})},e)}))]})})}},84438:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return i},default:function(){return x}});var s=a(80318),r=a(42016),c=a(25740),l=a(37039),n=a(85893),i=!0;function x(e){var t=e.tag,a=e.postsData,i=e.categories,x=e.darkMode,d=((0,l.$G)().t,(0,l.cQ)());(0,s.Z)(d,1)[0];return(0,n.jsxs)(r.Z,{title:t,categories:i,darkMode:x,children:[(0,n.jsxs)("h1",{className:"text-4xl font-extrabold mb-8",children:["#",t]}),(0,n.jsx)(c.Z,{postsData:a})]})}},45271:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return a(84438)}])}},function(e){e.O(0,[774,303,522,16,888,179],(function(){return t=45271,e(e.s=t);var t}));var t=e.O();_N_E=t}]);