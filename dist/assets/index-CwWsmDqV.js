import{d as L,k as c,r as u,o as _,c as V,h as l,w as s,F as y,f as k,q as n,a,u as U,t as R,D as j,x as q,y as M,_ as G}from"./index-DIj3eU1u.js";const d=b=>(q("data-v-a6a2e60b"),b=b(),M(),b),H={class:"showUserInfoBox"},J=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"名字:"),n("张三李四")],-1)),Q=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"UID:"),n("12123124")],-1)),W=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"SDKID:"),n("12321321")],-1)),X=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"語言:"),n("中文")],-1)),Y=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"平台 (iOS/Android/PC):"),n("Android")],-1)),Z=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"綁定帳號:"),n("999999999")],-1)),ee=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"充值金額:"),n("999999")],-1)),le=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"雀士數量:"),n("99999")],-1)),ae=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"造型數量:"),n("99999")],-1)),oe=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"段位:"),n("白银")],-1)),te=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"現存金幣數:"),n("9999999")],-1)),se=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"現存有償石數:"),n("9999999")],-1)),ne=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"現存無償石數:"),n("999999")],-1)),de=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"公會:"),n("武林盟主")],-1)),ie=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"公會編號:"),n("1234512312")],-1)),ue=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"最後登錄IP:"),n("127.0.0.1")],-1)),pe=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"最後登錄時間:"),n("2024-03-26 07:11:23")],-1)),re=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"註冊日期時間:"),n("2024-03-26 07:11:23")],-1)),ce=d(()=>a("div",{class:"infoBigBox"},[a("span",{class:"boxTitle"},"登錄次數:"),n("99")],-1)),me={class:"dialog-footer pagination-container"},ge=L({__name:"index",setup(b){const T=c(A(10));let f=c(!1);c({});let v=c(!1);const S=t=>{f.value=!0},I=()=>{v.value=!v.value};function A(t){const o=[];for(let i=1;i<=t;i++)o.push({uid:`UID${i}`,name:`用户${i}`,registrationDate:`2024-08-${String(i).padStart(2,"0")} 10:00`,rechargeAmount:(Math.random()*100).toFixed(2),lastLogin:`2024-08-${String(i).padStart(2,"0")} 15:00`});return o}const m=c(""),w=c(""),D=c(""),O=[{value:"-1",label:"无"},{value:"0",label:"付费"},{value:"1",label:"无付费"}],$=[{value:"-1",label:"PC"},{value:"0",label:"Android"},{value:"1",label:"Apple"}],E=[{value:"-1",label:"Chinese"},{value:"0",label:"English"},{value:"1",label:"Other"}];return(t,o)=>{const i=u("el-checkbox"),x=u("el-option"),B=u("el-select"),p=u("el-form-item"),C=u("el-date-picker"),h=u("el-input"),r=u("el-button"),F=u("el-form"),z=u("el-card"),g=u("el-table-column"),N=u("el-table"),P=u("el-pagination"),K=u("el-dialog");return _(),V("div",null,[l(z,{style:{width:"100%"}},{default:s(()=>[l(F,{style:{display:"flex","flex-wrap":"wrap"}},{default:s(()=>[l(p,{class:"gap"},{default:s(()=>[l(i,{modelValue:t.checked1,"onUpdate:modelValue":o[0]||(o[0]=e=>t.checked1=e),label:"付费选项：",size:"large"},null,8,["modelValue"]),l(B,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=e=>m.value=e),placeholder:"无",size:"large",style:{width:"100px"}},{default:s(()=>[(_(),V(y,null,k(O,e=>l(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(p,{class:"gap"},{default:s(()=>[l(i,{modelValue:t.checked2,"onUpdate:modelValue":o[2]||(o[2]=e=>t.checked2=e),label:"平台",size:"large"},null,8,["modelValue"]),l(B,{modelValue:w.value,"onUpdate:modelValue":o[3]||(o[3]=e=>w.value=e),placeholder:"无",size:"large",style:{width:"100px"}},{default:s(()=>[(_(),V(y,null,k($,e=>l(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(p,{class:"gap"},{default:s(()=>[l(i,{modelValue:t.checked3,"onUpdate:modelValue":o[4]||(o[4]=e=>t.checked3=e),label:"语言：",size:"large"},null,8,["modelValue"]),l(B,{modelValue:D.value,"onUpdate:modelValue":o[5]||(o[5]=e=>D.value=e),placeholder:"无",size:"large",style:{width:"100px"}},{default:s(()=>[(_(),V(y,null,k(E,e=>l(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(p,{class:"gap"},{default:s(()=>[l(i,{modelValue:t.checked1,"onUpdate:modelValue":o[6]||(o[6]=e=>t.checked1=e),label:"注册日期",size:"large"},null,8,["modelValue"]),l(C,{modelValue:m.value,"onUpdate:modelValue":o[7]||(o[7]=e=>m.value=e),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",style:{width:"250px"}},null,8,["modelValue"])]),_:1}),l(p,null,{default:s(()=>[l(i,{modelValue:t.checked1,"onUpdate:modelValue":o[8]||(o[8]=e=>t.checked1=e),label:"登录日期",size:"large"},null,8,["modelValue"]),l(C,{modelValue:m.value,"onUpdate:modelValue":o[9]||(o[9]=e=>m.value=e),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",style:{width:"250px"}},null,8,["modelValue"])]),_:1}),l(p,{class:"gap",label:"",style:{display:"flex","align-items":"center"}},{default:s(()=>[l(i,{modelValue:t.checked1,"onUpdate:modelValue":o[10]||(o[10]=e=>t.checked1=e),label:"UID：",size:"large"},null,8,["modelValue"]),l(h,{modelValue:t.uidValue,"onUpdate:modelValue":o[11]||(o[11]=e=>t.uidValue=e),style:{"margin-left":"10px",width:"200px"}},null,8,["modelValue"])]),_:1}),l(p,{class:"gap",label:"",style:{display:"flex","align-items":"center"}},{default:s(()=>[l(i,{modelValue:t.checked1,"onUpdate:modelValue":o[12]||(o[12]=e=>t.checked1=e),label:"名字：",size:"large"},null,8,["modelValue"]),l(h,{modelValue:t.uidValue,"onUpdate:modelValue":o[13]||(o[13]=e=>t.uidValue=e),style:{"margin-left":"10px",width:"200px"}},null,8,["modelValue"])]),_:1}),l(p,{class:"gap",label:"",style:{display:"flex","align-items":"center"}},{default:s(()=>[l(i,{modelValue:t.checked1,"onUpdate:modelValue":o[14]||(o[14]=e=>t.checked1=e),label:"SDKID：",size:"large"},null,8,["modelValue"]),l(h,{modelValue:t.uidValue,"onUpdate:modelValue":o[15]||(o[15]=e=>t.uidValue=e),style:{"margin-left":"10px",width:"200px"}},null,8,["modelValue"])]),_:1}),l(p,{class:"gap"},{default:s(()=>[l(r,{type:"primary",icon:"Search"},{default:s(()=>[n("查询")]),_:1})]),_:1}),l(p,{class:"gap"},{default:s(()=>[l(r,{type:"primary",icon:"Refresh"},{default:s(()=>[n("清空选项")]),_:1})]),_:1})]),_:1})]),_:1}),l(z,{style:{width:"100%","margin-top":"1rem"}},{default:s(()=>[l(N,{data:T.value},{default:s(()=>[l(g,{label:"UID",width:"150px",align:"center",prop:"uid"}),l(g,{label:"名称",width:"200px",align:"center",prop:"name"}),l(g,{label:"注册日期时间",sortable:"",prop:"registrationDate"}),l(g,{label:"充值金额",prop:"rechargeAmount"}),l(g,{label:"最后登录时间",sortable:"",prop:"registrationDate"}),l(g,{label:"查看详细信息"},{default:s(({row:e,$index:fe})=>[l(r,{onClick:be=>S(e.uid)},{default:s(()=>[n("查看")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(P,{class:"pagination-container flex-center",onCurrentChange:o[16]||(o[16]=()=>{}),"current-page":"1","page-size":"10","page-sizes":[5,10,15,20],layout:" prev, pager, next, jumper,sizes,total",total:T.value.length},null,8,["total"])]),_:1}),l(K,{modelValue:U(f),"onUpdate:modelValue":o[17]||(o[17]=e=>j(f)?f.value=e:f=e),title:"用户详细信息",width:"70%"},{footer:s(()=>[a("div",me,[l(r,{onClick:t.cancel},{default:s(()=>[n("取消")]),_:1},8,["onClick"]),l(r,{type:"primary",onClick:t.confirm},{default:s(()=>[n(" 确定 ")]),_:1},8,["onClick"])])]),default:s(()=>[a("div",H,[J,Q,W,X,Y,Z,ee,le,ae,oe,te,se,ne,de,ie,ue,pe,re,ce,l(r,{onClick:I,type:U(v)?"danger":"primary"},{default:s(()=>[n(R(U(v)?"解封账号":"凍結帳號"),1)]),_:1},8,["type"]),l(r,{type:"primary"},{default:s(()=>[n("發送郵件")]),_:1})])]),_:1},8,["modelValue"])])}}}),_e=G(ge,[["__scopeId","data-v-a6a2e60b"]]);export{_e as default};
