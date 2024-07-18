'use client';

import Image from 'next/image';
import Link from 'next/link';

import images from '@/public/img/images';

export default function navHeader() {
  return (
    <>
      {/* Navbar Header */}
      <header id="nav-header">
        <div id="header-logo" className="d-none d-lg-block white">
          <div className="container px-2">
            <div className="d-flex">
              <Link className="navbar-brand d-inline-flex me-0" href="/">
                <Image src={images.logoKO} alt="Logo" height={60} />
              </Link>
            </div>
          </div>
        </div>
        <nav
          id="header-top"
          className="navbar navbar-expand-lg navbar-light white border-bottom top-0"
        >
          <div className="container px-2">
            <div className="d-flex justify-content-between w-100 px-lg-0 align-items-center">
              <div className="d-inline-flex d-lg-none align-items-center h-100 py-2">
                <button
                  id="btn-nav-header"
                  className="hamburger hamburger--slider"
                  type="button"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
              <Link
                className="navbar-brand d-inline-flex d-lg-none me-0"
                href="/"
              >
                <Image src={images.logoKO} alt="Logo" height={36} />
              </Link>
              <div className="d-none d-lg-inline-flex">
                <ul className="list-unstyled list-inline mb-0">
                  <li className="list-inline-item">
                    <div className="btn-dropdown-otonews px-2 py-3">
                      <Link
                        href="<?= base_url() ?>post/category/otonews"
                        className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                      >
                        Otonews
                      </Link>
                      <section
                        id="dropdown-menu-otonews"
                        className="border-1 border-bottom black"
                      >
                        <div className="container px-2">
                          <ul className="list-unstyled list-inline d-inline-block mb-0">
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/mobil"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Mobil
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/motor"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Motor
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/konsep"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Konsep
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/event"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Event
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/eksekutif"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Eksekutif
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/jip"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Jip
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="btn-dropdown-otosport px-2 py-3">
                      <a
                        href="<?= base_url() ?>post/category/otosport"
                        className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                      >
                        Otosport
                      </a>
                      <section
                        id="dropdown-menu-otosport"
                        className="border-1 border-bottom black"
                      >
                        <div className="container px-2">
                          <ul className="list-unstyled list-inline d-inline-block mb-0">
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/formula-one"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Formula One
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/motogp"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                MotoGP
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/reli"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Reli
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/internasional"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Internasional
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/nasional"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Nasional
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="btn-dropdown-otomodif px-2 py-3">
                      <a
                        href="<?= base_url() ?>post/category/otomodif"
                        className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                      >
                        Otomodif
                      </a>
                      <section
                        id="dropdown-menu-otomodif"
                        className="border-1 border-bottom black"
                      >
                        <div className="container px-2">
                          <ul className="list-unstyled list-inline d-inline-block mb-0">
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/komunitas-mobil"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Custom Mobil
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/komunitas-motor"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Custom Motor
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/restorasi"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Restorasi
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="btn-dropdown-ototips px-2 py-3">
                      <a
                        href="<?= base_url() ?>post/category/ototips"
                        className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                      >
                        Ototips
                      </a>
                      <section
                        id="dropdown-menu-ototips"
                        className="border-1 border-bottom black"
                      >
                        <div className="container px-2">
                          <ul className="list-unstyled list-inline d-inline-block mb-0">
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/tips-mobil"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Tips Mobil
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/tips-motor"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Tips Motor
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/bengkel-mobil"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Bengkel Mobil
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="<?= base_url() ?>post/category/bengkel-motor"
                                className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                              >
                                Bengkel Motor
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="btn-dropdown-otokomersial px-2 py-3">
                      <a
                        href="<?= base_url() ?>post/category/otokomersial"
                        className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                      >
                        Otokomersial
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="d-inline-flex align-items-center flex-row">
                <div className="d-none d-lg-inline-flex align-items-center me-2 flex-row">
                  <ul className="list-unstyled list-inline mb-0">
                    <li className="list-inline-item me-2">
                      <Link
                        target="_blank"
                        href="<?= getsosmed('instagram') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconIg}
                          alt="icon ig"
                          width={15}
                          height={15}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item me-2">
                      <Link
                        target="_blank"
                        href="<?= getsosmed('facebook') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconFb}
                          alt="icon fb"
                          width={15}
                          height={15}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item me-2">
                      <Link
                        target="_blank"
                        href="<?= getsosmed('twitter') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconTw}
                          alt="icon twitter"
                          width={15}
                          height={15}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item me-2">
                      <Link
                        target="_blank"
                        href="<?= getsosmed('youtube') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconYt}
                          alt="icon yt"
                          width={15}
                          height={15}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item me-2">
                      <Link
                        target="_blank"
                        href="<?= getsosmed('tiktok') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconTt}
                          alt="icon tiktok"
                          width={15}
                          height={15}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="search-mobile d-inline-flex">
                  <button
                    type="button"
                    className="d-inline-block border-0 bg-transparent px-2 py-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modalSearch"
                  >
                    <Image
                      src={images.logoSrcBlack}
                      alt="logo search black"
                      width={22}
                      height={22}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav
          id="header-top-mobile"
          className="navbar navbar-expand-lg navbar-light white d-lg-none border-bottom border"
        >
          <div className="container px-2">
            <div className="d-flex justify-content-between w-100 px-lg-0 align-items-center">
              <div className="d-inline-flex d-lg-none align-items-center h-100 py-2">
                <button
                  id="btn-nav-header-mobile"
                  className="hamburger hamburger--slider"
                  type="button"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
              <Link className="navbar-brand d-inline-flex me-0" href="/">
                <Image src={images.logoKO} alt="logo" height={36} />
              </Link>
              <div className="search-top d-none d-lg-inline-flex">
                <form
                  action="<?php echo base_url('search') ?>"
                  method="POST"
                  acceptCharset="utf-8"
                  encType="multipart/form-data"
                >
                  <input className="roboto px-3 py-2" type="text" name="q" />
                  <input
                    type="text"
                    className="roboto px-3 py-2"
                    placeholder="Cari Berita"
                    name="q"
                  />
                  <button type="submit" className="d-inline-block px-4 py-2">
                    <Image
                      src={images.logoSrc}
                      alt="logo search"
                      width={18}
                      height={18}
                      style={{ marginTop: '-5px' }}
                    />
                  </button>
                </form>
              </div>
              <div className="search-mobile d-inline-flex d-lg-none">
                <button
                  type="button"
                  className="d-inline-block border-0 bg-transparent px-2 py-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modalSearch"
                >
                  <Image
                    src={images.logoSrcBlack}
                    alt="logo search black"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <nav
          id="header-menu"
          className="navbar navbar-expand-lg navbar-light white d-none"
        >
          <div className="container px-2">
            <div className="d-flex justify-content-between align-items-center w-100 px-0">
              <Link
                id="logo-header-menu"
                className="navbar-brand d-none d-lg-inline-flex me-0"
                href="<?= base_url() ?>"
              >
                <Image src={images.logoKO} alt="logo" height={36} />
              </Link>
              <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <div className="btn-dropdown-otonews px-2 py-3">
                    <a
                      href="<?= base_url() ?>post/category/otonews"
                      className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                    >
                      Otonews
                    </a>
                    <section
                      id="dropdown-menu-otonews"
                      className="border-1 border-bottom black"
                    >
                      <div className="container px-2 text-center">
                        <ul className="list-unstyled list-inline d-inline-block mb-0">
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/mobil"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Mobil
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/motor"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Motor
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/konsep"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Konsep
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/event"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Event
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/eksekutif"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Eksekutif
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/jip"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Jip
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="btn-dropdown-otosport px-2 py-3">
                    <a
                      href="<?= base_url() ?>post/category/otosport"
                      className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                    >
                      Otosport
                    </a>
                    <section
                      id="dropdown-menu-otosport"
                      className="border-1 border-bottom black"
                    >
                      <div className="container px-2 text-center">
                        <ul className="list-unstyled list-inline d-inline-block mb-0">
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/formula-one"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Formula One
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/motogp"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              MotoGP
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/reli"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Reli
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/internasional"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Internasional
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/nasional"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Nasional
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="btn-dropdown-otomodif px-2 py-3">
                    <a
                      href="<?= base_url() ?>post/category/otomodif"
                      className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                    >
                      Otomodif
                    </a>
                    <section
                      id="dropdown-menu-otomodif"
                      className="border-1 border-bottom black"
                    >
                      <div className="container px-2 text-center">
                        <ul className="list-unstyled list-inline d-inline-block mb-0">
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/komunitas-mobil"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Custom Mobil
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/komunitas-motor"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Custom Motor
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/restorasi"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Restorasi
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="btn-dropdown-ototips px-2 py-3">
                    <a
                      href="<?= base_url() ?>post/category/ototips"
                      className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                    >
                      Ototips
                    </a>
                    <section
                      id="dropdown-menu-ototips"
                      className="border-1 border-bottom black"
                    >
                      <div className="container px-2 text-center">
                        <ul className="list-unstyled list-inline d-inline-block mb-0">
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/tips-mobil"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Tips Mobil
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/tips-motor"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Tips Motor
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/bengkel-mobil"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Bengkel Mobil
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="<?= base_url() ?>post/category/bengkel-motor"
                              className="d-inline-block text-uppercase fw-600 text-decoration-none inter px-2 py-2 text-white"
                            >
                              Bengkel Motor
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="btn-dropdown-otokomersial px-2 py-3">
                    <a
                      href="<?= base_url() ?>post/category/otokomersial"
                      className="text-uppercase fw-700 text-decoration-none inter ls-1 text-black"
                    >
                      Otokomersial
                    </a>
                  </div>
                </li>
              </ul>
              <div className="d-inline-flex align-items-center flex-row">
                <div className="d-none d-lg-inline-flex align-items-center me-2 flex-row">
                  <ul className="list-unstyled list-inline mb-0">
                    <li className="list-inline-item me-2">
                      <a
                        target="_blank"
                        href="<?= getsosmed('instagram') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconIg}
                          alt="icon IG"
                          width={15}
                          height={15}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item me-2">
                      <a
                        target="_blank"
                        href="<?= getsosmed('facebook') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconFb}
                          alt="icon FB"
                          width={15}
                          height={15}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item me-2">
                      <a
                        target="_blank"
                        href="<?= getsosmed('twitter') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconTw}
                          alt="icon TW"
                          width={15}
                          height={15}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item me-2">
                      <a
                        target="_blank"
                        href="<?= getsosmed('youtube') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconYt}
                          alt="icon Yt"
                          width={15}
                          height={15}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item me-2">
                      <a
                        target="_blank"
                        href="<?= getsosmed('tiktok') ?>"
                        className="px-1 py-1"
                      >
                        <Image
                          src={images.iconTt}
                          alt="icon Tt"
                          width={15}
                          height={15}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="search-mobile d-inline-flex">
                  <button
                    type="button"
                    className="d-inline-block border-0 bg-transparent px-2 py-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modalSearch"
                  >
                    <Image
                      src={images.logoSrcBlack}
                      alt="logo serach black"
                      width={22}
                      height={22}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav
          id="nav-header-mobile"
          className="navbar navbar-expand-lg navbar-light white d-block d-lg-none"
        >
          <div className="container-fluid h-100">
            <div className="d-flex w-100 flex-column h-100">
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <a
                    href="<?= base_url() ?>post/category/otonews"
                    className="fs-14 text-color-title text-uppercase text-decoration-none inter fw-700 ls-1 px-2 py-1"
                  >
                    <Image
                      src={images.logoOtonews}
                      alt="logo otonews"
                      width={18}
                      height={18}
                      className="me-2"
                    />
                    Otonews
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="<?= base_url() ?>post/category/otosport"
                    className="fs-14 text-color-title text-uppercase text-decoration-none inter fw-700 ls-1 px-2 py-1"
                  >
                    <Image
                      src={images.logoOtosport}
                      alt="logo otosport"
                      width={18}
                      height={18}
                      className="me-2"
                    />
                    Otosport
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="<?= base_url() ?>post/category/otomodif"
                    className="fs-14 text-color-title text-uppercase text-decoration-none inter fw-700 ls-1 px-2 py-1"
                  >
                    <Image
                      src={images.logoOtomodif}
                      alt="logo otomodif"
                      width={18}
                      height={18}
                      className="me-2"
                    />
                    Otomodif
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="<?= base_url() ?>post/category/ototips"
                    className="fs-14 text-color-title text-uppercase text-decoration-none inter fw-700 ls-1 px-2 py-1"
                  >
                    <Image
                      src={images.logoOtotips}
                      alt="logo ototips"
                      width={18}
                      height={18}
                      className="me-2"
                    />
                    Ototips
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="<?= base_url() ?>post/category/otokomersial"
                    className="fs-14 text-color-title text-uppercase text-decoration-none inter fw-700 ls-1 px-2 py-1"
                  >
                    <Image
                      src={images.logoOtokomersial}
                      alt="logo otokomersial"
                      width={18}
                      height={18}
                      className="me-2"
                    />
                    Otokomersial
                  </a>
                </li>
              </ul>
              <div className="d-flex flex-column mt-auto pb-5">
                <div className="w-100 line gray-light mb-2" />
                <ul className="list-unstyled list-inline mb-1 text-center">
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      href="<?= getsosmed('instagram') ?>"
                      className="px-1 py-1"
                    >
                      <Image
                        src={images.iconIg}
                        alt="icon IG"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      href="<?= getsosmed('facebook') ?>"
                      className="px-1 py-1"
                    >
                      <Image
                        src={images.iconFb}
                        alt="icon fb"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      href="<?= getsosmed('twitter') ?>"
                      className="px-1 py-1"
                    >
                      <Image
                        src={images.iconTw}
                        alt="icon twitter"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      href="<?= getsosmed('youtube') ?>"
                      className="px-1 py-1"
                    >
                      <Image
                        src={images.iconYt}
                        alt="icon yt"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      href="<?= getsosmed('tiktok') ?>"
                      className="px-1 py-1"
                    >
                      <Image
                        src={images.iconTt}
                        alt="icon tt"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                </ul>
                <div className="w-100 line gray-light" />
                <div className="d-flex justify-content-between flex-column flex-lg-row py-2 pb-5">
                  <ul className="list-unstyled list-inline mx-lg-0 mx-auto mb-0">
                    <li className="list-inline-item">
                      <a
                        href="<?= base_url('page/tentang') ?>"
                        className="text-color text-decoration-none roboto fs-8 mb-3"
                      >
                        Tentang Kami
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="<?= base_url('page/redaksi') ?>"
                        className="text-color text-decoration-none roboto fs-8 mb-3"
                      >
                        Redaksi
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="<?= base_url('page/pedoman-siber') ?>"
                        className="text-color text-decoration-none roboto fs-8 mb-3"
                      >
                        Pedoman Siber
                      </a>
                    </li>
                  </ul>
                  <div className="w-100 pb-3" />
                  <p className="text-color text-decoration-none roboto mb-lg-0 text-lg-start fs-8 text-center">
                    © Copyright 2024 - kabaroto.com
                  </p>
                </div>
                <div className="w-100 pb-3" />
              </div>
            </div>
          </div>
        </nav>

        <div className="overlay-menu-mobile" />
      </header>
      <div className="header-space w-100" />
      {/* /Navbar Header */}
      {/* Modal */}
      <div
        className="modal fade"
        id="modalSearch"
        tabIndex={-1}
        aria-labelledby="modalSearchLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content rounded-0">
            <div className="modal-body">
              <div className="search-1 d-flex w-100 bg-white p-1">
                <form
                  action="<?php echo base_url('search') ?>"
                  method="POST"
                  acceptCharset="utf-8"
                  className="w-100 d-inline-flex flex-column flex-lg-row"
                  encType="multipart/form-data"
                >
                  <input
                    className="w-100 fs-14 mb-lg-0 mb-2 border-0 px-2"
                    type="text"
                    name="q"
                  />
                  <button
                    type="submit"
                    className="primary-gradient fs-13 ms-lg-2 border-0 px-5 py-2 text-white"
                  >
                    <Image
                      src={images.logoSrc}
                      alt="logo search"
                      width={12}
                      height={12}
                      style={{ marginTop: '-2px' }}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
