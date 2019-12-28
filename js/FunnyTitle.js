/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
      if(document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.1/images/failure.ico");
        $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.1/images/failure.ico");
        document.title = '喔唷，崩溃啦！';
        clearTimeout(titleTime);
      } else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.1/images/favicon.ico");
        $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/TRHX/CDN-for-itrhx.com@3.0.1/images/favicon.ico");
        document.title = '咦，页面又好了！';
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 2000);
      }
    });
  }
  