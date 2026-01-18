# 十二星座 × 灵魂香气测试

> 找到属于你星座的命定香氛，治愈你的情绪内耗

一款面向20-40岁女性的香气测试虚拟产品，基于星座+心理投射双维度，生成12种独特的香气人格报告。

## ✨ 功能特点

- 🌟 **25道深度测试题** - 覆盖性格底色、场景联想、感官偏好、情绪状态
- ♈ **12种星座香气人格** - 每个星座对应独特的香气人格
- 💝 **情绪疗愈建议** - 根据用户当前情绪状态推荐疗愈香气
- 🌸 **3款香水推荐** - 平价/中端/高端各一款精选推荐

## 🚀 快速开始

### 本地运行

```bash
# 启动本地服务器
python3 -m http.server 8080

# 访问
open http://localhost:8080
```

### 测试授权码

| 授权码 | 用途 |
|-------|------|
| TEST001 | 测试用 |
| TEST002 | 测试用 |
| TEST003 | 测试用 |

## 📁 项目结构

```
├── index.html          # 首页（授权码输入）
├── test.html           # 测试页面（25道题）
├── result.html         # 结果展示页
├── css/
│   └── style.css       # 主样式表
├── js/
│   ├── auth.js         # 授权码验证
│   ├── quiz.js         # 测试题逻辑
│   └── result.js       # 结果计算与渲染
└── README.md           # 项目说明
```

## 🌐 部署到 GitHub Pages

1. 创建 GitHub 仓库
2. 推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/zodiac-scent-test.git
   git push -u origin main
   ```
3. 启用 GitHub Pages（Settings → Pages → Source: main）

## 🔑 授权码管理

编辑 `js/auth.js` 文件中的 `VALID_CODES` 数组来管理授权码：

```javascript
const VALID_CODES = [
    'SCENT2024001',
    'SCENT2024002',
    // 继续添加...
];
```

## 📦 小红书上架

- **商品标题**：【测试】你的星座本命香是什么？——灵魂香气诊断
- **商品描述**：25道深度测试 | 12种独特香气人格 | 专属香水推荐
- **定价建议**：3.98元
- **自动发货**：网站链接 + 授权码

## 📄 License

MIT License
