<style lang="scss" scoped>
.self {
  margin-top: 18px;
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
  .self-labels {
    padding: 0 14px;
    li {
      display: flex;
      align-items: baseline;
      .point-labels {
        position: relative;
        width: 12px;
        .point {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #000;
          border-radius: 50%;
          transform: translateY(-9px);
        }
      }

      .des {
        width: calc(100% - 12px);
      }
    }
  }
}
</style>
<template>
  <div class="self">
    <h3 class="title">自我评价</h3>
    <ul class="self-labels">
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p class="des">具备良好的团队协作和沟通能力</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>具备较强的学习能力和自我驱动力</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>善于思考和解决问题，具备较强的解决问题能力</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>热爱前端技术，关注前端新技术和前沿发展趋势</p>
      </li>
    </ul>
  </div>
</template>
