# Node+Express+Mongodb

## Node安装 ##
    
    下载地址：[http://nodejs.cn](http://nodejs.cn)（中文版）
    下载安装完成，打开Node的控制台窗口，输入：node -v
    
### Express安装入门与模版引擎ejs

[Express官网](http://expressjs.com/)



####### 1. 安装express #######
```bash

执行命令 ： npm install -g express;   //全局安装express
执行命令 ： npm install -g express-generator;  //安装express到npm-module，在express4.0之后，还需要安装express-generator 来完成express项目的创建，
执行命令 :  express -V  //检查是否安装好 (V 是大写字母)

```
####### 2. 创建Express项目 #######
```bash

然后就能够在目标路径下通过express命令创建项目。如需要在 D盘 的 project文件夹下创建项目 expressDemo：
1.    进入D盘project目录下：
2.    执行命令：express expressDemo ；
3.    执行命令：cd expressDemo && npm install ; 该语句会进入项目的根目录即 expressDemo目录下并继续执行命令npm install 安装项目的依赖
4.    执行命令：npm start；服务器运行，在浏览器运行URL：localhost:3000，即可看到默认的express页面。

```
####### 3. 修改端口 #######
```bash

在项目根目录下找到app.js并增加端口监听
app.listen(8100,function(){ console.log("Server Start!");});
1.    执行命令：node app.js

```
####### 4. ejs模板引擎 #######

```bash

在上面创建的testWebApp中express默认使用的模版擎为jade，个人觉得jade虽然简洁但不直观，所以选择了更易上手的ejs。
1.    进入D盘project目录下：
2.    执行命令：express -e expressDemo2 ；
3.    执行命令：cd expressDemo2 && npm install ; 该语句会进入项目的根目录即 expressDemo目录下并继续执行命令npm install 安装项目的依赖
4.    执行命令：npm start；服务器运行，在浏览器运行URL：localhost:3000，即可看到默认的express页面。

```
####### 5. 使用supervisor调式 #######

```bash

执行命令 ： npm -g install supervisor   //全局安装supervisor
执行命令 ： 项目下运行该命令 supervisor app.js

```
---

### Mongodb安装入门

[Mongodb官网](https://www.mongodb.com/download-center?jmp=nav#community)

###本教程基于win7 64位作为案例###

##### 1.下载MongoDB #####

```bash

去官网下载Mongodb安装包
win7版本，下载选择 #mongodb-win32-x86_64-2008plus-ssl-3.2.6-signed.msi#

```

##### 2.设置MongoDB目录 #####

```bash

安装教程很简单，一直默认都可以的。
但其中这里安装路径，我改成 D盘 ，再重命名为##MongoDB# ，即真实路径为“D:\MongoDB”

```
##### 3.设置数据文件路径 #####

```bash

在d:盘建一个data文件夹，在data文件夹中新建db文件夹，路径d:\data\db

```

##### 4.启动MongoDB服务 #####

```bash

进入 cmd 提示符控制台，
D:\MongoDB\bin\mongod.exe --dbpath=d:\data\db

出现如下,说明MongoDB服务启动 (MongoDB服务端的默认连接端口:27017)

注意：如果需要卸载服务，执行命令：sc delete MongoDB

```
![image](http://chuantu.biz/t5/5/1465021812x3738746601.png)

##### 5.测试MongoDB #####

```bash

以管理员身份新建一个cmd窗口，进入MongoDB的bin目录输入mongo，如出现connecting to:test说明测试通过。
继续测试：
(1).输入use test回车
(2).输入db.foo.save({hello:1, baie:2})回车
(3).输入db.foo.find()回车
如果出现类似{ "_id" : ObjectId("5073a0a090f93be1455461d2"), "hello" : 1, "baie" : 2 }之类信息，说明测试成功数据已经插入数据库，然后输入exit退出。

```

##### 6.将MongoDB作为 Windows 服务随机启动 #####

```bash

先创建D:\mongodb\logs\mongodb.log文件，用于存储MongoDB的日志文件,
以管理员身份新建一个cmd窗口 ,找到D:\MongoDB\bin
再安装系统服务：mongod.exe --logpath d:/mongodb/logs/mongodb.log --logappend --dbpath d:/data --directoryperdb --serviceName MongoDB -install  
检查是否设置成功，打开控制面板——管理工具——服务

出现如下，说明设置成功


```
![image](http://imgdata.hoop8.com/1606/8863072713921.png)

##### 7.客户端连接验证 #####

```bash

新打开一个CMD输入：d:\mongodb\bin\mongo，如果出现下面提示，那么您就可以开始MongoDB之旅了：
2016-06-04T14:58:01.388+0800 I CONTROL  [main] Hotfix KB2731284 or later update
is not installed, will zero-out data files
MongoDB shell version: 3.2.6
connecting to: test
>

```

##### 8.查看MongoDB日志 #####

```bash

查看D:\mongodb\logs\mongodb.log文件，即可对MongoDB的运行情况进行查看或排错。
http://localhost:27017/可以看到如下提示：
It looks like you are trying to access MongoDB over HTTP on the native driver port.

```
