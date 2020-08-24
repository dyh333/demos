<template>
  <div style="width: 620px; height: 70px;">
    <!-- <img src="@assets/img.png" /> -->

    <CItemAlert
      :title="'11号楼1单元4楼楼梯处发现消防通道被占用'"
      :sub-title="'2020年8月5日 14:00    设备5'"
      :title-color="'#FF3300'"
    >
      <template v-slot:icon>
        <span class="iconfont close"></span>
      </template>
      <template v-slot:img>
        <img src="@assets/img.png" />
      </template>
    </CItemAlert>
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
