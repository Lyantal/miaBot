const puppeteer = require('puppeteer');

async function scrapeProduct(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
  const data = await page.evaluate(() =>{
    return {
      heroImg: document.querySelectorAll(".wikitable.hero-infobox img")[0].src,
      heroName: document.querySelectorAll(".wikitable.hero-infobox tbody tr th span")[0].innerHTML,
      heroTitle: document.querySelectorAll(".wikitable.hero-infobox tbody tr th span")[1].innerHTML,
      heroHP: document.querySelectorAll(".wikitable.default tbody tr td")[65].innerHTML,
      heroAtk:document.querySelectorAll(".wikitable.default tbody tr td")[66].innerHTML,
      heroSpd:document.querySelectorAll(".wikitable.default tbody tr td")[67].innerHTML,
      heroDef:document.querySelectorAll(".wikitable.default tbody tr td")[68].innerHTML,
      heroRes:document.querySelectorAll(".wikitable.default tbody tr td")[69].innerHTML,
      heroBST:document.querySelectorAll(".wikitable.default tbody tr td")[70].innerHTML,
      //heroWpnType:document.querySelectorAll(".wikitable.default tbody tr td")[70].innerHTML,
      heroWpn:document.querySelectorAll(".wikitable.default.unsortable.skills-table tbody td")[21].innerHTML,
      heroWpnTxt:document.querySelectorAll(".wikitable.default.unsortable.skills-table tbody td")[24].innerHTML,
      //heroRarity:document.querySelectorAll(".wikitable.hero-infobox tbody tr td")[0].innerHTML,
    };
  });
  await browser.close();
  console.log('Data:', data);

  return {data}
             
}


module.exports = {
  scrapeProduct
}
