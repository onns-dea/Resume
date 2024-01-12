<style lang="scss" scoped>
.personal {
  line-height: 1.5;
  .title {
    position: relative;
    padding-left: 10px;
    font-size: 18px;
    height: 25px;
    line-height: 25px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .title::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 16px;
    border-radius: 2px;
    background-color: #53cac3;
    left: 0;
    top: 4px;
  }
  .personal-labels {
    padding: 0 14px;

    > .info-row {
      display: flex;
      align-items: center;
      justify-content: space-between ;

      > .row-line-one,
        .row-line-two,
        .row-line-three
       {
        > .left {
          display: inline-block;
          width: 65px ;
          text-align-last: justify;
          text-align: justify;
        }
      }
      > .row-line-one,
        .row-line-two {
        width: 210px;
      }
      > .row-line-three {
        width: 230px;
      }
    }
  }
}
</style>
<template>
  <div class="personal">
    <h3 class="title">个人信息</h3>
    <div class="personal-labels">
      <div class="info-row">
        <div class="row-line-one">
          <span class="left">姓名</span>
          <span>：代**</span>
        </div>
        <div class="row-line-two">
          <span class="left">年龄</span>
          <span>：**</span>
        </div>
        <div class="row-line-three">
          <span class="left">学历</span>
          <span>：**</span>
        </div>
      </div>
      <div class="info-row">
        <div class="row-line-one">
          <span class="left">工作经验</span>
          <span>：*年</span>
        </div>
        <div class="row-line-two">
          <span class="left">手机号码</span>
          <span>：13*********</span>
        </div>
        <div class="row-line-three">
          <span class="left">邮箱</span>
          <span>：o*****a@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>
