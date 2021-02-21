const moment = require('moment');

module.exports = {
    titile: "阡陌拾光",
    description: "阡陌拾光的随机记录",
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'author', content: '阡陌拾光'}],
      ['meta', { name: 'keywords', content: '计算机，网络安全'}]
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {

            moment.locale("zh-cn")
            return moment(timestamp).format("LLLL")
          }
        }
      ]
    ],
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/hero.png',
      nav: [
        { text: 'Home', link: '/' },
        
        { text: 'about', link: '/about' },
        {
            text: 'os',
            items: [
              { text: 'Linux', items: [
                { text: 'LinuxBasic', link: '/os/LinuxBasic' },
                { text: 'Ngnix', link: '/os/Nginx' },     
                
              ] },
              { text: 'Windows', items: [
                { text: 'cmd', link: '/os/cmd' },
                { text: 'powershell', link: '/os/powershell' },

              ] }
            ]
        }
      ],
      sidebar: {
        '/cloud/': [
          '',    /* /foo/ */
          '1.linux',  /* /foo/one.html */
          '2.linux服务',   /* /foo/two.html */
          '3.shell'
          
        ],
  
        '/os/': [
          '',      /* /bar/ */
          '02系统的操作命令', /* /bar/three.html */
          '03系统目录结构及命令'   /* /bar/four.html */
          
        ]
  
       
      }
    }

}