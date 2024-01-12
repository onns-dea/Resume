<style lang="scss" scoped>
.experience {
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
  .experience-labels {
    padding: 0 14px;
    display: flex;
    justify-content: space-between;

    > .ex-row {
      display: flex;
      flex-direction: column;
    }
    > .job-position {
      align-items: center;
    }
  }
}
</style>
<template>
  <div class="experience">
    <h3 class="title">工作经历</h3>
    <div class="experience-labels">
      <div class="ex-row company-name">
        <span>上海东拓盛科技有限公司</span>
        <span>上海蔚为信息科技有限公司</span>
      </div>
      <div class="ex-row job-position">
        <span>web前端工程师</span>
        <span>前端工程师</span>
      </div>
      <div class="ex-row time-quantun">
        <span>2021.11 - 2023.03</span>
        <span>2021.04 - 2021.09</span>
      </div>
    </div>
  </div>
</template>
