/*
        -NOTE-
   -SCRIPT KOXAC VIP
   -SCRIPT FROM DEV ALWI
   -JANGAN DIJUAL
   -TIDAK BOLEH DISEBAR
   -ANTI RIAL 5HARI DEK
  
-----╔╗╔═╦═══╦═╗╔═╦═══╦═══╗
----║║║╔╣╔═╗╠╗╚╝╔╣╔═╗║╔═╗║
---║╚╝╝║║─║║╚╗╔╝║║─║║║─╚╝
--║╔╗║║║─║║╔╝╚╗║╚═╝║║─╔╗
-║║║╚╣╚═╝╠╝╔╗╚╣╔═╗║╚═╝║
╚╝╚═╩═══╩═╝╚═╩╝─╚╩═══╝
   
*/

require("./database/module")

//GLOBAL PAYMENT
global.storename = "KOXAC"
global.dana = "6288227606701"
global.qris = "https://a.top4top.io/0.jpeg"


// GLOBAL SETTING
global.owner = "628895154319"
global.namabot = "KOXAC"
global.nomorbot = "6285174197856"
global.namaCreator = "KOXAC"
global.linkyt = "https://youtube.com/search"
global.autoJoin = false
global.antilink = false
global.versisc = '999'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://j.top4top.io/p_3200oajze1.jpg'
global.isLink = 'https://whatsapp.com/'
global.packname = "RiICrash"
global.author = "Koxac"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})