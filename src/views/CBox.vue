<template>
  <div style="margin:20px;">
    <CBox>
      asdfasdf
    </CBox>

    <CBox
      :width="'1000px'"
      :height="'400px'"
      :title="'案发生的'"
      :pagination="3"
      @pageChange="onPageChange"
    >
      asdfasdf
    </CBox>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onPageChange(index) {
      console.log(index);
    },
  },
};
</script>

<style scoped></style>
