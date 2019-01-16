//index button
//
let index_btn = document.querySelector('#index');

index_btn.addEventListener('click', function (){
    location.href="./index.html";
  })

//last & next button
  let last_btn = document.querySelector('#last');
  let next_btn = document.querySelector('#next');
  var i = 0;

  var wine_img = document.querySelector('#wine_img');
  var wine_text = document.querySelector('.text');

  console.log(wine_text);
  var wine_list = [
    "./img/Langeron_Macon_Villages_Blanc2012.png",
    "./img/Chateau_Fongaban_2012.png",
    "./img/Chateau_Bois_Noir_2013.png",
  ];

  var wine_title = [

  ]

  
  var wine_text_list = [
    "Macon-Villages白酒產自勃根地和薄酒萊接壤的Maconnais產區，區內專屬的地方性法定產區稱為Macon，園內等級較高的葡萄園即為Macon Villages。此區和經典的金丘區不同，葡萄園散佈在樹林田野區，頗具南法的風光。",
    "Chateau Fongaban距離聖愛美濃產區僅數公里，其歷史可追溯到17世紀，葡萄園位於卡斯蒂永丘之間。其酒款傾住了釀造者最大的心血所釀製而成，在巴黎多項葡萄酒大賽中的良好表現也豎立了卓越的口碑。",
    "Chateau Bois Noir產自波爾多著名家族Gregoire所管理的莊園，該家族曾經管理過許多高品質的葡萄園。酒款的幕後推手是「Merlot大師」Claude Gros，他將自己著名的手藝毫無保留地釀入此款酒中。"
  ];
  var wine_info = [

  ];

  last_btn.addEventListener('click', function(){
    if (!wine_list[i-1]){
      i = wine_list.length;
    }
    i--;
    wine_img.src = wine_list[i];
    wine_text.textContent = wine_text_list[i];
    console.log(wine_list[i]);
  });

  next_btn.addEventListener('click', function(){
    if (wine_list[i+1]){
      i++;
      wine_img.src = wine_list[i];
      wine_text.textContent = wine_text_list[i];
    } else {
      i = 0;
      wine_img.src = wine_list[0];
      wine_text.textContent = wine_text_list[0];
    }
  });
