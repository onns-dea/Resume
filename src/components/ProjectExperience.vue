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
  .experience-labels + .experience-labels {
    margin-top: 18px;
  }
  .experience-labels {
    padding: 0 14px;

    > .project-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        font-weight: 600;
      }
      > .project-time {
        color: #666666;
      }
    }
    > .pro-line {
      display: flex;
      > .pro-title,.per-title {
        min-width: 80px;
        max-width: 120px;
        overflow: hidden;
      }
    }
    >.project-res,.project-performance {
      .res-labels,.per-labels {
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
  }
}
</style>
<template>
  <div class="experience">
    <h3 class="title">项目经历</h3>
    <div class="experience-labels">
      <div class="project-name">
        <p>
          <span class="name">上海文化产权交易所</span>
          <span>（上海东拓盛科技有限公司）</span>
        </p>
        <p class="project-time">2022.08-2023.03</p>
      </div>
      <div class="pro-line project-description">
        <span class="pro-title">项目描述：</span>
        <span>上海文化产权交易所是一个数字版权保护交易平台，用户可以登记或存证图片、音频、视频、文档、压缩包等格式的文件。该平台基于区块链将用户登记和存证的文件进行上链存证共享，给用户提供维权保护和资产交易等功能。</span>
      </div>
      <div class="pro-line Project-technology">
        <span class="pro-title">项目技术：</span>
        <span>Vue3、Vue Router、Pinia、TypeScript、ElementPlus、Sass、Vite、Rollup.js</span>
      </div>
      <div>项目职责：</div>
      <div class="pro-line project-res">
        <span class="pro-title"/>
        <ul class="res-labels">
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">负责代码格式校验配置</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">负责用户管理模块、资产管理模块、资讯管理模块</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">参与项目组件封装</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">参与项目技术选型，需求评审</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">按时汇报工作进展，与其他部门同事协同合作，推进项目落地</p>
          </li>
        </ul>
      </div>
      <div>项目业绩：</div>
      <div class="pro-line project-performance">
        <span class="per-title"/>
        <ul class="per-labels">
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">通过配置通用请求参数和使用拦截器二次封装 axios，简化请求流程，统一处理请求错误，提高代码复用性且降低使用成本，提高团队开发效率</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 ESLint、Prettier 配置代码格式校验，提高项目代码质量、统一项目代码风格、提高团队开发效率和降低维护成本</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用组件通信、slot 插槽、component和传递配置项封装公共搜索框组件， 提供开发团队使用。使用 ElementPlus loading 控制搜索组件的按钮状态，避免发送过多请求，减轻后台压力</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 Pinia 和 useCookies 持久化 token，避免刷新页面时需要重新登录，提升用户体验；减少频繁的进行 token 的传递与验证，减轻服务器的压力</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 router.beforeEach 和 Pinia 持久化用户信息，解决刷新页面用户信息丢失问题</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 fileReader 将文件转换为二进制流，传递给 pdfjs、docx 等第三方库，实现文件的在线预览</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 router.addRoute 结合后端返回路由数据，实现角色权限的路由加载</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="experience-labels">
      <div class="project-name">
        <p>
          <span class="name">上海徐汇汇存平台</span>
          <span>（上海东拓盛科技有限公司）</span>
        </p>
        <p class="project-time">2021.11 - 2022.07</p>
      </div>
      <div class="pro-line project-description">
        <span class="pro-title">项目描述：</span>
        <span>汇存平台主要用于存取各种类型的数据。该平台采了用区块链技术，实现数据的不可篡改和可追溯，从而提高数据的安全性和可信度。</span>
      </div>
      <div class="pro-line Project-technology">
        <span class="pro-title">项目技术：</span>
        <span>Vue2、Vue Router、Vuex、ElementUI、Sass、Echarts、Webpack、Babel</span>
      </div>
      <div>项目职责：</div>
      <div class="pro-line project-res">
        <span class="pro-title"/>
        <ul class="res-labels">
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">根据需求设计、开发并维护前端界面，确保用户体验和交互效果良好</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">与后端工程师协作，完成数据交互与接口对接，确保前后端数据的准确传输</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">参与需求讨论和评审，对产品进行优化和改进</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">负责完成存证管理模块、存证查询模块、存证统计模块</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">参与代码维护</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">按时汇报工作进展</p>
          </li>
        </ul>
      </div>
      <div>项目业绩：</div>
      <div class="pro-line project-performance">
        <span class="per-title"/>
        <ul class="per-labels">
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 Axios 库和 Blob 对象创建文件流，通过分块上传和合并文件的方式来实现大文件上传，保证上传的稳定性和效率</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 StreamSaver.js 将文件转换为数据流进行下载，解决了下载数据超过浏览器内存的问题，保证了文件下载的稳定性</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 ElementUI Table 表格展示存证查询模块列表、存证管理模块列表，方便地进行数据管理，包括数据的查看详情、修改、删除等操作。同时，也能够使数据更加有序地呈现在前端页面上，提高数据的可读性。使用分页展示数据，控制数据传输量，减轻后端服务器压力；使页面更快地加载展示数据，用户可以快速翻页、跳转页面，减少等待时间，提高用户体验</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 Echarts 展示存证统计模块，将数据转化为图表，使得数据更加直观可见，方便用户进行数据分析和决策；使用 Echarts 提供的多种图表类型，如柱状图、折线图、饼图等，使用户可以根据需要选择合适的图表类型；利用 Echarts 支持事件绑定，实现鼠标悬停、点击等交互操作，让用户更加直观地了解数据</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 Vue 组件懒加载和 Vue Router 路由懒加载，减少页面加载时间、减少资源请求，提高用户体验并且提高应用程序的可维护性</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="experience-labels">
      <div class="project-name">
        <p>
          <span class="name">指引生活</span>
          <span>（上海蔚为信息科技有限公司）</span>
        </p>
        <p class="project-time">2021.04-2021.09</p>
      </div>
      <div class="pro-line project-description">
        <span class="pro-title">项目描述：</span>
        <span>指引生活是一个以社区为基础的生活服务平台，致力于为用户提供便捷、优质的生活服务。</span>
      </div>
      <div class="pro-line Project-technology">
        <span class="pro-title">项目技术：</span>
        <span>React、React Router、Redux、Ant Design、Sass、Axios、Webpack、Babel</span>
      </div>
      <div>项目职责：</div>
      <div class="pro-line project-res">
        <span class="pro-title"/>
        <ul class="res-labels">
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">根据 UI 设计稿和产品需求文档，完成页面开发</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">参与产品需求讨论和评审</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">与后端开发人员协作完成接口测试开发</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">及时与指导我的开发人员汇报工作进度</p>
          </li>
        </ul>
      </div>
      <div>项目业绩：</div>
      <div class="pro-line project-performance">
        <span class="per-title"/>
        <ul class="per-labels">
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 THML、CSS、JS、Antd 等技术，实现页面和组件的开发，保证页面和组件的布局、样式、交互等方面符合设计要求和产品需求</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 Postman 调试后台接口，保证接口的正确性，减少手动编码测试的时间和工作量，提升开发进度</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 Axios 与后台进行交互，完成首页模块的精选推荐与新闻资讯子模块；社区互动模块的活动子模块；物业管理模块的保修、缴费、公告等功能；个人中心模块的用户信息、我的订单、我的积分、我的收藏等子模块</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 React 组件化拆分首页模块的精选推荐和新闻资讯子模块，拆分个人中心模块；避免加载过多的代码，挺高应用程序的加载速度</p>
          </li>
          <li>
            <div class="point-labels">
              <div class="point"/>
            </div>
            <p class="des">使用 React.lazy 和 Suspense 组件实现按需加载，减少页面的初始加载时间和减小应用程序的整体体积</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
