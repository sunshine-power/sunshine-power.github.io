# DALI Control Platform showcase

更新时间：2026-09-09 10:20 CST

这是面向国际市场的静态产品展示页，独立于 `pkg_bi_dali/dali_web` 工程工作台。入口为 `index.html`，样式和交互分别位于 `styles.css` 与 `app.js`，法语、德语及新增界面资源位于 `locales.js`。

## 内容边界

页面公开表达来自《DALI 控制器及配套上位机控制软件功能规格表 V1.0》：IEC 62386 / DALI-2、DT6 / DT8、D4i、设备搜索、地址管理、分组场景、参数配置、广播/组/单地址调光、Type-C / LAN、固件升级、Windows / macOS / iOS / Android，以及博物馆、家居、商场、办公等场景。

页面刻意不呈现协议帧、opcode、CRC、总线时序、固件任务结构、内部接口、未确认的性能指标或商业合作条件。AI 内容使用 `ROADMAP / RESERVED` 标记，表达产品方向而非已交付能力。

## 可替换资产

- `assets/screenshots/`：当前使用 `dali_web` 产出的工程总览、实时控制、参数与场景截图，发布时可替换为经过授权的产品截图。
- 硬件区域的 `PRODUCT IMAGE SLOT`：替换为控制器实拍或 3D 渲染图。
- 平台截图区分为 Windows、Mac、iPhone / iOS、iPad / iPadOS、Android Phone 和 Android Pad 六类；每个 `SCREENSHOT SLOT` 可替换为对应画幅的正式运行截图。
- 独立的 `BRAND ASSET SLOT`：替换为软件 Logo 或品牌识别，不与平台运行截图混用。
- `app.js` 中的 `mailto:hello@example.com`：替换为正式商务邮箱；上线前同步更新页面元信息。

## 本地预览

该页不依赖构建工具。可在当前目录执行：

```bash
python3 -m http.server 4180
```

然后访问 `http://127.0.0.1:4180/`。页面支持简体中文、English、日本語、Français、Deutsch，以及深色、清透亮色、天蓝亮色三套主题，选择会保存到浏览器本地存储。顶部导航在滚动时保持固定；页面滚动后，右侧会显示返回顶部按钮。
