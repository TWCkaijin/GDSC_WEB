function y(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var l={};l.match=R;l.parse=v;var h=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,E=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,w=/^(?:(min|max)-)?(.+)/,_=/(em|rem|px|cm|mm|in|pt|pc)?$/,x=/(dpi|dpcm|dppx)?$/;function R(r,e){return v(r).some(function(t){var n=t.inverse,u=t.type==="all"||e.type===t.type;if(u&&n||!(u||n))return!1;var i=t.expressions.every(function(c){var o=c.feature,p=c.modifier,a=c.value,s=e[o];if(!s)return!1;switch(o){case"orientation":case"scan":return s.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=f(a),s=f(s);break;case"resolution":a=d(a),s=d(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=m(a),s=m(s);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,s=parseInt(s,10)||0;break}switch(p){case"min":return s>=a;case"max":return s<=a;default:return s===a}});return i&&!n||!i&&n})}function v(r){return r.split(",").map(function(e){e=e.trim();var t=e.match(h),n=t[1],u=t[2],i=t[3]||"",c={};return c.inverse=!!n&&n.toLowerCase()==="not",c.type=u?u.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],c.expressions=i.map(function(o){var p=o.match(E),a=p[1].toLowerCase().match(w);return{modifier:a[1],feature:a[2],value:p[2]}}),c})}function m(r){var e=Number(r),t;return e||(t=r.match(/^(\d+)\s*\/\s*(\d+)$/),e=t[1]/t[2]),e}function d(r){var e=parseFloat(r),t=String(r).match(x)[1];switch(t){case"dpcm":return e/2.54;case"dppx":return e*96;default:return e}}function f(r){var e=parseFloat(r),t=String(r).match(_)[1];switch(t){case"em":return e*16;case"rem":return e*16;case"cm":return e*96/2.54;case"mm":return e*96/2.54/10;case"in":return e*96;case"pt":return e*72;case"pc":return e*72/12;default:return e}}export{l as c,y as g};
