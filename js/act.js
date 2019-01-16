//index button
//
  let index_btn = document.querySelector('#index');

  index_btn.addEventListener('click', function (){
    location.href="./index.html";
  });

//last & next button
  let last_btn = document.querySelector('#last');
  let next_btn = document.querySelector('#next');
  var i = 0;

  var wine_img = document.querySelector('#wine_img');
  var wine_title = document.querySelector('.title');
  var wine_text = document.querySelector('.text');
  var wine_region = document.querySelector('.region');
  var wine_vintage = document.querySelector('.vintage');
  var wine_variety = document.querySelector('.variety');
  var wine_alc = document.querySelector('.alc');
  
  var wine_info = {
    title: [
      "Marquis de la Tour Brut",
      "Langeron Macon-Villages Blanc",
      "Aquitania Rose",
      "Chateau Bois Noir Rouge",
      "Chateau Fongaban Rouge",],

    img: [
          "./img/Marquis_de_la_Tour_Blanc_Brut.png",
          "./img/Langeron_Macon_Villages_Blanc2012.png",
          "./img/Aquitania_Rose_2017.png",
          "./img/Chateau_Bois_Noir_2013.png",
          "./img/Chateau_Fongaban_2012.png",],

    text: [
      "明亮的金黃色，豐富的果香，帶著優雅的花香，細緻的氣泡帶來絕佳的感，清新柔和，充滿水果，哈密瓜的風味。",
      "Macon-Villages白酒產自勃根地和薄酒萊接壤的Maconnais產區，區內專屬的地方性法定產區稱為Macon，園內等級較高的葡萄園即為Macon Villages。此區和經典的金丘區不同，葡萄園散佈在樹林田野區，頗具南法的風光。",
      "1984年，法國五大酒莊Chateau Margaux前總經理 Paul Pontallier與法國級數名莊Chateau Cos d’Estournel前莊主Bruno Prats兩人開始在智利尋找尋高品質的風土，來打造一個原創的獨特葡萄園。他們與智利知名釀酒師Felipe de Solminihac在1990年合作，在聖地亞哥城市附近買下18公頃的葡萄園，成立Vina Aquitania 阿奇坦酒莊，在1993年酒窖完成後正式營運。阿奇坦酒莊於2002年邀請到法國香檳大廠Bollinger前總經理Ghislain de Montgolfier成為酒莊的第四位合夥人，聯手打造一系列精品酒款。",
      "Chateau Fongaban距離聖愛美濃產區僅數公里，其歷史可追溯到17世紀，葡萄園位於卡斯蒂永丘之間。其酒款傾住了釀造者最大的心血所釀製而成，在巴黎多項葡萄酒大賽中的良好表現也豎立了卓越的口碑。",
      "Chateau Bois Noir產自波爾多著名家族Gregoire所管理的莊園，該家族曾經管理過許多高品質的葡萄園。酒款的幕後推手是「Merlot大師」Claude Gros，他將自己著名的手藝毫無保留地釀入此款酒中。",],

    region: ["Loire Valley", "Macon-Villages Burgundy","Maipo Valley, Chile", "Bordeaux", "Castillon Cotes"],
    vintage: ["NV", 2012, 2017, 2013, 2012],
    variety: ["Multiple", "100% Chardonny", "85% CS, 15% Syrah" ,"100% Merlot", "85% Merlot, 15% CF"],
    alc: ["11.0%", "13.0%", "13.5%", "13.0%", "13.5%"],
  }

  wine_img.src = wine_info.img[0];
  wine_title.textContent = wine_info.title[0];
  wine_text.textContent = wine_info.text[0];
  wine_region.textContent = "產區：" + wine_info.region[0];
  wine_vintage.textContent = "年份：" + wine_info.vintage[0];
  wine_variety.textContent = "葡萄品種：" + wine_info.variety[0];
  wine_alc.textContent = "酒精濃度：" + wine_info.alc[0];


  last_btn.addEventListener('click', function(){
    if (!wine_info.img[i-1]){
      i = wine_info.img.length;
    }
    i--;
    wine_img.src = wine_info.img[i];
    wine_title.textContent = wine_info.title[i];
    wine_text.textContent = wine_info.text[i];
    wine_region.textContent = "產區：" + wine_info.region[i];
    wine_vintage.textContent = "年份：" + wine_info.vintage[i];
    wine_variety.textContent = "葡萄品種：" + wine_info.variety[i];
    wine_alc.textContent = "酒精濃度：" + wine_info.alc[i];
    }); 

  next_btn.addEventListener('click', function(){
    if (wine_info.img[i+1]){
      i++;
      wine_img.src = wine_info.img[i];
      wine_title.textContent = wine_info.title[i];
      wine_text.textContent = wine_info.text[i];
      wine_region.textContent = "產區：" + wine_info.region[i];
      wine_vintage.textContent = "年份：" + wine_info.vintage[i];
      wine_variety.textContent = "葡萄品種：" + wine_info.variety[i];
      wine_alc.textContent = "酒精濃度：" + wine_info.alc[i];
      console.log(i);
    } else {
      i = 0;
      wine_img.src = wine_info.img[0];
      wine_title.textContent = wine_info.title[0];
      wine_text.textContent = wine_info.text[0];
      wine_region.textContent = "產區：" + wine_info.region[0];
      wine_vintage.textContent = "年份：" + wine_info.vintage[0];
      wine_variety.textContent = "葡萄品種：" + wine_info.variety[0];
      wine_alc.textContent = "酒精濃度：" + wine_info.alc[0];
    }
  });
