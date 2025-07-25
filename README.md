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
    tags_embed: https://cdn.jsdelivr.net/gh/docs-site/hexo-tags-embed@latest/lib/tag_embed.css
```

### <font size=3>3. 基本实例</font>

#### <font size=3>3.1 折叠框 folding</font>

```markdown
{% folding [color], [提示信息] %}
内容......
{% endfolding %}
```

#### <font size=3>3.2 行内文本</font>

```markdown
这是一个带 {% u 下划线 %} 的文本
这是一个带 {% emp 着重号 %} 的文本
这是一个带 {% wavy 波浪线 %} 的文本
这是一个带 {% del 删除线 %} 的文本
这是一个键盘样式的文本 {% kbd command %} + {% kbd D %}
这是一个密码样式的文本：{% psw 密码是没有密码 %}
```

#### <font size=3>3.3 github卡片 ghcard</font>

```markdown
{% ghcard anuraghazra %}
{% ghcard anuraghazra, theme=vue %}
{% ghcard anuraghazra, theme=buefy %}
{% ghcard anuraghazra, theme=solarized-light %}
{% ghcard anuraghazra, theme=onedark %}
{% ghcard anuraghazra, theme=solarized-dark %} 
{% ghcard anuraghazra, theme=algolia %}
{% ghcard anuraghazra, theme=calm %}


{% ghcard anuraghazra/github-readme-stats %}
{% ghcard anuraghazra/github-readme-stats, theme=vue %}
{% ghcard anuraghazra/github-readme-stats, theme=buefy %}
{% ghcard anuraghazra/github-readme-stats, theme=solarized-light %}
{% ghcard anuraghazra/github-readme-stats, theme=onedark %}
{% ghcard anuraghazra/github-readme-stats, theme=solarized-dark %}
{% ghcard anuraghazra/github-readme-stats, theme=algolia %}
{% ghcard anuraghazra/github-readme-stats, theme=calm %}
```

## <font size=3>二、小徽章</font>

>- [badgen.net](https://badgen.net/)
>- [Shields.io | Shields.io](https://shields.io/)
>- [For the Badge](https://forthebadge.com/)

