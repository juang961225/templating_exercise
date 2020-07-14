const pageData = {
  sections: [
    {
      component: "temp_gallery",
      title: "gallery",
      heading: "this is a gallery component built with templated strings",
      images: [
        {
          src: './assets/cat.jpg',
          alt: 'cat'
        },
        {
          src: 'assets/dog.jpg',
          alt: 'dog'
        },
        {
          src: './assets/bird.jpg',
          alt: 'bird'
        }
      ]
    },
    {
      component: "textImageBlock",
      title: "carrousel",
      text: "this is a test content",
      classes: "text_image_block--inverted",
      image: {
        src: './assets/cat.jpg',
        alt: 'cat'
      }
    },
    {
      component: "node_gallery",
      title: "gallery",
      theme: "dark",
      heading: "this is a gallery component built using nodes",
      images: [
        {
          src: './assets/cat.jpg',
          alt: 'cat'
        },
        {
          src: 'assets/dog.jpg',
          alt: 'dog'
        },
        {
          src: './assets/bird.jpg',
          alt: 'bird'
        }
      ]
    },
    {
      component: "textImageBlock",
      title: "carrousel",
      text: "this is a test content",
      theme: "dark",
      image: {
        src: './assets/cat.jpg',
        alt: 'cat'
      }
    },
    {
      component: "studentCustomComponent",
      contents: "this is a student made test component",
      
        displayName: "Juan Guillermo Galvez Valencia",
        userName: "@juang961225",
        image: "./assets/cat.jpg",
        role: "developer",
        socialMedia: [
        {
            name: "Github",
            icon: "fa-github",
            link: "https://github.com/juang961225"
        },
        {
            name: "Twitter",
            icon: "fa-twitter-square",
            link: "https://twitter.com/Juan73445582"
        },
        {
            name: "Instagram",
            icon: "fa-instagram",
            link: "https://www.instagram.com/juang961225/?hl=es-la"
        },
        ]
    },
  ],
  listeners: [
    //
  ]
}

export { pageData };