(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[81],{580:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,p=i.length;-1!==t.code.indexOf(o=n(a,p));)++p;return i[p]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(p){for(var s=0;s<p.length&&!(o>=r.length);s++){var c=p[s];if("string"===typeof c||c.content&&"string"===typeof c.content){var u=r[o],l=t.tokenStack[u],g="string"===typeof c?c:c.content,f=n(a,u),k=g.indexOf(f);if(k>-1){++o;var h=g.substring(0,k),m=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),d=g.substring(k+f.length),y=[];h&&y.push.apply(y,i([h])),y.push(m),d&&y.push.apply(y,i([d])),"string"===typeof c?p.splice.apply(p,[s,1].concat(y)):c.content=y}}else c.content&&i(c.content)}return p}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.66fa01ae.chunk.js.map