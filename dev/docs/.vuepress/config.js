module.exports = {
    title: 'Creeper BOT官方網站',
    description: '歡迎使用Creeper BOT',
    base: 'Hank',
    themeConfig: {
        sidebar: [
          '/',
          {
              title:'指令',
              path:'/Commands/',
              children:[
                  '/Commands/Ping.md',
              ]
          }
        ]
    }
  }