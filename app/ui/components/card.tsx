'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function cardNews() {
  return (
    <>
      {/* <!-- News Card --> */}
      <Link
        href="javascript:void(0);"
        className={`card-news d-flex mb-lg-4 justify-content-start wow animate__fadeIn mb-2 pb-3`}
      >
        <div className="card-news-img me-3">
          <Image
            src="/illustration.png"
            width={259}
            height={161}
            className="of-cover"
            alt="illustration img"
            loading="lazy"
          />
        </div>
        <div className="card-news-text">
          <h6 className="inter fw-600 text-color-title card-news-text-title mb-md-1 mb-0">
            Title berita
          </h6>
          <div className="d-inline-block text-color-primary inter fw-bold card-news-text-category mb-md-2 mb-0">
            kategori &nbsp;{' '}
            <span className="d-inline-block text-color fw-400">
              15 Jun 2024
            </span>
          </div>
          <div className="inter fw-400 text-color card-news-text-shortdesc d-none d-md-inline-block mb-lg-2 mb-0">
            short description
          </div>
        </div>
      </Link>
      {/* <!-- /News Card --> */}
    </>
  );
}
