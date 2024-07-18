import images from '@/public/img/images';
import Image from 'next/image';

export default function navFooter() {
  return (
    <>
      {/* Footer */}
      <footer>
        <nav className="footer px-2 pt-3">
          <div className="container py-3">
            {/* <div class="w-100 line gray-light mb-3"></div> */}
            <div className="row">
              <div className="col-12 col-lg-3 mb-3">
                <Image
                  src={images.logoWhiteKO}
                  alt="logo KO white"
                  height={20}
                  className="mb-3"
                />
                <p className="inter fs-14 text-white">
                  Paramount Hill Golf Blok GGT No 112 Paramount Serpong,
                  Pagedangan, Kab. Tangerang, 15332 Banten, Indonesia.
                </p>
                <p className="inter fs-14 text-white">
                  Telepon : +62 21-22227290 <br /> Email : redaksi@kabaroto.com
                </p>
                {/* <ul class="list-unstyled list-inline mb-0">
          <li class="list-inline-item"><a target="_blank" href="<?= getsosmed('instagram') ?>" class="py-1 px-2"><img src="<?= base_url() ?>/themes/2024/img/icon-sosmed/ico-ig.png" alt="" srcset="" width="22" height="22"></a></li>
          <li class="list-inline-item"><a target="_blank" href="<?= getsosmed('facebook') ?>" class="py-1 px-2"><img src="<?= base_url() ?>/themes/2024/img/icon-sosmed/ico-fb.png" alt="" srcset="" width="22" height="22"></a></li>
          <li class="list-inline-item"><a target="_blank" href="<?= getsosmed('twitter') ?>" class="py-1 px-2"><img src="<?= base_url() ?>/themes/2024/img/icon-sosmed/ico-tw.png" alt="" srcset="" width="22" height="22"></a></li>
          <li class="list-inline-item"><a target="_blank" href="<?= getsosmed('youtube') ?>" class="py-1 px-2"><img src="<?= base_url() ?>/themes/2024/img/icon-sosmed/ico-yt.png" alt="" srcset="" width="22" height="22"></a></li>
          <li class="list-inline-item"><a target="_blank" href="<?= getsosmed('tiktok') ?>" class="py-1 px-2"><img src="<?= base_url() ?>/themes/2024/img/icon-sosmed/ico-tt.png" alt="" srcset="" width="22" height="22"></a></li>
        </ul> */}
              </div>
              <div className="col-12 col-lg-9 mb-3">
                <div className="row mx-0">
                  <div className="col-6 col-lg-2">
                    <ul className="list-unstyled mb-lg-0 mb-3">
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/otonews"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          OtoNews
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/custom-mobil"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Mobil
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/custom-motor"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Motor
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/konsep"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Konsep
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/event"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Event
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/jip"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Jip
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/eksekutif"
                          className="d-inline-block text-decoration-none inter btn-footer-sport fs-14 fw-light mb-1 text-white"
                        >
                          Eksekutif
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-2">
                    <ul className="list-unstyled mb-lg-0 mb-3">
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/otosport"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          OtoSport
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/formula-one"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Formula One
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/motogp"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          MotoGP
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/bengkel-mobil"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Reli
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/internasional"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Internasional
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/nasional"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Nasional
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-2">
                    <ul className="list-unstyled mb-lg-0 mb-3">
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/otomodif"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          OtoModif
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/pernik"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Custom Mobil
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/aksesori"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Custom Motor
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/restorasi"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Restorasi
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-2">
                    <ul className="list-unstyled mb-lg-0 mb-3">
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/ototips"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          OtoTips
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/tips-mobil"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Tips Mobil
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/tips-motor"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Tips Motor
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/bengkel-mobil"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Bengkel Mobil
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/bengkel-motor"
                          className="d-inline-block text-decoration-none inter fs-14 fw-light mb-1 text-white"
                        >
                          Bengkel Motor
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url() ?>post/category/otokomersial"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 mt-3 text-white"
                        >
                          OtoKomersial
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-2">
                    <ul className="list-unstyled mb-lg-0 mb-3">
                      <li className="">
                        <a
                          href="<?= base_url('page/kontak') ?>"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          Kontak
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url('page/tentang') ?>"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          Tentang Kami
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url('page/redaksi') ?>"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          Redaksi
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="<?= base_url('page/pedoman-siber') ?>"
                          className="d-inline-block text-decoration-none inter fs-14 fw-bold mb-1 text-white"
                        >
                          Pedoman Siber
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div class="col-6 col-lg-3 mb-3">
        <div class="py-4 d-none d-lg-block"></div>
        <div class="collapse" id="collapseFooterGaleri">
          <div class="card card-body border-0 p-0">
            <ul class="list-unstyled mb-3 mb-lg-0">
              <li class=""><a href="<?= base_url() ?>post/category/infografis" class="mb-3 text-color text-decoration-none inter fs-14">Infografis</a></li>
              <li class=""><a href="<?= base_url() ?>post/category/video" class="mb-3 text-color text-decoration-none inter fs-14">Video</a></li>
              <li class=""><a href="<?= base_url() ?>post/category/foto" class="mb-3 text-color text-decoration-none inter fs-14">Foto</a></li>
            </ul>
          </div>
        </div>
        
      </div> */}
              {/* <div class="col-12 col-lg-3 mb-3">
        <h5 class="text-color-title inter fw-bold mb-4">Subscribe</h5>
        <form action="">
          <div class="mb-2">
            <input type="text" name="contactEmail" id="" placeholder="Email" class="rounded-2 border-0 gray-light py-2 px-2 w-100 fs-14">
          </div>
          <div class="mb-2">
            <input type="text" name="contactName" id="" placeholder="Name" class="rounded-2 border-0 gray-light py-2 px-2 w-100">
          </div>
          <div class="mb-2">
            <input type="text" name="contactTelp" id="" placeholder="No. Telepon" class="rounded-2 border-0 gray-light py-2 px-2 w-100">
          </div>
          <div class="mb-2">
            <textarea name="contactMessage" id="" placeholder="Pesan" rows="4" class="rounded-2 border-0 gray-light py-2 px-2 w-100"></textarea>
          </div>
          <div class="mb-2">
            <input type="submit" value="Subscribe" class="rounded-2 border-0 gray-title-bg text-white py-1 px-4 roboto fw-600 w-100 text-uppercase fs-14">
          </div>
        </form>
      </div> */}
            </div>
            <div className="w-100 line gray-light" />
            <div className="row align-items-center justify-content-center">
              <div className="col-6 col-lg-2 d-inline-flex align-items-center justify-content-center py-3">
                <a href="https://www.merahputih.com/" target="_blank">
                  <Image
                    src={images.logoWhiteMP}
                    alt="logo white merahputih.com"
                    width={130}
                    style={{ height: 'auto' }}
                  />
                </a>
              </div>
              <div className="col-6 col-lg-2 d-inline-flex align-items-center justify-content-center py-3">
                <a href="https://www.bolaskor.com/" target="_blank">
                  <Image
                    src={images.logoWhiteBS}
                    alt="logo white bolaskor.com"
                    width={130}
                    style={{ height: 'auto' }}
                  />
                </a>
              </div>
              <div className="col-6 col-lg-2 d-inline-flex align-items-center justify-content-center py-3">
                <a href="https://www.side.id/" target="_blank">
                  <Image
                    src={images.logoSideID}
                    alt="logo side.id"
                    width={130}
                    style={{ height: 'auto' }}
                  />
                </a>
              </div>
              <div className="col-6 col-lg-2 d-inline-flex align-items-center justify-content-center py-3">
                <a href="https://www.kamibijak.com/" target="_blank">
                  <Image
                    src={images.logoKB}
                    alt="logo kamibijak.com"
                    width={130}
                    style={{ height: 'auto' }}
                  />
                </a>
              </div>
              <div className="col-6 col-lg-2 d-inline-flex align-items-center justify-content-center py-3">
                <a href="https://www.esports.id/" target="_blank">
                  <Image
                    src={images.logoES}
                    alt="logo esports.id"
                    width={130}
                    style={{ backgroundColor: '#282828', height: 'auto' }}
                  />
                </a>
              </div>
            </div>
            <div className="w-100 line gray-light" />
            <div className="d-flex justify-content-center flex-column flex-lg-row py-3">
              <p className="text-decoration-none inter fs-12 mb-lg-0 text-lg-start text-center text-white">
                Copyright © 2024{' '}
                <a href="/" className="text-white">
                  kabaroto.com
                </a>
                , All Rights Reserved{' '}
              </p>
              {/* <ul class="list-unstyled list-inline mb-0 mx-auto mx-lg-0 text-center">
        <li class="list-inline-item"><a href="<?= base_url('page/about') ?>" class="mb-3 text-color text-decoration-none inter fs-12">Tentang Kami</a></li>
        <li class="list-inline-item"><a href="<?= base_url('page/pedoman-media-siber') ?>" class="mb-3 text-color text-decoration-none inter fs-12">Pedoman Media Siber</a></li>
        <li class="list-inline-item"><a href="<?= base_url('page/redaksi') ?>" class="mb-3 text-color text-decoration-none inter fs-12">Redaksi</a></li>
        <li class="list-inline-item"><a href="<?= base_url('page/kode-etik') ?>" class="mb-3 text-color text-decoration-none roboto">Kode Etik</a></li>
        <li class="list-inline-item"><a href="<?= base_url('page/contact') ?>" class="mb-3 text-color text-decoration-none inter fs-12">Kontak</a></li>
      </ul> */}
            </div>
          </div>
        </nav>
      </footer>
      {/* Footer */}
    </>
  );
}
