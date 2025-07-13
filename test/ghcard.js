// 独立于Hexo的ghcard实现
document.addEventListener('DOMContentLoaded', function() {
  const ghcard_url = 'https://github-readme-stats.vercel.app';
  
  // 处理ghcard标签
  document.querySelectorAll('ghcard').forEach(card => {
    const path = card.getAttribute('path') || '';
    const params = card.getAttribute('params') || '';
    
    if (!path) return;
    
    const a = document.createElement('a');
    a.className = 'ghcard';
    a.rel = 'external nofollow noopener noreferrer';
    a.href = `https://github.com/${path}`;
    
    let url = '';
    if (path.includes('/')) {
      // 仓库卡片
      const [user, repo] = path.split('/');
      url = `${ghcard_url}/api/pin/?username=${user}&repo=${repo}&show_owner=true`;
    } else {
      // 用户卡片
      url = `${ghcard_url}/api/?username=${path}&show_owner=true`;
    }
    
    if (params) {
      url += `&${params}`;
    }
    
    const img = document.createElement('img');
    img.src = url;
    a.appendChild(img);
    
    card.parentNode.replaceChild(a, card);
  });
});
