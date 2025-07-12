
'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)

/** --------------------------------------------------------- */
/** 获取配置项
 */
hexo.extend.filter.register('after_generate', function (locals) {
  /* 首先获取整体的配置项名称 */
  const config = hexo.config.TagsEmbed || hexo.theme.config.TagsEmbed
  if (!(config && config.enable)) return; /* 配置项未开启，则直接返回，不再加载插件 */
  /* 集体声明配置项 */
  const data = {
    tags_embed: config.CDN.tags_embed ? urlFor(config.CDN.tags_embed) : 'https://cdn.jsdelivr.net/gh/docs-site/hexo-tags-embed/lib/tag_embed.css'
  }

  /* head引入资源 */
  const css_text = `<link rel="stylesheet" href="${data.tags_embed}" media="defer" onload="this.media='all'">`

  /* 注入 CSS 样式 */
  hexo.extend.injector.register('head_end', css_text, "default");

}, hexo.extend.helper.register('priority', function () {
  /* 过滤器优先级，priority 值越低，过滤器会越早执行，默认priority是10 */
  const pre_priority = hexo.config.TagsEmbed.priority ? hexo.config.TagsEmbed.priority : hexo.theme.config.TagsEmbed.priority
  const priority = pre_priority ? pre_priority : 10
  return priority
})
)

/** --------------------------------------------------------- */
/** 折叠框 folding
 * folding.js
 */
function postFolding(args, content) {
  args = args.join(' ').split(',');
  let style = ''
  let title = ''
  if (args.length > 1) {
    style = args[0].trim()
    title = args[1].trim()
  } else if (args.length > 0) {
    title = args[0].trim()
  }
  if (style != undefined) {
    return `<details class="folding-tag" ${style}><summary> ${title} </summary>
              <div class='content'>
              ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
              </div>
            </details>`;
  }
  else {
    return `<details class="folding-tag"><summary> ${title} </summary>
              <div class='content'>
              ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
              </div>
            </details>`;
  }
}
hexo.extend.tag.register('folding', postFolding, { ends: true });

/** --------------------------------------------------------- */
/** 行内文本样式 text
 * inline-labels.js
 */
hexo.extend.tag.register('u', function (args) {
  return `<u>${args.join(' ')}</u>`;
});
hexo.extend.tag.register('emp', function (args) {
  return `<emp>${args.join(' ')}</emp>`;
});
hexo.extend.tag.register('wavy', function (args) {
  return `<wavy>${args.join(' ')}</wavy>`;
});
hexo.extend.tag.register('del', function (args) {
  return `<del>${args.join(' ')}</del>`;
});
hexo.extend.tag.register('kbd', function (args) {
  return `<kbd>${args.join(' ')}</kbd>`;
});
hexo.extend.tag.register('psw', function (args) {
  return `<psw>${args.join(' ')}</psw>`;
});
