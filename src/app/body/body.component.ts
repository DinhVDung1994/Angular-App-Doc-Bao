import { Component, OnInit } from '@angular/core';
import {New} from "../new";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
new: New = {
  type: 1,
  title: 'Xuất hiện đám cưới tiền tỷ của đại gia Ninh Bình: 100 ngàn bông hoa nhập khẩu từ Anh, thân thế cô dâu "không phải dạng vừa đâu"',
  url: 'https://cafef.vn/xuat-hien-dam-cuoi-tien-ty-cua-dai-gia-ninh-binh-100-ngan-bong-hoa-nhap-khau-tu-anh-than-the-co-dau-khong-phai-dang-vua-dau-20220222091850808.chn?utm_source=coccoc&utm_medium=ccnews',
  image: 'https://cafefcdn.com/thumb_w/640/203337114487263232/2022/2/22/photo-1-16454961465769434939.jpeg',
}
news: New[]=[
  {
    type: 1,
    title: 'Đi thi hoa hậu, cô gái Gia Lai nổi nhất MXH bị lộ ảnh thật về đôi chân dài 1,13m',
    url: 'https://www.24h.com.vn/lam-dep/di-thi-hoa-hau-co-gai-gia-lai-noi-nhat-mxh-bi-lo-anh-that-ve-doi-chan-dai-113m-c145a1334418.html?utm_source=coccoc&utm_medium=ccnews',
    image: 'https://top10thuduc.net/wp-content/uploads/2021/12/phim-anime-hay.jpg',
  },
  {
    type: 2,
    title: 'Vụ thi thể cô gái dưới mương nước: Nạn nhân chết do tông xe máy vào cột điện',
    url: 'https://tuoitre.vn/vu-thi-the-co-gai-duoi-muong-nuoc-nan-nhan-chet-do-tong-xe-may-vao-cot-dien-20220222113744321.htm?utm_source=coccoc&utm_medium=ccnews',
    image: 'https://cdn.tuoitre.vn/thumb_w/586/2022/2/22/20220222-xe-may-16455042238051306772856.jpg'
  },
  {
    type: 3,
    title: 'Kiểu tóc húi cua cho nam giới năm nay',
    url: 'https://zingnews.vn/kieu-toc-hui-cua-cho-nam-gioi-nam-nay-post1297689.html?utm_source=coccoc&utm_medium=ccnews',
    image: 'https://znews-photo.zadn.vn/w660/Uploaded/ryksdreyxq/2022_02_21/1.jpg'
  },
  {
    type: 4,
    title: 'Kiểu tóc húi cua cho nam giới năm nay',
    url: 'https://vietnamnet.vn/vn/doi-song/gia-dinh/toi-mua-nha-chung-cu-1-2-ty-khi-trong-tay-chi-co-100-trieu-dong-817771.html?utm_source=coccoc&utm_medium=ccnews',
    image: 'https://vnn-imgs-f.vgcloud.vn/2022/02/22/16/mua-nha.jpg'
  },
  {
    type: 5,
    title: 'Giá vàng hôm nay 23/2: Nín thở dõi theo Ukraine, tăng cao lên đỉnh 8 tháng',
    url: 'https://vietnamnet.vn/vn/kinh-doanh/gia-vang-hom-nay-23-2-theo-doi-ukraine-vang-tren-dinh-8-thang-817840.html',
    image: 'https://vnn-imgs-f.vgcloud.vn/2022/02/22/21/gia-vang-hom-nay-23-2-theo-doi-dong-thai-tiep-theo-tai-ukraine-vang-treo-tren-dinh-8-thang.jpg'
  }, {
    type: 6,
    title: 'Vì sao Starlink của Elon Musk trở thành tâm điểm chỉ trích của Trung Quốc?',
    url: 'https://vietnamnet.vn/vn/cong-nghe/vien-thong/vi-sao-cong-nghe-starlink-cua-elon-musk-bi-chi-trich-tai-trung-quoc-813776.html',
    image: 'https://vnn-imgs-f.vgcloud.vn/2022/01/25/09/5g-chua-pho-cap-my-trung-da-dua-nhau-ve-6g-240x160.jpg'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  showTheThao(){
  for (let i =0;i<this.news.length;i++){
    if (this.news[i].type == 1){
      console.log(this.news[i])
    }
  }
  }
}
