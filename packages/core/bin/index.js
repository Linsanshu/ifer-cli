#! /usr/bin/env node
const argv = require('process').argv
const commond = argv[2]

if(commond){
  console.log("您输入的命令是：", commond);
}else{
  console.log("请输入命令");
}