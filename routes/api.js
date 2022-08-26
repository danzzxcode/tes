__path = process.cwd()

var express = require('express');

//SETTING
apikey = "danzz"
creator = "Danzz Coding"

const listkey = ["danzz","Ramdani"];

var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
nottext: {message: 'MASUKKAN TEXT' }
notapikey: {message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' }


loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    apikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

//DOWNLOADER
router.get('/download/youtube', async (req, res, next) => {  
var apikeyInput = req.query.apikey
url = req.query.url
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/yt?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/download/facebook', async (req, res, next) => {  
var apikeyInput = req.query.apikey
url = req.query.url
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/fbdown?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/download/twitter', async (req, res, next) => {  
var apikeyInput = req.query.apikey
url = req.query.url
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/twitter?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/download/instagram', async (req, res, next) => {  
var apikeyInput = req.query.apikey
url = req.query.url
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/igdowloader?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/download/igstory', async (req, res, next) => {  
username = req.query.username
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/igstory?username=${username}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/download/igreels', async (req, res, next) => {  
var apikeyInput = req.query.apikey
url = req.query.url
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/igreels?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/download/tiktok', async (req, res, next) => {  
var apikeyInput = req.query.apikey
url = req.query.url
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/tiktok?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/download/soundcloud', async (req, res, next) => {  
var apikeyInput = req.query.apikey
url = req.query.url
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/soundcloud?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})
 
//ASUPAN
router.get('/asupan/santuy', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/bocil', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/ukhty', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/geayubi', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/rikagusriani', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

//CECAN
router.get('/cecan/random', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

//CONVERT
router.get('/convert/tourl', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://hadi-api.herokuapp.com/docs/converter06#jpeg-to-webp`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

//STALK
router.get('/stalk/github', async (req, res, next) => {  
username = req.query.username
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/info/githubstalk?user=${username}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/stalk/instagram', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-alphabot.herokuapp.com/api/stalk/instagram`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/stalk/herodetail', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-alphabot.herokuapp.com/api/stalk/herodetails`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// WALLPAPER
router.get('/wallpaper/wallpaper/wallml', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallml`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallpaper/wallrandom', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallrandom`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallpaper/wallcode', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallcode`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallpaper/wallneon', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallneon`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallpaper/wallpubg', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallpubg`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// TEXTPRO
router.get('/textpro/halloween', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/halloween?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/rainbow', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/rainbow?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/scfi', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/scfi?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/blue', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/blue?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/juice', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/juice?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/purple', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/purple?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/toxic', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/toxic?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/peridot', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/peridot?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/metal', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/metal?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/realistic', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/realistic?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/impressive', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/impressive?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/cracked', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/cracked?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/magma', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/magma?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/thunder', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/thunder?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/berry', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/berry?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/transformer', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/transformer?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/horror', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/horror?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/metallic', async (req, res, next) => { 
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' }) 
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/metallic?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/circuit', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/circuit?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/textpro/sketch', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/textpro/sketch?text=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// CANVAS 
router.get('/canvas/sadcat', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/sadcat?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/facts', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/facts?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/pikachu', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/pikachu?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/biden', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/biden?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/oogway', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/oogway?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/gun', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/gun?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/greyscale', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/greyscale?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/ad', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/ad?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/blur', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/blur?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/uncover', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/uncover?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/invert', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/invert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/alert', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/alert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

// WALLPAPER
router.get('/wallpaper/wallml', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallml`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallrandom', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallrandom`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallcode', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallcode`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallneon', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallneon`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpaper/wallpubg', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallpubg`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// FUN
router.get('/fun/jumlahangka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/jumlahangka?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/jumlahhuruf', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/jumlahhuruf?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/besarkecil', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/besarkecil?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/resepmasakan', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/resepmasakan?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/katajago', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/katajago?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/artimimpi', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/artimimpi?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/artinama', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/artinama?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/kapital', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/kapital?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/halah', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/halah?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/huluh', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/huluh?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/heleh', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/heleh?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/bilangangka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/bilangangka?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/balikangka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/balikangka?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/balikhuruf', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/balikhuruf?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/fun/wikipedia', async (req, res, next) => {  
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/fun/wikipedia?query=${text}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// RANDOM
router.get('/random/meme', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/random/meme`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// NSFW
router.get('/nsfw/ass', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/nsfw/ass`))
.then(response => response.json())
.then(data => { 
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/nsfw/ahegao', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/nsfw/ahegao`))
.then(response => response.json())
.then(data => {  
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/nsfw/bdsm', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/nsfw/bdsm`))
.then(response => response.json())
.then(data => {  
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/nsfw/blowjob', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/nsfw/blowjob`))
.then(response => response.json())
.then(data => {  
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/nsfw/cukold', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/nsfw/cukold`))
.then(response => response.json())
.then(data => {  
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/nsfw/cum', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/nsfw/cum`))
.then(response => response.json())
.then(data => {  
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/nsfw/ero', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/nsfw/ero`))
.then(response => response.json())
.then(data => {  
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

// CANVAS 
router.get('/canvas/sadcat', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/sadcat?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/facts', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/facts?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/pikachu', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/pikachu?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/biden', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/biden?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/oogway', async (req, res, next) => {
var apikeyInput = req.query.apikey
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/oogway?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/gun', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/gun?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/greyscale', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/greyscale?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/ad', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/ad?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/blur', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/blur?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/uncover', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/uncover?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/invert', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/invert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/alert', async (req, res, next) => {
var apikeyInput = req.query.apikey
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/alert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

//SEARCH
router.get('/search/youtube', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${query}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/search/pinterest', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/search/pinterest?query=${query}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/search/gsmarena', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${query}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/search/playstore', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/search/gplaystore?query=${query}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/search/appstore', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/search/appstore?query=${query}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/search/modapk', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/search/mod?query=${query}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/search/shopee', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/search/shopee?query=${query}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

//GAME
router.get('/game/tebaklirik', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebaklirik`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/game/tebakkimia', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakkimia`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/game/tebakjenaka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakjenaka`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/game/tebakbendera', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakbendera`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/game/tebakgambar', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/tebakgambar`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/game/caklontong', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6288296339947' })
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/caklontong`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})


module.exports = router
