(this.webpackJsonphalloweenbingo=this.webpackJsonphalloweenbingo||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=(a(15),a(3)),s=a(6),i=a(9),u=a.n(i),d=a(1),b=function(e){var t=e.data,a=e.selectCell;return Object(d.jsx)("div",{className:"game-board",children:t.map((function(e,t){var n=e.value,c=e.selected;return Object(d.jsxs)("button",{name:"".concat(n,"-").concat(c),className:"cell ".concat(c?"selected":""),onClick:function(){return a(t)},children:[Object(d.jsx)("span",{className:"number",children:t+0}),Object(d.jsx)("span",{children:n})]},"".concat(n,"-").concat(c))}))})},j=a(10),f=[" Eat, drink and be scary!","Ghostly Greetings!","Halloween is a real treat","Have a fang-tastic night","Happy Haunting!","Have a bootiful Halloween","Don\u2019t be a scaredy cat","I witch you a Happy Halloween","Stop in for a spell","Please park all brooms at the door","Caution! Witch Crossing","Boo to you from our crew","If you want a tasty sweet\u2026","Be sure to holler trick or treat!","Knock! Knock!","Who\u2019s there?","Vampires Drive Me Batty","Don\u2019t Make Me Flip My Witch Switch","Zombies Love a Girl With Brains","If You\u2019ve Got It, Haunt It","Witch Way to the Candy?","Ghouls Just Want to Have Fun","Join Our Coven","It\u2019s All About the Candy"],h=(a(19),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(s.a)(r,2),i=o[0],h=o[1],O=Object(n.useState)([]),v=Object(s.a)(O,2),m=v[0],p=v[1],w=Object(n.useRef)(null);Object(n.useEffect)((function(){y()}),[]);var y=function(){var e=u()(f);e=(e=[].concat(Object(l.a)(Object(l.a)(e).splice(0,12)),["BINGO \ud83d\ude08"],Object(l.a)(Object(l.a)(e).splice(12)))).reduce((function(e,t,a){return[].concat(Object(l.a)(e),[{value:t,selected:12===a}])}),[]),c(e),p(new Array(12).fill(!1)),h(!1)};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j.a,{ref:w,type:"emoji",lifetime:500,config:{spread:150,emoji:["\ud83c\udf83","\ud83c\udf6c","\ud83c\udf6d","\ud83c\udf83","\ud83c\udf6c","\ud83c\udf6d","\ud83c\udf83","\ud83d\udd78\ufe0f"]}}),i?Object(d.jsx)("h1",{className:"header",children:"You won \ud83c\udf83 \ud83c\udf83 \ud83c\udf83"}):Object(d.jsx)("h1",{className:"header",children:"Halloween BINGO"}),Object(d.jsx)(b,{data:a,selectCell:function(e){var t=Object(l.a)(a);t[e].selected=12===e||!a[e].selected,c(t),function(){if(console.log(m),a.length){if(!m[10]){for(var e=0;e<=24&&a[e].selected;)e+=6;30===e&&(m[10]=!0,w.current.rewardMe())}if(!m[11]){for(var t=4;t<=20&&a[t].selected;)t+=4;24===t&&(m[11]=!0,w.current.rewardMe())}for(var n=0;n<5;n++){if(!m[n+5]){for(var c=n;c<=n+20&&a[c].selected;)c+=5;c===n+25&&(m[n+5]=!0,w.current.rewardMe())}if(!m[n]){for(var r=5*n;r<=5*n+4&&a[r].selected;)r++;r===5*n+5&&(m[n]=!0,w.current.rewardMe())}}a.every((function(e){return!0===e.selected}))&&h(!0)}}()}}),Object(d.jsx)("button",{className:"reload",onClick:y,children:"Reload Game"})]})}),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),O()}},[[20,1,2]]]);
//# sourceMappingURL=main.731f062b.chunk.js.map