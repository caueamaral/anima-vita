(this["webpackJsonpanima-vita"]=this["webpackJsonpanima-vita"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,a=t(1),i=t.n(a),c=t(18),s=t.n(c),d=t(3),l=t(4),o=l.b.header(r||(r=Object(d.a)(["\n  align-items: center;\n  font-family: var(--titleFont);\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  text-align: center;\n\n  h1 {\n    background: var(--white);\n    border-radius: var(--rounded);\n    font-size: 38px;\n    letter-spacing: 3px;\n    padding: 15px 25px;\n\n    .green {\n      color: var(--green);\n    }\n\n    .blue {\n      color: var(--blue);\n    }\n  }\n\n  h2 {\n    background: var(--white);\n    border-radius: var(--rounded);\n    font-size: 18px;\n    letter-spacing: 1px;\n    margin-top: 15px;\n    padding: 10px 20px;\n  }\n\n  em {\n    color: var(--gray);\n  }\n"]))),p=t(0);var b,j=function(){return Object(p.jsxs)(o,{children:[Object(p.jsxs)("h1",{children:[Object(p.jsx)("span",{className:"green",children:"Anima"}),Object(p.jsx)("span",{className:"blue",children:"Vita"})]}),Object(p.jsxs)("h2",{children:["Online query with ",Object(p.jsx)("em",{children:"animes"})," and ",Object(p.jsx)("em",{children:"mangas"})]})]})},h=t(23),x=t(22),u=t.n(x),g=l.b.section(b||(b=Object(d.a)(["\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n\n  article {\n    background: var(--white);\n    border-radius: var(--rounded);\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, .15);\n    padding: 20px;\n  }\n\n  img {\n    border-radius: var(--rounded);\n    width: 100%;\n  }\n\n  h3 {\n    font-family: var(--title-font);\n    font-size: 16px;\n    letter-spacing: 1px;\n    margin-top: 10px;\n  }\n\n  p {\n    margin-top: 10px;\n  }\n\n  small {\n    display: block;\n    margin-top: 10px;\n  }\n"])));var m,f=function(){var n=Object(a.useState)([]),e=Object(h.a)(n,2),t=e[0],r=e[1];Object(a.useEffect)((function(){u.a.get("https://kitsu.io/api/edge/anime",{headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}}).then((function(n){return r(n.data.data)}))}),[]);var i=function(n,e){if(e)return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("strong",{children:[n,": "]}),e]})};return Object(p.jsx)(g,{children:t.map((function(n){var e=n.attributes,t=e.posterImage.medium,r=e.canonicalTitle,a=e.description,c=e.titles;return Object(p.jsxs)("article",{children:[Object(p.jsx)("figure",{children:Object(p.jsx)("p",{children:Object(p.jsx)("img",{src:t,alt:r})})}),Object(p.jsx)("h3",{children:r}),Object(p.jsxs)("p",{children:[a.substring(0,150),"..."]}),Object(p.jsxs)("small",{children:[i("En",c.en),"   ",Object(p.jsx)("br",{}),i("En Jp",c.en_jp),Object(p.jsx)("br",{}),i("Ja Jp",c.ja_jp)]})]},n.id)}))})},O=l.b.main(m||(m=Object(d.a)(["\n  margin: 60px 0;\n  max-width: calc(100% - 80px);\n  width: 1600px;\n"])));var v,y=function(){return Object(p.jsx)(O,{children:Object(p.jsx)(f,{})})},w=l.b.footer(v||(v=Object(d.a)(["\n  background: var(--white);\n  font-family: var(--titleFont);\n  font-size: 18px;\n  letter-spacing: 1px;\n  padding: 30px 20px;\n  text-align: center;\n  width: 100%;\n\n  .green {\n    color: var(--green);\n  }\n\n  .blue {\n    color: var(--blue);\n  }\n"])));var k,z=function(){return Object(p.jsx)(w,{children:Object(p.jsxs)("strong",{children:[Object(p.jsx)("span",{className:"green",children:"Anima"}),Object(p.jsx)("span",{className:"blue",children:"Vita"})," 2021 - All rights reserved."]})})},J=Object(l.a)(k||(k=Object(d.a)(["\n  html, body, div, span,\n  h1, h2, h3, h4, h5, h6, p,\n  a, abbr, acronym, address,\n  del, em, img, ins, strong, sub, sup,\n  u, i, dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend, input, select,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, section, summary {\n    border: 0;\n    box-sizing: border-box;\n    margin: 0;\n    outline: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n  }\n\n  html,\n  input,\n  select {\n    font: 14px/1.5em Verdana;\n  }\n\n  :root {\n    --white:    #fff;\n    --green:    #42cca2;\n    --blue:     #185b9d;\n    --gray:     #999;\n    --lightGray:#eee;\n    --rounded:  5px;\n    --titleFont:'Patrick Hand';\n  }\n\n  .app {\n    background: linear-gradient(to right, var(--green), var(--blue));\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 100vh;\n  }\n"])));var N=function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(j,{}),Object(p.jsx)(y,{}),Object(p.jsx)(z,{}),Object(p.jsx)(J,{})]})};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4aafd3aa.chunk.js.map