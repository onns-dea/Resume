<style lang="scss" scoped>
.skill {
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
  .skill-labels {
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
  <div class="skill">
    <h3 class="title">技能清单</h3>
    <ul class="skill-labels">
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p class="des">熟练掌握 HTML/CSS/JavaScript 前端三大基础技术，能够编写符合 W3C 标准的页面，独立完成网页的布局、样式和交互功能</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>熟练掌握 Vue 前端框架，具备实际项目经验，能运用其提供的组件、通信、指令等功能进行快速开发</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>熟悉 React 框架，具备实际项目经验，能够通过组合多个组件来构建复杂的用户界面</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>熟悉 ES6/ES7/ES8 等新特性，如箭头函数、Promise、async/await 等</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>熟悉 Ajax/Fetch/Axios 等常用的网络请求，能够进行数据交互和异常处理</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>熟悉并能够配置 Webpack，掌握常见的打包、优化、插件使用等功能</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>熟悉 Git 常用命令，能够进行代码版本控制、分支管理等</p>
      </li>
      <li>
        <div class="point-labels">
          <div class="point"/>
        </div>
        <p>了解基本的前端性能优化方法，如懒加载、CDN 加速、缓存等，能够进行代码优化和调试</p>
      </li>
    </ul>
  </div>
</template>
