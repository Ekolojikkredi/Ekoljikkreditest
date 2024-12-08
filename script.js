function showPage(page) {
    let pageContent = document.getElementById("page-content");
    pageContent.innerHTML = ""; // Sayfa içeriğini temizle

    switch (page) {
        case 'ekolojik-kredi':
            pageContent.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, çevre dostu davranışları teşvik eden ve doğal kaynakları koruma amacı güden bir sistemdir. Bu sistemde, bireyler veya kurumlar geri dönüşüm, enerji tasarrufu ve doğa dostu uygulamalarla kredi kazanabilirler.</p>
                <p>Ekolojik kredi sistemi, çevreye duyarlı davranışları ödüllendirerek, insanların çevreye olan duyarlılığını artırmayı amaçlar. Bu sayede doğal kaynakların korunması sağlanırken, atıkların azaltılması ve geri dönüşüm oranlarının arttırılması hedeflenir.</p>
            `;
            break;
        case 'hazirlayanlar':
            pageContent.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <ul>
                    <li>Danışman Öğretmen: Osman Onuk</li>
                    <li>Öğrenciler:
                        <ul>
                            <li>Muhammedcan Arslanparçası</li>
                            <li>Bilal Yiğit Tezcan</li>
                            <li>Yağız Efe Yılmaz</li>
                        </ul>
                    </li>
                </ul>
            `;
            break;
        case 'geri-donusum':
            pageContent.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atık malzemelerin yeniden işlenerek ham maddeye dönüştürülmesi işlemidir. Bu işlem, doğal kaynakların korunmasına ve enerji tasarrufuna katkı sağlar. Atıkların geri dönüştürülmesi sayesinde, doğal kaynakların tükenmesi yavaşlatılabilir ve çevre kirliği azaltılabilir.</p>
                <p>Geri dönüşüm, plastik, cam, kağıt, metal gibi malzemelerin ayrıştırılması ve yeniden kullanılmasıyla sağlanır. Bu sayede atıkların çevreye olan olumsuz etkisi azaltılabilir, doğanın dengesini korumaya katkı sağlanır.</p>
            `;
            break;
        case 'bize-ulasin':
            pageContent.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <ul>
                    <li>Email: <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></li>
                    <li>Okul Adı: Torbalı Anadolu Lisesi, İzmir</li>
                    <li>Youtube Kanalı: <a href="https://youtube.com/@ekolojikkredi?si=esEweBsfz6l6LGVU" target="_blank">Ekolojik Kredi YouTube Kanalı</a></li>
                </ul>
            `;
            break;
        case 'kayit':
            pageContent.innerHTML = `
                <h2>Kaydınızı Yapın</h2>
                <p>Lütfen hangi tür kaydınız olduğunu seçin:</p>
                <button onclick="showPage('okul-kaydi')">Okul Kaydı</button>
                <button onclick="showPage('ogrenci-kaydi')">Öğrenci Kaydı</button>
            `;
            break;
        case 'okul-kaydi':
            pageContent.innerHTML = `
                <h2>Okul Kaydı</h2>
                <form id="okulKaydiForm">
                    <label for="okulAdi">Okul Adı:</label>
                    <input type="text" id="okulAdi" required><br><br>

                    <label for="il">İl:</label>
                    <input type="text" id="il" required><br><br>

                    <label for="ilce">İlçe:</label>
                    <input type="text" id="ilce" required><br><br>

                    <label for="sifre">Şifre:</label>
                    <input type="password" id="sifre" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            document.getElementById('okulKaydiForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Okul Kaydınız Başarıyla Yapıldı!');
            });
            break;
        case 'ogrenci-kaydi':
            pageContent.innerHTML = `
                <h2>Öğrenci Kaydı</h2>
                <form id="ogrenciKaydiForm">
                    <label for="ogrenciAdi">Adı:</label>
                    <input type="text" id="ogrenciAdi" required><br><br>

                    <label for="ogrenciSoyadi">Soyadı:</label>
                    <input type="text" id="ogrenciSoyadi" required><br><br>

                    <label for="ogrenciNumarasi">Öğrenci Numarası:</label>
                    <input type="text" id="ogrenciNumarasi" required><br><br>

                    <label for="okulAdi">Okul Adı:</label>
                    <input type="text" id="okulAdi" required><br><br>

                    <label for="sinif">Sınıf:</label>
                    <input type="text" id="sinif" required><br><br>

                    <label for="email">E-Posta:</label>
                    <input type="email" id="email" required><br><br>

                    <label for="telefon">Telefon:</label>
                    <input type="tel" id="telefon" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            document.getElementById('ogrenciKaydiForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Öğrenci Kaydınız Başarıyla Yapıldı!');
            });
            break;
        case 'veri-giris':
            pageContent.innerHTML = `
                <h2>Veri Girişi</h2>
                <form id="veriGirisForm">
                    <label for="atikturu">Atık Türü:</label>
                    <select id="atikturu" required>
                        <option value="plastik">Plastik</option>
                        <option value="kağıt">Kağıt</option>
                        <option value="cam">Cam</option>
                        <option value="metal">Metal</option>
                    </select><br><br>

                    <label for="agirlik">Ağırlık (kg):</label>
                    <input type="number" id="agirlik" required><br><br>

                    <label for="kayitYapan">Kayıt Yapan Kişi:</label>
                    <input type="text" id="kayitYapan" required><br><br>

                    <button type="submit">Veriyi Kaydet</button>
                </form>
            `;
            document.getElementById('veriGirisForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Veri Kaydedildi!');
            });
            break;
        case 'veri-goruntuleme':
            pageContent.innerHTML = `
                <h2>Veri Görüntüleme</h2>
                <p>Bu bölümde, öğrenciler sadece kendi verilerini görebilir. Lütfen öğrenci numaranız ve e-posta adresinizi girin.</p>
                <form id="veriGoruntuleForm">
                    <label for="ogrenciNumarasi">Öğrenci Numarası:</label>
                    <input type="text" id="ogrenciNumarasi" required><br><br>

                    <label for="email">E-Posta:</label>
                    <input type="email" id="email" required><br><br>

                    <button type="submit">Veriyi Görüntüle</button>
                </form>
            `;
            document.getElementById('veriGoruntuleForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Veriniz Gösterilecektir!');
            });
            break;
    }
}
