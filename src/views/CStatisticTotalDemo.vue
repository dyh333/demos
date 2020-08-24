<template>
  <div style="width: 220px;">
    <CStatisticTotal :name="'房屋总数'" :total="1030">
      <template v-slot:icon><span class="iconfont close"></span></template>
    </CStatisticTotal>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
