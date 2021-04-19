module.exports={
    publicPath:'./',
    runtimeCompiler:true,
    lintOnSave:false,//关闭eslint语法检查
    css:{
        loaderOptions:{
            css:{},
            postcss:{
                plugins:[
                    require('postcss-px2rem')({
                        remUnit:37.5
                    })
                ]
            }
        }
    },
    devServer:{
        // open:true,
        port:8082,
        proxy:{
            '/api':{
                target:'http://172.16.115.253:5031',
                ws:true,
                changeOrigin:true,
                pathRewrite:{   
                    '^/api':''
                }
            }
        }
    },
    pages: {
        index: {
          entry: 'src/main.js',
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          title: 'ICU'
        }
      }
}