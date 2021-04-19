export class YaziDto {
  id: number = 0;
  kategoriId: number;
  kategoriAdi: string;
  kullaniciAdi: string;
  kullaniciResmi: string = '';
  yaziBaslik: string;
  yaziIcerik: string;
  yaziTarih: Date;
  yaziKapakResim: string;
  begeniSayisi: number = 0;
  yorumSayisi: number = 0;
}
