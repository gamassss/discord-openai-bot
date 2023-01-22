#Cara Pakai

```
-Sebelum memulai kita perlu nodejs terlebih dahulu. Caranya dengan download nodejs di https://nodejs.org/
-Jika sudah baru lakukan step - step di bawah
```

##Steps:
1. Buat server discord terlebih dahulu atau skip step ini jika ingin menambahkan bot baru ke dalam server yang sudah ada.
2. Buka Discord Developer Portal
3. Pilih Application -> New Application -> Kasih nama bot-mu -> Create
4. Buka menu "Bot" di sidebar, lalu klik Reset Token untuk generate Token.
5. Simpan Token tersebut dimanapun karena nanti akan dipakai satu kali di script jadi bisa disimpan ke notepad atau semacamnya. Dan ingat jangan beri tau siapapun.
6. Pilih menu OAuth2 dan pilih menu URL Generator.
7. Pada section "Scopes" centang "bot".
8. Pada section "Bot Permissions" centang "Read messages/View channels" dan "Send messages".
9. Lalu pada bagian bawah copy URL yang sudah digenerate dan buka di tab baru.
10. Pilih Server dimana bot tersebut akan ditambahkan.
11. Registrasi akun openai/api di https://openai.com/api/
12. Login lalu pada halaman overview Klik menu Personal di pojok kanan atas.
13. Pilih API Keys.
14. Klik "Create new secret keys" dan simpan api key tersebut karena nanti akan dipakai di script juga.

##Clone repo dan Run Server
```
git clone https://github.com/gamassss/discord-openai-bot.git
cd discord-openai-bot
```

14. Buka repo di text editor.
15. Buka file key.json lalu ganti apiKey dengan api key yang kamu dapat dari step 13.
16. Ganti client_token dengan token yang kamu dapat dari step 3.
17. Buka terminal run beberapa command di bawah ini.
```
npm update
npm run start
```
18. Jika sudah muncul pesan "Bot Siap!" berarti bot discord sudah siap dipakai seperti menggunakan chat prompt di chatgpt.


