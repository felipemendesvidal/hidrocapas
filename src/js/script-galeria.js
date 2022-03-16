// Arrow Function Ready to JQuery
$(() => {

  // Array de Objetos con información de las imágenes
  let dataImages = [
  
  {
    "id": 1,
    "description": "Produtos - Fotos",
    "tabletImg": {
      "height": "400",
      "width": "500",
      "url": "src/img/galeria/img-galery/img (1).jpg"
    },
    "thumbImg": {
      "height": "400",
      "width": "500",
      "url": "src/img/galeria/img-galery/img (1).jpg"
    }
  },
  {
    "id": 3,
    "description": "Produtos - Fotos",
    "tabletImg": {
      "height": "400",
      "width": "500",
      "url": "src/img/galeria/img-galery/img (2).jpg"
    },
    "thumbImg": {
      "height": "300",
      "width": "500",
      "url": "src/img/galeria/img-galery/img (2).jpg"
    }
  },
  {
    "id": 4,
    "description": "Produtos - Fotos",
    "tabletImg": {
      "height": "400",
      "width": "500",
      "url": "src/img/galeria/img-galery/img (3).jpg"
    },
    "thumbImg": {
      "height": "300",
      "width": "500",
      "url": "src/img/galeria/img-galery/img (3).jpg"
    }
  },
  {
    "id": 6,
    "description": "Produtos - Fotos",
    "tabletImg": {
     "height": "400",
     "width": "500",
     "url": "src/img/galeria/img-galery/img (4).jpg"
   },
   "thumbImg": {
    "height": "300",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (4).jpg"
  }
},
{
  "id": 7,
  "description": "Produtos - Fotos",
  "tabletImg": {
    "height": "400",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (5).jpg"
  },
  "thumbImg": {
    "height": "300",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (5).jpg"
  }
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
    "height": "400",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (7).jpg"
  },
  "thumbImg": {
    "height": "300",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (7).jpg"
  }
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (8).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (8).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (11).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (11).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
    "height": "400",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (12).jpg"
  },
  "thumbImg": {
    "height": "300",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (12).jpg"
  }
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (19).jpg"
 },
 "thumbImg": {
  "height": "500",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (19).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (14).jpg"
 },
 "thumbImg": {
  "height": "500",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (14).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
    "height": "400",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (15).jpg"
  },
  "thumbImg": {
    "height": "500",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (15).jpg"
  }
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
    "height": "400",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (16).jpg"
  },
  "thumbImg": {
    "height": "300",
    "width": "500",
    "url": "src/img/galeria/img-galery/img (16).jpg"
  }
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (18).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (18).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (13).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (13).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (22).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (22).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (23).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (23).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (42).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (42).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (60).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (60).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (66).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (66).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img (59).jpg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img (59).jpg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (2).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (2).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (3).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (3).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (4).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (4).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (5).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (5).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (6).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (6).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (7).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (7).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (8).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (8).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (9).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (9).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (10).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (10).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (11).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (11).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (12).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (12).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (13).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (13).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (14).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (14).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (15).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (15).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (16).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (16).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (17).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (17).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (18).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (18).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (19).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (19).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (20).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (20).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (21).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (21).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (23).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (23).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (24).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (24).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (25).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (25).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (26).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (26).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (27).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (27).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (28).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (28).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (29).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (29).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (30).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (30).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (31).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (31).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (32).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (32).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (33).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (33).jpeg"
}
},
{
  "id": 12,
  "description": "Produtos - Fotos",
  "tabletImg": {
   "height": "400",
   "width": "500",
   "url": "src/img/galeria/img-galery/img-nova (34).jpeg"
 },
 "thumbImg": {
  "height": "300",
  "width": "500",
  "url": "src/img/galeria/img-galery/img-nova (34).jpeg"
}
},

]

  // Función que ejecutará ImagesLoaded, Masonry y Photoswipe
  let photoSwipe = () => {
    var $container = $('.grid').imagesLoaded(function(){
      $container.masonry({
        itemSelector: '.item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
    });
    var container = [];
    $('#gallery').find('figure.item').each(function(){
      var $link = $(this).find('a.img-pswp'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
      container.push(item);
    });
    $('a.img-pswp').click(function(event){
      event.preventDefault();
      var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure.item').index(),
        bgOpacity: 0.85,
        showHideOpacity: true,
        showAnimationDuration: true
      };
      var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
      gallery.init();
    });
  },
  // Template HTML para las imágenes
  template = (el, elFilter) => {
    let tmpl = `
    <figure class="item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a class="img-pswp" href="${elFilter.url}" data-width="${elFilter.width}" data-height="${elFilter.height}" data-caption="${el.description}" itemprop="contentUrl" pid="${el.id}">
    <img id="${el.id}" src="${el.thumbImg.url}" itemprop="thumbnail" alt="${el.description}">
    </a>
    </figure>
    `;
    return tmpl;
  },
  keys = Object.keys(dataImages).map(key => dataImages[key]).reverse()
  
  // Agrego las imágenes al DOM y ejecuto la función Photoswipe
  if($(window).innerWidth() < 577){
    keys.forEach(data => $('#gallery').prepend(template(data, data.thumbImg)))
    photoSwipe()
  } else{
    keys.forEach(data => $('#gallery').prepend(template(data, data.tabletImg)))
    photoSwipe()
  }
  
  // Línea que ejecuta el Parallax
  $('figure.item').each(i => setTimeout(() => $('figure.item').eq(i).addClass('show-items'), 150 * (i+1)))
  
})