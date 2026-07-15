(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const m=[{period:"2025.10 - 2026.05",company:"未来原子树科技有限公司",role:"信息流剪辑师",detail:"负责快手平台信息流视频剪辑，主要服务 3C 类目、按摩产品等投放素材，完成素材筛选、剪辑重组、字幕包装、节奏强化和多版本成片输出。"},{period:"2024.03 - 2025.04",company:"慧华赢科技",role:"信息流剪辑师",detail:"负责抖音短视频剪辑，对标同行爆款视频，拆解结构、节奏和转化逻辑，并应用到自家产品素材中，产出 20+ 条爆款视频。"},{period:"2020.12 - 2023.11",company:"时光视觉文化传媒公司",role:"后期剪辑",detail:"负责亚马逊、淘宝平台产品主页视频策划、拍摄、剪辑，根据客户反馈调整成片，并按项目需求制作三维动画、视觉特效和活动跟拍视频。"},{period:"2019.04 - 2020.12",company:"付霸信息科技有限公司",role:"视频剪辑师",detail:"拍摄领导课程、现场活动照片和视频，制作公司宣传片、个人形象宣传片，剪辑授课视频并参与账号运营管理。"},{period:"2017.05 - 2019.03",company:"之远文化传媒有限公司",role:"后期特效师",detail:"参与游戏宣传视频制作，负责美术、剪辑、镜头特效、画面排版和色彩布局，参与《幽林怪谈》《Unheard》《征途2》等项目相关视频制作。"}],y=[["PR","精通"],["AE","精通"],["剪映","精通"],["达芬奇","熟练"],["C4D","熟练"],["Blender","熟练"]],h=[{tag:"信息流素材",title:"把卖点放到前 3 秒",text:"围绕痛点、功能点和使用场景重组素材，让用户更快理解产品用途和购买理由。"},{tag:"产品视频",title:"电商主页与投放成片",text:"覆盖亚马逊、淘宝、3C、按摩产品等项目，可衔接脚本、拍摄、剪辑和客户修改。"},{tag:"后期包装",title:"剪辑、字幕、特效、三维",text:"熟悉 PR、AE、C4D、Blender 等工具，能完成节奏、包装、视觉特效和三维动画。"}],$=[["网感","能拆解热门视频亮点，理解平台内容节奏。"],["执行","能根据运营、客户和领导反馈快速调整成片。"],["审美","对画面、镜头、构图、色彩和节奏有较强把控力。"]],v=[["all","全部"],["info","信息流"],["product","产品视频"],["promo","宣传片"],["interview","采访"],["3d","三维"]],l={info:{desc:"竖版投放素材、前三秒节奏、卖点前置和多版本输出。",tone:"短视频投放"},product:{desc:"电商主页、产品功能展示、场景镜头和字幕包装。",tone:"产品展示"},promo:{desc:"企业形象、空间业务、品牌信息和长短版成片整理。",tone:"品牌宣传"},interview:{desc:"采访内容梳理、语义顺序、叙事节奏和重点信息保留。",tone:"人物访谈"},"3d":{desc:"三维产品展示、镜头运动、结构呈现和后期包装输出。",tone:"三维视觉"}},n=[{category:"info",title:"信息流投放素材 01",file:"info-flow-01",desc:"竖版信息流素材，围绕产品卖点和用户停留做节奏处理。",role:"素材筛选、节奏重组、字幕包装、多版本输出"},{category:"info",title:"信息流投放素材 02",file:"info-flow-02",desc:"短节奏竖版素材，用于快速呈现产品场景和转化卖点。",role:"剪辑、卖点前置、字幕节奏"},{category:"info",title:"信息流投放素材 03",file:"info-flow-03",desc:"面向短视频平台的信息流素材，强化前段吸引力。",role:"素材重组、节奏强化、成片输出"},{category:"info",title:"信息流投放素材 04",file:"info-flow-04",desc:"轻量竖版广告素材，适合移动端快速浏览。",role:"剪辑、包装、版本调整"},{category:"product",title:"螺丝刀产品视频",file:"product-screwdriver",desc:"电商产品展示视频，突出产品外观、功能和使用场景。",role:"产品卖点梳理、剪辑、文案包装"},{category:"product",title:"灯棒英文产品视频",file:"product-light-stick",desc:"面向海外展示的产品视频，强调画面节奏和功能呈现。",role:"剪辑、字幕包装、成片输出"},{category:"product",title:"键盘产品视频",file:"product-keyboard",desc:"数码产品展示视频，围绕细节、质感和使用场景组织镜头。",role:"剪辑、画面节奏、产品呈现"},{category:"promo",title:"精陶机电宣传片",file:"promo-jingtao",desc:"企业宣传片长版，兼顾信息表达和整体节奏。",role:"后期剪辑、包装、成片调整"},{category:"promo",title:"华强北赋能中心宣传片",file:"promo-huaqiangbei",desc:"机构宣传片，突出空间、业务和品牌形象。",role:"剪辑、画面组织、成片输出"},{category:"promo",title:"顶尖科技中英宣传片",file:"promo-dingjian",desc:"中英双语宣传片版本，适合展示企业形象与业务能力。",role:"剪辑、字幕包装、版本整理"},{category:"interview",title:"张海杰采访视频",file:"interview-zhanghaijie",desc:"采访类视频，重点保证叙事顺序、语义清晰和观看节奏。",role:"采访剪辑、内容整理、节奏控制"},{category:"3d",title:"防爆手机三维视频",file:"3d-rugged-phone",desc:"三维产品展示视频，用镜头运动突出产品结构和卖点。",role:"三维动效、后期剪辑、包装输出"},{category:"3d",title:"广告机三维展示",file:"3d-ad-display",desc:"广告机产品三维展示，强调产品形态和应用场景。",role:"三维展示、剪辑、视觉包装"},{category:"3d",title:"榨汁机 4K 三维视频",file:"3d-juicer",desc:"家电类三维产品视频，突出产品结构、材质和功能表达。",role:"三维动画、镜头组织、后期输出"}],f=Object.fromEntries(v),p=v.filter(([e])=>e!=="all");document.querySelector("#app").innerHTML=`
  <main class="page-shell">
    <section class="hero" id="top">
      <nav class="nav" aria-label="主导航">
        <a class="brand" href="#top">Yang<br />Zijie</a>
        <div class="nav-pill">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a class="nav-cta" href="#contact">Get started</a>
      </nav>

      <div class="hero-inner">
        <div class="hero-copy">
          <p class="tiny-link">‹ video editor portfolio ›</p>
          <h1>杨子杰</h1>
          <p class="hero-text">
            视频剪辑师 / 后期剪辑。8 年视频后期与短视频剪辑经验，熟悉信息流素材、产品视频、企业宣传片、课程视频和游戏宣传视频制作。
          </p>
          <div class="hero-actions">
            <a class="primary-btn" href="#works">查看作品</a>
            <a class="secondary-btn" href="#experience">工作经历</a>
          </div>
        </div>
        <figure class="hero-portrait">
          <img src="/assets/portrait.jpg" alt="杨子杰个人照" />
        </figure>
      </div>

      <div class="hero-meta">
        <article>
          <span>01</span>
          <strong>求职方向</strong>
          <p>全职 / 视频剪辑师</p>
        </article>
        <article>
          <span>02</span>
          <strong>城市</strong>
          <p>深圳</p>
        </article>
        <article>
          <span>03</span>
          <strong>期望薪资</strong>
          <p>9K</p>
        </article>
        <article>
          <span>04</span>
          <strong>到岗时间</strong>
          <p>一周内</p>
        </article>
      </div>
    </section>

    <section class="profile-band" id="about">
      <figure>
        <img src="/assets/portrait.jpg" alt="杨子杰生活照" />
      </figure>
      <div class="profile-copy">
        <p class="section-kicker">About</p>
        <h2>把产品卖点、画面节奏和平台逻辑剪到同一条时间线上。</h2>
      </div>
      <p class="profile-note">
        对剪辑充满热情，热衷学习新知识并探索创意。熟悉短视频制作流程，能根据脚本、产品卖点和投放需求完成剪辑、包装、字幕、视觉特效与成片交付。
      </p>
    </section>

    <div class="logo-rail" aria-label="能力关键词">
      <span>PR</span>
      <span>AE</span>
      <span>剪映</span>
      <span>达芬奇</span>
      <span>C4D</span>
      <span>Blender</span>
      <span>信息流剪辑</span>
      <span>产品视频</span>
    </div>

    <section class="card-section portfolio-section" id="works">
      <div class="section-head">
        <p class="section-kicker">Works</p>
        <h2>视频作品</h2>
        <span>先选分类，再播放作品</span>
      </div>
      <div class="portfolio-topline">
        <p>
          按作品类型归档，点击任一分类卡片展开对应视频。网页首屏只加载封面图，视频在点击播放时再载入。
        </p>
        <aside class="portfolio-qr">
          <img src="/assets/works-qr-cropped.png" alt="百度网盘完整作品集二维码" />
          <div>
            <strong>完整作品集 / 更多原片</strong>
            <p>二维码保留为完整作品与原片入口，网页内优先展示压缩播放版。</p>
          </div>
        </aside>
      </div>
      <div class="category-card-deck" aria-label="作品分类">
        ${p.map(([e,i],s)=>{const t=n.filter(a=>a.category===e),o=t.slice(0,2);return`
              <button type="button" class="category-card ${s===0?"is-active":""}" data-category-card="${e}" aria-expanded="${s===0?"true":"false"}">
                <span class="category-card-index">0${s+1}</span>
                <span class="category-card-copy">
                  <span>${l[e].tone}</span>
                  <strong>${i}</strong>
                  <small>${t.length} 条作品</small>
                  <em>${l[e].desc}</em>
                </span>
                <span class="category-card-thumbs" aria-hidden="true">
                  ${o.map((a,r)=>`
                        <img class="thumb-${r+1}" src="/assets/video-covers/${a.file}.jpg" alt="" loading="lazy" />
                      `).join("")}
                </span>
              </button>
            `}).join("")}
      </div>
      <div class="category-expand-panel">
        ${p.map(([e,i],s)=>`
              <section class="video-category-section" data-category-section="${e}" ${s===0?"":"hidden"}>
                <div class="video-category-head">
                  <div>
                    <span>${i}</span>
                    <p>${l[e].desc}</p>
                  </div>
                  <small>${n.filter(t=>t.category===e).length} 条作品</small>
                </div>
                <div class="video-grid">
                  ${n.filter(t=>t.category===e).map(t=>`
                        <article class="video-card" data-video-card data-category="${t.category}" data-src="/videos/${t.file}.mp4" data-poster="/assets/video-covers/${t.file}.jpg" data-title="${t.title}" data-desc="${t.desc}" data-role="${t.role}">
                          <button type="button" class="video-card-button" aria-label="播放 ${t.title}">
                            <span class="video-cover">
                              <img src="/assets/video-covers/${t.file}.jpg" alt="${t.title} 封面" loading="lazy" />
                              <span class="play-pill">播放</span>
                            </span>
                            <span class="video-body">
                              <span class="video-type">${f[t.category]}</span>
                              <strong>${t.title}</strong>
                              <span>${t.desc}</span>
                              <em>负责：${t.role}</em>
                            </span>
                          </button>
                        </article>
                      `).join("")}
                </div>
              </section>
            `).join("")}
      </div>
    </section>

    <section class="wisdom-layout">
      <div>
        <p class="section-kicker">Positioning</p>
        <h2>面向信息流、产品视频和后期剪辑岗位。</h2>
        <p>
          简历中最强的证明点来自投放素材经验、产品视频项目和完整后期能力。网站首屏优先突出这些内容，减少泛泛的自我介绍。
        </p>
      </div>
      <figure>
        <img src="/assets/photo-positioning-studio.png" alt="真实后期剪辑工作室和广告产品视频制作现场" />
      </figure>
    </section>

    <section class="flow-section">
      <article class="sticky-card">
        <h2>Flow editing</h2>
        <p>从素材筛选、节奏重组、字幕包装到多版成片输出，围绕“前三秒是否停留”做剪辑判断。</p>
        <a href="#contact">联系候选人</a>
      </article>
      <article class="wide-photo-card">
        <img src="/assets/photo-flow-editing-desk.png" alt="真实剪辑桌面、多显示器时间线和素材设备" />
      </article>
    </section>

    <section class="card-section" id="experience">
      <div class="section-head">
        <p class="section-kicker">Experience</p>
        <h2>工作经历</h2>
        <span>2017 - 2026</span>
      </div>
      <div class="timeline">
        ${m.map(e=>`
              <article>
                <span>${e.period}</span>
                <div>
                  <h3>${e.company}</h3>
                  <strong>${e.role}</strong>
                  <p>${e.detail}</p>
                </div>
              </article>
            `).join("")}
      </div>
    </section>

    <section class="service-section">
      ${h.map(e=>`
            <article>
              <span>${e.tag}</span>
              <h3>${e.title}</h3>
              <p>${e.text}</p>
            </article>
          `).join("")}
    </section>

    <section class="card-section" id="skills">
      <div class="section-head">
        <p class="section-kicker">Skills</p>
        <h2>技能与证书</h2>
        <span>NCRE 一级 / 影视后期设计（高级）</span>
      </div>
      <div class="skill-grid">
        ${y.map(([e,i])=>`
              <article>
                <h3>${e}</h3>
                <p>${i}</p>
              </article>
            `).join("")}
      </div>
    </section>

    <section class="quote-section">
      <div class="quote-intro">
        <p class="section-kicker">What fits</p>
        <h2>适合需要“剪辑 + 投放理解 + 后期包装”的团队。</h2>
      </div>
      <div class="quote-grid">
        ${$.map(([e,i])=>`
              <article>
                <strong>${e}</strong>
                <p>${i}</p>
              </article>
            `).join("")}
      </div>
    </section>

    <section class="bottom-cta" id="contact">
      <div class="cta-card">
        <p class="section-kicker">Contact</p>
        <h2>获取作品与简历信息</h2>
        <p>电话：18128670963</p>
        <p>邮箱：1316741321@qq.com</p>
        <p>所在地：深圳 / 一周内到岗</p>
        <a href="#works">查看作品二维码</a>
      </div>
      <figure>
        <img src="/assets/photo-contact-portfolio-desk.png" alt="真实办公桌上的简历文件、作品集屏幕和二维码卡片" />
      </figure>
    </section>

    <footer class="footer">
      <div>
        <h2>杨子杰</h2>
        <p>Video editor and post-production portfolio.</p>
      </div>
      <nav aria-label="页脚导航">
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>

    <div class="video-modal" hidden>
      <div class="video-modal-backdrop" data-close-video></div>
      <section class="video-modal-panel" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
        <button type="button" class="video-modal-close" data-close-video aria-label="关闭视频">×</button>
        <video class="video-player" controls preload="none" playsinline></video>
        <div class="video-modal-copy">
          <span class="video-modal-type"></span>
          <h3 id="video-modal-title"></h3>
          <p class="video-modal-desc"></p>
          <p class="video-modal-role"></p>
          <div class="video-modal-qr">
            <img src="/assets/works-qr-cropped.png" alt="百度网盘完整作品集二维码" />
            <span>更多原片和完整作品集可扫码查看。</span>
          </div>
        </div>
      </section>
    </div>
  </main>
`;const g=document.querySelectorAll("[data-category-card]"),b=document.querySelectorAll("[data-category-section]"),d=document.querySelector(".video-modal"),c=document.querySelector(".video-player"),k=document.querySelector("#video-modal-title"),w=document.querySelector(".video-modal-type"),q=document.querySelector(".video-modal-desc"),j=document.querySelector(".video-modal-role");g.forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.categoryCard;g.forEach(s=>{const t=s===e;s.classList.toggle("is-active",t),s.setAttribute("aria-expanded",String(t))}),b.forEach(s=>{s.hidden=s.dataset.categorySection!==i})})});document.querySelectorAll("[data-video-card]").forEach(e=>{e.addEventListener("click",()=>{c.pause(),c.removeAttribute("src"),c.poster=e.dataset.poster,c.src=e.dataset.src,k.textContent=e.dataset.title,w.textContent=f[e.dataset.category],q.textContent=e.dataset.desc,j.textContent=`负责内容：${e.dataset.role}`,d.hidden=!1,document.body.classList.add("has-video-modal")})});function u(){c.pause(),c.removeAttribute("src"),c.removeAttribute("poster"),c.load(),d.hidden=!0,document.body.classList.remove("has-video-modal")}document.querySelectorAll("[data-close-video]").forEach(e=>{e.addEventListener("click",u)});document.addEventListener("keydown",e=>{e.key==="Escape"&&!d.hidden&&u()});
