import Logo from "../assets/logo.svg";
import Play from "../assets/play.svg";
import Line from "../assets/orangeline.png";
import Plant from "../assets/plant.png";
import NeedWater from "../assets/needwater.png";
import Scanner from "../assets/scanner.svg";
import Tumblr from "../assets/tumblr.png";
import Zoom from "../assets/zoom.png";
import Tiktok from "../assets/tiktok.png";
import Behance from "../assets/behance.svg";
import Instagram from "../assets/instagram.svg";
import Diagnosa from "../assets/diagnosa.svg";
import DiagnosaTanaman from "../assets/diagnosatanaman.png";
import Pengingat from "../assets/pengingat.svg";
import Informasi from "../assets/informasi.svg";
import MobileScreen from "../assets/mobilescreen.png";
import TipsTrik from "../assets/tipstrik.png";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Insta from "../assets/insta.png";
import Arrow from "../assets/arrowwhite.svg";
import Plant1 from "../assets/plant1.png";
import Plant2 from "../assets/plant2.png";
import Plant3 from "../assets/plant3.png";
import Plant4 from "../assets/plant4.png";
import Quote from "../assets/quote.png";
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import ArrowRight from "../assets/arrowright.png";

function Home() {
  return (
    <div className="font-jakartasans px-2 lg:px-10 py-4">
      <header className="flex items-center justify-center px-12 mb-16">
        <img src={Logo} alt="" className="" />
        <div className="flex mx-auto font-medium gap-x-10 mt-auto text-[#6D706F]">
          <h2 className="hover:text-black hover:cursor-pointer">Beranda</h2>
          <h2 className="hover:text-black hover:cursor-pointer">Fitur</h2>
          <h2 className="hover:text-black hover:cursor-pointer">Informasi</h2>
          <h2 className="hover:text-black hover:cursor-pointer">Kontak</h2>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#ECF8EF] px-20 py-12 lg:py-36 rounded-2xl flex relative mb-16">
        <img
          src={Plant}
          alt=""
          className="h-[35rem] absolute right-0 bottom-0 hidden lg:block"
        />
        <img
          src={NeedWater}
          alt=""
          className="z-10 absolute bottom-8 right-6 hidden lg:block"
        />
        <img
          src={Scanner}
          alt=""
          className="absolute right-72 hidden lg:block"
        />
        <div>
          <div className="relative mb-6">
            <h1 className="font-semibold text-xl text-center lg:text-left lg:text-5xl lg:w-[36rem]">
              Pantau kesehatan tanaman anda dalam sekali potret
            </h1>
            <img
              src={Line}
              alt=""
              className="absolute -bottom-5 hidden lg:block"
            />
          </div>
          <h2 className="text-[#6D706F] text-center lg:text-left text-lg mb-10">
            Dapatkan informasi tentang tanaman anda hanya dalam <br /> genggaman
            anda, begitu menyenangkan bukan?
          </h2>
          <div className="flex gap-x-10">
            <button className="px-6 py-4 text-white font-semibold bg-[#2EB24D] rounded-lg shadow-md">
              Mulai Sekarang
            </button>
            <div className="flex px-6 py-4 bg-white font-semibold rounded-lg shadow-md">
              <img src={Play} alt="" className="max-h-10 mr-2" />
              <p>Cara Kerjanya</p>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      {/* Social Media App Icon */}
      <section className="lg:flex flex-col lg:flex-row max-h-8 justify-center items-center lg:justify-evenly mb-12 lg:mb-36 gap-y-4 lg:gap-y-0 hidden ">
        <img src={Tumblr} alt="" />
        <img src={Zoom} alt="" />
        <img src={Tiktok} alt="" />
        <img src={Behance} alt="" />
        <img src={Instagram} alt="" />
      </section>

      {/* Ketahui Semua Informasi */}
      <section className="flex flex-col lg:flex-row justify-center items-center space-x-12 mb-40">
        <div className="lg:mr-24">
          <h2 className="font-semibold text-xl text-center lg:text-left lg:text-5xl mb-6 w-[26rem]">
            Ketahui semua informasi tentang tanaman anda
          </h2>
          <h3 className="text-sm text-center lg:text-left lg:text-lg text-[#6D706F] mb-8 w-[24rem]">
            Menambah wawasan anda tentang merawat tanaman anda hanya dalam satu
            genggaman
          </h3>
        </div>
        <div className="space-y-1">
          <img src={Diagnosa} alt="" className="mb-4" />
          <h4 className="font-semibold text-xl">Diagnosa penyakit</h4>
          <p className="text-[#6D706F]">
            Ketahui penyakit tanaman <br /> anda dengan sekali potret
          </p>
        </div>
        <div className="space-y-1 mt-16">
          <img src={Pengingat} alt="" className="mb-4" />
          <h4 className="font-semibold text-xl">Pengingat jadwal</h4>
          <p className="text-[#6D706F]">
            Atur jadwal untuk menyiram <br /> tanaman dengan rutin
          </p>
        </div>
        <div className="space-y-1">
          <img src={Informasi} alt="" className="mb-4" />
          <h4 className="font-semibold text-xl">Informasi tanaman</h4>
          <p className="text-[#6D706F]">
            Akses semua informasi baru <br />
            tentang tanaman hias
          </p>
        </div>
      </section>

      {/* Diagnosa Tanaman */}
      <section className="flex justify-center items-center lg:gap-x-24">
        <div>
          <img src={DiagnosaTanaman} alt="" className="hidden lg:block" />
        </div>
        <div className="mb-24 flex flex-col items-center lg:items-start">
          <h2 className="font-semibold text-xl text-center lg:text-left lg:text-5xl lg:w-[36rem]">
            Diagnosa penyakit tanaman hias dengan sekali scan
          </h2>
          <p className="text-sm text-center lg:text-left lg:text-lg text-[#6D706F] mt-3 w-[20rem]">
            Scan untuk mendapatkan informasi penyakit tentang tanaman hias anda
          </p>
          <img
            src={DiagnosaTanaman}
            alt=""
            className="h-[20rem] lg:hidden mt-8"
          />
          <button
            className="px-6 py-4 mt-12 bg-[#2EB24D] shadow-lg shadow-[#2EB24D] 
          rounded-lg text-white font-semibold"
          >
            Coba Sekarang
          </button>
        </div>
      </section>

      {/* Pengingat */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center items-center">
          <div>
            <h2 className="text-center lg:text-left text-xl lg:text-5xl lg:max-w-[36rem] font-semibold mb-6 lg:mb-3">
              Atur pengingat untuk jadwal penyiraman tanaman anda
            </h2>
            <p className="text-center lg:text-left lg:max-w-[27rem] text-sm lg:text-lg text-[#6D706F]">
              Tentukan jadwal penyiraman secara rutin sehingga anda tidak lupa
              untuk menyiram tanaman anda
            </p>
            <button
              className="px-6 py-4 mt-12 bg-[#2EB24D] shadow-lg shadow-[#2EB24D] 
          rounded-lg text-white font-semibold hidden lg:block"
            >
              Coba Sekarang
            </button>
          </div>
          <div>
            <img src={MobileScreen} alt="" className="mb-6 lg:max-w-[35rem]" />
          </div>
          <button
            className="px-6 py-4 bg-[#2EB24D] shadow-lg shadow-[#2EB24D] 
          rounded-lg text-white lg:hidden font-semibold"
          >
            Coba Sekarang
          </button>
        </div>
      </section>

      {/* Tips & Trik */}
      <section className="flex items-center justify-center px-12 mb-12">
        <div className="hidden lg:block">
          <img src={TipsTrik} alt="" className="max-w-[35rem]" />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center lg:ml-auto">
          <h2 className="text-center lg:text-left text-xl lg:text-5xl lg:max-w-[36rem] font-semibold mb-6 lg:mb-3">
            Tambah wawasan anda tentang tanaman hias lebih luas
          </h2>
          <p className="text-center lg:text-left lg:max-w-[29rem] text-sm lg:text-lg lg:mb-8 text-[#6D706F]">
            Dirancang khusus untuk para penggemar tanaman hias untuk menambah
            pengetahuan tentang tanaman
          </p>
          <img src={TipsTrik} alt="" className="lg:hidden" />
          <button
            className="px-6 py-4 bg-[#2EB24D] shadow-lg shadow-[#2EB24D] 
          rounded-lg text-white font-semibold"
          >
            Coba Sekarang
          </button>
        </div>
      </section>

      {/* Testimoni */}
      <section className="mb-6 lg:flex lg:justify-between lg:px-12 ">
        <div>
          <h2 className="text-center lg:text-left lg:text-5xl font-semibold lg:text-5x mb-2 lg:mb-6 max-w-[35rem]">
            Apa yang dikatakan oleh pengguna kami
          </h2>
          <p className="text-[#6D706F] mb-4 text-xs lg:text-lg text-center lg:text-left max-w-[31rem] mx-auto lg:mx-0">
            Unggah foto tanaman anda kedalam kotak dan dapatkan informasi
            penyakit tentang tanaman tersebut
          </p>
        </div>
        <div
          className=" p-4 lg:py-12 rounded-lg flex relative items-center"
          style={{
            background: "linear-gradient(to left, #ECF8EF 75%, #FFFFFF 25%)",
          }}
        >
          <img
            src={ArrowRight}
            alt=""
            className="absolute right-3 bg-[#2EB24D] p-1 lg:p-2 rounded-full bottom-auto top-auto"
          />
          <div className="max-w-[300px] lg:max-w-6xl lg:w-[25rem] lg:px-6 lg:mr-8 bg-white rounded-md p-2 space-y-2">
            <img src={Quote} alt="" />
            <h3 className="text-xs lg:text-xl font-semibold">
              Wow, Canggih bet!!
            </h3>
            <p className="text-xs text-[#6D706F]">
              Saya tidak menyangka akan ada aplikasi secanggih ini, dengan
              aplikasi ini saya tidak perlu takut lagi tentang kesehatan tanaman
            </p>
            <div className="flex items-center space-x-2">
              <img src={Profile1} alt="" />
              <h4 className="text-xs font-semibold">Xiao Mei</h4>
            </div>
          </div>
          <div className="max-w-[300px] lg:max-w-6xl lg:w-[25rem] lg:px-6 bg-white rounded-md p-2 space-y-2 hidden lg:block">
            <img src={Quote} alt="" />
            <h3 className="text-xs lg:text-xl font-semibold">Supa App!!</h3>
            <p className="text-xs text-[#6D706F]">
              Damn bro, this app is so supa good. Saya sekarang merasa seperti
              dokter tanaman, jika ada teman yang bertanya saya tinggal scan
            </p>
            <div className="flex items-center space-x-2">
              <img src={Profile2} alt="" />
              <h4 className="text-xs font-semibold">Jason Wongso</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosa Sekarang*/}
      <section className="mb-4 lg:mb-20 lg:py-28 rounded-sm lg:shadow-md lg:shadow-[#1419160a] ">
        <div className="space-y-4 mb-28">
          <h2 className="lg:text-5xl font-semibold text-center">
            Diagnosa Sekarang
          </h2>
          <p className="text-[#6D706F] text-xs lg:text-lg text-center max-w-[31rem] mx-auto">
            Unggah foto tanaman anda kedalam kotak dan dapatkan informasi
            penyakit tentang tanaman tersebut
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="mb-4 font-semibold text-white text-center text-xs py-4 px-6 bg-[#2EB24D] rounded-md shadow-lg shadow-[#2EB24D]">
            Unggah Foto
          </button>
          <p className="text-xs mb-4">Unggah foto tanaman anda disini</p>
          <div className="border-t-2 border-[#E3E3E3] pt-4 flex items-center space-x-2">
            <p className="text-[#A6A8A6] text-xs">
              Atau coba dengan <br />
              beberapa foto ini
            </p>
            <img src={Plant1} alt="" className="h-6 lg:h-full" />
            <img src={Plant2} alt="" className="h-6 lg:h-full" />
            <img src={Plant3} alt="" className="h-6 lg:h-full" />
            <img src={Plant4} alt="" className="h-6 lg:h-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="lg:hidden">
          <img src={Logo} alt="" className="mx-auto mb-4" />
          <p className="text-center text-sm text-[#6D706F] mb-2">
            Botanify merupakan aplikasi karya anak bangsa. Botanify membantu
            anda menemukan penyakit pada tanaman anda
          </p>
          <div className="flex justify-center gap-x-4 mb-4">
            <img src={Linkedin} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Insta} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 pt-2 border-t-2 b-[#E3E3E3]">
            <p className="text-xs text-[#6D706F] ">
              &#169; 2024 Botanify All right reserved
            </p>
            <p className="text-xs text-[#6D706F]">
              <span className="font-bold">12,290,526</span> tanaman telah discan
              dalam 3 bulan
            </p>
          </div>
        </div>
        <div className=" justify-between mb-4 hidden lg:flex">
          <div>
            <div>
              <img src={Logo} alt="" className="mb-2" />
              <p className="text-lg text-[#6D706F] max-w-[26rem] mb-8">
                Botanify merupakan aplikasi karya anak bangsa. Botanify membantu
                anda menemukan penyakit pada tanaman anda
              </p>
            </div>
            <div className="flex space-x-4">
              <img src={Linkedin} alt="" />
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Insta} alt="" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold">Sitemap</h2>
            <h3 className="text-[#6D706F]">Beranda</h3>
            <h3 className="text-[#6D706F]">Fitur</h3>
            <h3 className="text-[#6D706F]">Informasi</h3>
            <h3 className="text-[#6D706F]">Kontak</h3>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold">Company</h2>
            <h3 className="text-[#6D706F]">Teams</h3>
            <h3 className="text-[#6D706F]">Karir</h3>
            <h3 className="text-[#6D706F]">Bantuan</h3>
            <h3 className="text-[#6D706F]">API</h3>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold">Resources</h2>
            <h3 className="text-[#6D706F]">Marketplace</h3>
            <h3 className="text-[#6D706F]">Subscriptions</h3>
            <h3 className="text-[#6D706F]">Testimonials</h3>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold">Keep in touch</h2>
            <p className="text-[#6D706F]">
              Never miss any news from us, <br />
              subscribe now{" "}
            </p>
            <div className="relative flex items-center bg-[#F6F6F6] px-2 rounded-md">
              <input
                type="text"
                placeholder="Your email"
                className="text-[#A6A8A6] bg-[#F6F6F6] py-3 pl-4 rounded-md"
              />
              <img
                src={Arrow}
                alt=""
                className=" bg-[#FF7B54] p-2 rounded-md "
              />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between border-t-2 border-[#E3E3E3] pt-4 hidden">
          <p className=" text-[#6D706F] ">
            &#169; 2024 Botanify All right reserved
          </p>
          <p className=" text-[#6D706F]">
            <span className="font-bold text-black">12,290,526</span> tanaman
            telah discan dalam 3 bulan
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
