import{d as N,k as _,r as d,o as b,c as z,h as e,w as l,q as t,a as A,u as c,D as v,g as y,b as w}from"./index-DIj3eU1u.js";const E={class:"dialog-footer pagination-container"},M=N({__name:"index",setup(j){let s=_(!1),p=_(0);const T=()=>{s.value=!0},V=_(3),k=_([{mailId:"001",attachment:"文件1.pdf",server:"区服A",player:"玩家1",sendTime:"2024-08-20 10:00",condition:"已审批",publisher:"发布人1",reviewer:"审核人1"},{mailId:"002",attachment:"文件2.png",server:"区服B",player:"玩家2",sendTime:"2024-08-19 14:30",condition:"待审",publisher:"发布人2",reviewer:"审核人2"},{mailId:"003",attachment:"文件3.doc",server:"区服A",player:"玩家3",sendTime:"2024-08-18 09:15",condition:"已拒",publisher:"发布人3",reviewer:"审核人3"}]);return(n,a)=>{const m=d("el-button"),r=d("el-table-column"),C=d("el-table"),U=d("el-pagination"),D=d("el-card"),u=d("el-radio"),g=d("el-radio-group"),i=d("el-form-item"),f=d("el-input"),h=d("el-date-picker"),B=d("el-form"),I=d("el-dialog");return b(),z("div",null,[e(D,{style:{width:"100%"}},{default:l(()=>[e(m,{type:"primary",icon:"Plus",onClick:T},{default:l(()=>[t("添加公告")]),_:1}),e(m,{type:"danger",icon:"Delete"},{default:l(()=>[t("删除公告")]),_:1}),e(C,{data:k.value},{default:l(()=>[e(r,{type:"selection"}),e(r,{label:"公告ID",width:"100px",align:"center",prop:"mailId"}),e(r,{label:"附件",width:"150px",align:"center",prop:"attachment"}),e(r,{label:"区服",sortable:"",prop:"server",width:""}),e(r,{label:"玩家",prop:"player",align:"center"}),e(r,{label:"发送时间",prop:"sendTime",align:"center"}),e(r,{label:"条件",sortable:"",prop:"condition"}),e(r,{label:"发布人",sortable:"",prop:"publisher"}),e(r,{label:"审核人",sortable:"",prop:"reviewer"}),e(r,{label:"操作",prop:""},{default:l(o=>[e(m,{type:"primary"},{default:l(()=>[t("发送")]),_:1}),e(m,{style:{"margin-left":"0"}},{default:l(()=>[t("内容")]),_:1})]),_:1})]),_:1},8,["data"]),e(U,{class:"pagination-container flex-center",onCurrentChange:a[0]||(a[0]=()=>{}),"current-page":"1","page-size":"10","page-sizes":[5,10,15,20],layout:" prev, pager, next, jumper,sizes,total",total:10})]),_:1}),e(I,{modelValue:c(s),"onUpdate:modelValue":a[9]||(a[9]=o=>v(s)?s.value=o:s=o),title:"添加公告",width:"700"},{footer:l(()=>[A("div",E,[e(m,{onClick:a[8]||(a[8]=o=>n.lotteryDialogVisible=!1)},{default:l(()=>[t("取消")]),_:1}),e(m,{type:"primary",onClick:n.confirm},{default:l(()=>[t(" 确定 ")]),_:1},8,["onClick"])])]),default:l(()=>[e(B,null,{default:l(()=>[e(i,{label:"公告类型:"},{default:l(()=>[e(g,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=o=>V.value=o)},{default:l(()=>[e(u,{value:3},{default:l(()=>[t("跑马灯")]),_:1}),e(u,{value:6},{default:l(()=>[t("聊天框")]),_:1}),e(u,{value:9},{default:l(()=>[t("跑马灯/聊天框")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"循环时间:"},{default:l(()=>[e(g,{modelValue:c(p),"onUpdate:modelValue":a[2]||(a[2]=o=>v(p)?p.value=o:p=o)},{default:l(()=>[e(u,{value:3},{default:l(()=>[t("不循环")]),_:1}),e(u,{value:6},{default:l(()=>[t("周循环")]),_:1}),e(u,{value:9},{default:l(()=>[t("月循环")]),_:1}),e(u,{value:12},{default:l(()=>[t("自定义")]),_:1})]),_:1},8,["modelValue"])]),_:1}),c(p)===12?(b(),y(i,{key:0,label:"时间:"},{default:l(()=>[e(f,{modelValue:n.customTime,"onUpdate:modelValue":a[3]||(a[3]=o=>n.customTime=o),placeholder:"请输入时间(s)"},null,8,["modelValue"])]),_:1})):w("",!0),c(p)===12?(b(),y(i,{key:1,label:"次数:"},{default:l(()=>[e(f,{modelValue:n.customCount,"onUpdate:modelValue":a[4]||(a[4]=o=>n.customCount=o),placeholder:"请输入次数"},null,8,["modelValue"])]),_:1})):w("",!0),e(i,{label:"起始时间/结束时间:"},{default:l(()=>[e(h,{modelValue:n.value1,"onUpdate:modelValue":a[5]||(a[5]=o=>n.value1=o),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",style:{width:"250px"}},null,8,["modelValue"])]),_:1}),e(i,{label:"标题:"},{default:l(()=>[e(f,{modelValue:n.customTime,"onUpdate:modelValue":a[6]||(a[6]=o=>n.customTime=o),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),e(i,{label:"内容:"},{default:l(()=>[e(f,{type:"textarea",modelValue:n.customTime,"onUpdate:modelValue":a[7]||(a[7]=o=>n.customTime=o),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});export{M as default};
