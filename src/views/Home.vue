<script setup>
import AgreementContent from '../components/AgreementContent.vue';
import { ref } from 'vue';
// 机构信息 个人信息
import {appinfo,realinfo} from '../api/index'
var getQueryString =(name)=> {
    // const newStr = window.location.search.replace(/&amp;/g, '&');
    const newStr = new URLSearchParams(window.location.search.replace(/&amp;/g, '&'))
    // const urlParams = new URLSearchParams(window.location.search);
    let params ='';
    for (const [name1, value] of newStr.entries()) {
        // console.log(name,'-----value',value)
        if(name1 === name){
        // params[name] = decodeURIComponent(value.replace(/&amp;/g, '&amp;'));
        params = decodeURIComponent(value.replace(/&amp;/g, '&amp;'));
        }
    }
    return params;
}
let appId = getQueryString('appId')
let phone = getQueryString('phone')
let uid = getQueryString('uid')
console.log('appId',appId)
let agreementContent = ref('')
let replacements = ref({
  appName: '',
  phone: '',
  uid: '',
  companyName:''
})
let appinfoFn = async()=>{
  await appinfo(appId).then(res=>{
    console.log('res',res)
    if(res.code === 0){
      replacements.value.appName = res.data.appName
      replacements.value.companyName = res.data.companyName
      int()
    }
  })
}
appinfoFn()
const int = ()=>{
  let i = '<p style="text-align: center; line-height: 150%;"><strong>诚易融用户服务协议</strong></p><p style="text-indent: 21pt; line-height: 150%;"><span style="font-size: 14pt; font-family: STSong;">《{{appName}}用户服务协议》包括正文及所有已经发布的或将来可能发布的各类具体规则，各类具体规则为本协议不可分割的一部分，与本协议具有同等法律效力（以下统称“本协议”）。本服务协议中{{appName}}指&nbsp;{{companyName}}&nbsp;及其委托的诚易融平台实际运营方重庆惠融数字科技有限公司，包括</span><span style="color: rgb(225, 60, 57); font-size: 14pt; font-family: STSong;"><strong>{{appName}}</strong></span><span style="font-size: 14pt; font-family: STSong;">APP及相关网站、链接、h5页面、微信公众号、微信小程序、支付宝小程序等，以下简称“我们”或“{{appName}}”或“本公司”。请您使用我们服务前仔细阅读本协议，您在注册为我们用户过程中通过点击、确认、勾选、电子签章或其他类似任一方式确认即表示您已仔细阅读并明确同意遵守本协议。</span><strong>您承诺在注册之前认真阅读、理解并接受本服务协议的全部内容，如有任何疑问，可向我们咨询。但无论您事实上是否在注册之前认真阅读了本服务协议，一旦您通过诚易融网站（cyrong.cn）以及相关网站、移动设备客户端、H5网页、小程序等界面点击勾选本服务协议并注册成为诚易融用户，即表示您同意并签署了本服务协议。</strong><span style="font-size: 14pt; font-family: STSong;">您确认本服务协议后，本服务协议即产生法律效力。&nbsp;若您不接受或无法准确理解本服务协议的任何条款，请立即停止注册行为。&nbsp;如发生纠纷，您不得以未仔细阅读或理解本协议为由进行任何抗辩。</span></p><p style="text-indent: 21pt; line-height: 150%;"><strong>我们有权根据法律法规、国家政策的变动、监管部门的要求、监管精神导向、行业协会要求、行业协会建议及诚易融平台运营需要不时修改或变更本服务协议正文及各类具体规则部分或全部（以下称“修订内容”），而无需另行单独通知您。除非另有规定，否则任何修订内容于平台在相关系统板块上发布之时立即生效。若您在修订内容发布后继续使用我们提供的服务的，即表示您已充分阅读、理解并接受修订内容，也将遵循修订内容使用我们提供的服务，同时对您在本协议修改前通过我们进行的交易，您同意按照修订内容进行相应的授权和追认。如果您不同意修订内容的，您应当在履行完毕通过我们与任意主体达成的约定义务的前提下，停止使用我们的服务或注销账号。如果您未就修改后的本服务协议向我们提出明确的异议，则视为您接受我们对本服务协议所做的修改，并应遵照修改后的协议履行应尽义务。</strong><span style="font-size: 14pt; font-family: STSong;">诚易融平台保留随时修改或中断服务而不需通知用户的权利，诚易融平台行使修改或中断服务的权利，不需对用户或第三方负责。</span></p><p><br></p>'
  agreementContent.value = i
}
</script>
<template>
  <div>
    <AgreementContent :agreement-content="agreementContent" :replacements="replacements" />
  </div>
</template>
