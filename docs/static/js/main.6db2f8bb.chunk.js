(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(17),u=n.n(i),o=(n(33),n(34),n(2)),c=function(e){var t=Object(o.c)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Main"},a.a.createElement("h1",null,"Configuration"),a.a.createElement("button",{onClick:function(){t({type:"RESET"}),e.history.push("/")}},"Reset localstorage")))},l=n(4),s=n(14),f=n(13),m=function(e){var t=e.count,n=e.setCounter;return a.a.createElement("div",{className:"App"},a.a.createElement("p",null,"i = ",t),a.a.createElement("button",{onClick:function(){n(t+1)}},"Increse"))},p=Object(o.b)((function(e){return{count:e.count}}))((function(e){var t=e.count,n=Object(o.c)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Counter Widget"),a.a.createElement(m,{count:t,setCounter:function(){return n({type:"INCREMENT"})}}))})),d=function(e){var t=e.addUser,n=Object(r.useState)(""),i=Object(l.a)(n,2),u=i[0],o=i[1];return a.a.createElement("div",{className:"App"},a.a.createElement("input",{value:u,onChange:function(e){return o(e.target.value)}})," ",a.a.createElement("button",{onClick:function(){t(u),o("")}},"Add"))},v=Object(o.b)((function(e){return{users:e.users}}))((function(e){e.users;var t=e.history,n=Object(o.c)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Add data for a new user"),a.a.createElement(d,{addUser:function(e){n({type:"ADDUSER",value:e}),t.push("/collection/user/"+e)}}))})),g=function(){return a.a.createElement("div",{className:"Main"},a.a.createElement("h1",null,"Not found"))},y=n(15),h=n(3),b=n.n(h),O=n(8),E=n(12);var x=function(e){return function(e,t){var n={toObj:function(e){var t={};if(1===e.nodeType){if(e.attributes.length)for(var r=0;r<e.attributes.length;r++)t["@"+e.attributes[r].nodeName]=(e.attributes[r].nodeValue||"").toString();if(e.firstChild){for(var a=0,i=0,u=!1,o=e.firstChild;o;o=o.nextSibling)1===o.nodeType?u=!0:3===o.nodeType&&o.nodeValue.match(/[^ \f\n\r\t\v]/)?a++:4===o.nodeType&&i++;if(u)if(a<2&&i<2){n.removeWhite(e);for(var c=e.firstChild;c;c=c.nextSibling)3===c.nodeType?t["#text"]=n.escape(c.nodeValue):4===c.nodeType?t["#cdata"]=n.escape(c.nodeValue):t[c.nodeName]?t[c.nodeName]instanceof Array?t[c.nodeName][t[c.nodeName].length]=n.toObj(c):t[c.nodeName]=[t[c.nodeName],n.toObj(c)]:t[c.nodeName]=n.toObj(c)}else e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(a)e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(i)if(i>1)t=n.escape(n.innerXml(e));else for(var l=e.firstChild;l;l=l.nextSibling)t["#cdata"]=n.escape(l.nodeValue)}e.attributes.length||e.firstChild||(t=null)}else 9===e.nodeType?t=n.toObj(e.documentElement):alert("unhandled node type: "+e.nodeType);return t},toJson:function(e,t,r){var a=t?'"'+t+'"':"";if(e instanceof Array){for(var i=0,u=e.length;i<u;i++)e[i]=n.toJson(e[i],"",r+"\t");a+=(t?":[":"[")+(e.length>1?"\n"+r+"\t"+e.join(",\n"+r+"\t")+"\n"+r:e.join(""))+"]"}else if(null===e)a+=(t&&":")+"null";else if("object"===typeof e){var o=[];for(var c in e)o[o.length]=n.toJson(e[c],c,r+"\t");a+=(t?":{":"{")+(o.length>1?"\n"+r+"\t"+o.join(",\n"+r+"\t")+"\n"+r:o.join(""))+"}"}else a+="string"===typeof e?(t&&":")+'"'+e.toString().replace(/"/g,'\\"')+'"':(t&&":")+e.toString();return a},innerXml:function(e){var t="";if("innerHTML"in e)t=e.innerHTML;else for(var n=function e(t){var n="";if(1===t.nodeType){n+="<"+t.nodeName;for(var r=0;r<t.attributes.length;r++)n+=" "+t.attributes[r].nodeName+'="'+(t.attributes[r].nodeValue||"").toString()+'"';if(t.firstChild){n+=">";for(var a=t.firstChild;a;a=a.nextSibling)n+=e(a);n+="</"+t.nodeName+">"}else n+="/>"}else 3===t.nodeType?n+=t.nodeValue:4===t.nodeType&&(n+="<![CDATA["+t.nodeValue+"]]>");return n},r=e.firstChild;r;r=r.nextSibling)t+=n(r);return t},escape:function(e){return e.replace(/[\\]/g,"\\\\").replace(/["]/g,'"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(e){e.normalize();for(var t=e.firstChild;t;)if(3===t.nodeType)if(t.nodeValue.match(/[^ \f\n\r\t\v]/))t=t.nextSibling;else{var r=t.nextSibling;e.removeChild(t),t=r}else 1===t.nodeType?(n.removeWhite(t),t=t.nextSibling):t=t.nextSibling;return e}};9===e.nodeType&&(e=e.documentElement);var r=n.toJson(n.toObj(n.removeWhite(e)),e.nodeName,"\t");return"{\n"+t+(t?r.replace(/\t/g,t):r.replace(/\t|\n/g,""))+"\n}"}(function(e){var t=null;if(window.DOMParser)try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(n){t=null}else if(window.ActiveXObject)try{(t=new window.ActiveXObject("Microsoft.XMLDOM")).async=!1,t.loadXML(e)||window.alert(t.parseError.reason+t.parseError.srcText)}catch(n){t=null}else alert("cannot parse xml string!");return t}(e),"")},j=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,w="BGG_DB_IMAGES",P="BGG_DB_DETAILS",k="BGG_DB_CACHE";function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return new Promise((function(n,r){var a=j.open(e,t);a.onupgradeneeded=function(e){var t=e.target.result;t.createObjectStore(w,{keyPath:"id"}),t.createObjectStore(P,{keyPath:"id"}),t.createObjectStore(k,{keyPath:"id"})},a.onsuccess=function(){return n(a.result)},a.onerror=function(){return r(a.error)},a.onblocked=function(){console.log("blocked")}}))}function C(e,t,n,r){return new Promise((function(a,i){var u=e.transaction(t,"readwrite").objectStore(t).put({id:n,data:r});u.onsuccess=function(){return a(u.result)},u.onerror=function(){return i(u.error)}}))}function N(e,t,n){return new Promise((function(r,a){var i=e.transaction(t,"readonly").objectStore(t).get(n);i.onsuccess=function(){return r(i&&i.result&&i.result.data)},i.onerror=function(){return a(i.error)}}))}var D={IMAGES:w,DETAILS:P,CACHE:k,add:function(){var e=Object(O.a)(b.a.mark((function e(t,n,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("BBG_DB");case 3:return a=e.sent,e.next=6,C(a,t,n,r);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,a&&a.close(),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t,n,r){return e.apply(this,arguments)}}(),get:function(){var e=Object(O.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("BBG_DB");case 3:return r=e.sent,e.next=6,N(r,t,n);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,r&&r.close(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t,n){return e.apply(this,arguments)}}()},T="Cache_",A="https://boardgamegeek.com/xmlapi2/";function I(e){return new Promise((function(t){return setTimeout(t,e)}))}var M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:350,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2.5;return new Promise(function(){var a=Object(O.a)(b.a.mark((function a(i,u){var o,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=0;case 1:if(!(o<t)){a.next=24;break}return a.prev=2,a.next=5,fetch(e);case 5:if(200!==(c=a.sent).status){a.next=11;break}return i(c),a.abrupt("return");case 11:return a.next=13,I(n*Math.pow(r,o));case 13:return a.abrupt("continue",21);case 14:a.next=21;break;case 16:return a.prev=16,a.t0=a.catch(2),a.next=20,I(n*Math.pow(r,o));case 20:return a.abrupt("continue",21);case 21:o++,a.next=1;break;case 24:u();case 25:case"end":return a.stop()}}),a,null,[[2,16]])})));return function(e,t){return a.apply(this,arguments)}}())},R=function(){var e=Object(O.a)(b.a.mark((function e(t,n){var r,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=A+t,n&&((a=Object.entries(n).map((function(e){var t=Object(l.a)(e,2);return t[0]+"="+t[1]}))).length&&-1===r.indexOf("?")&&(r+="?"),r+=a.join("&")),e.next=4,D.get(D.CACHE,T+r);case 4:if(!(i=e.sent)){e.next=7;break}return e.abrupt("return",Promise.resolve({data:JSON.parse(i),cache:!0}));case 7:return e.abrupt("return",M(r).then((function(e){return e.text()})).then((function(e){return x(e)})).then((function(e){var t=JSON.parse(e);return D.add(D.CACHE,T+r,e),{data:t,cache:!1}})));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t=e.name,n=e.save,i=e.history,u=Object(r.useState)(null),o=Object(l.a)(u,2),c=o[0],s=o[1],f=Object(r.useState)({}),m=Object(l.a)(f,2),p=m[0],d=m[1],v=Object(r.useState)({}),g=Object(l.a)(v,2),h=(g[0],g[1]);Object(r.useEffect)((function(){s(null),d({}),h({})}),[t]),Object(r.useEffect)((function(){c&&0===Object.entries(p).length&&x()}),[c,p]);var E=function e(t){var n=t[0];n&&R("thing",{id:n,stats:1}).then((function(r){d((function(e){var t=G({},e);return t[n]=r.data,t})),setTimeout((function(){return e(t.slice(1))}),r.cache?0:400)}))},x=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(y.a)(c.items.item).map((function(e){return e["@objectid"]})),E(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c||R("collection",{username:t,subtype:"boardgame",excludesubtype:"boardgameexpansion",stats:1,own:1}).then((function(e){s(e.data)})),a.a.createElement("div",{className:"App"},p&&c&&a.a.createElement("pre",null,"Loading data for games ",Object.keys(p).length," of ",c.items.item.length),c&&p&&a.a.createElement("button",{onClick:function(){var e=c.items.item.map((function(e){return G({},e,{},p[e["@objectid"]].items.item)}));console.log(e),n(e),i.push("/filter/"+t)}},"Save"))},V=Object(o.b)((function(e){return{users:e.users}}))((function(e){var t=e.match,n=e.users,i=e.dispatch,u=e.history,o=Object(r.useState)(""),c=Object(l.a)(o,2),s=c[0],f=c[1];Object(r.useEffect)((function(){f(t.params.id)}),[t]);var m=n[s];if(!m)return a.a.createElement(g,null);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,m.name),a.a.createElement(L,{history:u,save:function(e){return i({type:"SAVE",user:s,value:e})},name:m.name}),a.a.createElement("div",{style:{marginTop:"30px"}},a.a.createElement("button",{onClick:function(){i({type:"DELETE_USER",value:s}),u.replace("/collection/add")}},"Remove user")))})),_=function(e){return e.history.replace("/collection/add"),a.a.createElement("div",{className:"Main"},a.a.createElement("h1",null,"Users"))},W=function(e){var t=e.list;return a.a.createElement("ul",null,Object.entries(t).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return a.a.createElement("li",{key:n},a.a.createElement(s.b,{activeClassName:"active",to:"/collection/user/"+r.name},a.a.createElement("span",{className:"title"},r.name)))})),a.a.createElement("li",{key:"add",style:{borderTop:"1px solid gray"}},a.a.createElement(s.b,{activeClassName:"active",to:"/collection/add"},a.a.createElement("span",{className:"title"},"+ Add user"))))},F=Object(o.b)((function(e){return{users:e.users}}))((function(e){var t=e.users;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"SideBar"},a.a.createElement(W,{list:t})),a.a.createElement("div",{className:"Main"},a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/collection/add",component:v}),a.a.createElement(f.a,{path:"/collection/user/:id",component:V}),a.a.createElement(f.a,{path:"/collection/cw",component:p}),a.a.createElement(f.a,{path:"/collection",component:_}),a.a.createElement(f.a,{component:g}))))})),H={stateVersion:0,count:0,users:{},active:[],collection:[],details:{}};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e,t){switch(t.type){case"INCREMENT":return J({},e,{count:e.count+1});case"RESET":return localStorage.clear(),indexedDB.deleteDatabase(D.DB),H;case"ADDUSER":var n=J({},e,{count:e.count+1,users:J({},e.users)});return n.users[t.value]=n.users[t.value]||{name:t.value,id:n.count},n;case"DELETE_USER":var r=J({},e,{users:J({},e.users)});return delete r.users[t.value],r;case"SET_ACTIVE":return J({},e,{active:t.value});case"SET_COLLECTION":return J({},e,{collection:t.value});case"SET_SORT":return J({},e,{sort:t.value});case"SAVE":var a="COLLECTION_"+t.user;D.add(D.DETAILS,a,t.value);var i=J({},e);return i.details[t.user]=a,i;default:return e}},z=n(19);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var K=function(){var e=localStorage.getItem("BGG-COLLECTION");if(e)try{return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},H,{},JSON.parse(e))}catch(t){}return H},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),t=arguments.length>1?arguments[1]:void 0,n=X(e,t);return localStorage.setItem("BGG-COLLECTION",JSON.stringify(n)),n},q=(a.a.createContext(null),Object(z.b)($)),Q=Object(o.b)((function(e){return{users:e.users}}))((function(e){return 0===Object.keys(e.users).length&&e.history.replace("/collection"),Object.keys(e.users).length>0&&e.history.replace("/filter"),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Main"},a.a.createElement("h1",null,"Home")))}));function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ee={length:{title:"Game length",options:[{value:"short",name:"Short",action:function(e){return e.filter((function(e){return e.playtime<60}))}},{value:"medium",name:"Medium",action:function(e){return e.filter((function(e){return e.playtime>45&&e.playtime<120}))}},{value:"long",name:"Long",action:function(e){return e.filter((function(e){return e.playtime>100}))}}]},players:{title:"Players",options:[{value:"1",action:function(e){return e.filter((function(e){return e.minplayers<=1&&e.maxplayers>=1}))}},{value:"2",action:function(e){return e.filter((function(e){return e.minplayers<=2&&e.maxplayers>=2}))}},{value:"3",action:function(e){return e.filter((function(e){return e.minplayers<=3&&e.maxplayers>=3}))}},{value:"4",action:function(e){return e.filter((function(e){return e.minplayers<=4&&e.maxplayers>=4}))}},{value:"5",action:function(e){return e.filter((function(e){return e.minplayers<=5&&e.maxplayers>=5}))}},{value:"6",action:function(e){return e.filter((function(e){return e.minplayers<=6&&e.maxplayers>=6}))}},{value:"7+",action:function(e){return e.filter((function(e){return e.maxplayers>=7}))}}]},weight:{title:"Game weight",options:[{value:"light",name:"Light",action:function(e){return e.filter((function(e){return e.weight<=2}))}},{value:"medlight",name:"Medium Light",action:function(e){return e.filter((function(e){return e.weight>=1.5&&e.weight<=2.5}))}},{value:"med",name:"Medium",action:function(e){return e.filter((function(e){return e.weight>=2&&e.weight<=3.5}))}},{value:"medheavy",name:"Medium Heavy",action:function(e){return e.filter((function(e){return e.weight>=3&&e.weight<=4.5}))}},{value:"heavy",name:"Heavy",action:function(e){return e.filter((function(e){return e.weight>=4}))}}]},year:{title:"Year published",options:[{value:"2022",action:function(e){return e.filter((function(e){return e.year>=2022&&e.year<=2022}))}},{value:"2021",action:function(e){return e.filter((function(e){return e.year>=2021&&e.year<=2021}))}},{value:"2020",action:function(e){return e.filter((function(e){return e.year>=2020&&e.year<=2020}))}},{value:"2015-2019",action:function(e){return e.filter((function(e){return e.year>=2015&&e.year<=2019}))}},{value:"2010-2015",action:function(e){return e.filter((function(e){return e.year>=2010&&e.year<=2015}))}},{value:"2000-2009",action:function(e){return e.filter((function(e){return e.year>=2e3&&e.year<=2009}))}},{value:"1990-1999",action:function(e){return e.filter((function(e){return e.year>=1990&&e.year<=1999}))}},{value:"0000-1990",action:function(e){return e.filter((function(e){return e.year<=1990}))}}]},played:{title:"Played",options:[{value:"Rated",action:function(e){return e.filter((function(e){return e.rating>=1}))}},{value:"Has plays",action:function(e){return e.filter((function(e){return e.plays>0}))}}]},popularity:{title:"Popularity",options:[{value:"High",action:function(e){return e.filter((function(e){return e.numowned>=75e3}))}},{value:"Medium",action:function(e){return e.filter((function(e){return e.numowned>=35e3&&e.numowned<75e3}))}},{value:"Low",action:function(e){return e.filter((function(e){return e.numowned>1e4&&e.numowned<35e3}))}},{value:"Very Low",action:function(e){return e.filter((function(e){return e.numowned<1e4}))}}]},best:{title:"Best at",options:[{value:"1",action:function(e){return e.filter((function(e){return e.suggestedPlayers.best.indexOf("1")>-1}))}},{value:"2",action:function(e){return e.filter((function(e){return e.suggestedPlayers.best.indexOf("2")>-1}))}},{value:"3",action:function(e){return e.filter((function(e){return e.suggestedPlayers.best.indexOf("3")>-1}))}},{value:"4",action:function(e){return e.filter((function(e){return e.suggestedPlayers.best.indexOf("4")>-1}))}},{value:"5",action:function(e){return e.filter((function(e){return e.suggestedPlayers.best.indexOf("5")>-1}))}},{value:"6",action:function(e){return e.filter((function(e){return e.suggestedPlayers.best.indexOf("6")>-1}))}},{value:"7+",action:function(e){return e.filter((function(e){return e.suggestedPlayers.best.indexOf("7")>-1}))}}]},rec:{title:"Recommended at",options:[{value:"1",action:function(e){return e.filter((function(e){return e.suggestedPlayers.recommended.indexOf("1")>-1}))}},{value:"2",action:function(e){return e.filter((function(e){return e.suggestedPlayers.recommended.indexOf("2")>-1}))}},{value:"3",action:function(e){return e.filter((function(e){return e.suggestedPlayers.recommended.indexOf("3")>-1}))}},{value:"4",action:function(e){return e.filter((function(e){return e.suggestedPlayers.recommended.indexOf("4")>-1}))}},{value:"5",action:function(e){return e.filter((function(e){return e.suggestedPlayers.recommended.indexOf("5")>-1}))}},{value:"6",action:function(e){return e.filter((function(e){return e.suggestedPlayers.recommended.indexOf("6")>-1}))}},{value:"7+",action:function(e){return e.filter((function(e){return e.suggestedPlayers.recommended.indexOf("7")>-1}))}}]},avoid:{title:"Avoid at",options:[{value:"1",action:function(e){return e.filter((function(e){return e.suggestedPlayers.avoid.indexOf("1")>-1}))}},{value:"2",action:function(e){return e.filter((function(e){return e.suggestedPlayers.avoid.indexOf("2")>-1}))}},{value:"3",action:function(e){return e.filter((function(e){return e.suggestedPlayers.avoid.indexOf("3")>-1}))}},{value:"4",action:function(e){return e.filter((function(e){return e.suggestedPlayers.avoid.indexOf("4")>-1}))}},{value:"5",action:function(e){return e.filter((function(e){return e.suggestedPlayers.avoid.indexOf("5")>-1}))}},{value:"6",action:function(e){return e.filter((function(e){return e.suggestedPlayers.avoid.indexOf("6")>-1}))}},{value:"7+",action:function(e){return e.filter((function(e){return e.suggestedPlayers.avoid.indexOf("7")>-1}))}}]},type:{title:"Game Type",options:[{value:"party",name:"Party Game",action:function(e){return e.filter((function(e){return e.group.indexOf("Party Game")>-1}))}},{value:"Miniatures",name:"Miniatures",action:function(e){return e.filter((function(e){return e.group.indexOf("Miniatures")>-1}))}},{value:"Real-time",name:"Real-time",action:function(e){return e.filter((function(e){return e.group.indexOf("Real-time")>-1}))}},{value:"Educational",name:"Educational",action:function(e){return e.filter((function(e){return e.group.indexOf("Educational")>-1}))}},{value:"child",name:"Children's Game",action:function(e){return e.filter((function(e){return e.group.indexOf("Children's Game")>-1}))}},{value:"Wargame",name:"Wargame",action:function(e){return e.filter((function(e){return e.group.indexOf("Wargame")>-1}))}},{value:"Dice",name:"Dice",action:function(e){return e.filter((function(e){return e.group.indexOf("Dice")>-1}))}}]},category:{title:"Game Category",options:[{value:"bluff",name:"Bluffing",action:function(e){return e.filter((function(e){return e.group.indexOf("Bluffing")>-1}))}},{value:"neg",name:"Negotiation",action:function(e){return e.filter((function(e){return e.group.indexOf("Negotiation")>-1}))}},{value:"Dexterity",name:"Dexterity",action:function(e){return e.filter((function(e){return e.group.join(",").includes("Dexterity")}))}},{value:"Deduction",name:"Deduction",action:function(e){return e.filter((function(e){return e.group.indexOf("Deduction")>-1}))}},{value:"Memory",name:"Memory",action:function(e){return e.filter((function(e){return e.group.indexOf("Memory")>-1}))}},{value:"Political",name:"Political",action:function(e){return e.filter((function(e){return e.group.indexOf("Political")>-1}))}},{value:"Role Playing",name:"Role Playing",action:function(e){return e.filter((function(e){return e.group.indexOf("Role Playing")>-1}))}},{value:"Real-Time",name:"Real-Time",action:function(e){return e.filter((function(e){return e.group.indexOf("Real-Time")>-1}))}}]},team:{title:"Player interaction",options:[{value:"team",name:"Team-Based",action:function(e){return e.filter((function(e){return e.group.indexOf("Team-Based Game")>-1}))}},{value:"traitor",name:"Traitor",action:function(e){return e.filter((function(e){return e.group.indexOf("Traitor Game")>-1}))}},{value:"hidden",name:"Hidden Roles",action:function(e){return e.filter((function(e){return e.group.indexOf("Hidden Roles")>-1}))}},{value:"Negotiation",name:"Negotiation",action:function(e){return e.filter((function(e){return e.group.indexOf("Negotiation")>-1}))}},{value:"Trading",name:"Trading",action:function(e){return e.filter((function(e){return e.group.indexOf("Trading")>-1}))}},{value:"Player Elimination",name:"Player Elimination",action:function(e){return e.filter((function(e){return e.group.indexOf("Player Elimination")>-1}))}},{value:"Cooperative Game",name:"Cooperative",action:function(e){return e.filter((function(e){return e.group.indexOf("Cooperative Game")>-1}))}}]},mechanic:{title:"Game Mechanic",options:[{value:"Auction",name:"Auction",action:function(e){return e.filter((function(e){return e.group.join(",").includes("Auction")}))}},{value:"Victory Points",name:"Victory Points",action:function(e){return e.filter((function(e){return e.group.join(",").includes("Victory Points")}))}},{value:"Drafting",name:"Drafting",action:function(e){return e.filter((function(e){return e.group.join(",").includes("Drafting")}))}},{value:"Worker Placement",name:"Worker Placement",action:function(e){return e.filter((function(e){return e.group.join(",").includes("Worker Placement")}))}},{value:"Area Majority",name:"Area Majority",action:function(e){return e.filter((function(e){return e.group.join(",").includes("Area Majority")}))}},{value:"Pick-up and Deliver",name:"Pick-up and Deliver",action:function(e){return e.filter((function(e){return e.group.indexOf("Pick-up and Deliver")>-1}))}},{value:"Dice Rolling",name:"Dice Rolling",action:function(e){return e.filter((function(e){return e.group.indexOf("Dice Rolling")>-1}))}},{value:"Push Your Luck",name:"Push Your Luck",action:function(e){return e.filter((function(e){return e.group.indexOf("Push Your Luck")>-1}))}},{value:"Tile Placement",name:"Tile Placement",action:function(e){return e.filter((function(e){return e.group.indexOf("Tile Placement")>-1}))}},{value:"take",name:"Take-that",action:function(e){return e.filter((function(e){return e.group.indexOf("Take That")>-1}))}},{value:"deckbuild",name:"Deck, Bag, and Pool Building",action:function(e){return e.filter((function(e){return e.group.join(",").includes(" Building")}))}}]},setup:{title:"Game Setup",options:[{value:"Simultaneous",name:"Sixmultaneous Action Selection",action:function(e){return e.filter((function(e){return e.group.indexOf("Simultaneous Action Selection")>-1}))}},{value:"Deck Construction",name:"Deck Construction",action:function(e){return e.filter((function(e){return e.group.indexOf("Deck Construction")>-1}))}},{value:"Variable Player Powers",name:"Variable Player Powers",action:function(e){return e.filter((function(e){return e.group.indexOf("Variable Player Powers")>-1}))}},{value:"Legacy Game",name:"Legacy Game",action:function(e){return e.filter((function(e){return e.group.indexOf("Legacy Game")>-1}))}},{value:"Campaign Game",name:"Campaign/Scenario Game",action:function(e){return e.filter((function(e){return e.group.join(",").includes("Campaign")}))}}]},lang:{title:"Langauge Dependency",options:[{value:"1",name:"No necessary in-game text",action:function(e){return e.filter((function(e){return e.language<=2}))}},{value:"2",name:"Some necessary text - easily memorized or small crib sheet",action:function(e){return e.filter((function(e){return e.language>1.75&&e.language<2.75}))}},{value:"3",name:"Moderate in-game text - needs crib sheet or paste ups",action:function(e){return e.filter((function(e){return e.language>2.5&&e.language<3.75}))}},{value:"4",name:"Extensive use of text - massive conversion needed to be playable",action:function(e){return e.filter((function(e){return e.language>3.5&&e.language<4.33}))}},{value:"5",name:"Unplayable in another language",action:function(e){return e.filter((function(e){return e.language>=4}))}}]}},te=function(e,t,n,r){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n);if(ne(a,e,t)){var i=t.replace(/^-/g,""),u=a[e].find((function(e){return e===i||e==="-"+i}));a[e]=a[e].filter((function(e){return e!==u})),u!==t&&a[e].push(t),0===a[e].length&&delete a[e]}else a[e]||(a[e]=[]),a[e].push(t);r(Object.entries(a).map((function(e){return e[0]+"="+encodeURIComponent(e[1].join(","))})).join("&"))},ne=function(e,t,n){if(!e[t])return!1;var r=n.replace(/^-/g,"");return e[t].indexOf(r)>-1?"+":e[t].indexOf("-"+r)>-1&&"-"},re=function(e){var t=e.filters,n=e.change;return a.a.createElement("div",{className:"filterlists"},Object.entries(ee).map((function(e){return a.a.createElement("div",{className:"card",key:e[0]},a.a.createElement("h3",null,e[1].title),a.a.createElement("ul",null,e[1].options.map((function(r){return a.a.createElement("li",{key:r.value},a.a.createElement("button",{onContextMenu:function(a){return function(e,t,n,r,a){return e.preventDefault(),e.stopPropagation(),te(t,n,r,a),!1}(a,e[0],"-"+r.value,t,n)},onClick:function(){return te(e[0],r.value,t,n)},className:("+"===ne(t,e[0],r.value)?"selected":null)+" "+("-"===ne(t,e[0],"-"+r.value)?"disselected":null)},r.name||r.value))}))))})))},ae=function(){var e=Object(O.a)(b.a.mark((function e(t,n){var r,a,i,u,o,c,l,s,f,m,p,d,v,g,y;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={},a=!0,i=!1,u=void 0,e.prev=4,o=t[Symbol.iterator]();case 6:if(a=(c=o.next()).done){e.next=33;break}return l=c.value,e.next=10,D.get(D.DETAILS,l);case 10:for(s=e.sent,f=!0,m=!1,p=void 0,e.prev=14,d=s[Symbol.iterator]();!(f=(v=d.next()).done);f=!0)g=v.value,r[g["@id"]]=g;e.next=22;break;case 18:e.prev=18,e.t0=e.catch(14),m=!0,p=e.t0;case 22:e.prev=22,e.prev=23,f||null==d.return||d.return();case 25:if(e.prev=25,!m){e.next=28;break}throw p;case 28:return e.finish(25);case 29:return e.finish(22);case 30:a=!0,e.next=6;break;case 33:e.next=39;break;case 35:e.prev=35,e.t1=e.catch(4),i=!0,u=e.t1;case 39:e.prev=39,e.prev=40,a||null==o.return||o.return();case 42:if(e.prev=42,!i){e.next=45;break}throw u;case 45:return e.finish(42);case 46:return e.finish(39);case 47:y=Object.values(r),console.log(y[0]),y=y.map((function(e){return ie(e)})),n(y);case 51:case"end":return e.stop()}}),e,null,[[4,35,39,47],[14,18,22,30],[23,,25,29],[40,,42,46]])})));return function(t,n){return e.apply(this,arguments)}}(),ie=function(e){var t=e["@id"],n=e.name;if(Array.isArray(n)){var r=n.filter((function(e){return"primary"===e["@type"]}))[0];n=r||n[0]}n=n["@value"];var a=e.thumbnail,i=parseInt(e.yearpublished["@value"],10),u=parseFloat(e.stats.rating["@value"]),o=parseInt(e.playingtime["@value"],10),c=parseInt(e.minage["@value"],10),l=parseInt(e.minplayers["@value"],10),s=parseInt(e.maxplayers["@value"],10),f=parseInt(e.maxplaytime["@value"],10),m=parseInt(e.minplaytime["@value"],10),p=parseInt(e.stats["@numowned"],10),d=parseInt(e.numplays,10);Array.isArray(e.stats.rating.ranks.rank)||(e.stats.rating.ranks.rank=[e.stats.rating.ranks.rank]);var v=e.stats.rating.ranks.rank.filter((function(e){return"1"===e["@id"]}))[0],g=null;v&&(g=parseFloat(v["@bayesaverage"]),v=parseFloat(v["@value"])||null);var y={best:[],recommended:[],avoid:[]},h=e.poll.filter((function(e){return"suggested_numplayers"===e["@name"]}))[0];if(h){Array.isArray(h.results)||(h.results=[h.results]);var b=!0,O=!1,E=void 0;try{for(var x,j=h.results[Symbol.iterator]();!(b=(x=j.next()).done);b=!0){var w=x.value,P=w["@numplayers"],k=parseInt(w.result.filter((function(e){return"Best"===e["@value"]}))[0]["@numvotes"],10),S=parseInt(w.result.filter((function(e){return"Recommended"===e["@value"]}))[0]["@numvotes"],10);parseInt(w.result.filter((function(e){return"Not Recommended"===e["@value"]}))[0]["@numvotes"],10)>k+S?-1===P.indexOf("+")&&y.avoid.push(P):k>S?y.best.push(P):y.recommended.push(P)}}catch(R){O=!0,E=R}finally{try{b||null==j.return||j.return()}finally{if(O)throw E}}}var C=null,N=e.poll.find((function(e){return"language_dependence"===e["@name"]}));if(N){var D=parseInt(N.results.result.find((function(e){return"No necessary in-game text"===e["@value"]}))["@numvotes"],10),T=parseInt(N.results.result.find((function(e){return"Some necessary text - easily memorized or small crib sheet"===e["@value"]}))["@numvotes"],10),A=parseInt(N.results.result.find((function(e){return"Moderate in-game text - needs crib sheet or paste ups"===e["@value"]}))["@numvotes"],10),I=parseInt(N.results.result.find((function(e){return"Extensive use of text - massive conversion needed to be playable"===e["@value"]}))["@numvotes"],10),M=parseInt(N.results.result.find((function(e){return"Unplayable in another language"===e["@value"]}))["@numvotes"],10);C=(D+2*T+3*A+4*I+5*M)/(D+T+A+I+M)}return{id:t,name:n,year:i,rating:u,playtime:o,minage:c,minplayers:l,maxplayers:s,maxplaytime:f,minplaytime:m,rank:v,bggrating:g,suggestedPlayers:y,image:a,numowned:p,group:e.link.filter((function(e){return"boardgamecategory"===e["@type"]||"boardgamemechanic"===e["@type"]})).map((function(e){return e["@value"]})),weight:parseFloat(e.statistics.ratings.averageweight["@value"]),ratings:parseFloat(e.statistics.ratings.usersrated["@value"]),plays:d,language:C}},ue=function(e){var t=e.data;return a.a.createElement("div",{className:"gamecard"},t.image&&a.a.createElement("div",{className:"thumbnail"},a.a.createElement("img",{src:t.image,alt:"Thumbnail for game",style:{maxWidth:"100%",maxHeight:"200px"}})),a.a.createElement("div",{className:"heading"},a.a.createElement("span",{className:"rank"},"#",t.rank)," ",a.a.createElement("span",{className:"title"},t.name)," ",a.a.createElement("span",{className:"year"},"(",t.year,")")),a.a.createElement("div",{className:"details"},a.a.createElement("span",{className:"rating"},"Rating ",t.bggrating)," ",a.a.createElement("br",null),a.a.createElement("span",{className:"playtime"},t.playtime," min")," ",a.a.createElement("br",null),a.a.createElement("span",{className:"weight"},"Weight ",t.weight)," ",a.a.createElement("br",null),a.a.createElement("span",{className:"players"},"Players ",t.minplayers," to ",t.maxplayers,a.a.createElement("br",null),"Best at ",t.suggestedPlayers.best.join(",")," ",a.a.createElement("br",null),"Recommended at ",t.suggestedPlayers.recommended.join(","))))},oe=function(e){var t=e.activeClass,n=e.action,r=e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:t,onClick:n},r))},ce=function(e){var t=e.list,n=e.sort;if(!t)return a.a.createElement(a.a.Fragment,null);console.log(n);var r=(n=n||"rank,asc").split(",")[0],i="desc"===n.split(",")[1],u=i?-1:1,o=i?1:-1;return"rank"===r&&t.sort((function(e,t){return e.rank>t.rank?u:o})),"rating"===r&&t.sort((function(e,t){return e.rating>t.rating?u:o})),"numowned"===r&&t.sort((function(e,t){return e.numowned>t.numowned?u:o})),"playtime"===r&&t.sort((function(e,t){return e.playtime>t.playtime?u:o})),"weight"===r&&t.sort((function(e,t){return e.weight>t.weight?u:o})),"year"===r&&t.sort((function(e,t){return e.year>t.year?u:o})),"name"===r&&t.sort((function(e,t){return e.name>t.name?u:o})),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(ue,{data:e}))})))},le=Object(o.b)((function(e){return{users:e.users,active:e.active,details:e.details,collection:e.collection,sort:e.sort}}))((function(e){var t=e.users,n=e.active,r=e.history,i=e.dispatch,u=e.location,o=e.match,c=e.details,s=e.collection,f=e.sort;0===Object.keys(t).length&&r.replace("/collection");var m=(u.search&&u.search.replace("?","").split("&").map((function(e){return e.split("=")})).map((function(e){return{key:e[0],value:decodeURIComponent(e[1]).split(",")}}))||[]).reduce((function(e,t){return e[t.key]=t.value,e}),{}),p=o.params.users&&o.params.users.split(",")||[];if(0===p.length&&n.length>0)return r.replace("/filter/"+n.join(",")),a.a.createElement(a.a.Fragment,null);var d=Object.entries(c).map((function(e){return{user:e[0],active:p.indexOf(e[0])>-1,dbKey:e[1]}}));p.length&&o.params.users!==n.join(",")&&(i({type:"SET_ACTIVE",value:p}),ae(d.filter((function(e){return e.active})).map((function(e){return e.dbKey})),(function(e){return i({type:"SET_COLLECTION",value:e})})));var v=function(e,t){for(var n=Object(y.a)(e),r=function(){var e=i[a],t=(u=Object(l.a)(e,2))[0],r=u[1],o=ee[t],c=r.filter((function(e){return e.startsWith("-")})).map((function(e){return e.replace("-","")})),s=o.options.filter((function(e){return e.value&&c.indexOf(e.value)>-1}));if(s.length){var f=new Set(n),m=!0,p=!1,d=void 0;try{for(var v,g=s[Symbol.iterator]();!(m=(v=g.next()).done);m=!0){var y=v.value.action(n),h=!0,b=!1,O=void 0;try{for(var E,x=y[Symbol.iterator]();!(h=(E=x.next()).done);h=!0){var j=E.value;f.delete(j)}}catch(L){b=!0,O=L}finally{try{h||null==x.return||x.return()}finally{if(b)throw O}}}}catch(L){p=!0,d=L}finally{try{m||null==g.return||g.return()}finally{if(p)throw d}}n=Array.from(f.values())}var w=new Set,P=o.options.filter((function(e){return r.indexOf(e.value)>-1}));if(P.length){var k=!0,S=!1,C=void 0;try{for(var N,D=P[Symbol.iterator]();!(k=(N=D.next()).done);k=!0){var T=N.value.action(n),A=!0,I=!1,M=void 0;try{for(var R,B=T[Symbol.iterator]();!(A=(R=B.next()).done);A=!0){var G=R.value;w.add(G)}}catch(L){I=!0,M=L}finally{try{A||null==B.return||B.return()}finally{if(I)throw M}}}}catch(L){S=!0,C=L}finally{try{k||null==D.return||D.return()}finally{if(S)throw C}}n=Array.from(w.values())}},a=0,i=Object.entries(t);a<i.length;a++){var u;r()}return n}(s,m);return console.log(v[0]),a.a.createElement("div",{className:"Main"},a.a.createElement("h2",null,"Change Collection"),a.a.createElement("div",{className:"userlist"},d.map((function(e){return a.a.createElement(oe,{activeClass:e.active?"active":null,key:e.user,action:function(){return e.active?function(e){var t=n.filter((function(t){return t!==e}));r.replace("/filter/"+t.join(",")+u.search)}(e.user):function(e){var t=[].concat(Object(y.a)(n),[e]);r.replace("/filter/"+t.join(",")+u.search)}(e.user)},name:e.user})}))),a.a.createElement("h2",null,"Add Filter"),a.a.createElement(re,{filters:m,change:function(e){return r.push(u.pathname+"?"+e)}}),a.a.createElement("div",{className:"gamelist"},a.a.createElement("h2",null,"Games"),a.a.createElement("div",{className:"sortbar"},"Sorty by ",a.a.createElement("select",{value:f,onChange:function(e){return i({type:"SET_SORT",value:e.target.value})}},a.a.createElement("option",{value:"rank,asc"},"Ranking"),a.a.createElement("option",{value:"rating,desc"},"Own Rating"),a.a.createElement("option",{value:"numowned,desc"},"Popularity"),a.a.createElement("option",{value:"playtime,asc"},"Play time"),a.a.createElement("option",{value:"weight,asc"},"Weight"),a.a.createElement("option",{value:"year,desc"},"Release year"),a.a.createElement("option",{value:"name,asc"},"Name"))),a.a.createElement(ce,{list:v,sort:f})))}));var se=function(){return a.a.createElement(o.a,{store:q},a.a.createElement(s.a,null,a.a.createElement("nav",{className:"sm-flex"},a.a.createElement(s.b,{exact:!0,activeClassName:"active",to:"/"},"Home"),a.a.createElement(s.b,{activeClassName:"active",to:"/collection/"},"Collection"),a.a.createElement(s.b,{activeClassName:"active",to:"/config"},"Configuration")),a.a.createElement("div",{className:"Body"},a.a.createElement(f.c,null,a.a.createElement(f.a,{exact:!0,path:"/",component:Q}),a.a.createElement(f.a,{path:"/collection",component:F}),a.a.createElement(f.a,{path:"/config",component:c}),a.a.createElement(f.a,{path:"/filter/:users",component:le}),a.a.createElement(f.a,{path:"/filter",component:le}),a.a.createElement(f.a,{component:g})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6db2f8bb.chunk.js.map