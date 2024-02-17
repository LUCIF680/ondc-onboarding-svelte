<script>
  import { link } from "svelte-routing";

  // core components
  import AuthNavbar from "components/Navbars/AuthNavbar.svelte";
  import Footer from "components/Footers/Footer.svelte";

  const team1 = "/assets/img/team-1-800x800.jpg";
  const team2 = "/assets/img/team-2-800x800.jpg";
  const team3 = "/assets/img/team-3-800x800.jpg";
  const team4 = "/assets/img/team-4-470x470.png";
  const documentation = "/assets/img/documentation.png";

  const componentProfileCard = "/assets/img/component-profile-card.png";
  const componentInfoCard = "/assets/img/component-info-card.png";
  const componentInfo2 = "/assets/img/component-info-2.png";
  const componentMenu = "/assets/img/component-menu.png";
  const componentBtnPink = "/assets/img/component-btn-pink.png";
  const componentBtn = "/assets/img/component-btn.png";
</script>

<div>
  <AuthNavbar />
  <main>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="
          background-image: url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80);
        "
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">
                Start your ONDC story.
              </h1>
              <p class="mt-4 text-lg text-blueGray-200">
                Our Backend and your frontend lets you use the ONDC network to
                the fullest. Let us handle the backend, you focus on the
                application and business logic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>

    <section class="pb-20 bg-blueGray-200 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                >
                  <i class="fas fa-headset"></i>
                </div>
                <h6 class="text-xl font-semibold">Customer First</h6>
                <p class="mt-2 mb-4 text-blueGray-500">
                  Tailor the API to seamlessly integrate with your business
                  operations, enhancing efficiency and adaptability.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                >
                  <i class="fas fa-hammer"></i>
                </div>
                <h6 class="text-xl font-semibold">API Driven Ecosystem</h6>
                <p class="mt-2 mb-4 text-blueGray-500">
                  Not just an app, but a whole ecosystem. Our investments of
                  time is in 6+ applications, which offers you tailored services
                  specific to your needs.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                >
                  <i class="fas fa-store"></i>
                </div>
                <h6 class="text-xl font-semibold">One Stop Store</h6>
                <p class="mt-2 mb-4 text-blueGray-500">
                  One Stop Place for ONDC Netwrok, Regardless of what aspect of
                  business you are engaged in, We provides you opportunities to
                  accelerate your growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center mt-32">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-user-friends text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Working with us is a pleasure
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
            >
              Don't let your uses guess by attaching tooltips and popoves to any
              element. Just make sure you enable them first via JavaScript.
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
            >
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </p>
            <a use:link href="/" class="font-bold text-blueGray-700 mt-8">
              Check Notus Svelte!
            </a>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-red-400 justify-center items-center"
            >
              <img
                alt="..."
                src="/assets/img/technology.png"
                class="object-center w-1/2 align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-red-400 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">Top Notch Services</h4>
                <p class="text-md font-light mt-2 text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mx-auto overflow-hidden pb-20">
      <div class="flex flex-wrap items-center">
        <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
          <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-sitemap text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            CSS Components
          </h3>
          <p
            class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
            Every element that you need in a product comes built in as a
            component. All components fit perfectly with each other and can have
            different colours.
          </p>
          <div class="block pb-6">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Buttons
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Inputs
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Labels
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Menus
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Navbars
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Pagination
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Progressbars
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Typography
            </span>
          </div>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
            target="_blank"
            class="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
          >
            View All
            <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>

        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
          <div class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
            <img
              alt="..."
              src={componentBtn}
              class="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
            />
            <img
              alt="..."
              src={componentProfileCard}
              class="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
            />
            <img
              alt="..."
              src={componentInfoCard}
              class="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
            />
            <img
              alt="..."
              src={componentInfo2}
              class="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
            />
            <img
              alt="..."
              src={componentMenu}
              class="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
            />
            <img
              alt="..."
              src={componentBtnPink}
              class="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center pt-32">
        <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
          <div class="justify-center flex flex-wrap relative">
            <div class="my-4 w-full lg:w-6/12 px-4">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
                target="_blank"
              >
                <div class="bg-red-600 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                  />
                  <p class="text-lg text-white mt-4 font-semibold">Svelte</p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=ns-index"
                target="_blank"
              >
                <div
                  class="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8"
                >
                  <img
                    alt="..."
                    class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                  />
                  <p class="text-lg text-white mt-4 font-semibold">ReactJS</p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=ns-index"
                target="_blank"
              >
                <div
                  class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                >
                  <img
                    alt="..."
                    class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                  />
                  <p class="text-lg text-white mt-4 font-semibold">NextJS</p>
                </div>
              </a>
            </div>
            <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=ns-index"
                target="_blank"
              >
                <div class="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                  />
                  <p class="text-lg text-white mt-4 font-semibold">
                    JavaScript
                  </p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=ns-index"
                target="_blank"
              >
                <div
                  class="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8"
                >
                  <img
                    alt="..."
                    class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                  />
                  <p class="text-lg text-white mt-4 font-semibold">Angular</p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=ns-index"
                target="_blank"
              >
                <div
                  class="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8"
                >
                  <img
                    alt="..."
                    class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                  />
                  <p class="text-lg text-white mt-4 font-semibold">Vue.js</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
          <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-drafting-compass text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Javascript Components
          </h3>
          <p
            class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
            In order to create a great User Experience some components require
            JavaScript. In this way you can manipulate the elements on the page
            and give more options to your users.
          </p>
          <p
            class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
            We created a set of Components that are dynamic and come to help
            you.
          </p>
          <div class="block pb-6">
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Alerts
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Dropdowns
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Menus
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Modals
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Navbars
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Popovers
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Tabs
            </span>
            <span
              class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
            >
              Tooltips
            </span>
          </div>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
            target="_blank"
            class="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
          >
            View all
            <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>
      </div>
    </div>
    <section class="relative py-20">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300"
              >
                <i class="fas fa-rocket text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">A growing company</h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-red-600 bg-red-200 mr-3"
                      >
                        <i class="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        Carefully crafted components
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-red-600 bg-red-200 mr-3"
                      >
                        <i class="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Amazing page examples</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-red-600 bg-red-200 mr-3"
                      >
                        <i class="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Dynamic components</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4 pb-32 pt-48">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
          <div class="md:pr-12">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-file-alt text-xl"></i>
            </div>
            <h3 class="text-3xl font-semibold">Complex Documentation</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              This extension comes a lot of fully coded examples that help you
              get started faster. You can adjust the colors and also the
              programming language. You can change the text and images and
              you're good to go.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Built by Developers for Developers
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Carefully crafted code for Components
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Dynamic Javascript Components
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-xl"
            style="
              transform: scale(1) perspective(1040px) rotateY(-11deg)
                rotateX(2deg) rotate(2deg);
            "
            src={documentation}
          />
        </div>
      </div>
    </div>

    <section class="pb-20 relative block bg-blueGray-800">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-blueGray-800 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div class="flex flex-wrap text-center justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold text-white">Build something</h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
              Put the potentially record low maximum sea ice extent tihs year
              down to low ice. According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-12 justify-center">
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
              class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <i class="fas fa-medal text-xl"></i>
            </div>
            <h6 class="text-xl mt-5 font-semibold text-white">
              Excelent Services
            </h6>
            <p class="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
              class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <i class="fas fa-poll text-xl"></i>
            </div>
            <h5 class="text-xl mt-5 font-semibold text-white">
              Grow your market
            </h5>
            <p class="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
              class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <i class="fas fa-lightbulb text-xl"></i>
            </div>
            <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
            <p class="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="relative block py-24 lg:pt-0 bg-blueGray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
            >
              <div class="flex-auto p-5 lg:p-10">
                <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div class="relative w-full mb-3 mt-8">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Full Name"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    cols="80"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Type a message..."
                  />
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</div>
