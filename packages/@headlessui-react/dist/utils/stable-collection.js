import*as r from"react";const s=r.createContext(null);function a(){return{groups:new Map,get(n,t){var c;let e=this.groups.get(n);e||(e=new Map,this.groups.set(n,e));let l=(c=e.get(t))!=null?c:0;e.set(t,l+1);let o=Array.from(e.keys()).indexOf(t);function i(){let u=e.get(t);u>1?e.set(t,u-1):e.delete(t)}return[o,i]}}}function C({children:n}){let t=r.useRef(a());return r.createElement(s.Provider,{value:t},n)}function d(n){let t=r.useContext(s);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let e=f(),[l,o]=t.current.get(n,e);return r.useEffect(()=>o,[]),l}function f(){var l,o,i;let n=(i=(o=(l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:l.ReactCurrentOwner)==null?void 0:o.current)!=null?i:null;if(!n)return Symbol();let t=[],e=n;for(;e;)t.push(e.index),e=e.return;return"$."+t.join(".")}export{C as StableCollection,d as useStableCollectionIndex};
