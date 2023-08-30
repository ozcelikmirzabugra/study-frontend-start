//1-Sipariş bilgilerini object içerisinde saklayınız.
let siparis_1 = {
  "siparis_id" : 101,
  "siparis_tarih" : "30.12.2023",
  "odeme_sekli" : "kredi_karti",
  "kargo_adresi" : {
    "mahalle" : "ahi mesut",
    "ilce" : "etimesgut",
    "sehir" : "ankara"
  },
  "urunler" : [
    {
      "urun_id" : 5,
      "urun_adi" : "Iphone 13 Pro",
      "urun_url" : "http://abc.com/iphone-13-pro",
      "urun_fiyat" : 22000
    },
    {
      "urun_id" : 6,
      "urun_adi" : "Iphone 13 Pro Max",
      "urun_url" : "http://abc.com/iphone-13-pro-max",
      "urun_fiyat" : 25000
    }
  ]
}
