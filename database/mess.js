require("./global")

const mess = {
   wait: "`[ ✧ ] Tunggu Bang Proses`",
   success: "`[ ✧ ] Sukses Bang Mantep`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "`[ ✧ ] Teks Nya Mana Dek?`",
       link: "`[ ✧ ] Link Nya Mana Dek?`",
   },
   error: {
       fitur: "`[ ✧ ] Mohon Maaf Kak Kalau Error, Tolong Report Ke Developer Biar Diperbaiki`",
   },
   only: {
       group: "`[ ✧ ] Fitur Ini Cuma Bisa Di Akses Di Dalam Group`",
       private: "`[ ✧ ] Fitur Ini Cuma Bisa DiPrivate Aja Paok wkwk`",
       owner: "`[ ✧ ] Lu Siapa Khusus Owner Koxac Ae Dek, Gatau Malu Jir`",
       admin: "`[ ✧ ] Fitur Ini Cuma Bisa Di Akses Sama Atmin Grup Aja,Kalau Lu Mau Pakai Fitur Ini, Jadi Atmin Lah Kau Dulu Dek Kocak Bet Ygy`",
       badmin: "`[ ✧ ] Gabisa Kocak Jadiin Atmin Dluu, Baru Bisa Aktif, Dasar Tuwa Bangka Gatau Teknologi`",
       premium: "`[ ✧ ] Fitur Ini Cuma Bisa Dipakai Oleh Member Premium Koxac Yang Paling Imut Saja`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})