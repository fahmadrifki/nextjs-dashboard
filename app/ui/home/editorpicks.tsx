'use client';

import images from '@/public/img/images';
import Image from 'next/image';

import AliceCarousel from 'react-alice-carousel';

export default function editorPicks() {
  const responsive = {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1200: {
      items: 5
    }
  };

  const items = [
    <div className="item d-inline-flex p-3">
      <a
        href="javascript:void(0)"
        className="card-news-headline-2 d-block position-relative gray-light mb-3"
      >
        <div className="card-news-headline-2-img mb-2">
          <Image
            src={images.imgPost1}
            alt="<?= $p->title ?>"
            className="w-100 of-cover h-auto"
          />
        </div>
        <div className="card-news-headline-2-text p-3">
          <h6 className="open-sans fw-bold text-color-title card-news-headline-2-text-title mb-1 text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sint facere odit quia placeat repellendus ad atque vitae animi nihil quidem libero sit esse illum, dolores neque? Provident, ullam dicta?
          </h6>
          <div className="d-inline-block text-color-primary inter fw-bold card-news-headline-2-text-category">
            Ototips
            <div className="d-inline-block text-color fs-8 fw-400 card-news-headline-2-text-date ms-1">
              Kamis, 18 Jul 2024
            </div>
          </div>
        </div>
      </a>
    </div>,
    <div className="item d-inline-flex p-3">
      <a
        href="javascript:void(0)"
        className="card-news-headline-2 d-block position-relative gray-light mb-3"
      >
        <div className="card-news-headline-2-img mb-2">
          <Image
            src={images.imgPost1}
            alt="<?= $p->title ?>"
            className="w-100 of-cover h-auto"
          />
        </div>
        <div className="card-news-headline-2-text p-3">
          <h6 className="open-sans fw-bold text-color-title card-news-headline-2-text-title mb-1 text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sint facere odit quia placeat repellendus ad atque vitae animi nihil quidem libero sit esse illum, dolores neque? Provident, ullam dicta?
          </h6>
          <div className="d-inline-block text-color-primary inter fw-bold card-news-headline-2-text-category">
            Ototips
            <div className="d-inline-block text-color fs-8 fw-400 card-news-headline-2-text-date ms-1">
              Kamis, 18 Jul 2024
            </div>
          </div>
        </div>
      </a>
    </div>,
    <div className="item d-inline-flex p-3">
      <a
        href="javascript:void(0)"
        className="card-news-headline-2 d-block position-relative gray-light mb-3"
      >
        <div className="card-news-headline-2-img mb-2">
          <Image
            src={images.imgPost1}
            alt="<?= $p->title ?>"
            className="w-100 of-cover h-auto"
          />
        </div>
        <div className="card-news-headline-2-text p-3">
          <h6 className="open-sans fw-bold text-color-title card-news-headline-2-text-title mb-1 text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sint facere odit quia placeat repellendus ad atque vitae animi nihil quidem libero sit esse illum, dolores neque? Provident, ullam dicta?
          </h6>
          <div className="d-inline-block text-color-primary inter fw-bold card-news-headline-2-text-category">
            Ototips
            <div className="d-inline-block text-color fs-8 fw-400 card-news-headline-2-text-date ms-1">
              Kamis, 18 Jul 2024
            </div>
          </div>
        </div>
      </a>
    </div>,
    <div className="item d-inline-flex p-3">
      <a
        href="javascript:void(0)"
        className="card-news-headline-2 d-block position-relative gray-light mb-3"
      >
        <div className="card-news-headline-2-img mb-2">
          <Image
            src={images.imgPost1}
            alt="<?= $p->title ?>"
            className="w-100 of-cover h-auto"
          />
        </div>
        <div className="card-news-headline-2-text p-3">
          <h6 className="open-sans fw-bold text-color-title card-news-headline-2-text-title mb-1 text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sint facere odit quia placeat repellendus ad atque vitae animi nihil quidem libero sit esse illum, dolores neque? Provident, ullam dicta?
          </h6>
          <div className="d-inline-block text-color-primary inter fw-bold card-news-headline-2-text-category">
            Ototips
            <div className="d-inline-block text-color fs-8 fw-400 card-news-headline-2-text-date ms-1">
              Kamis, 18 Jul 2024
            </div>
          </div>
        </div>
      </a>
    </div>,
  ];

  const EditorPicks = () => (
    <AliceCarousel
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={2000}
      infinite
      touchTracking={true}
      disableDotsControls
      disableButtonsControls
      items={items}
      responsive={responsive}
    />
  );

  return (
    <>
      {/* News Editor Pick List */}
      <section className="white pb-lg-2 s-sport py-3">
        <div className="px-lg-3 pt-lg-2 container px-2">
          {/* Title category Sport */}
          <div className="title-section d-flex justify-content-between align-items-center px-lg-1 mb-2 px-0">
            <h4 className="open-sans text-color-primary fw-bold text-uppercase mb-0">
              Pilihan <span className="text-black">Editor</span>
            </h4>
          </div>
          <div className="gray-light w-100 line mb-3" />
          {/* /Title category Sport */}

          <div className="d-flex gap-3">
            <EditorPicks />
          </div>
        </div>
      </section>
      {/* /News Editor Pick List */}
    </>
  );
}
