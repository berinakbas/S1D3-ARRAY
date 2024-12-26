function lottery(array) {
  const isimler = [...array]; // input array'i kopyalıyoruz
  const sansli = [];

  // İlk 5 öğeyi sansli'ye ekliyoruz
  sansli.push(isimler[0]);
  sansli.push(isimler[1]);
  sansli.push(isimler[2]);
  sansli.push(isimler[3]);
  sansli.push(isimler[4]);

  // 10, 20, 30, 40, 50. öğeleri sansli'ye ekliyoruz
  sansli.push(isimler[9]);
  sansli.push(isimler[19]);
  sansli.push(isimler[29]);
  sansli.push(isimler[39]);
  sansli.push(isimler[49]);

  // Bu öğeleri isimler array'inden çıkarıyoruz
  isimler.splice(49, 1);
  isimler.splice(39, 1);
  isimler.splice(29, 1);
  isimler.splice(19, 1);
  isimler.splice(9, 1);
  isimler.splice(0, 5); // ilk 5 öğeyi siliyoruz

  // Rastgele bir öğe seçiyoruz
  const elemanSayisi = isimler.length; // length doğru yazım
  const sansliIndex = Math.floor(Math.random() * elemanSayisi);
  sansli.push(isimler[sansliIndex]);

  return sansli; // sansli array'ini döndürüyoruz
}

module.exports = lottery;
