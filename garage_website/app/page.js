export default function Page() {
  return (
    <div className="flex flex-col bg-white mx-[120px] ">
      <div className="flex flex-col bg-black justify-center items-center gap-y-10  rounded-4xl">
        <div className="flex flex-row justify-center items-center flex-wrap  gap-x-32 bg-gray-900 rounded-2xl p-[20px]">
          <div className="flex flex-col rounded-2xl ">
            <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png" />
          </div>
          <div className="flex flex-row justify-between items-center gap-x-4 hidden md:flex">
            <div className="text-xl font-bold"> Home</div>

            <div className="text-xl font-bold">About Us</div>
            <div className="text-xl font-bold">Services</div>
            <div className="text-xl font-bold">Shop</div>
            <div className="text-xl font-bold">Blog</div>
            <div className="text-xl font-bold">Contact</div>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-10 hidden md:flex">
            <div className="flex flex-1">
              <img
                src="https://th.bing.com/th/id/R.473fb80eaa44d329ef45a74b0aa3b2c9?rik=XbX2RCH8M1TiSg&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f190-1903850_facebook-logo-black-white-transparent-background-black-facebook.png&ehk=pHQPvEwqJ26x4MpkKKNM1rQkQGAxPupo%2bZ%2bd5oWjPrQ%3d&risl=&pid=ImgRaw&r=0"
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="flex flex-1">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.gp8r8kzo5Lb6TdMni6XwJwHaHw?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div className="flex flex-1">
              <img
                src="https://www.pngitem.com/pimgs/m/109-1091787_pinterest-logo-png-image-file-logo-black-and.png"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div className="flex flex-1">
              <img
                src="https://i.pinimg.com/originals/41/7d/12/417d1217f81c18188b1834846d155d8d.webp"
                className="w-8 h-8 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center flex-wrap md:gap-x-[150px] py-[100px] relative z-10">
  <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-y-[10px] text-center md:text-left md:text-2xl">
    <div className="text-5xl font-bold text-gray-900 dark:text-white">
      Where Quality Is A <br /> Service Meets The <br />
      <span className="text-red-600">Open Road</span>
    </div>
    <div className="text-base md:text-2xl font-medium text-gray-700 dark:text-gray-300 mt-4">
      Car service is essential for maintaining the performance <br />
      and longevity of your vehicle. From oil changes to full car servicing.
    </div>
    <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-6 mt-6">
      <button className="rounded-3xl border-4 border-red-300 px-6 py-3 w-[250px] text-center hover:bg-red-100 dark:hover:bg-red-700 transition-colors duration-300">
        Get Started
      </button>
      <div className="h-16 w-16 rounded-full bg-blue-400 flex items-center justify-center hidden md:flex">
        <button className="text-white text-xl"></button>
      </div>
    </div>
  </div>

  <div className="flex flex-1 justify-center items-center mt-8 md:mt-0 hidden sm:flex">
    <img
      className="rounded-[120px] h-[400px] w-[400px] object-cover"
      src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-2.jpg"
    />
  </div>
</div>

      </div>
      <div className="flex justify-center relative -top-10 z-0">
        <div className="bg-white flex justify-around items-center text-black text-4xl font-bold w-full max-w-[800px] h-[120px] rounded-2xl shadow-lg px-10 flex-wrap">
          <div>600+</div>
          <div>2k+</div>
          <div>53+</div>
          <div>3k+</div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center flex-wrap border border-gray-200 dark:border-gray-700 shadow-lg rounded-3xl px-6 sm:px-10 py-12 text-center mb-[50px] transition-colors duration-300">
        <div className="text-red-600 dark:text-red-400 text-2xl font-medium mb-2">
          Latest Service
        </div>

        <div className="text-black dark:text-white text-4xl sm:text-5xl font-semibold leading-tight mb-[10px]">
          Your Trusted Car Provider <br /> Keeping Your Vehicle
        </div>

        <div className=" flex flex-row flex-wrap justify-between items-start gap-6">
          <div className="flex flex-col justify-center items-center border border-gray-300 dark:border-gray-600 rounded-2xl w-full sm:w-[30%] p-6 bg-white dark:bg-gray-800 hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-700 hover:text-white shadow-md transition-all duration-300">
            <div className="h-[60px] w-[60px] rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <button className="text-white text-xl"></button>
            </div>
            <div className="text-black dark:text-white text-2xl font-semibold mb-2">
              Transformation Advising
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-[18px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div className="flex flex-col justify-center items-center border border-gray-300 dark:border-gray-600 rounded-2xl w-full sm:w-[30%] p-6 bg-white dark:bg-gray-800 hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-700 hover:text-white shadow-md transition-all duration-300">
            <div className="h-[60px] w-[60px] rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <button className="text-white text-xl"></button>
            </div>
            <div className="text-black dark:text-white text-2xl font-semibold mb-2">
              Ease Drive Maintainence
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-[18px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div className="flex flex-col justify-center items-center border border-gray-300 dark:border-gray-600 rounded-2xl w-full sm:w-[30%] p-6 bg-white dark:bg-gray-800 hover:bg-gradient-to-tr hover:from-red-500 hover:to-red-700 hover:text-white shadow-md transition-all duration-300">
            <div className="h-[60px] w-[60px] rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <button className="text-white text-xl"></button>
            </div>
            <div className="text-black dark:text-white text-2xl font-semibold mb-2">
              Elite Auto Services
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-[18px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center p-6 sm:p-10 shadow-2xl rounded-3xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col justify-center sm:w-1/2 text-center sm:text-left gap-6">
            <div className="text-red-500 dark:text-red-400 text-lg font-semibold">
              About
            </div>
            <div className="text-black dark:text-white text-4xl font-bold leading-snug">
              Fast and Reliable Car Care
              <br />
              Your Car, Our Priority
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-base">
              Car service is essential for maintaining the performance and
              longevity of your vehicle. From oil changes to full diagnostics,
              we provide top-notch care.
            </div>
            <ul className="flex flex-col gap-3 text-black dark:text-gray-200 font-semibold list-disc list-inside">
              <li>Fast and Reliable Car Care – Your Car, Our Priority</li>
              <li>Free with Our Services – Care for Your Car</li>
              <li>Top-notch Care for Your Vehicle</li>
              <li>Your Trusted Car Service Provider</li>
            </ul>
          </div>

          <div className="flex justify-center sm:w-1/2 mt-6 sm:mt-0 hidden md:flex">
            <img
              src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
              alt="About Image"
              className="w-4/5 max-w-sm h-auto object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-6 p-6 sm:p-8 mt-12 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl">
          <img
            src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-5.png"
            className="w-24 sm:w-28 object-contain"
          />
          <img
            src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-1.png"
            className="w-24 sm:w-28 object-contain"
          />
          <img
            src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-3.png"
            className="w-24 sm:w-28 object-contain"
          />
          <img
            src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-4.png"
            className="w-24 sm:w-28 object-contain"
          />
        </div>
      </div>
    </div>
  );
}