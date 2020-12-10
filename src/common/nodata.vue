<template>
  <div id="nodata">
    <img src="../assets/img/nodata.png" alt="">
    <p>暂无数据~</p>
  </div>
</template>
<style lang="less" scoped>
#nodata {
  width: 100%;
  overflow: auto;
  // height: calc(~'100% - 77px');
  // display: flex;
  // align-items: center;
  img {
    display: block;
    width: 1rem;
    margin: .2rem auto;
  }
  p {
    display: block;
    width: 100%;
    font-size: .14rem;
    color: #666;
    text-align: center;
  }
}
</style>
