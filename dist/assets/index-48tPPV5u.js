import{d as E,s as I,A as S,e as U,m as B,k as N,r as l,o as $,c as q,h as o,w as r,u as a,B as H,C as P,q as R,E as m,x as T,y as k,a as f,_ as z}from"./index-DIj3eU1u.js";const A=()=>{let t="",i=new Date().getHours();return i<12?t="上午好":i<18?t="下午好":i<24&&(t="晚上好"),t},g=t=>(T("data-v-a1822672"),t=t(),k(),t),D={class:"login_container"},F=g(()=>f("h1",null,"欢迎进入",-1)),L=g(()=>f("h2",null,"麻雀后台管理系统",-1)),j=E({__name:"index",setup(t){let i=I(),n=S({username:"admin",password:"111111"}),w=U(),h=B().query.redirect,d=N(!1);const x=async()=>{d.value=!0;try{await i.regLogin(n),w.push({path:h||"/"}),m({type:"success",message:"欢迎您",title:`HI,${A()}`})}catch(u){d.value=!1,m({type:"error",message:u.message})}},v={username:[{trigger:"change",validator:(u,s,e)=>{s.length>=5?e():e(new Error("账户至少五位数")),e()}}],password:[{trigger:"change",validator:(u,s,e)=>{s.length>=6?e():e(new Error("密码至少六位数")),e()}}]};return(u,s)=>{const e=l("el-col"),c=l("el-input"),p=l("el-form-item"),y=l("el-button"),V=l("el-form"),C=l("el-row");return $(),q("div",D,[o(C,null,{default:r(()=>[o(e,{span:12,xs:0}),o(e,{span:12,xs:24},{default:r(()=>[o(V,{class:"login_form",model:a(n),rules:v},{default:r(()=>[F,L,o(p,{prop:"username"},{default:r(()=>[o(c,{"prefix-icon":a(H),modelValue:a(n).username,"onUpdate:modelValue":s[0]||(s[0]=_=>a(n).username=_)},null,8,["prefix-icon","modelValue"])]),_:1}),o(p,{prop:"password"},{default:r(()=>[o(c,{"prefix-icon":a(P),type:"password",modelValue:a(n).password,"onUpdate:modelValue":s[1]||(s[1]=_=>a(n).password=_),"show-password":""},null,8,["prefix-icon","modelValue"])]),_:1}),o(p,null,{default:r(()=>[o(y,{class:"login_btn",type:"primary",size:"default",onClick:x,loading:a(d)},{default:r(()=>[R("登录")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})])}}}),O=z(j,[["__scopeId","data-v-a1822672"]]);export{O as default};