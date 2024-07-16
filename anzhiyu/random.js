var posts=["2024/07/16/hello-world/","2024/07/16/Vue与React基础开发知识点总结，如组件编写方法、权限校验方式、监听变量改变等，极其适用于后端工程师。文章结尾有极度提高开发效率的彩蛋（二次封装基于antd的前端初始化模板）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };