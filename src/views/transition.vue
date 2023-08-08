<template>
  <div>
    <input style="width: 250px;height: 50px;" type="file" @change="convertDocToHtml">
    <button style="width: 120px; height: 50px;" @click="downloadHtml" :disabled="!htmlContent">下载 HTML</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import mammoth from 'mammoth';

const htmlContent = ref('');

const convertDocToHtml = (event) => {
  const fileInput = event.target;
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function(event) {
    const arrayBuffer = event.target.result;

    const options = {
      arrayBuffer: arrayBuffer
    };

    mammoth.convertToHtml(options)
      .then(function(result) {
        const html = result.value;
        htmlContent.value = html; // 保存转换后的 HTML 内容
      })
      .catch(function(error) {
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
  link.download = 'converted_html.html';
  link.click();

  URL.revokeObjectURL(url);
};
</script>