(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],l=0,m=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},s={app:0},n={app:0},o=[];function i(e){return c.p+"js/"+({Home:"Home"}[e]||e)+"."+{Home:"61538652","chunk-2d0ab0f6":"53d194ce"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={Home:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var r="css/"+({Home:"Home"}[e]||e)+"."+{Home:"4f3294b8","chunk-2d0ab0f6":"31d6cfe0"}[e]+".css",n=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===n))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){u=m[i],l=u.getAttribute("data-href");if(l===r||l===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],d.parentNode.removeChild(d),a(o)},d.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){s[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",m.name="ChunkLoadError",m.type=r,m.request=s,a[1](m)}n[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01c5":function(e,t,a){"use strict";a("b386")},"0226":function(e,t,a){},"0e54":function(e,t,a){},"199d":function(e,t,a){"use strict";a("87fb")},4294:function(e,t,a){},"4ace":function(e,t,a){"use strict";a("f7ac")},"4d3b":function(e,t,a){"use strict";a("4294")},5181:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},n=[],o={name:"App"},i=o,c=a("2877"),u=Object(c["a"])(i,s,n,!1,null,null,null),l=u.exports,m=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"d-flex flex-column align-center"},[a("h1",{staticClass:"white--text text-center"},[e._v("Home")]),null===e.getSelectedTeam?a("div",[a("v-select",{staticClass:"springGreen pa-4",attrs:{clearable:"",label:"Choose your team",items:e.teams},model:{value:e.selectedTeam,callback:function(t){e.selectedTeam=t},expression:"selectedTeam"}})],1):e._e()]),null!==e.getSelectedTeam?a("div",{staticClass:"d-flex flex-column align-center"},[a("h2",{staticClass:"white--text mt-10"},[e._v("More to come...")])]):e._e(),null!==e.getSelectedTeam?a("div",{staticClass:"d-flex flex-row-reverse"},[a("v-btn",{class:e.getSelectedTeam+"-Btn",on:{click:function(t){return e.changeTeam()}}},[e._v("Change Team")])],1):e._e()])},h=[],v=a("1da1"),f=a("5530"),p=(a("96cf"),a("d81d"),a("7db0"),a("2f62")),g={name:"Home",data:function(){return{selectedTeam:""}},computed:Object(f["a"])(Object(f["a"])({},Object(p["c"])(["getTeams","getSelectedTeam","getUser"])),{},{teams:function(){var e=this;return this.getTeams.map((function(t){return e.convertTeams(t.teamName)}))}}),methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(p["b"])(["fetchTeams","setSelectedTeam"])),Object(p["d"])(["resetSelectedTeam"])),{},{convertTeams:function(e){return"Manchester United"==e?"United":"Aston Villa"==e?"Villa":"Manchester City"==e?"City":"Crystal Palace"==e?"Palace":"West Ham"==e?"Hammers":e},changeTeam:function(){this.resetSelectedTeam()}}),watch:{selectedTeam:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s="United"===e?t.getTeams.find((function(e){return"Manchester United"===e.teamName})):"Villa"===e?t.getTeams.find((function(e){return"Aston Villa"===e.teamName})):"City"===e?t.getTeams.find((function(e){return"Manchester City"===e.teamName})):"Palace"===e?t.getTeams.find((function(e){return"Crystal Palace"===e.teamName})):"Hammers"===e?t.getTeams.find((function(e){return"West Ham"===e.teamName})):t.getTeams.find((function(t){return t.teamName===e})),n={username:t.getUser.username,selectedTeam:e,selectedTeamLogo:null===(r=s)||void 0===r?void 0:r.teamLogo},a.next=4,t.setSelectedTeam(n);case 4:case"end":return a.stop()}}),a)})))()}},created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTeams();case 2:case"end":return t.stop()}}),t)})))()}},x=g,T=(a("fb4a"),a("6544")),b=a.n(T),w=a("8336"),_=a("b974"),S=Object(c["a"])(x,d,h,!1,null,"49edb3b1",null),C=S.exports;b()(S,{VBtn:w["a"],VSelect:_["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-center white--text"},[e._v("League Table")]),a("LeagueTable")],1)},O=[],j={name:"Standings",components:{LeagueTable:function(){return{component:a.e("chunk-2d0ab0f6").then(a.bind(null,"1452"))}}},methods:Object(f["a"])({},Object(p["b"])(["fetchLeagueTable"])),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLeagueTable();case 2:case"end":return t.stop()}}),t)})))()}},A=j,L=Object(c["a"])(A,y,O,!1,null,"3e51fd96",null),k=L.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column align-center"},[a("h1",{staticClass:"white--text text-center"},[e._v("Last 10 Fixtures")]),e._l(e.getFixtures,(function(e){return a("div",{key:e.id},[a("FixtureCard",{attrs:{fixtureId:e.id,homeTeam:e.homeTeamLogo,homeGoals:e.homeTeamGoals,awayTeam:e.awayTeamLogo,awayGoals:e.awayTeamGoals,location:e.location,dateTime:e.date,status:e.status}})],1)}))],2)},R=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-3 pa-3",attrs:{rounded:"",color:"razzmatazz",elevation:"12"},on:{click:e.toStats}},[a("div",{staticClass:"d-flex align-center justify-space-around"},[a("v-avatar",{attrs:{tile:"",size:"65"}},[a("v-img",{attrs:{src:e.homeTeam}})],1),a("h2",{staticClass:"white--text"},[e._v(e._s(e.homeGoals))]),a("h3",{staticClass:"white--text"},[e._v("-")]),a("h2",{staticClass:"white--text"},[e._v(e._s(e.awayGoals))]),a("v-avatar",{attrs:{tile:"",size:"65"}},[a("v-img",{attrs:{src:e.awayTeam}})],1)],1),a("div",{staticClass:"d-flex align-center flex-column"},[a("h5",{staticClass:"white--text mb-2"},[e._v(e._s(e.status)+"'")]),a("h3",{staticClass:"white--text"},[e._v(e._s(e.location))]),a("h5",{staticClass:"white--text"},[e._v(e._s(e.date))]),a("h5",{staticClass:"white--text"},[e._v(e._s(e.time))])])])},N=[],z=(a("a9e3"),a("ac1f"),a("466d"),a("25f0"),a("fb6a"),a("a15b"),{name:"FixtureCard",props:{fixtureId:Number,status:String,homeTeam:String,homeGoals:Number,awayTeam:String,awayGoals:Number,location:String,dateTime:String},computed:{date:function(){var e=new Date(this.dateTime);return e.toDateString(e)},time:function(){var e=new Date(this.dateTime);return this.tConvert(e.toLocaleTimeString(e))}},methods:{tConvert:function(e){return e=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e],e.length>1&&(e=e.slice(1),e.pop(),e[5]=+e[0]<12?" AM":" PM",e[0]=+e[0]%12||12),e.join("")},toStats:function(){this.$router.push({name:"statistics",params:{id:this.fixtureId}})}}}),U=z,E=(a("9077"),a("8212")),F=a("b0af"),H=a("adda"),V=Object(c["a"])(U,G,N,!1,null,"78785c6c",null),I=V.exports;b()(V,{VAvatar:E["a"],VCard:F["a"],VImg:H["a"]});var $={name:"Fixtures",components:{FixtureCard:I},methods:Object(f["a"])({},Object(p["b"])(["fetchFixtures"])),computed:Object(f["a"])({},Object(p["c"])(["getFixtures"])),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchFixtures();case 2:case"end":return t.stop()}}),t)})))()}},q=$,B=Object(c["a"])(q,P,R,!1,null,"011e1ea4",null),M=B.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column align-center"},[a("GameCard",{attrs:{fixture:e.getStats[0].fixture}}),e._l(e.getStats[0].goals,(function(t,r){return a("div",{key:r,staticClass:"goalscorers"},[t.team.name===e.getStats[0].fixture[0].homeTeamName?a("div",{staticClass:"goalscorers-goals-home white--text"},[e._v(" ⚽️ "+e._s(t.player.name)+e._s(" ")+e._s(t.time.elapsed)+"' ")]):t.team.name===e.getStats[0].fixture[0].awayTeamName?a("div",{staticClass:"d-flex goalscorers-goals-away white--text"},[e._v(" ⚽️ "+e._s(t.player.name)+e._s(" ")+e._s(t.time.elapsed)+"' ")]):e._e()])})),a("GameStatistics",{attrs:{gameStats:e.getStats[0].stats}}),a("LineUpsCard",{attrs:{lineUps:e.getStats[0].teamLineups}})],2)},X=[],W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-3 pa-3",attrs:{rounded:"",color:"razzmatazz",elevation:"12"}},[a("div",{staticClass:"d-flex align-center justify-space-around"},[a("v-avatar",{attrs:{tile:"",size:"65"}},[a("v-img",{attrs:{src:e.fixture[0].homeTeamLogo}})],1),a("h2",{staticClass:"white--text"},[e._v(e._s(e.fixture[0].homeTeamGoals))]),a("h3",{staticClass:"white--text"},[e._v("-")]),a("h2",{staticClass:"white--text"},[e._v(e._s(e.fixture[0].awayTeamGoals))]),a("v-avatar",{attrs:{tile:"",size:"65"}},[a("v-img",{attrs:{src:e.fixture[0].awayTeamLogo}})],1)],1),a("div",{staticClass:"d-flex align-center flex-column"},[a("h3",{staticClass:"white--text mt-2"},[e._v(e._s(e.fixture[0].location))]),a("h5",{staticClass:"white--text"},[e._v(e._s(e.date))])])])},J=[],K={name:"GameCard",props:{fixture:Array},computed:{date:function(){var e=new Date(this.fixture[0].date);return e.toDateString(e)}}},Q=K,Y=(a("199d"),Object(c["a"])(Q,W,J,!1,null,"00a10ce4",null)),Z=Y.exports;b()(Y,{VAvatar:E["a"],VCard:F["a"],VImg:H["a"]});var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-3 pa-3",attrs:{rounded:"",color:"razzmatazz",elevation:"12"}},[a("h3",{staticClass:"white--text text-center"},[e._v("Starting XIs")]),a("v-simple-table",[a("thead",[a("th",[e._v("Home Team XI")]),a("th",[e._v("Away Team XI")])]),a("tbody",e._l(e.startXIs,(function(t,r){return a("tr",{key:r},[a("td",{staticClass:"text-center"},[e._v(e._s(t.homePlayerName))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.awayPlayerName))])])})),0)]),a("h3",{staticClass:"white--text text-center"},[e._v("Subs")]),a("v-simple-table",[a("thead",[a("th",[e._v("Home Team Subs")]),a("th",[e._v("Away Team Subs")])]),a("tbody",e._l(e.subs,(function(t,r){return a("tr",{key:r},[a("td",{staticClass:"text-center"},[e._v(e._s(t.homePlayerName))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.awayPlayerName))])])})),0)])],1)},te=[],ae={name:"LineUpsCard",computed:{startXIs:function(){for(var e=[],t=0;t<(null===(a=this.lineUps)||void 0===a||null===(r=a.homeTeamXI)||void 0===r?void 0:r.length);t++){var a,r,s,n;e.push({homePlayerName:null===(s=this.lineUps)||void 0===s?void 0:s.homeTeamXI[t],awayPlayerName:null===(n=this.lineUps)||void 0===n?void 0:n.awayTeamXI[t]})}return e},subs:function(){for(var e=[],t=0;t<(null===(a=this.lineUps)||void 0===a||null===(r=a.homeTeamSubs)||void 0===r?void 0:r.length);t++){var a,r,s,n;e.push({homePlayerName:null===(s=this.lineUps)||void 0===s?void 0:s.homeTeamSubs[t],awayPlayerName:null===(n=this.lineUps)||void 0===n?void 0:n.awayTeamSubs[t]})}return e}},props:{lineUps:Object}},re=ae,se=(a("01c5"),a("1f4f")),ne=Object(c["a"])(re,ee,te,!1,null,"866491e2",null),oe=ne.exports;b()(ne,{VCard:F["a"],VSimpleTable:se["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-3 pa-3",attrs:{rounded:"",color:"razzmatazz",elevation:"12"}},[a("h3",{staticClass:"white--text text-center mb-2"},[e._v("Game Statistics")]),a("h4",{staticClass:"white--text text-center"},[e._v("Possession")]),a("div",{staticClass:"d-flex"},[a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.homeTeamPossession)+" ")]),a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.awayTeamPossession))])],1),a("h4",{staticClass:"white--text text-center mt-1"},[e._v("Shots On Target")]),a("div",{staticClass:"d-flex"},[a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.homeTeamShotsOnTarget)+" ")]),a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.awayTeamShotsOnTarget))])],1),a("h4",{staticClass:"white--text text-center mt-1"},[e._v("Total Shots")]),a("div",{staticClass:"d-flex"},[a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.homeTeamToalShots)+" ")]),a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.awayTeamToalShots))])],1),a("h4",{staticClass:"white--text text-center mt-1"},[e._v("Fouls")]),a("div",{staticClass:"d-flex"},[a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.homeTeamFouls)+" ")]),a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras",colour:""}},[e._v(" "+e._s(e.gameStats.awayTeamFouls))])],1),a("h4",{staticClass:"white--text text-center mt-1"},[e._v("Corners")]),a("div",{staticClass:"d-flex"},[a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.homeCorners)+" ")]),a("v-progress-linear",{staticClass:"white--text",attrs:{value:"100",height:"20",color:"mardiGras"}},[e._v(" "+e._s(e.gameStats.awayCorners))])],1)])},ce=[],ue={name:"GameStatistics",props:{gameStats:Object}},le=ue,me=(a("f438"),a("8e36")),de=Object(c["a"])(le,ie,ce,!1,null,"1afea6d5",null),he=de.exports;b()(de,{VCard:F["a"],VProgressLinear:me["a"]});var ve={name:"Statistics",computed:Object(f["a"])({},Object(p["c"])(["getStats"])),components:{GameCard:Z,LineUpsCard:oe,GameStatistics:he},methods:Object(f["a"])({},Object(p["b"])(["fetchStats"])),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$route.params.id,t.next=3,e.fetchStats(a);case 3:case"end":return t.stop()}}),t)})))()}},fe=ve,pe=(a("4ace"),Object(c["a"])(fe,D,X,!1,null,"1ecd3b7a",null)),ge=pe.exports,xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"white--text text-center"},[e._v("Top Scorers")]),a("TopPlayersTable",{attrs:{forAssists:!1}})],1)},Te=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"pa-4",attrs:{color:"aqua"}},[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[e._v("Photo")]),a("th",{staticClass:"text-center"},[e._v("Name")]),a("th",{staticClass:"text-center"},[e._v("Team")]),a("th",{staticClass:"text-center"},[e._v("Appearences")]),e.forAssists?a("th",{staticClass:"text-center"},[e._v("Assists")]):a("th",{staticClass:"text-center"},[e._v("Goals")])])]),a("tbody",e._l(e.topPlayersData,(function(t){return a("tr",{key:t.playerName,staticClass:"table-row"},[a("td",{staticClass:"text-center"},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:t.playerPhoto}})])],1),a("td",{staticClass:"text-center"},[e._v(e._s(t.playerName))]),a("td",{staticClass:"text-center"},[a("v-avatar",{attrs:{tile:"",size:"80"}},[a("img",{attrs:{src:t.team}})])],1),a("td",{staticClass:"text-center"},[e._v(e._s(t.appearences))]),e.forAssists?a("td",{staticClass:"text-center"},[e._v(e._s(t.assists))]):a("td",{staticClass:"text-center"},[e._v(e._s(t.goals))])])})),0)])],1)},we=[],_e={name:"TopPlayersTable",props:{forAssists:Boolean},computed:Object(f["a"])(Object(f["a"])({},Object(p["c"])(["getTopScorers","getTopAssists"])),{},{topPlayersData:function(){return this.forAssists?this.getTopAssists:this.getTopScorers}})},Se=_e,Ce=(a("4d3b"),Object(c["a"])(Se,be,we,!1,null,"90697832",null)),ye=Ce.exports;b()(Ce,{VAvatar:E["a"],VCard:F["a"],VSimpleTable:se["a"]});var Oe={name:"TopScorers",components:{TopPlayersTable:ye},methods:Object(f["a"])({},Object(p["b"])(["fetchTopScorers"])),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTopScorers();case 2:case"end":return t.stop()}}),t)})))()}},je=Oe,Ae=Object(c["a"])(je,xe,Te,!1,null,"62aae927",null),Le=Ae.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"white--text text-center"},[e._v("Top Assists")]),a("TopPlayersTable",{attrs:{forAssists:!0}})],1)},Pe=[],Re={name:"TopAssists",components:{TopPlayersTable:ye},methods:Object(f["a"])({},Object(p["b"])(["fetchTopAssists"])),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTopAssists();case 2:case"end":return t.stop()}}),t)})))()}},Ge=Re,Ne=Object(c["a"])(Ge,ke,Pe,!1,null,"28f50e72",null),ze=Ne.exports,Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column align-center"},[a("h1",{staticClass:"white--text text-center"},[e._v("Live Scores")]),0===e.getLiveScores.length?a("div",[a("h2",{staticClass:"white--text text-center mt-2"},[e._v(" There are no live games at the moment. Please come back later. ")])]):e._l(e.getLiveScores,(function(e){return a("div",{key:e.id},[a("FixtureCard",{attrs:{fixtureId:e.id,status:e.status,homeTeam:e.homeTeamLogo,homeGoals:e.homeTeamGoals,awayTeam:e.awayTeamLogo,awayGoals:e.awayTeamGoals,location:e.location,dateTime:e.date}})],1)}))],2)},Ee=[],Fe={name:"LiveScores",components:{FixtureCard:I},methods:Object(f["a"])({},Object(p["b"])(["fetchLiveScores"])),computed:Object(f["a"])({},Object(p["c"])(["getLiveScores"])),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchLiveScores();case 2:case"end":return t.stop()}}),t)})))()}},He=Fe,Ve=Object(c["a"])(He,Ue,Ee,!1,null,"3c968fbe",null),Ie=Ve.exports,$e=a("0e44"),qe=a("bc3a"),Be=a.n(qe),Me=Be.a.create({baseURL:"http://localhost:3000"}),De=Me,Xe={errors:[],token:null,user:{username:null,selectedTeam:null,selectedTeamLogo:null}},We={getUser:function(e){return e.user},getSelectedTeam:function(e){return e.user.selectedTeam},getSelectedTeamLogo:function(e){return e.user.selectedTeamLogo},getAuthErrors:function(e){return e.errors},isAuthenticated:function(e){return!!e.token}},Je={signUp:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,De.post("/auth/signup",{username:t.userName,email:t.email,password:t.password,selectedTeam:null,selectedTeamLogo:null});case 2:r=a.sent,e.commit("setUserAndTokenSignUp",{response:r});case 4:case"end":return a.stop()}}),a)})))()},logIn:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,De.post("auth/login",{username:t.userName,password:t.password});case 2:r=a.sent,s=r.data,e.commit("setUserAndTokenLogIn",{response:s});case 5:case"end":return a.stop()}}),a)})))()},setSelectedTeam:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,De.post("auth/selectTeam",{username:t.username,selectedTeam:t.selectedTeam,selectedTeamLogo:t.selectedTeamLogo});case 2:r=a.sent,s=r.data,e.commit("setSelectedTeam",{response:s});case 5:case"end":return a.stop()}}),a)})))()}},Ke={setUserAndTokenSignUp:function(e,t){var a,r,s,n,o,i,c,u,l,m,d,h,v=t.response;e.token=null===v||void 0===v||null===(a=v.data)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.token,De.defaults.headers.common["authorization"]="Bearer ".concat(e.token),e.errors=null===v||void 0===v||null===(s=v.data)||void 0===s?void 0:s.errors,e.user.username=null===v||void 0===v||null===(n=v.data)||void 0===n||null===(o=n.data)||void 0===o||null===(i=o.user)||void 0===i?void 0:i.username,e.user.selectedTeam=null===v||void 0===v||null===(c=v.data)||void 0===c||null===(u=c.data)||void 0===u||null===(l=u.user)||void 0===l?void 0:l.selectedTeam,e.user.selectedTeamLogo=null===v||void 0===v||null===(m=v.data)||void 0===m||null===(d=m.data)||void 0===d||null===(h=d.user)||void 0===h?void 0:h.selectedTeamLogo},setUserAndTokenLogIn:function(e,t){var a,r,s,n,o,i,c,u=t.response;e.token=null===u||void 0===u||null===(a=u.data)||void 0===a?void 0:a.token,De.defaults.headers.common["authorization"]="Bearer ".concat(e.token),e.errors=null===u||void 0===u?void 0:u.errors,e.user.username=null===u||void 0===u||null===(r=u.data)||void 0===r||null===(s=r.user)||void 0===s?void 0:s.username,e.user.selectedTeam=null===u||void 0===u||null===(n=u.data)||void 0===n||null===(o=n.user)||void 0===o?void 0:o.selectedTeam,e.user.selectedTeamLogo=null===u||void 0===u||null===(i=u.data)||void 0===i||null===(c=i.user)||void 0===c?void 0:c.selectedTeamLogo},setSelectedTeam:function(e,t){var a,r,s,n,o=t.response;e.user.selectedTeam=null===o||void 0===o||null===(a=o.data)||void 0===a||null===(r=a.user)||void 0===r?void 0:r.selectedTeam,e.user.selectedTeamLogo=null===o||void 0===o||null===(s=o.data)||void 0===s||null===(n=s.user)||void 0===n?void 0:n.selectedTeamLogo},resetSelectedTeam:function(e){e.user.selectedTeam=null,e.user.selectedTeamLogo=null},logout:function(e){e.errors=[],e.token=null,e.user={username:null,selectedTeam:null,selectedTeamLogo:null},tt.go("/login")}},Qe={state:Xe,getters:We,actions:Je,mutations:Ke};r["a"].use(p["a"]);var Ye=new p["a"].Store({plugins:[Object($e["a"])()],state:{topScorers:[],topAssists:[],leagueTable:[],fixtures:[],liveScores:[],stats:[],teams:[]},getters:{getTopScorers:function(e){return e.topScorers},getTopAssists:function(e){return e.topAssists},getLeagueTable:function(e){return e.leagueTable},getFixtures:function(e){return e.fixtures},getLiveScores:function(e){return e.liveScores},getStats:function(e){return e.stats},getTeams:function(e){return e.teams}},actions:{fetchTopScorers:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De.get("/top/scorers");case 2:a=t.sent,r=a.data,e.commit("setTopScorers",{topScorersArr:r});case 5:case"end":return t.stop()}}),t)})))()},fetchTopAssists:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De.get("/top/assists");case 2:a=t.sent,r=a.data,e.commit("setTopAssists",{topAssistsArr:r});case 5:case"end":return t.stop()}}),t)})))()},fetchLeagueTable:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De.get("/standings");case 2:a=t.sent,r=a.data,e.commit("setLeagueTable",{leagueTableArr:r});case 5:case"end":return t.stop()}}),t)})))()},fetchFixtures:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De.get("/fixtures");case 2:a=t.sent,r=a.data,e.commit("setFixtures",{fixturesArr:r});case 5:case"end":return t.stop()}}),t)})))()},fetchLiveScores:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De.get("/liveScores");case 2:a=t.sent,r=a.data,e.commit("setLiveScores",{liveScoresArr:r});case 5:case"end":return t.stop()}}),t)})))()},fetchStats:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,De.get("/statistics/".concat(t));case 2:r=a.sent,s=r.data,e.commit("setStats",{statsArr:s});case 5:case"end":return a.stop()}}),a)})))()},fetchTeams:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De.get("/teams");case 2:a=t.sent,r=a.data,e.commit("setTeams",{teamsArr:r});case 5:case"end":return t.stop()}}),t)})))()}},mutations:{setTopScorers:function(e,t){var a=t.topScorersArr;e.topScorers=a},setTopAssists:function(e,t){var a=t.topAssistsArr;e.topAssists=a},setLeagueTable:function(e,t){var a=t.leagueTableArr;e.leagueTable=a},setFixtures:function(e,t){var a=t.fixturesArr;e.fixtures=a},setLiveScores:function(e,t){var a=t.liveScoresArr;e.liveScores=a},setStats:function(e,t){var a=t.statsArr;e.stats=a},setTeams:function(e,t){var a=t.teamsArr;e.teams=a},clearStore:function(e){e.topScorers=[],e.topAssists=[],e.leagueTable=[],e.fixtures=[],e.liveScores=[],e.stats=[],e.teams=[]}},modules:{auth:Qe}});r["a"].use(m["a"]);var Ze=[{path:"/login",name:"Login",component:function(){return a.e("Home").then(a.bind(null,"74db"))},meta:{hideForAuth:!0}},{path:"/",name:"Home",component:function(){return a.e("Home").then(a.bind(null,"692c"))},children:[{path:"/",name:"home",component:C,meta:{requiresAuth:!0}},{path:"/standings",name:"standings",component:k,meta:{requiresAuth:!0}},{path:"/fixtures",name:"fixtures",component:M,meta:{requiresAuth:!0}},{path:"/statistics/:id",name:"statistics",component:ge,meta:{requiresAuth:!0}},{path:"/topscorers",name:"topscorers",component:Le,meta:{requiresAuth:!0}},{path:"/topassists",name:"topassists",component:ze,meta:{requiresAuth:!0}},{path:"/livescores",name:"livescores",component:Ie,meta:{requiresAuth:!0}}]}],et=new m["a"]({routes:Ze});et.beforeEach((function(e,t,a){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(Ye.getters.isAuthenticated)return void a();a("/login")}else a();e.matched.some((function(e){return e.meta.hideForAuth}))&&Ye.getters.isAuthenticated?a({path:"/"}):a()}));var tt=et,at=a("f309");r["a"].use(at["a"]);var rt=new at["a"]({theme:{themes:{light:{mardiGras:"#38003C",springGreen:"#00FF85",razzmatazz:"#E90052",aqua:"#04F5FF",Arsenal:"#ef0107",Villa:"#95bfe5",Brighton:"#005daa",Brentford:"#e30613",Burnley:"#630530",Chelsea:"#034694",Palace:"#1b458f",Everton:"#274488",Leicester:"#0053a0",Liverpool:"#00a398",Leeds:"#1d428a",City:"#6caddf",United:"#da020e",Newcastle:"#000000",Norwich:"#00a650",Southampton:"#ed1a3b",Tottenham:"#132257",Watford:"#000000",Hammers:"#7c2c3b",Wolves:"#000000"}}}});r["a"].config.productionTip=!1,new r["a"]({router:tt,store:Ye,vuetify:rt,render:function(e){return e(l)}}).$mount("#app")},"87fb":function(e,t,a){},9077:function(e,t,a){"use strict";a("5181")},b386:function(e,t,a){},f438:function(e,t,a){"use strict";a("0e54")},f7ac:function(e,t,a){},fb4a:function(e,t,a){"use strict";a("0226")}});
//# sourceMappingURL=app.231ff13e.js.map