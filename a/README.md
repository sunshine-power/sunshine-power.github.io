# DALI Control Platform showcase

更新时间：2026-09-15 11:50 CST

这是面向国际市场的静态产品展示页，独立于 `pkg_bi_dali/dali_web` 工程工作台。产品入口为 `index.html`，独立的隐私说明与关于产品页面分别为 `privacy.html`、`about.html`；三个页面的语言选择器共用 `language-panel.css`。主页面样式和交互位于 `styles.css` 与 `app.js`，信息页共用 `info-pages.css`、`info-pages.js` 与 `info-pages-expanded.js`。主站基础及法、德语资源位于 `locales.js`，其余扩展语言位于 `locales-expanded.js`。

## 内容边界

页面公开表达来自《DALI 控制器及配套上位机控制软件功能规格表 V1.0》：IEC 62386 / DALI-2、DT6 / DT8、D4i、设备搜索、地址管理、分组场景、参数配置、广播/组/单地址调光、Type-C / LAN、固件升级、Windows / macOS / iOS / Android，以及博物馆、家居、商场、办公等场景。

页面刻意不呈现协议帧、opcode、CRC、总线时序、固件任务结构、内部接口、未确认的性能指标或商业合作条件。AI 内容使用 `ROADMAP / RESERVED` 标记，表达产品方向而非已交付能力。

## 产品信息页面

- `privacy.html` 说明本地连接、工程配置、诊断日志、技术支持、系统权限、数据共享和未来云端 / AI 功能的数据边界，并记录展示页本地偏好设置及当前未接入分析/广告追踪服务的状态。
- `about.html` 说明产品定位、目标客户、工程价值、平台范围、标准导向、适用边界、AI 路线与合作方向；主页面固定导航与页脚均提供入口。
- 两个页面与主站一致，提供简体中文、繁體中文、English、日本語、한국어、Français、Deutsch、Español、Português、Nederlands、Italiano、Ελληνικά、Eesti、Bahasa Melayu、Filipino、Tiếng Việt、Türkçe 共 17 种完整内容。语言入口位于固定顶部栏，点击后展示平铺面板；信息页语言单独保存在 `dali-legal-locale`，不会覆盖主站语言选择。
- 正式对外发布前，必须补齐真实运营主体的法定名称、地址、隐私邮箱、适用地区条款和生效日期，并由法律人员审阅。当前展示文本不是可直接发布的最终法律文件。

## 可读性基线

- 普通辅助说明保持在 11–12px，标签与占位说明不低于 10px；纯装饰性编号除外。
- 多语言自然语言优先使用系统无衬线字体，避免等宽字体造成中文、希腊文、韩文和越南文笔画过细。
- 深色、清透亮色、天蓝亮色均提高次级文字对比度；语言面板的本地名称与解释性名称使用 13px / 11px 组合并加粗。

## 可替换资产

- `assets/screenshots/`：当前使用 `dali_web` 产出的工程总览、实时控制、参数与场景截图，发布时可替换为经过授权的产品截图。
- 硬件区域的 `PRODUCT IMAGE SLOT`：替换为控制器实拍或 3D 渲染图。
- 平台截图区分为 Windows、Mac、iPhone / iOS、iPad / iPadOS、Android Phone 和 Android Pad 六类；每个 `SCREENSHOT SLOT` 可替换为对应画幅的正式运行截图。
- 独立的 `BRAND ASSET SLOT`：替换为软件 Logo 或品牌识别，不与平台运行截图混用。
- `app.js` 中的 `mailto:hello@example.com`：替换为正式商务邮箱；上线前同步更新页面元信息。

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

页面支持简体中文、繁體中文、English、日本語、한국어、Français、Deutsch、Español、Português、Nederlands、Italiano、Ελληνικά、Eesti、Bahasa Melayu、Filipino、Tiếng Việt、Türkçe 共 17 种语言，以及深色、清透亮色、天蓝亮色三套主题；语言与主题选择会保存到浏览器本地存储。繁體中文面向港澳台及海外華語使用者調整用詞。语言选择使用平铺面板：当前语种仅显示本地名称，其他语种同时显示本地名称及其在当前界面语言中的名称。顶部导航在滚动时保持固定；页面滚动后，右侧会显示返回顶部按钮。
