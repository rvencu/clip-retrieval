!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}([function(e,t,i){var r=i(2).stringify,n=i(3);e.exports=function(e){return{parse:n(e),stringify:r}},e.exports.parse=n(),e.exports.stringify=r},function(e,t,i){var r;!function(n){"use strict";var s,o=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,l=Math.floor,c="[BigNumber Error] ",u=c+"Number primitive has more than 15 significant digits: ",h=1e14,p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],d=1e9;function f(e){var t=0|e;return e>0||e===t?t:t-1}function g(e){for(var t,i,r=1,n=e.length,s=e[0]+"";r<n;){for(i=14-(t=e[r++]+"").length;i--;t="0"+t);s+=t}for(n=s.length;48===s.charCodeAt(--n););return s.slice(0,n+1||1)}function m(e,t){var i,r,n=e.c,s=t.c,o=e.s,a=t.s,l=e.e,c=t.e;if(!o||!a)return null;if(i=n&&!n[0],r=s&&!s[0],i||r)return i?r?0:-a:o;if(o!=a)return o;if(i=o<0,r=l==c,!n||!s)return r?0:!n^i?1:-1;if(!r)return l>c^i?1:-1;for(a=(l=n.length)<(c=s.length)?l:c,o=0;o<a;o++)if(n[o]!=s[o])return n[o]>s[o]^i?1:-1;return l==c?0:l>c^i?1:-1}function y(e,t,i,r){if(e<t||e>i||e!==l(e))throw Error(c+(r||"Argument")+("number"==typeof e?e<t||e>i?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var t=e.c.length-1;return f(e.e/14)==t&&e.c[t]%2!=0}function w(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function b(e,t,i){var r,n;if(t<0){for(n=i+".";++t;n+=i);e=n+e}else if(++t>(r=e.length)){for(n=i,t-=r;--t;n+=i);e+=n}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}(s=function e(t){var i,r,n,s,S,_,x,N,A,P=L.prototype={constructor:L,toString:null,valueOf:null},C=new L(1),E=20,O=4,k=-7,U=21,T=-1e7,I=1e7,B=!1,$=1,R=0,j={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},M="0123456789abcdefghijklmnopqrstuvwxyz";function L(e,t){var i,s,a,c,h,p,d,f,g=this;if(!(g instanceof L))return new L(e,t);if(null==t){if(e&&!0===e._isBigNumber)return g.s=e.s,void(!e.c||e.e>I?g.c=g.e=null:e.e<T?g.c=[g.e=0]:(g.e=e.e,g.c=e.c.slice()));if((p="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(c=0,h=e;h>=10;h/=10,c++);return void(c>I?g.c=g.e=null:(g.e=c,g.c=[e]))}f=String(e)}else{if(!o.test(f=String(e)))return n(g,f,p);g.s=45==f.charCodeAt(0)?(f=f.slice(1),-1):1}(c=f.indexOf("."))>-1&&(f=f.replace(".","")),(h=f.search(/e/i))>0?(c<0&&(c=h),c+=+f.slice(h+1),f=f.substring(0,h)):c<0&&(c=f.length)}else{if(y(t,2,M.length,"Base"),10==t)return q(g=new L(e),E+g.e+1,O);if(f=String(e),p="number"==typeof e){if(0*e!=0)return n(g,f,p,t);if(g.s=1/e<0?(f=f.slice(1),-1):1,L.DEBUG&&f.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else g.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1;for(i=M.slice(0,t),c=h=0,d=f.length;h<d;h++)if(i.indexOf(s=f.charAt(h))<0){if("."==s){if(h>c){c=d;continue}}else if(!a&&(f==f.toUpperCase()&&(f=f.toLowerCase())||f==f.toLowerCase()&&(f=f.toUpperCase()))){a=!0,h=-1,c=0;continue}return n(g,String(e),p,t)}p=!1,(c=(f=r(f,t,10,g.s)).indexOf("."))>-1?f=f.replace(".",""):c=f.length}for(h=0;48===f.charCodeAt(h);h++);for(d=f.length;48===f.charCodeAt(--d););if(f=f.slice(h,++d)){if(d-=h,p&&L.DEBUG&&d>15&&(e>9007199254740991||e!==l(e)))throw Error(u+g.s*e);if((c=c-h-1)>I)g.c=g.e=null;else if(c<T)g.c=[g.e=0];else{if(g.e=c,g.c=[],h=(c+1)%14,c<0&&(h+=14),h<d){for(h&&g.c.push(+f.slice(0,h)),d-=14;h<d;)g.c.push(+f.slice(h,h+=14));h=14-(f=f.slice(h)).length}else h-=d;for(;h--;f+="0");g.c.push(+f)}}else g.c=[g.e=0]}function V(e,t,i,r){var n,s,o,a,l;if(null==i?i=O:y(i,0,8),!e.c)return e.toString();if(n=e.c[0],o=e.e,null==t)l=g(e.c),l=1==r||2==r&&(o<=k||o>=U)?w(l,o):b(l,o,"0");else if(s=(e=q(new L(e),t,i)).e,a=(l=g(e.c)).length,1==r||2==r&&(t<=s||s<=k)){for(;a<t;l+="0",a++);l=w(l,s)}else if(t-=o,l=b(l,s,"0"),s+1>a){if(--t>0)for(l+=".";t--;l+="0");}else if((t+=s-a)>0)for(s+1==a&&(l+=".");t--;l+="0");return e.s<0&&n?"-"+l:l}function F(e,t){for(var i,r=1,n=new L(e[0]);r<e.length;r++){if(!(i=new L(e[r])).s){n=i;break}t.call(n,i)&&(n=i)}return n}function D(e,t,i){for(var r=1,n=t.length;!t[--n];t.pop());for(n=t[0];n>=10;n/=10,r++);return(i=r+14*i-1)>I?e.c=e.e=null:i<T?e.c=[e.e=0]:(e.e=i,e.c=t),e}function q(e,t,i,r){var n,s,o,c,u,d,f,g=e.c,m=p;if(g){e:{for(n=1,c=g[0];c>=10;c/=10,n++);if((s=t-n)<0)s+=14,o=t,f=(u=g[d=0])/m[n-o-1]%10|0;else if((d=a((s+1)/14))>=g.length){if(!r)break e;for(;g.length<=d;g.push(0));u=f=0,n=1,o=(s%=14)-14+1}else{for(u=c=g[d],n=1;c>=10;c/=10,n++);f=(o=(s%=14)-14+n)<0?0:u/m[n-o-1]%10|0}if(r=r||t<0||null!=g[d+1]||(o<0?u:u%m[n-o-1]),r=i<4?(f||r)&&(0==i||i==(e.s<0?3:2)):f>5||5==f&&(4==i||r||6==i&&(s>0?o>0?u/m[n-o]:0:g[d-1])%10&1||i==(e.s<0?8:7)),t<1||!g[0])return g.length=0,r?(t-=e.e+1,g[0]=m[(14-t%14)%14],e.e=-t||0):g[0]=e.e=0,e;if(0==s?(g.length=d,c=1,d--):(g.length=d+1,c=m[14-s],g[d]=o>0?l(u/m[n-o]%m[o])*c:0),r)for(;;){if(0==d){for(s=1,o=g[0];o>=10;o/=10,s++);for(o=g[0]+=c,c=1;o>=10;o/=10,c++);s!=c&&(e.e++,g[0]==h&&(g[0]=1));break}if(g[d]+=c,g[d]!=h)break;g[d--]=0,c=1}for(s=g.length;0===g[--s];g.pop());}e.e>I?e.c=e.e=null:e.e<T&&(e.c=[e.e=0])}return e}function H(e){var t,i=e.e;return null===i?e.toString():(t=g(e.c),t=i<=k||i>=U?w(t,i):b(t,i,"0"),e.s<0?"-"+t:t)}return L.clone=e,L.ROUND_UP=0,L.ROUND_DOWN=1,L.ROUND_CEIL=2,L.ROUND_FLOOR=3,L.ROUND_HALF_UP=4,L.ROUND_HALF_DOWN=5,L.ROUND_HALF_EVEN=6,L.ROUND_HALF_CEIL=7,L.ROUND_HALF_FLOOR=8,L.EUCLID=9,L.config=L.set=function(e){var t,i;if(null!=e){if("object"!=typeof e)throw Error(c+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(y(i=e[t],0,d,t),E=i),e.hasOwnProperty(t="ROUNDING_MODE")&&(y(i=e[t],0,8,t),O=i),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((i=e[t])&&i.pop?(y(i[0],-d,0,t),y(i[1],0,d,t),k=i[0],U=i[1]):(y(i,-d,d,t),k=-(U=i<0?-i:i))),e.hasOwnProperty(t="RANGE"))if((i=e[t])&&i.pop)y(i[0],-d,-1,t),y(i[1],1,d,t),T=i[0],I=i[1];else{if(y(i,-d,d,t),!i)throw Error(c+t+" cannot be zero: "+i);T=-(I=i<0?-i:i)}if(e.hasOwnProperty(t="CRYPTO")){if((i=e[t])!==!!i)throw Error(c+t+" not true or false: "+i);if(i){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw B=!i,Error(c+"crypto unavailable");B=i}else B=i}if(e.hasOwnProperty(t="MODULO_MODE")&&(y(i=e[t],0,9,t),$=i),e.hasOwnProperty(t="POW_PRECISION")&&(y(i=e[t],0,d,t),R=i),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(i=e[t]))throw Error(c+t+" not an object: "+i);j=i}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(i=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(i))throw Error(c+t+" invalid: "+i);M=i}}return{DECIMAL_PLACES:E,ROUNDING_MODE:O,EXPONENTIAL_AT:[k,U],RANGE:[T,I],CRYPTO:B,MODULO_MODE:$,POW_PRECISION:R,FORMAT:j,ALPHABET:M}},L.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!L.DEBUG)return!0;var t,i,r=e.c,n=e.e,s=e.s;e:if("[object Array]"=={}.toString.call(r)){if((1===s||-1===s)&&n>=-d&&n<=d&&n===l(n)){if(0===r[0]){if(0===n&&1===r.length)return!0;break e}if((t=(n+1)%14)<1&&(t+=14),String(r[0]).length==t){for(t=0;t<r.length;t++)if((i=r[t])<0||i>=h||i!==l(i))break e;if(0!==i)return!0}}}else if(null===r&&null===n&&(null===s||1===s||-1===s))return!0;throw Error(c+"Invalid BigNumber: "+e)},L.maximum=L.max=function(){return F(arguments,P.lt)},L.minimum=L.min=function(){return F(arguments,P.gt)},L.random=(s=9007199254740992*Math.random()&2097151?function(){return l(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,i,r,n,o,u=0,h=[],f=new L(C);if(null==e?e=E:y(e,0,d),n=a(e/14),B)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(n*=2));u<n;)(o=131072*t[u]+(t[u+1]>>>11))>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),t[u]=i[0],t[u+1]=i[1]):(h.push(o%1e14),u+=2);u=n/2}else{if(!crypto.randomBytes)throw B=!1,Error(c+"crypto unavailable");for(t=crypto.randomBytes(n*=7);u<n;)(o=281474976710656*(31&t[u])+1099511627776*t[u+1]+4294967296*t[u+2]+16777216*t[u+3]+(t[u+4]<<16)+(t[u+5]<<8)+t[u+6])>=9e15?crypto.randomBytes(7).copy(t,u):(h.push(o%1e14),u+=7);u=n/7}if(!B)for(;u<n;)(o=s())<9e15&&(h[u++]=o%1e14);for(e%=14,(n=h[--u])&&e&&(o=p[14-e],h[u]=l(n/o)*o);0===h[u];h.pop(),u--);if(u<0)h=[r=0];else{for(r=-1;0===h[0];h.splice(0,1),r-=14);for(u=1,o=h[0];o>=10;o/=10,u++);u<14&&(r-=14-u)}return f.e=r,f.c=h,f}),L.sum=function(){for(var e=1,t=arguments,i=new L(t[0]);e<t.length;)i=i.plus(t[e++]);return i},r=function(){function e(e,t,i,r){for(var n,s,o=[0],a=0,l=e.length;a<l;){for(s=o.length;s--;o[s]*=t);for(o[0]+=r.indexOf(e.charAt(a++)),n=0;n<o.length;n++)o[n]>i-1&&(null==o[n+1]&&(o[n+1]=0),o[n+1]+=o[n]/i|0,o[n]%=i)}return o.reverse()}return function(t,r,n,s,o){var a,l,c,u,h,p,d,f,m=t.indexOf("."),y=E,v=O;for(m>=0&&(u=R,R=0,t=t.replace(".",""),p=(f=new L(r)).pow(t.length-m),R=u,f.c=e(b(g(p.c),p.e,"0"),10,n,"0123456789"),f.e=f.c.length),c=u=(d=e(t,r,n,o?(a=M,"0123456789"):(a="0123456789",M))).length;0==d[--u];d.pop());if(!d[0])return a.charAt(0);if(m<0?--c:(p.c=d,p.e=c,p.s=s,d=(p=i(p,f,y,v,n)).c,h=p.r,c=p.e),m=d[l=c+y+1],u=n/2,h=h||l<0||null!=d[l+1],h=v<4?(null!=m||h)&&(0==v||v==(p.s<0?3:2)):m>u||m==u&&(4==v||h||6==v&&1&d[l-1]||v==(p.s<0?8:7)),l<1||!d[0])t=h?b(a.charAt(1),-y,a.charAt(0)):a.charAt(0);else{if(d.length=l,h)for(--n;++d[--l]>n;)d[l]=0,l||(++c,d=[1].concat(d));for(u=d.length;!d[--u];);for(m=0,t="";m<=u;t+=a.charAt(d[m++]));t=b(t,c,a.charAt(0))}return t}}(),i=function(){function e(e,t,i){var r,n,s,o,a=0,l=e.length,c=t%1e7,u=t/1e7|0;for(e=e.slice();l--;)a=((n=c*(s=e[l]%1e7)+(r=u*s+(o=e[l]/1e7|0)*c)%1e7*1e7+a)/i|0)+(r/1e7|0)+u*o,e[l]=n%i;return a&&(e=[a].concat(e)),e}function t(e,t,i,r){var n,s;if(i!=r)s=i>r?1:-1;else for(n=s=0;n<i;n++)if(e[n]!=t[n]){s=e[n]>t[n]?1:-1;break}return s}function i(e,t,i,r){for(var n=0;i--;)e[i]-=n,n=e[i]<t[i]?1:0,e[i]=n*r+e[i]-t[i];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,n,s,o,a){var c,u,p,d,g,m,y,v,w,b,S,_,x,N,A,P,C,E=r.s==n.s?1:-1,O=r.c,k=n.c;if(!(O&&O[0]&&k&&k[0]))return new L(r.s&&n.s&&(O?!k||O[0]!=k[0]:k)?O&&0==O[0]||!k?0*E:E/0:NaN);for(w=(v=new L(E)).c=[],E=s+(u=r.e-n.e)+1,a||(a=h,u=f(r.e/14)-f(n.e/14),E=E/14|0),p=0;k[p]==(O[p]||0);p++);if(k[p]>(O[p]||0)&&u--,E<0)w.push(1),d=!0;else{for(N=O.length,P=k.length,p=0,E+=2,(g=l(a/(k[0]+1)))>1&&(k=e(k,g,a),O=e(O,g,a),P=k.length,N=O.length),x=P,S=(b=O.slice(0,P)).length;S<P;b[S++]=0);C=k.slice(),C=[0].concat(C),A=k[0],k[1]>=a/2&&A++;do{if(g=0,(c=t(k,b,P,S))<0){if(_=b[0],P!=S&&(_=_*a+(b[1]||0)),(g=l(_/A))>1)for(g>=a&&(g=a-1),y=(m=e(k,g,a)).length,S=b.length;1==t(m,b,y,S);)g--,i(m,P<y?C:k,y,a),y=m.length,c=1;else 0==g&&(c=g=1),y=(m=k.slice()).length;if(y<S&&(m=[0].concat(m)),i(b,m,S,a),S=b.length,-1==c)for(;t(k,b,P,S)<1;)g++,i(b,P<S?C:k,S,a),S=b.length}else 0===c&&(g++,b=[0]);w[p++]=g,b[0]?b[S++]=O[x]||0:(b=[O[x]],S=1)}while((x++<N||null!=b[0])&&E--);d=null!=b[0],w[0]||w.splice(0,1)}if(a==h){for(p=1,E=w[0];E>=10;E/=10,p++);q(v,s+(v.e=p+14*u-1)+1,o,d)}else v.e=u,v.r=+d;return v}}(),S=/^(-?)0([xbo])(?=\w[\w.]*$)/i,_=/^([^.]+)\.$/,x=/^\.([^.]+)$/,N=/^-?(Infinity|NaN)$/,A=/^\s*\+(?=[\w.])|^\s+|\s+$/g,n=function(e,t,i,r){var n,s=i?t:t.replace(A,"");if(N.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!i&&(s=s.replace(S,(function(e,t,i){return n="x"==(i=i.toLowerCase())?16:"b"==i?2:8,r&&r!=n?e:t})),r&&(n=r,s=s.replace(_,"$1").replace(x,"0.$1")),t!=s))return new L(s,n);if(L.DEBUG)throw Error(c+"Not a"+(r?" base "+r:"")+" number: "+t);e.s=null}e.c=e.e=null},P.absoluteValue=P.abs=function(){var e=new L(this);return e.s<0&&(e.s=1),e},P.comparedTo=function(e,t){return m(this,new L(e,t))},P.decimalPlaces=P.dp=function(e,t){var i,r,n,s=this;if(null!=e)return y(e,0,d),null==t?t=O:y(t,0,8),q(new L(s),e+s.e+1,t);if(!(i=s.c))return null;if(r=14*((n=i.length-1)-f(this.e/14)),n=i[n])for(;n%10==0;n/=10,r--);return r<0&&(r=0),r},P.dividedBy=P.div=function(e,t){return i(this,new L(e,t),E,O)},P.dividedToIntegerBy=P.idiv=function(e,t){return i(this,new L(e,t),0,1)},P.exponentiatedBy=P.pow=function(e,t){var i,r,n,s,o,u,h,p,d=this;if((e=new L(e)).c&&!e.isInteger())throw Error(c+"Exponent not an integer: "+H(e));if(null!=t&&(t=new L(t)),o=e.e>14,!d.c||!d.c[0]||1==d.c[0]&&!d.e&&1==d.c.length||!e.c||!e.c[0])return p=new L(Math.pow(+H(d),o?2-v(e):+H(e))),t?p.mod(t):p;if(u=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new L(NaN);(r=!u&&d.isInteger()&&t.isInteger())&&(d=d.mod(t))}else{if(e.e>9&&(d.e>0||d.e<-1||(0==d.e?d.c[0]>1||o&&d.c[1]>=24e7:d.c[0]<8e13||o&&d.c[0]<=9999975e7)))return s=d.s<0&&v(e)?-0:0,d.e>-1&&(s=1/s),new L(u?1/s:s);R&&(s=a(R/14+2))}for(o?(i=new L(.5),u&&(e.s=1),h=v(e)):h=(n=Math.abs(+H(e)))%2,p=new L(C);;){if(h){if(!(p=p.times(d)).c)break;s?p.c.length>s&&(p.c.length=s):r&&(p=p.mod(t))}if(n){if(0===(n=l(n/2)))break;h=n%2}else if(q(e=e.times(i),e.e+1,1),e.e>14)h=v(e);else{if(0===(n=+H(e)))break;h=n%2}d=d.times(d),s?d.c&&d.c.length>s&&(d.c.length=s):r&&(d=d.mod(t))}return r?p:(u&&(p=C.div(p)),t?p.mod(t):s?q(p,R,O,void 0):p)},P.integerValue=function(e){var t=new L(this);return null==e?e=O:y(e,0,8),q(t,t.e+1,e)},P.isEqualTo=P.eq=function(e,t){return 0===m(this,new L(e,t))},P.isFinite=function(){return!!this.c},P.isGreaterThan=P.gt=function(e,t){return m(this,new L(e,t))>0},P.isGreaterThanOrEqualTo=P.gte=function(e,t){return 1===(t=m(this,new L(e,t)))||0===t},P.isInteger=function(){return!!this.c&&f(this.e/14)>this.c.length-2},P.isLessThan=P.lt=function(e,t){return m(this,new L(e,t))<0},P.isLessThanOrEqualTo=P.lte=function(e,t){return-1===(t=m(this,new L(e,t)))||0===t},P.isNaN=function(){return!this.s},P.isNegative=function(){return this.s<0},P.isPositive=function(){return this.s>0},P.isZero=function(){return!!this.c&&0==this.c[0]},P.minus=function(e,t){var i,r,n,s,o=this,a=o.s;if(t=(e=new L(e,t)).s,!a||!t)return new L(NaN);if(a!=t)return e.s=-t,o.plus(e);var l=o.e/14,c=e.e/14,u=o.c,p=e.c;if(!l||!c){if(!u||!p)return u?(e.s=-t,e):new L(p?o:NaN);if(!u[0]||!p[0])return p[0]?(e.s=-t,e):new L(u[0]?o:3==O?-0:0)}if(l=f(l),c=f(c),u=u.slice(),a=l-c){for((s=a<0)?(a=-a,n=u):(c=l,n=p),n.reverse(),t=a;t--;n.push(0));n.reverse()}else for(r=(s=(a=u.length)<(t=p.length))?a:t,a=t=0;t<r;t++)if(u[t]!=p[t]){s=u[t]<p[t];break}if(s&&(n=u,u=p,p=n,e.s=-e.s),(t=(r=p.length)-(i=u.length))>0)for(;t--;u[i++]=0);for(t=h-1;r>a;){if(u[--r]<p[r]){for(i=r;i&&!u[--i];u[i]=t);--u[i],u[r]+=h}u[r]-=p[r]}for(;0==u[0];u.splice(0,1),--c);return u[0]?D(e,u,c):(e.s=3==O?-1:1,e.c=[e.e=0],e)},P.modulo=P.mod=function(e,t){var r,n,s=this;return e=new L(e,t),!s.c||!e.s||e.c&&!e.c[0]?new L(NaN):!e.c||s.c&&!s.c[0]?new L(s):(9==$?(n=e.s,e.s=1,r=i(s,e,0,3),e.s=n,r.s*=n):r=i(s,e,0,$),(e=s.minus(r.times(e))).c[0]||1!=$||(e.s=s.s),e)},P.multipliedBy=P.times=function(e,t){var i,r,n,s,o,a,l,c,u,p,d,g,m,y,v=this,w=v.c,b=(e=new L(e,t)).c;if(!(w&&b&&w[0]&&b[0]))return!v.s||!e.s||w&&!w[0]&&!b||b&&!b[0]&&!w?e.c=e.e=e.s=null:(e.s*=v.s,w&&b?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=f(v.e/14)+f(e.e/14),e.s*=v.s,(l=w.length)<(p=b.length)&&(m=w,w=b,b=m,n=l,l=p,p=n),n=l+p,m=[];n--;m.push(0));for(y=h,1e7,n=p;--n>=0;){for(i=0,d=b[n]%1e7,g=b[n]/1e7|0,s=n+(o=l);s>n;)i=((c=d*(c=w[--o]%1e7)+(a=g*c+(u=w[o]/1e7|0)*d)%1e7*1e7+m[s]+i)/y|0)+(a/1e7|0)+g*u,m[s--]=c%y;m[s]=i}return i?++r:m.splice(0,1),D(e,m,r)},P.negated=function(){var e=new L(this);return e.s=-e.s||null,e},P.plus=function(e,t){var i,r=this,n=r.s;if(t=(e=new L(e,t)).s,!n||!t)return new L(NaN);if(n!=t)return e.s=-t,r.minus(e);var s=r.e/14,o=e.e/14,a=r.c,l=e.c;if(!s||!o){if(!a||!l)return new L(n/0);if(!a[0]||!l[0])return l[0]?e:new L(a[0]?r:0*n)}if(s=f(s),o=f(o),a=a.slice(),n=s-o){for(n>0?(o=s,i=l):(n=-n,i=a),i.reverse();n--;i.push(0));i.reverse()}for((n=a.length)-(t=l.length)<0&&(i=l,l=a,a=i,t=n),n=0;t;)n=(a[--t]=a[t]+l[t]+n)/h|0,a[t]=h===a[t]?0:a[t]%h;return n&&(a=[n].concat(a),++o),D(e,a,o)},P.precision=P.sd=function(e,t){var i,r,n,s=this;if(null!=e&&e!==!!e)return y(e,1,d),null==t?t=O:y(t,0,8),q(new L(s),e,t);if(!(i=s.c))return null;if(r=14*(n=i.length-1)+1,n=i[n]){for(;n%10==0;n/=10,r--);for(n=i[0];n>=10;n/=10,r++);}return e&&s.e+1>r&&(r=s.e+1),r},P.shiftedBy=function(e){return y(e,-9007199254740991,9007199254740991),this.times("1e"+e)},P.squareRoot=P.sqrt=function(){var e,t,r,n,s,o=this,a=o.c,l=o.s,c=o.e,u=E+4,h=new L("0.5");if(1!==l||!a||!a[0])return new L(!l||l<0&&(!a||a[0])?NaN:a?o:1/0);if(0==(l=Math.sqrt(+H(o)))||l==1/0?(((t=g(a)).length+c)%2==0&&(t+="0"),l=Math.sqrt(+t),c=f((c+1)/2)-(c<0||c%2),r=new L(t=l==1/0?"5e"+c:(t=l.toExponential()).slice(0,t.indexOf("e")+1)+c)):r=new L(l+""),r.c[0])for((l=(c=r.e)+u)<3&&(l=0);;)if(s=r,r=h.times(s.plus(i(o,s,u,1))),g(s.c).slice(0,l)===(t=g(r.c)).slice(0,l)){if(r.e<c&&--l,"9999"!=(t=t.slice(l-3,l+1))&&(n||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(q(r,r.e+E+2,1),e=!r.times(r).eq(o));break}if(!n&&(q(s,s.e+E+2,0),s.times(s).eq(o))){r=s;break}u+=4,l+=4,n=1}return q(r,r.e+E+1,O,e)},P.toExponential=function(e,t){return null!=e&&(y(e,0,d),e++),V(this,e,t,1)},P.toFixed=function(e,t){return null!=e&&(y(e,0,d),e=e+this.e+1),V(this,e,t)},P.toFormat=function(e,t,i){var r,n=this;if(null==i)null!=e&&t&&"object"==typeof t?(i=t,t=null):e&&"object"==typeof e?(i=e,e=t=null):i=j;else if("object"!=typeof i)throw Error(c+"Argument not an object: "+i);if(r=n.toFixed(e,t),n.c){var s,o=r.split("."),a=+i.groupSize,l=+i.secondaryGroupSize,u=i.groupSeparator||"",h=o[0],p=o[1],d=n.s<0,f=d?h.slice(1):h,g=f.length;if(l&&(s=a,a=l,l=s,g-=s),a>0&&g>0){for(s=g%a||a,h=f.substr(0,s);s<g;s+=a)h+=u+f.substr(s,a);l>0&&(h+=u+f.slice(s)),d&&(h="-"+h)}r=p?h+(i.decimalSeparator||"")+((l=+i.fractionGroupSize)?p.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(i.fractionGroupSeparator||"")):p):h}return(i.prefix||"")+r+(i.suffix||"")},P.toFraction=function(e){var t,r,n,s,o,a,l,u,h,d,f,m,y=this,v=y.c;if(null!=e&&(!(l=new L(e)).isInteger()&&(l.c||1!==l.s)||l.lt(C)))throw Error(c+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+H(l));if(!v)return new L(y);for(t=new L(C),h=r=new L(C),n=u=new L(C),m=g(v),o=t.e=m.length-y.e-1,t.c[0]=p[(a=o%14)<0?14+a:a],e=!e||l.comparedTo(t)>0?o>0?t:h:l,a=I,I=1/0,l=new L(m),u.c[0]=0;d=i(l,t,0,1),1!=(s=r.plus(d.times(n))).comparedTo(e);)r=n,n=s,h=u.plus(d.times(s=h)),u=s,t=l.minus(d.times(s=t)),l=s;return s=i(e.minus(r),n,0,1),u=u.plus(s.times(h)),r=r.plus(s.times(n)),u.s=h.s=y.s,f=i(h,n,o*=2,O).minus(y).abs().comparedTo(i(u,r,o,O).minus(y).abs())<1?[h,n]:[u,r],I=a,f},P.toNumber=function(){return+H(this)},P.toPrecision=function(e,t){return null!=e&&y(e,1,d),V(this,e,t,2)},P.toString=function(e){var t,i=this,n=i.s,s=i.e;return null===s?n?(t="Infinity",n<0&&(t="-"+t)):t="NaN":(null==e?t=s<=k||s>=U?w(g(i.c),s):b(g(i.c),s,"0"):10===e?t=b(g((i=q(new L(i),E+s+1,O)).c),i.e,"0"):(y(e,2,M.length,"Base"),t=r(b(g(i.c),s,"0"),10,e,n,!0)),n<0&&i.c[0]&&(t="-"+t)),t},P.valueOf=P.toJSON=function(){return H(this)},P._isBigNumber=!0,null!=t&&L.set(t),L}()).default=s.BigNumber=s,void 0===(r=function(){return s}.call(t,i,t,e))||(e.exports=r)}()},function(e,t,i){var r=i(1),n=e.exports;!function(){"use strict";var e,t,i,s=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function a(e){return s.lastIndex=0,s.test(e)?'"'+e.replace(s,(function(e){var t=o[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}"function"!=typeof n.stringify&&(n.stringify=function(n,s,o){var l;if(e="",t="","number"==typeof o)for(l=0;l<o;l+=1)t+=" ";else"string"==typeof o&&(t=o);if(i=s,s&&"function"!=typeof s&&("object"!=typeof s||"number"!=typeof s.length))throw new Error("JSON.stringify");return function n(s,o){var l,c,u,h,p,d=e,f=o[s],g=null!=f&&(f instanceof r||r.isBigNumber(f));switch(f&&"object"==typeof f&&"function"==typeof f.toJSON&&(f=f.toJSON(s)),"function"==typeof i&&(f=i.call(o,s,f)),typeof f){case"string":return g?f:a(f);case"number":return isFinite(f)?String(f):"null";case"boolean":case"null":case"bigint":return String(f);case"object":if(!f)return"null";if(e+=t,p=[],"[object Array]"===Object.prototype.toString.apply(f)){for(h=f.length,l=0;l<h;l+=1)p[l]=n(l,f)||"null";return u=0===p.length?"[]":e?"[\n"+e+p.join(",\n"+e)+"\n"+d+"]":"["+p.join(",")+"]",e=d,u}if(i&&"object"==typeof i)for(h=i.length,l=0;l<h;l+=1)"string"==typeof i[l]&&(u=n(c=i[l],f))&&p.push(a(c)+(e?": ":":")+u);else Object.keys(f).forEach((function(t){var i=n(t,f);i&&p.push(a(t)+(e?": ":":")+i)}));return u=0===p.length?"{}":e?"{\n"+e+p.join(",\n"+e)+"\n"+d+"}":"{"+p.join(",")+"}",e=d,u}}("",{"":n})})}()},function(e,t,i){var r=null;const n=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,s=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;e.exports=function(e){"use strict";var t={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(t.strict=!0),!0===e.storeAsString&&(t.storeAsString=!0),t.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,t.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error('Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed '+e.constructorAction);t.constructorAction=e.constructorAction}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error('Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed '+e.protoAction);t.protoAction=e.protoAction}}var o,a,l,c,u={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},h=function(e){throw{name:"SyntaxError",message:e,at:o,text:l}},p=function(e){return e&&e!==a&&h("Expected '"+e+"' instead of '"+a+"'"),a=l.charAt(o),o+=1,a},d=function(){var e,n="";for("-"===a&&(n="-",p("-"));a>="0"&&a<="9";)n+=a,p();if("."===a)for(n+=".";p()&&a>="0"&&a<="9";)n+=a;if("e"===a||"E"===a)for(n+=a,p(),"-"!==a&&"+"!==a||(n+=a,p());a>="0"&&a<="9";)n+=a,p();if(e=+n,isFinite(e))return null==r&&(r=i(1)),n.length>15?t.storeAsString?n:t.useNativeBigInt?BigInt(n):new r(n):t.alwaysParseAsBig?t.useNativeBigInt?BigInt(e):new r(e):e;h("Bad number")},f=function(){var e,t,i,r="";if('"'===a)for(var n=o;p();){if('"'===a)return o-1>n&&(r+=l.substring(n,o-1)),p(),r;if("\\"===a){if(o-1>n&&(r+=l.substring(n,o-1)),p(),"u"===a){for(i=0,t=0;t<4&&(e=parseInt(p(),16),isFinite(e));t+=1)i=16*i+e;r+=String.fromCharCode(i)}else{if("string"!=typeof u[a])break;r+=u[a]}n=o}}h("Bad string")},g=function(){for(;a&&a<=" ";)p()};return c=function(){switch(g(),a){case"{":return function(){var e,i=Object.create(null);if("{"===a){if(p("{"),g(),"}"===a)return p("}"),i;for(;a;){if(e=f(),g(),p(":"),!0===t.strict&&Object.hasOwnProperty.call(i,e)&&h('Duplicate key "'+e+'"'),!0===n.test(e)?"error"===t.protoAction?h("Object contains forbidden prototype property"):"ignore"===t.protoAction?c():i[e]=c():!0===s.test(e)?"error"===t.constructorAction?h("Object contains forbidden constructor property"):"ignore"===t.constructorAction?c():i[e]=c():i[e]=c(),g(),"}"===a)return p("}"),i;p(","),g()}}h("Bad object")}();case"[":return function(){var e=[];if("["===a){if(p("["),g(),"]"===a)return p("]"),e;for(;a;){if(e.push(c()),g(),"]"===a)return p("]"),e;p(","),g()}}h("Bad array")}();case'"':return f();case"-":return d();default:return a>="0"&&a<="9"?d():function(){switch(a){case"t":return p("t"),p("r"),p("u"),p("e"),!0;case"f":return p("f"),p("a"),p("l"),p("s"),p("e"),!1;case"n":return p("n"),p("u"),p("l"),p("l"),null}h("Unexpected '"+a+"'")}()}},function(e,t){var i;return l=e+"",o=0,a=" ",i=c(),g(),a&&h("Syntax error"),"function"==typeof t?function e(i,r){var n,s=i[r];return s&&"object"==typeof s&&Object.keys(s).forEach((function(t){void 0!==(n=e(s,t))?s[t]=n:delete s[t]})),t.call(i,r,s)}({"":i},""):i}}},function(e,t,i){"use strict";i.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${o}`);class l{constructor(e,t){this.parts=[],this.element=t;const i=[],r=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,l=-1,u=0;const{strings:d,values:{length:f}}=e;for(;u<f;){const e=n.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let r=0;for(let e=0;e<i;e++)c(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=d[u],i=p.exec(t)[2],r=i.toLowerCase()+"$lit$",n=e.getAttribute(r);e.removeAttribute(r);const s=n.split(a);this.parts.push({type:"attribute",index:l,name:i,strings:s}),u+=s.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const r=e.parentNode,n=t.split(a),s=n.length-1;for(let t=0;t<s;t++){let i,s=n[t];if(""===s)i=h();else{const e=p.exec(s);null!==e&&c(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(s)}r.insertBefore(i,e),this.parts.push({type:"node",index:++l})}""===n[s]?(r.insertBefore(h(),e),i.push(e)):e.data=n[s],u+=s}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&l!==o||(l++,t.insertBefore(h(),e)),o=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(i.push(e),l--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else n.currentNode=r.pop()}for(const e of i)e.parentNode.removeChild(e)}}const c=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},u=e=>-1!==e.index,h=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:i},parts:r}=e,n=document.createTreeWalker(i,133,null,!1);let s=g(r),o=r[s],a=-1,l=0;const c=[];let u=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(c.push(e),null===u&&(u=e)),null!==u&&l++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-l,s=g(r,s),o=r[s]}c.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},g=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(u(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,y=e=>"function"==typeof e&&m.has(e),v={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,l=n.nextNode();for(;o<i.length;)if(s=i[o],u(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${s} `;class x{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const a=p.exec(e);t+=null===a?e+(i?_:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==S&&(t=S.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const N=e=>null===e||!("object"==typeof e||"function"==typeof e),A=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!A(e))return e}let r="";for(let n=0;n<t;n++){r+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(N(e)||!A(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||N(e)&&e===this.value||(this.value=e,y(e)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(h()),this.endNode=e.appendChild(h())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=h()),e.__insert(this.endNode=h())}insertAfterPart(e){e.__insert(this.startNode=h()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(N(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):A(e)?this.__commitIterable(e):e===w?(this.value=w,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,r=0;for(const n of e)i=t[r],void 0===i&&(i=new E(this.options),t.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(t[r-1])),i.setValue(n),i.commit(),r++;r<t.length&&(t.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class O{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class k extends P{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new U(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class U extends C{}let T=!1;(()=>{try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class I{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=B(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const B=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function $(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(s);return i=t.keyString.get(r),void 0===i&&(i=new l(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const R=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,r){const n=t[0];if("."===n){return new k(e,t.slice(1),i).parts}if("@"===n)return[new I(e,t.slice(1),r.eventContext)];if("?"===n)return[new O(e,t.slice(1),i)];return new P(e,t,i).parts}handleTextExpression(e){return new E(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const L=(e,...t)=>new x(e,t,"html",M),V=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const D=e=>t=>{const i=V(t.type,e);let r=R.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},R.set(i,r));let n=r.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(s);if(n=r.keyString.get(o),void 0===n){const i=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,e),n=new l(t,i),r.keyString.set(o,n)}return r.stringsArray.set(t.strings,n),n},q=["html","svg"],H=new Set,z=(e,t,i)=>{H.add(e);const r=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{q.forEach(t=>{const i=R.get(V(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),d(e,i)})})})(e);const a=r.content;i?function(e,t,i=null){const{element:{content:r},parts:n}=e;if(null==i)return void r.appendChild(t);const s=document.createTreeWalker(r,133,null,!1);let o=g(n),a=0,l=-1;for(;s.nextNode();){l++;for(s.currentNode===i&&(a=f(t),i.parentNode.insertBefore(t,i));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=g(n,o);return}o=g(n,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),d(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const G={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:W};class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=W){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||G,n="function"==typeof r?r:r.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||G.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=J){const r=this.constructor,n=r._attributeNameForProperty(e,i);if(void 0!==n){const e=r._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){const e=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let r=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}X.finalized=!0;const Y=Element.prototype;Y.msMatchesSelector||Y.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class Q{constructor(e,t){if(t!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const i=t.reduce((t,i,r)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1],e[0]);return new Q(i,Z)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const te={};class ie extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),r=[];i.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Q(String(t),Z)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ie.finalized=!0,ie.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,s=j.has(t),o=F&&11===t.nodeType&&!!t.host,a=o&&!H.has(r),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let r=j.get(t);void 0===r&&(n(t,t.firstChild),j.set(t,r=new E(Object.assign({templateFactory:$},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:D(r)},i)),a){const e=j.get(l);j.delete(l);const i=e.value instanceof b?e.value.template:void 0;z(r,l,i),n(t,t.firstChild),t.appendChild(l),j.set(t,e)}!s&&o&&window.ShadyCSS.styleElement(t.host)},ie.shadowRootOptions={mode:"open"};var re=i(0),ne=i.n(re);class se{constructor(e){this.backend=e}async getIndices(){return ne.a.parse(await(await fetch(this.backend+"/indices-list",{})).text())}async callClipService(e,t,i,r,n,s){console.log("calling",e,n);return ne.a.parse(await(await fetch(this.backend+"/knn-service",{method:"POST",body:JSON.stringify({text:e,image:t,image_url:i,modality:r,num_images:n,indice_name:s})})).text())}}customElements.define("clip-front",class extends ie{constructor(){super();const e=new URLSearchParams(window.location.search),t=e.get("back"),i=e.get("index"),r=e.get("query"),n=e.get("imageUrl");this.currentIndex=null!=i?i:"",this.backendHost=null!=t?t:"https://clip.rom1504.fr",this.text=null!=r?r:"",this.service=new se(this.backendHost),this.numImages=20,this.indices=[],this.images=[],this.modality="image",this.blacklist={},this.lastSearch="text",this.displayCaptions=!0,this.displaySimilarities=!1,this.displayFullCaptions=!1,this.firstLoad=!0,this.imageUrl=null===n?void 0:n,this.initIndices()}initIndices(e){this.service.getIndices().then(t=>{this.indices=t,(e||""===this.currentIndex)&&(this.currentIndex=this.indices[0])})}static get properties(){return{service:{type:Object},images:{type:Array},image:{type:String},imageUrl:{type:String},text:{type:String},numImages:{type:Number},modality:{type:String},indices:{type:Array},currentIndex:{type:String},backendHost:{type:String},blacklist:{type:Object},displaySimilarities:{type:Boolean},displayCaptions:{type:Boolean},displayFullCaptions:{type:Boolean}}}firstUpdated(){this.shadowRoot.getElementById("searchBar").addEventListener("keyup",e=>{13===e.keyCode&&this.textSearch()})}updated(e){e.has("backendHost")&&(this.service.backend=this.backendHost,this.initIndices(!this.firstLoad),this.firstLoad=!1,this.setUrlParams()),e.has("currentIndex")&&this.setUrlParams(),e.has("image")&&void 0!==this.image?this.imageSearch():e.has("imageUrl")&&void 0!==this.imageUrl?this.imageUrlSearch():(e.has("modality")||e.has("currentIndex"))&&(void 0===this.image&&""===this.text&&void 0===this.imageUrl||this.redoSearch())}async redoSearch(){"text"===this.lastSearch?this.textSearch():"image"===this.lastSearch?this.imageSearch():"imageUrl"===this.lastSearch&&this.imageUrlSearch()}setUrlParams(){const e=new URLSearchParams(window.location.search);""!==this.text?e.set("query",this.text):e.delete("query"),void 0!==this.imageUrl?e.set("imageUrl",this.imageUrl):e.delete("imageUrl"),e.set("back",this.backendHost),e.set("index",this.currentIndex),window.history.pushState({},"","?"+e.toString())}async textSearch(){if(""===this.text)return;this.image=void 0,this.imageUrl=void 0;const e=await this.service.callClipService(this.text,null,null,this.modality,this.numImages,this.currentIndex);console.log(e),this.images=e,this.lastSearch="text",this.setUrlParams()}async imageSearch(){this.text="",this.imageUrl=void 0;const e=await this.service.callClipService(null,this.image,null,this.modality,this.numImages,this.currentIndex);console.log(e),this.images=e,this.lastSearch="image",this.setUrlParams()}async imageUrlSearch(){this.text="",this.image=void 0;const e=await this.service.callClipService(null,null,this.imageUrl,this.modality,this.numImages,this.currentIndex);console.log(e),this.images=e,this.lastSearch="imageUrl",this.setUrlParams()}static get styles(){return ee`
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
        -webkit-transition-delay: 9999s;
    }

    figcaption {
      display: table-caption;
      caption-side: bottom;
      background: #fff;
      padding: 0 0px 0px;
    }

    #searchBar, #searchBar:hover, #searchBar:focus, #searchBar:valid {
      border-radius: 25px;
      border-color: #ddd;
      background-color:white;
      border-width:1px;
      width:85%;
      padding:15px;
      outline: none;
      border-style: solid;
      font-size:16px;
      font-family:arial, sans-serif;
    }
    #searchBar:hover, #searchBar:focus {
      box-shadow: 0px 0px 7px  #ccc;
    }
    #all {
      margin-left:2%;
      margin-right:2%;
      margin-top:2%;
    }
    #inputSearchBar:hover > #searchBar {
      box-shadow: 0px 0px 7px  #ccc !important;
    }
    #imageSearch {
      width: 22px;
      margin-left:0.5%;
      vertical-align:middle;
      cursor:pointer;
    }
    #textSearch {
      width: 22px;
      margin-left:1.5%;
      vertical-align:middle;
      cursor:pointer;
    }
    .subImageSearch {
      width: 22px;
      height: 22px:
      cursor:pointer;
      float:right;
      z-index:90;
      display:None;
    }
    .subTextSearch {
      width: 22px;
      height: 22px:
      cursor:pointer;
      margin-left:5%;
      margin-right:5%;
      float:right;
      z-index:90;
      display:None;
    }
    figure:hover > .subImageSearch {
      display:inline;
      cursor:pointer;
    }
    figure:hover > .subTextSearch {
      display:inline;
      cursor:pointer;
    }
    #products {
      margin-top:50px;
      width:85%;
      float:right;
      display: inline-grid;
    }
    @media (min-width: 500px) {
      #products {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 700px) {
      #products{
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    @media (min-width: 1000px) {
      #products {
        grid-template-columns: repeat(5, 1fr);
      }
    }
    
    @media (min-width: 1300px) {
      #products {
        grid-template-columns: repeat(7, 1fr);
      }
    }
    
    @media (min-width: 1600px) {
      #products{
        grid-template-columns: repeat(8, 1fr);
      }
    }
    #filter {
      position:absolute;
      top:20px;
      width:12%;
      float:left;
    }
    #searchLine {
      margin-left:15%;
    }

    figcaption {
      font-size:16px;
    }

    figure,img.pic,figcaption {
      width:150px;
    }

    @media (max-width: 500px) {

      #searchBar, #searchBar:hover, #searchBar:focus, #searchBar:valid {
        width:60%;
      }
      #filter {
        font-size:14px;
        width:100px;
      }

      #products {
        grid-template-columns: repeat(3, 1fr);
      }
      figure,img.pic,figcaption {
      width:70px;
      }
      #searchLine {
        margin-left:100px;
      }

      figcaption {
        font-size:12px;
      }

    #products {
      width:60%;
    }
    }

    `}updateImage(e){var t=new FileReader;t.readAsDataURL(e),t.onload=()=>{this.image=t.result.split(",")[1]},t.onerror=e=>{console.log("Error: ",e)}}renderImage(e){let t;return void 0!==e.image&&(t="data:image/png;base64, "+e.image),void 0!==e.url&&(t=e.url),L`
    <figure style="margin:5px;display:table" 
    style=${"margin:1px; "+(void 0!==this.blacklist[t]?"display:none":"display:inline")}>
     ${this.displaySimilarities?L`<p>${e.similarity.toFixed(4)}</p>`:""}

     <img src="assets/search.png" class="subTextSearch" @click=${()=>{this.text=e.caption,this.textSearch()}} />
     <img src="assets/image-search.png" class="subImageSearch" @click=${()=>{void 0!==e.image?this.image=e.image:void 0!==e.url&&(this.imageUrl=e.url)}} />
      <img class="pic" src="${t}" alt="${e.caption}"" title="${e.caption}"
      @error=${()=>{this.blacklist={...this.blacklist,[t]:!0}}} />
      
      ${this.displayCaptions?L`<figcaption>
      ${e.caption.length>50&&!this.displayFullCaptions?e.caption.substr(0,50)+"...":e.caption}</figcaption>`:""}
    
    
    </figure>
    `}render(){return L`
    <div id="all">
    <div id="searchLine">
      <span id="inputSearchBar">
        <input id="searchBar" type="text" .value=${this.text} @input=${e=>{this.text=e.target.value}}/>
        <img src="assets/search.png" id="textSearch" @click=${()=>{this.textSearch()}} />
        <img src="assets/image-search.png" id="imageSearch" @click=${()=>{this.shadowRoot.getElementById("filechooser").click()}} />
        <input type="file" id="filechooser" style="position:absolute;top:-100px" @change=${()=>this.updateImage(this.shadowRoot.getElementById("filechooser").files[0])}>
      </span>
     
    </div>
    <div id="filter">
    Backend url: <br /><input type="text" style="width:80px" value=${this.backendHost} @input=${e=>{this.backendHost=e.target.value}}/><br />
    Index: <br /><select style="margin-bottom:50px;" @input=${e=>{this.currentIndex=e.target.value}}>${this.indices.map(e=>L`<option value=${e} ?selected=${e===this.currentIndex}>${e}</option>`)}</select><br />
      ${void 0!==this.image?L`<img width="100px" src="data:image/png;base64, ${this.image}"" /><br />`:""}
      ${void 0!==this.imageUrl?L`<img width="100px" src="${this.imageUrl}"" /><br />`:""}
      <a href="https://github.com/rom1504/clip-retrieval">Clip retrieval</a> works by converting the text query to a CLIP embedding
      , then using that embedding to query a knn index of clip image embedddings<br /><br />
      <label>Display captions<input type="checkbox" ?checked="${this.displayCaptions}" @click=${()=>{this.displayCaptions=!this.displayCaptions}} /></label><br />
      <label>Display full captions<input type="checkbox" ?checked="${this.displayFullCaptions}" @click=${()=>{this.displayFullCaptions=!this.displayFullCaptions}} /></label><br />
      <label>Display similarities<input type="checkbox" ?checked="${this.displaySimilarities}" @click=${()=>{this.displaySimilarities=!this.displaySimilarities}} /></label><br />
      <label>Search over <select @input=${e=>{this.modality=e.target.value}}>${["image","text"].map(e=>L`<option value=${e} ?selected=${e===this.modality}>${e}</option>`)}</select>
        <p>This UI may contain results with nudity and is best used by adults. The images are under their own copyright.</p>
        <p>Are you seeing near duplicates ? KNN search are good at spotting those, especially so in large datasets.</p>
     </div>

    <div id="products">
    ${this.images.map(e=>this.renderImage(e))}
    </div>
    </div>
    `}})}]);
//# sourceMappingURL=main.3d9e6e0f.js.map