'use client';

import images from '@/public/img/images';
import Image from 'next/image';

import AliceCarousel from 'react-alice-carousel';

export default function homeHeadline() {
  const items = [
    <div className="item" data-value="1" key={null}>
      <a
        href="<?= base_url('post/read/' . $p->slug) ?>"
        className="card-news-headline d-block position-relative mb-1"
      >
        <div className="card-news-headline-img mb-2">
          <Image
            src={images.imgPost1}
            alt="image post 1"
            className="w-100 of-cover"
          />
        </div>
        <div className="card-news-headline-text position-absolute primary-gradient-to-top w-100  bottom-0 px-4 pb-5 pt-4">
          <div className="d-inline-block text-color-primary inter card-news-headline-text-category fw-bold">
            Otomodif
            <div className="d-inline-block card-news-headline-text-date fw-light ms-2 text-white">
              Rabu, 17 Juli 2024
            </div>
          </div>
          <h6 className="inter fw-600 card-news-headline-text-title mb-md-2 mb-0 text-white">
            The New Kia Seltos Bakal Debut di GIIAS 2024, Yuk Intip Spesifikasi
            dan Fiturnya
          </h6>
          
        </div>
      </a>
    </div>,
    <div className="item" data-value="2" key={null}>
      <a
        href="<?= base_url('post/read/' . $p->slug) ?>"
        className="card-news-headline d-block position-relative mb-1"
      >
        <div className="card-news-headline-img mb-2">
          <Image
            src={images.imgPost2}
            alt="image post 1"
            className="w-100 of-cover"
          />
        </div>
        <div className="card-news-headline-text position-absolute primary-gradient-to-top w-100  bottom-0 px-4 pb-5 pt-4">
          <div className="d-inline-block text-color-primary inter card-news-headline-text-category fw-bold">
            Otomodif
            <div className="d-inline-block card-news-headline-text-date fw-light ms-2 text-white">
              Rabu, 17 Juli 2024
            </div>
          </div>
          <h6 className="inter fw-600 card-news-headline-text-title mb-md-2 mb-0 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptas laudantium neque nemo, deleniti possimus nihil numquam.
            Suscipit voluptatem dolorum perspiciatis laudantium at quod libero
            natus, quisquam quam et magni!
          </h6>
          
        </div>
      </a>
    </div>,
    <div className="item" data-value="3" key={null}>
      <a
        href="<?= base_url('post/read/' . $p->slug) ?>"
        className="card-news-headline d-block position-relative mb-1"
      >
        <div className="card-news-headline-img mb-2">
          <Image
            src={images.imgPost3}
            alt="image post 1"
            className="w-100 of-cover"
          />
        </div>
        <div className="card-news-headline-text position-absolute primary-gradient-to-top w-100  bottom-0 px-4 pb-5 pt-4">
          <div className="d-inline-block text-color-primary inter card-news-headline-text-category fw-bold">
            Otomodif
            <div className="d-inline-block card-news-headline-text-date fw-light ms-2 text-white">
              Rabu, 17 Juli 2024
            </div>
          </div>
          <h6 className="inter fw-600 card-news-headline-text-title mb-md-2 mb-0 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et, aspernatur illum eligendi corrupti iste quia modi sequi nam sunt, fugiat vero ea alias ut minima consequatur voluptatibus voluptatum beatae.
          </h6>
          
        </div>
      </a>
    </div>,
  ];

  const HeadlineCarousel = () => (
    <AliceCarousel
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={2000}
      infinite
      touchTracking={true}
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  );

  return (
    <>
      {/* Headline */}
      <section className="headline-sec white py-lg-1 pt-lg-3 pb-lg-2 wow animate__fadeIn">
        <div className="px-lg-1 container px-0">
          <div className="row mx-0">
            <div className="col-12 col-lg-8 px-lg-2 px-0">
              <HeadlineCarousel />
            </div>
            <div className="col-12 col-lg-4 px-lg-2 px-0">
              {/* Berita Utama Lainnya */}
              <section className="px-lg-0 d-none d-lg-block mb-3 px-3">
                <a
                  href="<?= base_url('post/read/' . $p->slug) ?>"
                  className="card-news-2 d-flex justify-content-start align-items-start mb-3"
                >
                  <div className="card-news-2-img d-inline-flex me-3">
                    <Image
                      src={images.imgPost1}
                      className="of-cover"
                      alt="image post 1"
                      width={113}
                      height={75}
                    />
                  </div>
                  <div className="card-news-2-text d-inline-flex flex-column">
                    <div className="d-inline-block text-color-primary inter fw-600 card-news-2-text-category">
                      News
                      <div className="d-inline-block text-color fw-400 card-news-2-text-date ms-1">
                        Rabu, 17 Juli 2024
                      </div>
                    </div>
                    <h6
                      className="inter fw-600 text-color-title card-news-2-text-title mb-lg-0 mb-2"
                      style={{ minHeight: 69 }}
                    >
                      Suzuki Hadir di GIIAS 2024, Perkenalkan BEV Terbaru eVX
                    </h6>
                  </div>
                </a>

                <a
                  href="<?= base_url('post/read/' . $p->slug) ?>"
                  className="card-news-2 d-flex justify-content-start align-items-start mb-3"
                >
                  <div className="card-news-2-img d-inline-flex me-3">
                    <Image
                      src={images.imgPost1}
                      className="of-cover"
                      alt="image post 1"
                      width={113}
                      height={75}
                    />
                  </div>
                  <div className="card-news-2-text d-inline-flex flex-column">
                    <div className="d-inline-block text-color-primary inter fw-600 card-news-2-text-category">
                      News
                      <div className="d-inline-block text-color fw-400 card-news-2-text-date ms-1">
                        Rabu, 17 Juli 2024
                      </div>
                    </div>
                    <h6
                      className="inter fw-600 text-color-title card-news-2-text-title mb-lg-0 mb-2"
                      style={{ minHeight: 69 }}
                    >
                      Suzuki Hadir di GIIAS 2024, Perkenalkan BEV Terbaru eVX
                    </h6>
                  </div>
                </a>

                <a
                  href="<?= base_url('post/read/' . $p->slug) ?>"
                  className="card-news-2 d-flex justify-content-start align-items-start mb-3"
                >
                  <div className="card-news-2-img d-inline-flex me-3">
                    <Image
                      src={images.imgPost1}
                      className="of-cover"
                      alt="image post 1"
                      width={113}
                      height={75}
                    />
                  </div>
                  <div className="card-news-2-text d-inline-flex flex-column">
                    <div className="d-inline-block text-color-primary inter fw-600 card-news-2-text-category">
                      News
                      <div className="d-inline-block text-color fw-400 card-news-2-text-date ms-1">
                        Rabu, 17 Juli 2024
                      </div>
                    </div>
                    <h6
                      className="inter fw-600 text-color-title card-news-2-text-title mb-lg-0 mb-2"
                      style={{ minHeight: 69 }}
                    >
                      Suzuki Hadir di GIIAS 2024, Perkenalkan BEV Terbaru eVX
                    </h6>
                  </div>
                </a>

                <a
                  href="<?= base_url('post/read/' . $p->slug) ?>"
                  className="card-news-2 d-flex justify-content-start align-items-start mb-3"
                >
                  <div className="card-news-2-img d-inline-flex me-3">
                    <Image
                      src={images.imgPost1}
                      className="of-cover"
                      alt="image post 1"
                      width={113}
                      height={75}
                    />
                  </div>
                  <div className="card-news-2-text d-inline-flex flex-column">
                    <div className="d-inline-block text-color-primary inter fw-600 card-news-2-text-category">
                      News
                      <div className="d-inline-block text-color fw-400 card-news-2-text-date ms-1">
                        Rabu, 17 Juli 2024
                      </div>
                    </div>
                    <h6
                      className="inter fw-600 text-color-title card-news-2-text-title mb-lg-0 mb-2"
                      style={{ minHeight: 69 }}
                    >
                      Suzuki Hadir di GIIAS 2024, Perkenalkan BEV Terbaru eVX
                    </h6>
                  </div>
                </a>

                <a
                  href="<?= base_url('post/read/' . $p->slug) ?>"
                  className="card-news-2 d-flex justify-content-start align-items-start mb-3"
                >
                  <div className="card-news-2-img d-inline-flex me-3">
                    <Image
                      src={images.imgPost1}
                      className="of-cover"
                      alt="image post 1"
                      width={113}
                      height={75}
                    />
                  </div>
                  <div className="card-news-2-text d-inline-flex flex-column">
                    <div className="d-inline-block text-color-primary inter fw-600 card-news-2-text-category">
                      News
                      <div className="d-inline-block text-color fw-400 card-news-2-text-date ms-1">
                        Rabu, 17 Juli 2024
                      </div>
                    </div>
                    <h6
                      className="inter fw-600 text-color-title card-news-2-text-title mb-lg-0 mb-2"
                      style={{ minHeight: 69 }}
                    >
                      Suzuki Hadir di GIIAS 2024, Perkenalkan BEV Terbaru eVX
                    </h6>
                  </div>
                </a>
              </section>
              {/* /Berita Utama Lainnya */}
            </div>
          </div>
        </div>
      </section>
      {/* /Headline */}
    </>
  );
}
