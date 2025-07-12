## <font size=3>一、 hexo-tags-embed</font>

sumu's TypeScript project!

### <font size=3>1. 开发环境</font>

[![Static Badge](https://img.shields.io/badge/author-%E8%8B%8F%E6%9C%A8-blue?style=for-the-badge)](https://sumumm.github.io/)&nbsp;&nbsp;&nbsp;&nbsp;[![Static Badge](https://img.shields.io/badge/GITHUB-sumumm-blue?style=for-the-badge&logo=github)](https://github.com/sumumm)&nbsp;&nbsp;&nbsp;&nbsp;[![Static Badge](https://img.shields.io/badge/NPM-sumumm-blue?style=for-the-badge&logo=npm&logoSize=3&labelColor=%23CB3837)](https://www.npmjs.com/~sumumm)&nbsp;&nbsp;&nbsp;&nbsp;[![Static Badge](https://img.shields.io/badge/NPM-docs_site-blue?style=for-the-badge&logo=npm&logoSize=3&labelColor=%23CB3837)](https://www.npmjs.com/org/docs-site)

[![node](https://badgen.net/static/node/v22.16.0/F96854)](https://nodejs.org/dist/v22.16.0/node-v22.16.0-win-x64.zip)&nbsp;&nbsp;&nbsp;&nbsp;[![npm](https://badgen.net/static/npm/10.9.2/F96854)](https://badgen.net/static/npm/10.9.2/F96854)

### <font size=3>2. 快速开始</font>

通过npm安装：

```shell
npm i @docs-site/hexo-tags-embed
```

在主题配置文件中添加以下内容：

```yaml
TagsEmbed:
  enable: true   # 插件开关
  priority: 5    # 过滤器优先级
  CDN:
    tags_embed: https://cdn.jsdelivr.net/gh/docs-site/hexo-tags-embed/lib/tag_embed.css
```

### <font size=3>3. 基本实例</font>

#### <font size=3>3.1 折叠框 folding</font>

```markdown
{% folding [color], [提示信息] %}
内容......
{% endfolding %}
```



## <font size=3>二、小徽章</font>

>- [badgen.net](https://badgen.net/)
>- [Shields.io | Shields.io](https://shields.io/)
>- [For the Badge](https://forthebadge.com/)

