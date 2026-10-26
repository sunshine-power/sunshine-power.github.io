# DALI Control Platform showcase

更新时间：2026-10-26 CST

这是面向国际市场的静态产品展示页，独立于 `pkg_bi_dali/dali_web` 工程工作台。产品入口为 `index.html`，隐私说明与关于产品页面分别为 `privacy.html`、`about.html`。三个页面共用语言面板样式、首次访问偏好初始化脚本 `site-preferences.js` 和当前阶段公开文案 `product-copy.js`；首页与信息页分别由 `app.js`、`info-pages.js` 渲染。基础及扩展语言资源位于 `locales.js`、`locales-expanded.js` 和 `info-pages-expanded.js`。

## 目录约定

根目录保留可直接部署的页面入口，避免改变现有官网 URL；帮助文档 `help.html` 是软件内置帮助的单文件资产，暂不加入主站、关于或隐私页面的导航。其余文件按用途分为以下几组：

- 页面入口：`index.html`、`about.html`、`privacy.html`、`help.html`
- 页面脚本：`app.js`、`info-pages.js`、`info-pages-expanded.js`、`locales.js`、`locales-expanded.js`、`site-preferences.js`、`product-copy.js`
- 页面样式：`styles.css`、`info-pages.css`、`language-panel.css`
- 展示资源：`assets/screenshots/`
- 本地预览：`dev-server.mjs`、`package.json`

`help.html` 不依赖其它文件，直接通过浏览器打开时根据浏览器语言选择文案；软件内打开时由 DALI Flutter 业务包注入当前软件语种。页面采用左侧目录、右侧章节正文结构，窄屏时目录转为顶部横向导航；后续帮助内容应继续使用稳定章节 ID 并同步增加目录项。该文件的状态说明对应工程对象树中的状态圆点，不是对外公开的产品功能导航。

## 内容边界

页面以《DALI 控制器及配套上位机控制软件功能规格表 V1.0》和现阶段工程进度为依据。公开的当前流程限于控制器发现与管理、DALI 寻址、分组与场景、设备读取、按广播/组/单地址目标设置常用参数，以及受设备能力约束的调光与 DT8 色彩控制；Type-C、局域网接入和本地诊断用于现场工作。工程文件、快照、批量任务、报告、AI，以及六类设备形态的正式截图与交付状态仍须按后续版本确认。标准导向不代表获得认证，真实总线兼容性和性能应以验证结果为准。

网站当前提供 17 种界面语言，选择菜单不展示尚未提供的语种。首页的 `50+` 表达的是可按客户项目需求定制的语言覆盖目标，**不是当前已交付 50 种语言**。

页面刻意不呈现协议帧、opcode、CRC、总线时序、固件任务结构、内部接口、未确认的性能指标或商业合作条件。AI 内容使用 `ROADMAP / RESERVED` 标记，表达产品方向而非已交付能力。

## 产品信息页面

- `privacy.html` 说明本地连接、工程配置、诊断日志、技术支持、系统权限、数据共享和未来云端 / AI 功能的数据边界，并记录展示页本地偏好设置及当前未接入分析/广告追踪服务的状态。展示更新日期为 2026-10-26。
- `about.html` 说明产品定位、目标客户、工程价值、平台范围、标准导向、适用边界、AI 路线与合作方向；主页面固定导航与页脚均提供入口。
- 两个页面与主站一致，提供简体中文、繁體中文、English、日本語、한국어、Français、Deutsch、Español、Português、Nederlands、Italiano、Ελληνικά、Eesti、Bahasa Melayu、Filipino、Tiếng Việt、Türkçe 共 17 种内容。语言入口位于固定顶部栏，点击后展示平铺面板；信息页语言单独保存在 `dali-legal-locale`，不会覆盖主站语言选择。三页首次访问默认英文、亮色；一次性迁移旧版自动保存的中文/深色偏好，此后手动选择会保留。
- 正式对外发布前，必须补齐真实运营主体的法定名称、地址、隐私邮箱、适用地区条款和生效日期，并由法律人员审阅。当前展示文本不是可直接发布的最终法律文件。

## 可读性基线

- 普通辅助说明保持在 11–12px，标签与占位说明不低于 10px；纯装饰性编号除外。
- 多语言自然语言优先使用系统无衬线字体，避免等宽字体造成中文、希腊文、韩文和越南文笔画过细。
- 深色、清透亮色、天蓝亮色均提高次级文字对比度；语言面板的本地名称与解释性名称使用 13px / 11px 组合并加粗。

## 可替换资产

- `assets/screenshots/`：使用用户提供的上位机实际截图。首屏为 `welcome.png`（欢迎页）；软件展示依次为 `dashboard.png`（仪表盘）、`dali-bus.png`（DALI 总线）、`parameters.png`（参数信息）、`live-control.png`（实时控制）、`groups.png`（分组管理）、`scenes.png`（场景管理）。栏目名称与说明覆盖现有 17 种语言，图片完整显示，不裁切。静态部署时须将这七张图片随页面一起上传，保留相对路径。
- 硬件区域的 `PRODUCT IMAGE SLOT`：替换为控制器实拍或 3D 渲染图。
- 平台截图区分为 Windows、Mac、iPhone / iOS、iPad / iPadOS、Android Phone 和 Android Pad 六类；每个 `SCREENSHOT SLOT` 可替换为对应画幅的正式运行截图。
- 独立的 `BRAND ASSET SLOT`：替换为软件 Logo 或品牌识别，不与平台运行截图混用。
- 首页咨询入口目前指向 `https://www.suretron.com/`，由其官网公布的渠道承接咨询。正式上线前应再次核对归属、目标市场的联系方式及页面元信息，不使用示例邮箱。

## 本地预览

该页不依赖构建工具或第三方 npm 包。推荐在当前目录执行：

```bash
npm run dev
```

默认访问 `http://127.0.0.1:4180/`。需要修改端口时可执行：

```bash
PORT=4181 npm run dev
```

也可以使用 Python 启动：

```bash
python3 -m http.server 4180
```

页面支持简体中文、繁體中文、English、日本語、한국어、Français、Deutsch、Español、Português、Nederlands、Italiano、Ελληνικά、Eesti、Bahasa Melayu、Filipino、Tiếng Việt、Türkçe 共 17 种语言，以及通透深色、石墨深色、清透亮色、天蓝亮色四套主题；语言与主题选择会保存到浏览器本地存储。繁體中文面向港澳台及海外華語使用者調整用詞。语言选择使用平铺面板：当前语种仅显示本地名称，其他语种同时显示本地名称及其在当前界面语言中的名称。顶部导航在滚动时保持固定；页面滚动后，右侧会显示返回顶部按钮。
