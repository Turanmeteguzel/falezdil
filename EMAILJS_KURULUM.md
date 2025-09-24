# 📧 EmailJS Kurulum Talimatları

## 🚀 Adım 1: EmailJS Hesabı Oluştur

1. [EmailJS.com](https://www.emailjs.com/) adresine git
2. "Sign Up" ile ücretsiz hesap oluştur
3. Email adresini doğrula

## ⚙️ Adım 2: Email Service Kurulumu

1. EmailJS dashboard'a git
2. **"Email Services"** sekmesine tıkla
3. **"Add New Service"** butonuna tıkla
4. Email sağlayıcını seç (Gmail, Outlook, vs.)
5. Email adresini ve şifreni gir
6. **Service ID**'yi not et (örn: `service_abc123`)

## 📝 Adım 3: Email Template Oluştur

1. **"Email Templates"** sekmesine git
2. **"Create New Template"** butonuna tıkla
3. Template adını gir: `falezdil-contact-form`
4. **Subject** kısmına: `🎓 Falezdil - Yeni İletişim Formu`
5. **Content** kısmına aşağıdaki HTML kodunu yapıştır:

```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Falezdil - Yeni İletişim Formu</title>
    <style>
      body {
        font-family: "Arial", sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
      }
      .container {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        border-bottom: 3px solid #ffae00;
        padding-bottom: 20px;
        margin-bottom: 30px;
      }
      .header h1 {
        color: #ffae00;
        margin: 0;
        font-size: 28px;
      }
      .header p {
        color: #666;
        margin: 10px 0 0 0;
        font-size: 16px;
      }
      .form-data {
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
      }
      .field {
        margin-bottom: 15px;
        padding: 10px;
        background-color: white;
        border-left: 4px solid #ffae00;
        border-radius: 4px;
      }
      .field-label {
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
        font-size: 14px;
      }
      .field-value {
        color: #555;
        font-size: 16px;
      }
      .footer {
        text-align: center;
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #eee;
        color: #666;
        font-size: 14px;
      }
      .highlight {
        background-color: #fff3cd;
        border: 1px solid #ffeaa7;
        padding: 15px;
        border-radius: 5px;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🎓 Falezdil</h1>
        <p>Yeni İletişim Formu Mesajı</p>
      </div>

      <div class="highlight">
        <strong>📧 Yeni bir öğrenci adayı iletişim formu doldurdu!</strong>
      </div>

      <div class="form-data">
        <h3 style="color: #FFAE00; margin-top: 0;">👤 Kişisel Bilgiler</h3>

        <div class="field">
          <div class="field-label">Ad Soyad:</div>
          <div class="field-value">{{from_name}}</div>
        </div>

        <div class="field">
          <div class="field-label">E-posta Adresi:</div>
          <div class="field-value">{{from_email}}</div>
        </div>

        <div class="field">
          <div class="field-label">Telefon Numarası:</div>
          <div class="field-value">{{phone}}</div>
        </div>
      </div>

      <div class="form-data">
        <h3 style="color: #FFAE00; margin-top: 0;">📚 Eğitim Tercihleri</h3>

        <div class="field">
          <div class="field-label">Öğrenmek İstediği Dil:</div>
          <div class="field-value">{{language}}</div>
        </div>

        <div class="field">
          <div class="field-label">Mevcut Seviye:</div>
          <div class="field-value">{{level}}</div>
        </div>

        <div class="field">
          <div class="field-label">Haftalık Ders Saati:</div>
          <div class="field-value">{{hours}}</div>
        </div>
      </div>

      <div class="form-data">
        <h3 style="color: #FFAE00; margin-top: 0;">💬 Ek Bilgiler</h3>

        <div class="field">
          <div class="field-label">Mesaj:</div>
          <div class="field-value">{{message}}</div>
        </div>
      </div>

      <div class="highlight">
        <strong>⚡ Hızlı İşlem:</strong><br />
        Bu öğrenci adayına en kısa sürede dönüş yapın ve uygun program
        önerisinde bulunun.
      </div>

      <div class="footer">
        <p>
          Bu e-posta Falezdil web sitesi iletişim formu aracılığıyla
          gönderilmiştir.
        </p>
        <p><strong>Gönderen:</strong> {{from_name}} ({{from_email}})</p>
        <p><strong>Gönderim Tarihi:</strong> {{current_date}}</p>
      </div>
    </div>
  </body>
</html>
```

6. **Template ID**'yi not et (örn: `template_xyz789`)
7. **"Save"** butonuna tıkla

## 🔑 Adım 4: Public Key Al

1. **"Account"** sekmesine git
2. **"API Keys"** bölümünde **Public Key**'i kopyala
3. Bu key'i not et (örn: `user_abc123def456`)

## 🔧 Adım 5: Kodda Konfigürasyonu Güncelle

`src/config/emailjs.js` dosyasını aç ve aşağıdaki değerleri güncelle:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_abc123", // Adım 2'den aldığın Service ID
  TEMPLATE_ID: "template_xyz789", // Adım 3'ten aldığın Template ID
  PUBLIC_KEY: "user_abc123def456", // Adım 4'ten aldığın Public Key

  // Diğer ayarlar aynı kalabilir
  TEMPLATE_PARAMS: {
    to_name: "Falezdil Ekibi",
    // ... diğer parametreler
  },
};
```

## ✅ Adım 6: Test Et

1. Projeyi çalıştır: `npm start`
2. İletişim formunu doldur
3. "Formu Gönder" butonuna tıkla
4. Email'in gelip gelmediğini kontrol et

## 🎯 Form Alanları

Email template'inde kullanılan alanlar:

- `{{from_name}}` - Ad Soyad
- `{{from_email}}` - E-posta
- `{{phone}}` - Telefon
- `{{language}}` - Öğrenmek İstediği Dil
- `{{level}}` - Mevcut Seviye
- `{{hours}}` - Haftalık Ders Saati
- `{{message}}` - Mesaj
- `{{current_date}}` - Gönderim Tarihi (otomatik)

## 🚨 Önemli Notlar

- EmailJS ücretsiz planında ayda 200 email limiti var
- Gmail kullanıyorsan "App Password" oluşturman gerekebilir
- Template'deki `{{}}` işaretleri EmailJS değişkenleri için
- Test email'ini kendine gönder, sonra gerçek email adresine yönlendir

## 🆘 Sorun Giderme

**Email gelmiyor:**

- Service ID, Template ID ve Public Key doğru mu kontrol et
- Email sağlayıcı ayarlarını kontrol et
- Spam klasörünü kontrol et

**Form gönderilmiyor:**

- Console'da hata var mı kontrol et
- Network sekmesinde API çağrısı başarılı mı kontrol et

**Template görünmüyor:**

- HTML kodunu doğru kopyaladığın emin ol
- Template'i kaydettiğin emin ol
