# 拉取代码
git pull

# 安装依赖，打包
# yarn --registry=https://registry.npm.taobao.org/ && yarn build
# 打包
yarn build

#删除容器
docker rm -f fristManagement &> /dev/null

#启动容器
docker run -d --restart=on-failure:5\
    -p 8080:80 \
    -v $PWD/dist:/usr/share/nginx/html \
    --name fristManagement nginx