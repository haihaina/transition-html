<template>
  <div v-html="agreement"></div>
</template>

<script>
export default {
  props: {
    agreementContent: {
      type: String,
      required: true
    },
    replacements: {
      type: Object,
      required: true
    }
  },
  computed: {
    agreement() {
      let content = this.agreementContent;
      console.log(this.replacements, 'content20', content);
      for (const key in this.replacements) {
        const regex = new RegExp(`{{${key}}}`, 'g');

        // const regex = new RegExp(`\\$\\{${key}\\}`, 'g');
        // const regex = new RegExp(`\\$\\{${key}\\}`, 'g');
        const value = this.replacements[key];
        content = content.replace(regex, value);
      }
      console.log('content26', content);
      return content;
    }
  }
}
</script>