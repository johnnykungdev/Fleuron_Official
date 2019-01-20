

//next_btn

const wine = {
    eng: [
      "Marquis de la Tour Brut",
      "Langeron Macon-Villages Blanc",
      "Aquitania Rose",
      "Chateau Bois Noir Rouge",
      "Chateau Fongaban Rouge",],

    chi: [
        "法國德拉圖爵白中白氣泡酒",
        "法國朗格隆酒莊白酒",
        "智利阿奇坦酒莊粉紅酒",
        "法國黑木酒莊紅酒",
        "法國方嘉堡酒莊紅酒",
    ],

    pic: [
          "./img/Marquis_de_la_Tour_Blanc_Brut.png",
          "./img/Langeron_Macon_Villages_Blanc2012.png",
          "./img/Aquitania_Rose_2017.png",
          "./img/Chateau_Bois_Noir_2013.png",
          "./img/Chateau_Fongaban_2012.png",
    ],

    text: [
      "德拉圖厥氣泡酒為法國羅亞爾河最大的氣泡酒廠Ackerman旗下的品牌，Ackerman於19世紀初創立，在莊主的努力下目前銷售遍佈全球。此酒沿襲傳統香檳的二次發酵釀制法，輔以精準的溫度控制，使其擁有優雅細緻的氣泡、迷人的果香與尾韻。",
      "Macon-Villages白酒產自勃根地和薄酒萊接壤的Maconnais產區，區內專屬的地方性法定產區稱為Macon，園內等級較高的葡萄園即為Macon Villages。此區和經典的金丘區不同，葡萄園散佈在樹林田野區，頗具南法的風光。",
      "阿奇坦酒莊由四位釀酒巨擘 - 瑪歌酒莊前總經理Paul Pontallier、二級酒莊迪艾斯圖紐酒莊莊主Bruno Prats、香檳大廠Bollinger前莊主Ghislain de Montgolfier與智利知名釀酒師Felipe de Solminihac聯手創立，打造一系列精品酒款。",
      "Chateau Fongaban距離聖愛美濃產區僅數公里，其歷史可追溯到17世紀，葡萄園位於卡斯蒂永丘之間。其酒款傾住了釀造者最大的心血所釀製而成，在巴黎多項葡萄酒大賽中的良好表現也豎立了卓越的口碑。",
      "Chateau Bois Noir產自波爾多著名家族Gregoire所管理的莊園，該家族曾經管理過許多高品質的葡萄園。酒款的幕後推手是「Merlot大師」Claude Gros，他將自己著名的手藝毫無保留地釀入此款酒中。",
    ],
    
    region: ["Loire Valley", "Macon-Villages Burgundy","Maipo Valley, Chile", "Bordeaux", "Castillon Cotes"],
    vintage: ["NV", 2012, 2017, 2013, 2012],
    variety: ["Multiple", "100% Chardonny", "85% CS, 15% Syrah" ,"100% Merlot", "85% Merlot, 15% CF"],
    alc: ["11.0%", "13.0%", "13.5%", "13.0%", "13.5%"],
  }

const last = document.getElementById('last_btn');
const next = document.getElementById('next_btn');
const wine_pic = document.getElementById('wine_pic');
const title_eng = document.getElementById('title_eng');
const title_chi = document.getElementById('title_chi');
const wine_text = document.getElementById('wine_text');
const wine_table = document.getElementById('wine_table');
const region = document.getElementById('region');
const vintage = document.getElementById('vintage');
const variety = document.getElementById('variety');
const alc = document.getElementById('alc');


var i = 0;

last.addEventListener('click', function(){
    if (wine.pic[i-1]){
        i--;
        wine_pic.src = wine.pic[i];
        title_eng.textContent = wine.eng[i];
        title_chi.textContent = wine.chi[i];
        wine_text.textContent = wine.text[i];
        region.textContent = wine.region[i];
        vintage.textContent = wine.vintage[i];
        variety.textContent = wine.variety[i];
        alc.textContent = wine.alc[i];
    }
})

next.addEventListener('click', function(){
    if (wine.pic[i+1]){
        i++;
        wine_pic.src = wine.pic[i];
        title_eng.textContent = wine.eng[i];
        title_chi.textContent = wine.chi[i];
        wine_text.textContent = wine.text[i];
        region.textContent = wine.region[i];
        vintage.textContent = wine.vintage[i];
        variety.textContent = wine.variety[i];
        alc.textContent = wine.alc[i];
    }
})
