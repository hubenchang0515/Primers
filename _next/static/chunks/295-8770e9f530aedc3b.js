(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{3676:(e,t,n)=>{Promise.resolve().then(n.bind(n,785)),Promise.resolve().then(n.bind(n,5890))},5890:(e,t,n)=>{"use strict";n.d(t,{default:()=>B});var i=n(5155),s=n(8407),r=n(9990),l=n(4581),a=n(3148),h=n(258),o=n(2376),d=n(1629),c=n(4220),m=n(2390),u=n(377),x=n(3127),g=n(744),p=n(2115),A=n(1640),j=n(4128),v=n(6475),f=n(8387),b=n(6858),C=n(117),_=n(6253),k=n(1834),y=n(4028);function w(e){var t,n;let[w,T]=(0,p.useState)(Array.from({length:(null==(t=e.groups)?void 0:t.length)||0},(t,n)=>n===e.current)),E=e=>{let t=[...w];t[e]=!w[e],T(t)},[S,P]=(0,p.useState)(!1),[M,I]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{if(!e.expand){var t;T(Array.from({length:(null==(t=e.groups)?void 0:t.length)||0},()=>!1)),P(!1),I(!1)}},[e.expand,e.groups]),(0,i.jsx)(s.A,{sx:{borderRadius:0,zIndex:99},elevation:12,square:!0,children:(0,i.jsx)(r.A,{sx:{height:"100%"},orientation:"horizontal",collapsedSize:56,in:e.expand,onEntered:()=>I(!0),onExit:()=>I(!1),children:(0,i.jsxs)(l.A,{sx:{height:"100%",width:{xs:"100vw",sm:"320px"},display:"flex",flexDirection:"column",justifyContent:"flex-start",overflowY:"auto","&::-webkit-scrollbar":{display:"none"}},children:[(0,i.jsxs)(a.A,{sx:{width:"100%"},children:[null==(n=e.groups)?void 0:n.map((t,n)=>{var s,m;return(0,i.jsxs)(l.A,{children:[(0,i.jsx)(h.Ay,{disablePadding:!0,children:(0,i.jsxs)(o.A,{onClick:()=>{var t;E(n),null==(t=e.onExpandChanged)||t.call(e,!0)},children:[(0,i.jsx)(d.A,{children:null!=(m=t.icon)?m:(0,i.jsx)(k.A,{})}),(0,i.jsx)(c.A,{primary:t.label}),w[n]?(0,i.jsx)(v.A,{}):(0,i.jsx)(j.A,{})]})}),(0,i.jsx)(r.A,{in:e.expand&&w[n],timeout:"auto",unmountOnExit:!0,children:(0,i.jsx)(a.A,{component:"div",disablePadding:!0,children:null==(s=t.items)?void 0:s.map((e,t)=>{var n;return(0,i.jsx)(h.Ay,{disablePadding:!0,children:(0,i.jsxs)(o.A,{sx:{pl:4},component:"a",href:e.url,children:[(0,i.jsx)(d.A,{children:null!=(n=e.icon)?n:(0,i.jsx)(y.A,{})}),(0,i.jsx)(c.A,{primary:e.label})]})},t)})})})]},n)}),(0,i.jsx)(m.A,{}),(0,i.jsx)(h.Ay,{disablePadding:!0,children:(0,i.jsxs)(o.A,{onClick:()=>{var t;P(!S),null==(t=e.onExpandChanged)||t.call(e,!0)},children:[(0,i.jsx)(d.A,{children:(0,i.jsx)(A.A,{})}),(0,i.jsx)(c.A,{primary:"设置"}),S?(0,i.jsx)(v.A,{}):(0,i.jsx)(j.A,{})]})}),(0,i.jsx)(r.A,{in:e.expand&&S,timeout:"auto",unmountOnExit:!0,children:(0,i.jsx)(a.A,{component:"div",disablePadding:!0,children:(0,i.jsx)(h.Ay,{disablePadding:!0,children:(0,i.jsxs)(o.A,{sx:{pl:4},onClick:()=>{var t;return null==(t=e.onToggleTheme)?void 0:t.call(e)},children:[(0,i.jsx)(d.A,{children:(0,i.jsx)(f.A,{})}),(0,i.jsx)(c.A,{primary:"主题"}),(0,i.jsx)(u.A,{title:"明亮",placement:"top",arrow:!0,children:(0,i.jsx)(x.A,{color:"light"===e.theme?"primary":"inherit",onClick:t=>{var n;null==(n=e.onToggleTheme)||n.call(e,"light"),t.stopPropagation()},children:(0,i.jsx)(C.A,{})})}),(0,i.jsx)(u.A,{title:"自动",placement:"top",arrow:!0,children:(0,i.jsx)(x.A,{color:"auto"===e.theme?"primary":"inherit",onClick:t=>{var n;null==(n=e.onToggleTheme)||n.call(e,"auto"),t.stopPropagation()},children:(0,i.jsx)(b.A,{})})}),(0,i.jsx)(u.A,{title:"黑暗",placement:"top",arrow:!0,children:(0,i.jsx)(x.A,{color:"dark"===e.theme?"primary":"inherit",onClick:t=>{var n;null==(n=e.onToggleTheme)||n.call(e,"dark"),t.stopPropagation()},children:(0,i.jsx)(_.A,{})})})]})})})})]}),e.children&&(0,i.jsx)(g.A,{in:e.expand&&M,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,i.jsx)(l.A,{children:e.children})})]})})})}var T=n(1169),E=n(529),S=n(8534),P=n(700),M=n(27),I=n(5715),O=n(4389),z=n(8893);function L(e){var t;return(0,i.jsx)(l.A,{children:(0,i.jsx)(T.A,{component:"nav",color:"primary",elevation:12,position:"static",children:(0,i.jsxs)(E.A,{variant:"dense",children:[(0,i.jsx)(x.A,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2*!!e.title},onClick:e.onToggleMenu,children:(0,i.jsx)(O.A,{})}),(0,i.jsx)(S.A,{size:"large",color:"inherit","aria-label":"menu",href:"/",LinkComponent:"a",sx:{textTransform:"none"},children:(0,i.jsx)(P.A,{variant:"h6",component:"div",sx:{whiteSpace:"nowrap"},children:e.title})}),(0,i.jsx)(M.A,{indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:"auto",sx:{flex:1},value:e.current,children:null==(t=e.items)?void 0:t.map((e,t)=>(0,i.jsx)(I.A,{label:e.label,sx:{textTransform:"none"},LinkComponent:"a",href:e.url},t))}),(0,i.jsx)(x.A,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{ml:2},href:e.github||"",target:"_blank",children:(0,i.jsx)(z.A,{})})]})})})}let D=["light","auto","dark"],N="settings";class R{store(){localStorage.setItem(N,JSON.stringify(this.m_settings))}load(){let e=localStorage.getItem(N);e&&(this.m_settings=JSON.parse(e)),this.setDefault()}reset(){var e;localStorage.removeItem(N),this.m_settings={},this.setDefault(),null==(e=this.m_changedCallback)||e.call(this,this)}setDefault(){D.includes(this.m_settings.theme)||(this.m_settings.theme="auto")}setChangedCallback(e){this.m_matchMediaChanged&&this.m_matchMedia.removeEventListener("change",this.m_matchMediaChanged),this.m_storageChanged&&window.removeEventListener("storage",this.m_storageChanged),e&&(this.m_changedCallback=e,this.m_matchMediaChanged=()=>{var e;null==(e=this.m_changedCallback)||e.call(this,this)},this.m_storageChanged=()=>{var e;this.load(),null==(e=this.m_changedCallback)||e.call(this,this)},this.m_matchMedia.addEventListener("change",this.m_matchMediaChanged),window.addEventListener("storage",this.m_storageChanged))}settings(){return this.m_settings}finalTheme(){switch(this.m_settings.theme){case"light":return"light";case"dark":return"dark";case"auto":return this.m_matchMedia.matches?"dark":"light"}}theme(){return this.m_settings.theme}setTheme(e){var t;this.m_settings.theme=e,null==(t=this.m_changedCallback)||t.call(this,this),this.store()}toggleTheme(e){if(e)this.setTheme(e);else{let e=(D.indexOf(this.m_settings.theme)+1)%D.length;this.setTheme(D[e])}}constructor(){this.m_matchMedia=window.matchMedia("(prefers-color-scheme:dark)"),this.m_settings={},this.load()}}var F=n(2851),H=n(3196),J=n(2548),U=n(6362);function q(e){return(0,F.A)({palette:{primary:U.A,secondary:{main:"#39c5bb"},mode:null==e?void 0:e.finalTheme()},typography:{fontFamily:"Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;"}})}function B(e){var t;let[n,s]=(0,p.useState)(!0),[r,a]=(0,p.useState)(q()),h=(0,p.useRef)(void 0);return(0,p.useEffect)(()=>{h.current=new R,a(q(h.current)),h.current.setChangedCallback(()=>a(q(h.current))),window.innerWidth<720&&s(!1)},[]),(0,i.jsxs)(H.A,{theme:r,children:[(0,i.jsx)(J.Ay,{}),(0,i.jsxs)(l.A,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(L,{title:"Primers",github:"https://github.com/hubenchang0515/primers",items:e.titleItems,current:e.currentTitle,onToggleMenu:()=>s(!n)}),(0,i.jsxs)(l.A,{sx:{display:"flex",height:"calc(100% - 48px)"},children:[(0,i.jsx)(w,{expand:n,onExpandChanged:s,theme:null==(t=h.current)?void 0:t.theme(),onToggleTheme:e=>{var t;return null==(t=h.current)?void 0:t.toggleTheme(e)},groups:e.sideItems,current:e.currentSide}),(0,i.jsx)(l.A,{sx:{flex:1,overflow:"auto"},children:e.children})]})]})]})}}}]);