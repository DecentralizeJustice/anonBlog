export default {
  themeConfig: {
    nav: [
      { text: 'Anon Shop', link: 'https://anonshop.app/' },
/*       {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      } */
    ]
  },
  title: 'Anon Shop Blog',
  description: 'The blog for Anon Shop',
  head: [
    ['script', 
      {
        src: 'https://plausible.io/js/script.js', 
        "data-domain":  'blog.anonshop.app',
        defer: ''
  }]
  ]
}