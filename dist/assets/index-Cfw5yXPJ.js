import{d as x,k as f,r as n,o as D,c as h,h as e,w as l,q as b,a as m,D as g,u as d,g as B,_ as G}from"./index-DIj3eU1u.js";const z=["src"],Y=["src"],E={class:"dialog-footer pagination-container"},O=["src"],j={class:"dialog-footer pagination-container"},q=x({__name:"index",setup(F){let s=f(!1),t=f(!1),_=f(!1);const w=()=>{_.value=!0},k=()=>{s.value=!0,t.value=!0},U=()=>{s.value=!0,t.value=!1},R=f([{id:1,name:"春季麻雀大赛",type:"个人赛",participants:"10/20",official:"Y",status:"已结束",createdAt:"2023-04-01",startAt:"2023-04-10"},{id:2,name:"夏季麻雀传奇赛",type:"团体赛",participants:"15/30",official:"N",status:"进行中",createdAt:"2023-06-01",startAt:"2023-06-15"},{id:3,name:"秋季麻雀挑战赛",type:"个人赛",participants:"20/40",official:"Y",status:"已结束",createdAt:"2023-09-01",startAt:"2023-09-20"},{id:4,name:"冬季麻雀王者赛",type:"团体赛",participants:"12/24",official:"Y",status:"计划中",createdAt:"2023-12-01",startAt:"2024-01-10"},{id:5,name:"全国麻雀大赛",type:"混合赛",participants:"50/100",official:"N",status:"进行中",createdAt:"2023-05-01",startAt:"2023-05-15"}]),V=[{poolName:"冬季特别卡池",guildID:"GUILD001",creationDate:"2022-12-01",banner:"url_to_banner_image_1",logo:"https://picsum.photos/100/100?random=1",description:"带来冬季的特别人物。",singleDrawPrice:100,tenDrawsPrice:900,startTime:"2023-01-01",endTime:"2023-01-31",detailData:"详细信息1"},{poolName:"夏季狂欢卡池",guildID:"GUILD002",creationDate:"2023-06-01",banner:"url_to_banner_image_2",logo:"https://picsum.photos/100/100?random=2",description:"体验夏季的狂欢活动。",singleDrawPrice:150,tenDrawsPrice:1350,startTime:"2023-07-01",endTime:"2023-07-31",detailData:"详细信息2"},{poolName:"春季冒险卡池",guildID:"GUILD003",creationDate:"2023-03-01",banner:"url_to_banner_image_3",logo:"https://picsum.photos/100/100?random=3",description:"探索春季的冒险。",singleDrawPrice:120,tenDrawsPrice:1080,startTime:"2023-04-01",endTime:"2023-04-30",detailData:"详细信息3"},{poolName:"秋季馈赠卡池",guildID:"GUILD004",creationDate:"2023-09-01",banner:"url_to_banner_image_4",logo:"https://picsum.photos/100/100?random=4",description:"收获秋季的馈赠。",singleDrawPrice:130,tenDrawsPrice:1170,startTime:"2023-10-01",endTime:"2023-10-31",detailData:"详细信息4"}];return(p,r)=>{const y=n("el-card"),c=n("el-button"),u=n("el-table-column"),C=n("el-table"),A=n("el-pagination"),o=n("el-input"),a=n("el-form-item"),v=n("el-form"),I=n("el-dialog"),N=n("el-date-picker"),P=n("Plus"),T=n("el-icon"),L=n("el-upload");return D(),h("div",null,[e(y,null,{default:l(()=>[b("筛选区域")]),_:1}),e(y,{style:{width:"100%","margin-top":"10px"}},{default:l(()=>[e(c,{type:"primary",icon:"Plus",onClick:w},{default:l(()=>[b("创建卡池")]),_:1}),e(C,{data:V,"max-height":"70vh"},{default:l(()=>[e(u,{label:"卡池名稱(全語言)公会ID",align:"center",prop:"poolName"}),e(u,{label:"卡池Banner",align:"center",prop:"logo"},{default:l(({row:i,id:S})=>[m("img",{src:i.logo,alt:""},null,8,z)]),_:1}),e(u,{label:"公會建立日期",sortable:"",prop:"creationDate"}),e(u,{label:"卡池Logo",prop:"logo"},{default:l(({row:i,id:S})=>[m("img",{src:i.logo,alt:""},null,8,Y)]),_:1}),e(u,{label:"卡池文字描述(全語言)",prop:"description"}),e(u,{label:"卡池單次抽取價格",sortable:"",prop:"singleDrawPrice"}),e(u,{label:"卡池十次抽取價格",sortable:"",prop:"tenDrawsPrice"}),e(u,{label:"開始時間",sortable:"",prop:"startTime"}),e(u,{label:"完結時間",sortable:"",prop:"endTime"}),e(u,{label:"详细数据",prop:""},{default:l(()=>[e(c,{type:"primary",onClick:k},{default:l(()=>[b("查看")]),_:1}),e(c,{type:"danger",style:{"margin-left":"0","margin-top":"2px"},onClick:U},{default:l(()=>[b("修改")]),_:1})]),_:1})]),_:1}),e(A,{class:"pagination-container flex-center",onCurrentChange:r[0]||(r[0]=()=>{}),"current-page":"1","page-size":"10","page-sizes":[5,10,15,20],layout:" prev, pager, next, jumper,sizes,total",total:R.value.length},null,8,["total"])]),_:1}),e(I,{modelValue:d(s),"onUpdate:modelValue":r[2]||(r[2]=i=>g(s)?s.value=i:s=i),title:"查看/修改",width:"70%"},{footer:l(()=>[m("div",E,[e(c,{onClick:r[1]||(r[1]=i=>g(s)?s.value=!1:s=!1)},{default:l(()=>[b("取消")]),_:1}),e(c,{type:"primary",onClick:p.confirm},{default:l(()=>[b(" 确定修改 ")]),_:1},8,["onClick"])])]),default:l(()=>[e(v,null,{default:l(()=>[e(a,{label:"當期UR ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"當期UR機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"非當期UR ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"非當期UR 機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"累增發動點 (抽):"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"累增機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"SSR物品ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"SSR機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"R物品ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"R機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"N物品ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"N機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:d(_),"onUpdate:modelValue":r[5]||(r[5]=i=>g(_)?_.value=i:_=i),title:"创建卡池",width:"70%"},{footer:l(()=>[m("div",j,[e(c,{onClick:r[4]||(r[4]=i=>g(s)?s.value=!1:s=!1)},{default:l(()=>[b("取消")]),_:1}),e(c,{type:"primary",onClick:p.confirm},{default:l(()=>[b(" 确定创建 ")]),_:1},8,["onClick"])])]),default:l(()=>[e(v,null,{default:l(()=>[e(a,{label:"卡池名稱:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"卡池Banner:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"卡池單次抽取價格:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"卡池十次抽取價格"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"開始時間/完結時間"},{default:l(()=>[e(N,{modelValue:p.value1,"onUpdate:modelValue":r[3]||(r[3]=i=>p.value1=i),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",style:{width:"250px"}},null,8,["modelValue"])]),_:1}),e(a,{label:"當期UR ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"當期UR機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"非當期UR ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"非當期UR 機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"累增發動點 (抽):"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"累增機率:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"SSR物品ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"R物品ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"N物品ID:"},{default:l(()=>[e(o,{disabled:d(t)},null,8,["disabled"])]),_:1}),e(a,{label:"品牌LOGO：","label-width":"100px"},{default:l(()=>[e(L,{class:"avatar-uploader",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","show-file-list":!1,"on-success":p.handleAvatarSuccess,"before-upload":p.beforeAvatarUpload},{default:l(()=>[p.imageUrl?(D(),h("img",{key:0,src:p.imageUrl,class:"avatar"},null,8,O)):(D(),B(T,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[e(P)]),_:1}))]),_:1},8,["on-success","before-upload"])]),_:1}),e(a,{label:"卡池文字描述:"},{default:l(()=>[e(o,{type:"textarea"})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),J=G(q,[["__scopeId","data-v-ff9bae76"]]);export{J as default};
