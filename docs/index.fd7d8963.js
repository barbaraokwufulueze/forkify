function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},o={},a=t.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire3a11=a),a.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("27Lyk").register(JSON.parse('{"f9fpV":"index.fd7d8963.js","eyyUD":"icons.5ec790f5.svg"}'));var s,c,u={},l=function(e){return e&&e.Math==Math&&e};u=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof t&&t)||function(){return this}()||Function("return this")();var d,p;d=!(p=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,h={};f=!p((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var g,v=Function.prototype.call;h=f?v.bind(v):function(){return v.apply(v,arguments)};var m={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,_=y&&!m.call({1:2},1);g=_?function(e){var t=y(this,e);return!!t&&t.enumerable}:m;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var w,k,E={},S={},L=Function.prototype,O=L.bind,$=L.call,j=f&&O.bind($,$),P=(S=f?function(e){return e&&j(e)}:function(e){return e&&function(){return $.apply(e,arguments)}})({}.toString),M=S("".slice);k=function(e){return M(P(e),8,-1)};var x=u.Object,T=S("".split);E=p((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==k(e)?T(e,""):x(e)}:x;var H,I=u.TypeError;H=function(e){if(null==e)throw I("Can't call method on "+e);return e},w=function(e){return E(H(e))};var N,q,A,F;F=function(e){return"function"==typeof e},A=function(e){return"object"==typeof e?null!==e:F(e)};var R,C={},D=function(e){return F(e)?e:void 0};R=function(e,t){return arguments.length<2?D(u[e]):u[e]&&u[e][t]};var W={};W=S({}.isPrototypeOf);var G,U,B,z={};z=R("navigator","userAgent")||"";var J,Y,V=u.process,Q=u.Deno,K=V&&V.versions||Q&&Q.version,X=K&&K.v8;X&&(Y=(J=X.split("."))[0]>0&&J[0]<4?1:+(J[0]+J[1])),!Y&&z&&(!(J=z.match(/Edge\/(\d+)/))||J[1]>=74)&&(J=z.match(/Chrome\/(\d+)/))&&(Y=+J[1]),B=Y,U=!!Object.getOwnPropertySymbols&&!p((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&B&&B<41})),G=U&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var Z=u.Object;C=G?function(e){return"symbol"==typeof e}:function(e){var t=R("Symbol");return F(t)&&W(t.prototype,Z(e))};var ee,te,ne,re=u.String;ne=function(e){try{return re(e)}catch(e){return"Object"}};var ie=u.TypeError;te=function(e){if(F(e))return e;throw ie(ne(e)+" is not a function")},ee=function(e,t){var n=e[t];return null==n?void 0:te(n)};var oe,ae=u.TypeError;oe=function(e,t){var n,r;if("string"===t&&F(n=e.toString)&&!A(r=h(n,e)))return r;if(F(n=e.valueOf)&&!A(r=h(n,e)))return r;if("string"!==t&&F(n=e.toString)&&!A(r=h(n,e)))return r;throw ae("Can't convert object to primitive value")};var se,ce;var ue,le={},de=Object.defineProperty;ue=function(e,t){try{de(u,e,{value:t,configurable:!0,writable:!0})}catch(n){u[e]=t}return t};var pe=u["__core-js_shared__"]||ue("__core-js_shared__",{});le=pe,(ce=function(e,t){return le[e]||(le[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var fe,he={},ge=u.Object;fe=function(e){return ge(H(e))};var ve=S({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ve(fe(e),t)};var me,ye=0,_e=Math.random(),be=S(1..toString);me=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+_e,36)};var we=ce("wks"),ke=u.Symbol,Ee=ke&&ke.for,Se=G?ke:ke&&ke.withoutSetter||me;se=function(e){if(!he(we,e)||!U&&"string"!=typeof we[e]){var t="Symbol."+e;U&&he(ke,e)?we[e]=ke[e]:we[e]=G&&Ee?Ee(t):Se(t)}return we[e]};var Le=u.TypeError,Oe=se("toPrimitive");q=function(e,t){if(!A(e)||C(e))return e;var n,r=ee(e,Oe);if(r){if(void 0===t&&(t="default"),n=h(r,e,t),!A(n)||C(n))return n;throw Le("Can't convert object to primitive value")}return void 0===t&&(t="number"),oe(e,t)},N=function(e){var t=q(e,"string");return C(t)?t:t+""};var $e,je,Pe=u.document,Me=A(Pe)&&A(Pe.createElement);je=function(e){return Me?Pe.createElement(e):{}},$e=!d&&!p((function(){return 7!=Object.defineProperty(je("div"),"a",{get:function(){return 7}}).a}));var xe,Te,He=Object.getOwnPropertyDescriptor,Ie=c=d?He:function(e,t){if(e=w(e),t=N(t),$e)try{return He(e,t)}catch(e){}if(he(e,t))return b(!h(g,e,t),e[t])},Ne={};Te=d&&p((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var qe,Ae=u.String,Fe=u.TypeError;qe=function(e){if(A(e))return e;throw Fe(Ae(e)+" is not an object")};var Re=u.TypeError,Ce=Object.defineProperty,De=Object.getOwnPropertyDescriptor;xe=d?Te?function(e,t,n){if(qe(e),t=N(t),qe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=De(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(qe(e),t=N(t),qe(n),$e)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Re("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ne=d?function(e,t,n){return xe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var We,Ge={},Ue=S(Function.toString);F(le.inspectSource)||(le.inspectSource=function(e){return Ue(e)}),Ge=le.inspectSource;var Be,ze,Je=u.WeakMap;ze=F(Je)&&/native code/.test(Ge(Je));var Ye,Ve=ce("keys");Ye=function(e){return Ve[e]||(Ve[e]=me(e))};var Qe={};Qe={};var Ke,Xe,Ze,et=u.TypeError,tt=u.WeakMap;if(ze||le.state){var nt=le.state||(le.state=new tt),rt=S(nt.get),it=S(nt.has),ot=S(nt.set);Ke=function(e,t){if(it(nt,e))throw new et("Object already initialized");return t.facade=e,ot(nt,e,t),t},Xe=function(e){return rt(nt,e)||{}},Ze=function(e){return it(nt,e)}}else{var at=Ye("state");Qe[at]=!0,Ke=function(e,t){if(he(e,at))throw new et("Object already initialized");return t.facade=e,Ne(e,at,t),t},Xe=function(e){return he(e,at)?e[at]:{}},Ze=function(e){return he(e,at)}}Be={set:Ke,get:Xe,has:Ze,enforce:function(e){return Ze(e)?Xe(e):Ke(e,{})},getterFor:function(e){return function(t){var n;if(!A(t)||(n=Xe(t)).type!==e)throw et("Incompatible receiver, "+e+" required");return n}}};var st=Function.prototype,ct=d&&Object.getOwnPropertyDescriptor,ut=he(st,"name"),lt={EXISTS:ut,PROPER:ut&&"something"===function(){}.name,CONFIGURABLE:ut&&(!d||d&&ct(st,"name").configurable)}.CONFIGURABLE,dt=Be.get,pt=Be.enforce,ft=String(String).split("String");(We=function(e,t,n,r){var i,o=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:t;F(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!he(n,"name")||lt&&n.name!==c)&&Ne(n,"name",c),(i=pt(n)).source||(i.source=ft.join("string"==typeof c?c:""))),e!==u?(o?!s&&e[t]&&(a=!0):delete e[t],a?e[t]=n:Ne(e,t,n)):a?e[t]=n:ue(t,n)})(Function.prototype,"toString",(function(){return F(this)&&dt(this).source||Ge(this)}));var ht,gt,vt,mt,yt,_t={},bt=Math.ceil,wt=Math.floor;yt=function(e){var t=+e;return t!=t||0===t?0:(t>0?wt:bt)(t)};var kt=Math.max,Et=Math.min;mt=function(e,t){var n=yt(e);return n<0?kt(n+t,0):Et(n,t)};var St,Lt,Ot=Math.min;Lt=function(e){return e>0?Ot(yt(e),9007199254740991):0},St=function(e){return Lt(e.length)};var $t=function(e){return function(t,n,r){var i,o=w(t),a=St(o),s=mt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},jt={includes:$t(!0),indexOf:$t(!1)}.indexOf,Pt=S([].push);vt=function(e,t){var n,r=w(e),i=0,o=[];for(n in r)!he(Qe,n)&&he(r,n)&&Pt(o,n);for(;t.length>i;)he(r,n=t[i++])&&(~jt(o,n)||Pt(o,n));return o};var Mt,xt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");gt=Object.getOwnPropertyNames||function(e){return vt(e,xt)},Mt=Object.getOwnPropertySymbols;var Tt=S([].concat);_t=R("Reflect","ownKeys")||function(e){var t=gt(qe(e));return Mt?Tt(t,Mt(e)):t},ht=function(e,t,n){for(var r=_t(t),i=xe,o=c,a=0;a<r.length;a++){var s=r[a];he(e,s)||n&&he(n,s)||i(e,s,o(t,s))}};var Ht={},It=/#|\.prototype\./,Nt=function(e,t){var n=At[qt(e)];return n==Rt||n!=Ft&&(F(t)?p(t):!!t)},qt=Nt.normalize=function(e){return String(e).replace(It,".").toLowerCase()},At=Nt.data={},Ft=Nt.NATIVE="N",Rt=Nt.POLYFILL="P";Ht=Nt,s=function(e,t){var n,r,i,o,a,s=e.target,c=e.global,l=e.stat;if(n=c?u:l?u[s]||ue(s,{}):(u[s]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(a=Ie(n,r))&&a.value:n[r],!Ht(c?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;ht(o,i)}(e.sham||i&&i.sham)&&Ne(o,"sham",!0),We(n,r,o,e)}};var Ct,Dt={},Wt=Function.prototype,Gt=Wt.apply,Ut=Wt.call;Dt="object"==typeof Reflect&&Reflect.apply||(f?Ut.bind(Gt):function(){return Ut.apply(Gt,arguments)});var Bt,zt=S(S.bind);Bt=function(e,t){return te(e),void 0===t?e:f?zt(e,t):function(){return e.apply(t,arguments)}};var Jt={};Jt=R("document","documentElement");var Yt={};Yt=S([].slice);var Vt,Qt=u.TypeError;Vt=function(e,t){if(e<t)throw Qt("Not enough arguments");return e};var Kt;Kt=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var Xt;Xt="process"==k(u.process);var Zt,en,tn,nn,rn=u.setImmediate,on=u.clearImmediate,an=u.process,sn=u.Dispatch,cn=u.Function,un=u.MessageChannel,ln=u.String,dn=0,pn={};try{Zt=u.location}catch(e){}var fn=function(e){if(he(pn,e)){var t=pn[e];delete pn[e],t()}},hn=function(e){return function(){fn(e)}},gn=function(e){fn(e.data)},vn=function(e){u.postMessage(ln(e),Zt.protocol+"//"+Zt.host)};rn&&on||(rn=function(e){Vt(arguments.length,1);var t=F(e)?e:cn(e),n=Yt(arguments,1);return pn[++dn]=function(){Dt(t,void 0,n)},en(dn),dn},on=function(e){delete pn[e]},Xt?en=function(e){an.nextTick(hn(e))}:sn&&sn.now?en=function(e){sn.now(hn(e))}:un&&!Kt?(nn=(tn=new un).port2,tn.port1.onmessage=gn,en=Bt(nn.postMessage,nn)):u.addEventListener&&F(u.postMessage)&&!u.importScripts&&Zt&&"file:"!==Zt.protocol&&!p(vn)?(en=vn,u.addEventListener("message",gn,!1)):en="onreadystatechange"in je("script")?function(e){Jt.appendChild(je("script")).onreadystatechange=function(){Jt.removeChild(this),fn(e)}}:function(e){setTimeout(hn(e),0)}),Ct={set:rn,clear:on},s({global:!0,bind:!0,enumerable:!0,forced:!u.setImmediate||!u.clearImmediate},{setImmediate:Ct.set,clearImmediate:Ct.clear});var mn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new j(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return M()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==n&&r.call(w,o)&&(_=w);var k=y.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),$(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=mn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=mn:Function("r","regeneratorRuntime = r")(mn)}const yn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var n},_n={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[],shoppingList:new Set},bn=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},wn=function(e=_n.search.page){_n.search.page=e;let t=(e-1)*_n.search.resultsPerPage,n=e*_n.search.resultsPerPage;return _n.search.results.slice(t,n)},kn=function(){localStorage.setItem("bookmarks",JSON.stringify(_n.bookmarks))},En=function(e){_n.bookmarks.push(e),e.id===_n.recipe.id&&(_n.recipe.bookmarked=!0),kn()},Sn=function(){const e=Array.from(_n.shoppingList);localStorage.setItem("shoppingList",JSON.stringify(e))};!function(){const e=localStorage.getItem("bookmarks");e&&(_n.bookmarks=JSON.parse(e));const t=localStorage.getItem("shoppingList");t&&(_n.shoppingList=new Set(JSON.parse(t)))}();var Ln;Ln=new URL(a("27Lyk").resolve("eyyUD"),import.meta.url).toString();var On;function $n(e,t,n,r,o){const a=[2,3,5];if(!0===o)for(i=3;i*i<=e;i+=2)e%i==0&&a.push(i);let s=0,c=1,u=e,l=t;for(;s<=a.length;)u%a[s]==0&&l%a[s]==0?(c*=a[s],u/=a[s],l/=a[s]):s++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(l,u,n,r)}On=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let o,a=r[0];if("0"==o&&"0"!==a)return a;if("0"==o&&"0"==a)return"0";if(o=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==o&&"0"!==a)return`${a} 99/100`;if("99"==o&&"0"==a)return"99/100";if(1-parseFloat(`.${o}`)<.0011&&(o="999"),null==o)return a;let s=o.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(s&&o.length>2){if(patternSequence=s[0].split("").reverse().join(""),endPattern=s[1].split("").reverse().join(""),endPattern.length>1){let e=endPattern.split(""),t=1;for(i=0;i<e.length;i++)t/=e[0]/e[i];1===t&&(endPattern=e[0])}return endPattern.length>1&&endPattern.length%2==0&&(endPattern=parseInt(endPattern.slice(0,endPattern.length/2),10)-parseInt(endPattern.slice(endPattern.length/2,endPattern.length),10)==0?endPattern.slice(0,endPattern.length/2):endPattern),function(e,t,n,r,i){const o=!0,a=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return $n(l,(u-1)*s,r,i,o)}(o,endPattern,patternSequence,a,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return $n(i,o,t,n,r)}(o,a,t)};class jn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(e){const t=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(Ln)}#icon-loader"></use>\n        </svg>\n      </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(Ln)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${n(Ln)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Pn=new class extends jn{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe, please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=n.dataset.updateTo;r>0&&e(r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}addHandlerAddToShoppingList(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--add-ingredients")&&e()}))}_generateMarkup(){return`\n        <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Ln)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(Ln)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${Number(this._data.servings)-1}">\n                <svg>\n                  <use href="${n(Ln)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${Number(this._data.servings)+1}">\n                <svg>\n                  <use href="${n(Ln)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(Ln)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(Ln)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n          <button class="btn--round btn--add-ingredients">\n            <svg class="">\n              <use href="${n(Ln)}#icon-notebook-list"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n            ${this._data.ingredients.map((e=>this._generateMarkupIngredients(e))).join("")}\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.source}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(Ln)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>`}_generateMarkupIngredients(e){return`\n    <li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="${n(Ln)}#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">${e.quantity?n(On)(e.quantity).toString():""}</div>\n    <div class="recipe__description">\n      <span class="recipe__unit">${e.unit}</span>\n      ${e.description}\n    </div>\n  </li>`}};var Mn=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(t=>this.handleSearch(t,e)))}handleSearch(e,t){e.preventDefault(),t()}};var xn=new class extends jn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${n(Ln)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}};var Tn=new class extends jn{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map((e=>xn.render(e,!1))).join("")}};var Hn=new class extends jn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkupBtn(e){return`\n    <button data-goto="${e}" class="btn--inline pagination__btn--next">\n      <span>Page ${e}</span>\n      <svg class="search__icon">\n        <use href="${n(Ln)}#icon-arrow-right"></use>\n      </svg>\n    </button>\n  `}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);let n;if(1===e&&t>1)return n=e+1,this._generateMarkupBtn(n);if(e===t&&t>1)return n=e-1,this._generateMarkupBtn(n);if(e<t){n=e-1;let t=this._generateMarkupBtn(n);return n=e+1,this._generateMarkupBtn(n)+t}return""}};var In=new class extends jn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>xn.render(e,!1))).join("")}};var Nn=new class extends jn{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};var qn=new class extends jn{_parentElement=document.querySelector(".shopping__list");_btnDeleteItem=document.querySelector(".item");_errorMessage=" No ingredients yet. Add ingredients to shopping list :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}addHandlerDeleteList(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".delete__btn")&&e()}))}addHandlerDeleteItem(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".item__icon");n&&e(n.parentElement.textContent.trim())}))}_generateMarkup(){return`\n    ${this._data.map((e=>this._generateIngredientsMarkup(e))).join("")}\n    <div class="delete">\n      <button class="btn delete__btn">\n        <span>&times; Empty list</span>\n      </button>\n    </div>\n    `}_generateIngredientsMarkup(e){return`\n    <li class="item">\n      <div class="item__link">\n        <div class="item__info">\n          <span class="recipe__info-data"\n            >${e}</span\n          >\n          <svg class="item__icon">\n            <use href="${n(Ln)}#icon-cross"></use>\n          </svg>\n        </div>\n      </div>\n    </li>\n                  \n  `}};const An=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Pn.renderSpinner(),Tn.update(wn()),In.update(_n.bookmarks),await async function(e){try{const t=await yn(`https://forkify-api.herokuapp.com/api/v2/recipes//${e}?key=48e5c513-ce18-4f45-9d4e-22d0c8cb3bc3`);_n.recipe=bn(t),_n.bookmarks.some((t=>t.id===e))?_n.recipe.bookmarked=!0:_n.recipe.bookmarked=!1}catch(e){throw console.error(`${e} 💥 💥 💥 💥`),e}}(e),Pn.render(_n.recipe)}catch(e){Pn.renderError(),console.error(e)}},Fn=async function(){try{Tn.renderSpinner();const e=Mn.getQuery();if(""===e&&Tn.renderError("No recipe supplied 💥 💥 💥 💥 \bPlease type a recipe name ;)"),!e)return;await async function(e){try{_n.search.query=e;const t=await yn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}?&key=48e5c513-ce18-4f45-9d4e-22d0c8cb3bc3`);_n.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),_n.search.page=1}catch(e){throw console.error(`${e} 💥 💥 💥 💥`),e}}(e),Tn.render(wn()),Hn.render(_n.search)}catch(e){console.log(e)}},Rn=function(e){try{Tn.render(wn(e)),Hn.render(_n.search)}catch(e){console.log(e)}},Cn=function(e){!function(e){_n.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/_n.recipe.servings})),_n.recipe.servings=e}(e),Pn.update(_n.recipe)},Dn=function(){_n.recipe.bookmarked?function(e){const t=_n.bookmarks.findIndex((t=>t.id===e));_n.bookmarks.splice(t,1),e===_n.recipe.id&&(_n.recipe.bookmarked=!1),kn()}(_n.recipe.id):En(_n.recipe),Pn.update(_n.recipe),In.render(_n.bookmarks)},Wn=function(){In.render(_n.bookmarks)},Gn=async function(e){try{Nn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient fromat! Please use the correct format :)");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await yn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=48e5c513-ce18-4f45-9d4e-22d0c8cb3bc3",n);_n.recipe=bn(r),En(_n.recipe)}catch(e){throw e}}(e),console.log(_n.recipe),Pn.render(_n.recipe),Nn.renderMessage(),In.render(_n.bookmarks),window.history.pushState(null,"",`#${_n.recipe.id}`),setTimeout((function(){Nn.toggleWindow()}),2500)}catch(e){console.error("💥",e),Nn.renderError(e.message)}},Un=function(){!function(e){e.map((e=>{_n.shoppingList.add(e.description.trim())})),console.log(_n.shoppingList,"HELLO WORLD Twice AGAIN!"),Sn()}(_n.recipe.ingredients);const e=Array.from(_n.shoppingList);qn.render(e)},Bn=function(e){!function(e){_n.shoppingList.delete(e),Sn()}(e);const t=Array.from(_n.shoppingList);qn.render(t)},zn=function(){localStorage.clear("shoppingList"),_n.shoppingList=new Set;const e=Array.from(_n.shoppingList);qn.render(e)},Jn=function(){const e=Array.from(_n.shoppingList);qn.render(e)};In.addHandlerRender(Wn),qn.addHandlerRender(Jn),Pn.addHandlerRender(An),Pn.addHandlerUpdateServings(Cn),Pn.addHandlerAddBookmark(Dn),Pn.addHandlerAddToShoppingList(Un),Mn.addHandlerSearch(Fn),Hn.addHandlerClick(Rn),Nn.addHandlerUpload(Gn),qn.addHandlerDeleteList(zn),qn.addHandlerDeleteItem(Bn);
//# sourceMappingURL=index.fd7d8963.js.map