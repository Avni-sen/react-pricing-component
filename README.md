#React İle Pricing Components Yapımı 

##Context
Context, prop’ları her seviyede manuel olarak geçmek zorunda kalmadan bileşen ağacı üzerinden veri iletmenin bir yolunu sağlar.

Tipik bir React uygulamasında veri prop’lar aracılığıyla yukarıdan aşağıya aktarılır (üst bileşenlerden alt bileşenlere). Fakat bu tür bir kullanım, uygulamadaki birçok bileşen tarafından ihtiyaç duyulan belirli tipteki prop’lar (örneğin; lokalizasyon, arayüz teması) için kullanışsız olabilir. Context, bileşen ağacın her bir seviyesi üzerinden açıkça bir prop geçirmeden, bileşenler arasında bu gibi değerleri paylaşmanın bir yolunu sağlar.

###Context Ne Zaman Kullanılır
Context; mevcut kullanıcıyı doğrulama, tema veya dil seçimi gibi React bileşen ağacında global olarak düşünülebilecek verileri paylaşmak için tasarlanmıştır.

##Uygulamanın Görselleri Aşağıdadır.

![Opera Anlık Görüntü_2022-05-26_151255_localhost](https://user-images.githubusercontent.com/86740875/170489349-5ee52e02-52c4-48e2-8182-cec4abc6bf8e.png)

![Ekran görüntüsü 2022-05-26 151029](https://user-images.githubusercontent.com/86740875/170489347-49a30ab1-26d2-4701-8b50-8b516a73c987.png)

![Ekran görüntüsü 2022-05-26 151327](https://user-images.githubusercontent.com/86740875/170489351-d2754da6-488a-4179-8ab6-18446d0c9139.png)

