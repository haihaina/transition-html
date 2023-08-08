<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import mammoth from 'mammoth';
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// export default {
// components: { Editor, Toolbar },
// setup() {
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const mode = 'default'
// 内容 HTML
const valueHtml = ref('')

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  console.log('editor', editor)
  editorRef.value = editor // 记录 editor 实例，重要！
}
const btn = () => {
  console.log('valueHtml', valueHtml.value)
  if (valueHtml.value == '<p><br></p>') {
    alert('请输入内容')
    return
  }
  // 获取编辑器的 HTML 代码
  const html = valueHtml.value
  // 将 HTML 代码包裹在完整的 HTML 结构中
  const fullHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>haihaina</title>
  </head>
  <body>
    ${html}
  </body>
</html>`
  // 将 HTML 代码转换为 Blob 对象
  const blob = new Blob([fullHtml], { type: 'text/html' })

  // 创建一个 URL，将 Blob 对象转换为可下载的文件
  const url = URL.createObjectURL(blob)

  // 创建一个 <a> 元素，设置其 href 属性为 URL，设置其 download 属性为文件名
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', 'editor.html')

  // 将 <a> 元素添加到页面中，并单击它以下载文件
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
// 替换的内容
let oldContent = ref('')
// 替换后的内容
let newContent = ref('')
// 替换
const replace = () => {
  if (!oldContent.value) {
    alert('请输入需要替换的文字内容')
    return
  }
  if (!newContent.value) {
    alert('请输入替换后的内容')
    return
  }
  const regex = new RegExp(`${oldContent.value}`, 'g');
  console.log('regex', regex)
  valueHtml.value = valueHtml.value.replace(regex, newContent.value);
  console.log('valueHtml', valueHtml.value)

}


// 下载文件
const htmlContent = ref('');

const convertDocToHtml = (event) => {
  const fileInput = event.target;
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function (event) {
    const arrayBuffer = event.target.result;

    const options = {
      arrayBuffer: arrayBuffer
    };

    mammoth.convertToHtml(options)
      .then(function (result) {
        const html = result.value;
        htmlContent.value = html; // 保存转换后的 HTML 内容
      })
      .catch(function (error) {
        alert('请选择docx格式文件')
        htmlContent.value = '';
        console.error(error);
      });
  };

  reader.readAsArrayBuffer(file);
};
const downloadHtml = () => {
  const html = htmlContent.value;
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'converted.html';
  link.click();

  URL.revokeObjectURL(url);
};
// 显示上传文件
let transitionShow = ref(true)
</script>    
<template>
  <h1 style="margin: 20px auto; text-align: center;">在线生成HTML</h1>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
      @onCreated="handleCreated" />
  </div>
  <!-- 内容替换 -->
  <div class="content" style="display: flex; align-items: center;">
    <div>
      <div class="content-class">
        <span class="content-span">需要替换的文字内容：</span> <input v-model="oldContent" class="content-input" type="text">
      </div>
      <div class="content-class">
        <span class="content-span">替换后的内容：</span> <input v-model="newContent" class="content-input" type="text">
      </div>
    </div>
    <div>
      <div class="btn-class" style="background: #2bd170; margin-left: 20px; width: 120px;" @click="replace">替换</div>
    </div>
  </div>
  <div class="btn-class" @click="btn">生成代码</div>
  <div class="transition-class" v-if="transitionShow">
    <div class="close" @click="transitionShow = false">
      关闭
    </div>
    <h3>文件转换html</h3>
    <input accept=".docx" style="width: 200px;" type="file" @change="convertDocToHtml">
    <div style="font-size: 12px;">
      tip: 暂只支持docx格式文件
    </div>
    <button class="btn-class" :class="htmlContent ? 'bg-red' : 'bg-wh'" @click="downloadHtml" :disabled="!htmlContent">下载
      HTML</button>
  </div>
</template>
<style scoped>
.btn-class {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: #9a5eeb;
  border-radius: 15px;
  cursor: pointer;
  margin: 20px auto;
}

.content {
  display: flex;
  align-items: center;

}

.content-class {
  display: flex;
  align-items: center;
  margin: 20px auto;
}

.content-span {
  width: 180px;
}

.content-input {
  width: 200px;
  height: 25px;
}

.transition-class {
  position: fixed;
  right: 0;
  bottom: 10%;
  width: 300px;
  height: 200px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.transitionno-class{
  position: fixed;
  right: 2px;
  bottom: 2px;
}
.close {
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
}

.bg-red {
  background: #ff7480 !important;
}

.bg-wh {
  background-color: #ececec !important;
}</style>