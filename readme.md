### 纷享前端文档平台


### 技术架构
express + angular + webpack + gulp + sass


## 安装环境
  1. brew install mongodb
  2. brew install ruby
  3. 安装sass依赖;
  ```
  > gem install sass;
  > gem install bootstrap-sass;
  > gem install font-awesone-sass;
  > gem install compass;
  ```
  4. npm install -g gulp
  5. npm install -g webpack


## 签出源码
```
> git clone git@git.firstshare.cn:zhangc/fedoc.git
> npm install
```

## 本地开发
```
  > 启动数据库
  > gulp
  > 访问 http://localhost:13000/
```

## 部署
  1. 进入/opt/www/fe.firstshare.cn目录，执行pm2 start pm2/pro.json
	2. 手动访问http://fe.firstshare.cn/api/deploy 触发部署钩子

## 代码规范

1. 前后端js支持es6编写
2. css使用[BEM](https://segmentfault.com/a/1190000000391762)书写规范

## 贡献代码，基于 master 拉取feature/xxx分支接口，欢迎fork或者优化
