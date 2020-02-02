# React Context API ve HOOK Eğitim Serisi Projesi

Bu proje aynı Context API ve Hook konularını anlattığım eğitim serisi için oluşturulmuştur.

## Proje Konusu

Proje kullanıcıya bir metin verilerek yazması istenmektedir. Yazma işleminin sonunda kullanıcının yazım hızı ve doğruluk bilgisi hesaplanmaktadır.

### p1

Temel bilesenler eklendi.

### p2

SpeedCheck bileseni gelistirildi. Gerekli alanlar olusuturuldu.

### p3 SpeedCheck bileseni alt bilesenlere ayrildi

SpeedCheck bileseni alt bilesenlere ayrildi:

- Info
- Score
- ChallengeInput

### p4 ChallengeInput Gelistirildi

ChallengeInput klavyeden gelen "ctrl+ f" komutunu yakalıyor.

### p5 ChallengeInput Gelistirildi - 2

Girilen Metnin kontrolü yapıldı(`CheckEntry`) ve Klavye dinleme metodları bileşen dom'dan çıktığında listenerdan silindi.

### p6 ChallengeInput Gelistirildi - 3

CheckEntry icerisinde duration hesaplama islemi yapildi.

### p7 ChallengeInput Gelistirildi - 4

Karakter siniri eklendi ve metin alani bosaltilince süre sifirlandi.

### p8 Skor Kartlari olusturuldu

Skor tipleri olusturuldu ve bu tipleri kullanacak Skor kartlari bilesenleri olusuturuldu. Skor bilgisi bu kartlar araciligi ile gosterildi.

### p9 Context olusturuldu

Theme ile ilgili verilerin tutulacagi ThemeContext olusuturuldu.

### p10 ThemeContext Kullanildi

Uygulama icerisinde ThemeContext HoC yontemi ile kullanildi.

## p11 ThemeContext Gelistirildi

Navbar bileseni ThemeContext ile gelistirildi ve tema degistirme butonu eklendi.

### p12 ThemeContext Gelistirildi

Tema icin ek alanlar eklendi ve Info bileseninde uygulandi. CSS duzeltmeleri de eklendi.

### p13 ChallengeContext'i eklendi

Challenge Context'i eklenerek Info bileseninde kullanildi. Info bileseninde iki Context kullanimi orneklendirilmis oldu.

### p14 useState kullanimi

`useState` hook'u ile AddChallenge bileseni olusuturuldu.

### p15 useContext kullanimi

`useContext` ile Context'e erisme ve kullanma islemleri gerceklestirildi. Yeni Metin ekleme ozelligi eklendi.
