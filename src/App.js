import RocketPicture from "./rocketdab.png"
import RocketMan from "./rocketman.png"
import RocketRide from "./rocketride.png"
import RocketLaunch from "./rocketlaunch.png"
import React, { useState } from "react"
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white ">
      <header className="bg-teal-700 text-white sticky top-0 z-20">
        <section className="mx-auto p-4 flex justify-between items-center max-w-4xl">
          <h1 className="text-3xl font-medium ">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button onClick={toggleVisibility}
              id="hambuger-button" className="text-3xl md:hidden focus:outline-none">
              <a href="#mobile-menu" className="hover:opacity-90">&#9776;</a>
            </button>
            <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
              <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
              <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
              <a href="#contact" className="hover:opacity-90">Contact Us</a>
            </nav>
          </div>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} z-10`}
        onClick={() => setIsVisible(false)}>
      <section
          className={`absolute top-0 left-0 w-full h-full bg-transparent transition-all duration-300 ease-in-out ${
            isVisible ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          <div className="flex flex-col justify-center h-full text-white text-right pr-10">
            <a href="#hero" className=" text-5xl my-10">Home</a>
            <a href="#rockets" className=" text-5xl my-10">Our Rockets</a>
            <a href="#testimonials" className=" text-5xl my-10">Testimonials</a>
            <a href="#contact" className=" text-5xl my-10">Contact</a>
          </div>
        </section>
        </div>
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-20 widescreen:section-min-height">
          <article className="sm:w-1/2">
            <h2
              className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              We Boldy Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone
              Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              Think Acme Rockets.
            </p>
          </article>
          <img className="w-1/2" src={RocketPicture} alt="RocketPicture"></img>
        </section>
        <hr className="w-1/2 mx-auto dark:bg-white bg-black h-0.5"></hr>
        <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row">
            <li className="mx-auto mb-6 sm:mx-4 py-6 px-2 border border-solid w-1/2 sm:w-2/3 flex flex-col dark:bg-slate-200 bg-slate-700 rounded-3xl shadow-slate-600 shadow-2xl">
              <img className="w-1/2 mx-auto mb-6" src={RocketMan} alt="RocketMan"></img>
              <h2 className="dark:text-slate-600 text-white m-auto text-3xl">Explorer</h2>
              <h2 className="dark:text-slate-600 text-white m-auto text-3xl sm:hidden opacity-80">$</h2>
              <h2 className="dark:text-slate-600 text-white m-auto text-2xl hidden sm:block opacity-80 text-center">Affordable Exploration</h2>
            </li>
            <li className=" mx-auto mb-6 sm:mx-4 border py-6 px-2 border-solid w-1/2 sm:w-2/3 flex flex-col dark:bg-slate-100 bg-slate-800 rounded-3xl shadow-slate-600 shadow-2xl">
              <img className="w-1/2 mx-auto mb-6" src={RocketRide} alt="RocketRide"></img>
              <h2 className="dark:text-slate-600 text-white m-auto text-3xl">Adventurer</h2>
              <h2 className="dark:text-slate-600 text-white m-auto text-3xl sm:hidden opacity-80">$$</h2>
              <h2 className="dark:text-slate-600 text-white m-auto text-2xl hidden sm:block opacity-80">Best Selling</h2>
            </li>
            <li className="mx-auto mb-6 sm:mx-4 border py-6 px-2 border-solid w-1/2 sm:w-2/3 flex flex-col dark:bg-white bg-slate-900 rounded-3xl shadow-slate-600 shadow-2xl">
              <img className="w-1/2 mx-auto mb-6" src={RocketLaunch} alt="RocketLaunch"></img>
              <h2 className="dark:text-slate-600 text-white m-auto text-3xl">Infinity</h2>
              <h2 className="dark:text-slate-600 text-white m-auto text-3xl sm:hidden opacity-80">$$$</h2>
              <h2 className="dark:text-slate-600 text-white m-auto text-2xl hidden sm:block opacity-80">Luxury Starship</h2>
            </li>
          </ul>
        </section>
        <hr className="w-1/2 mx-auto dark:bg-white bg-black h-0.5"></hr>
        <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Testimonials
          </h2>
          <figure className="my-12 ">
            <blockquote className=" bg-teal-700 dark:bg-gray-950 pl-14 pr-8 py-12 rounded-3xl relative shadow-slate-400 dark:shadow-slate-900 shadow-xl  hover:bg-pink-50 ">
              <p className="text-center pl-4 text-slate-200 font-bold text-3xl mt-2 before:content-['\201C'] 
                before:top-0 before:left-0 before:absolute before:transform before:translate-x-2 
                before:translate-y-2 before:font-serif before:text-white before:opacity-25 before:text-9xl 
                after:content-['\201D'] after:right-3 after:absolute after:transform after:translate-x-2 
                after:translate-y-2 after:font-serif after:text-white after:opacity-25 after:text-9xl hover:text-slate-400">
                Acme
                has always been there
                for me. Their Explorer rocket arrived in a wooden crate as expected.
                Life-long customer! A++ shopping experience.</p>
            </blockquote>
            <figcaption className="text-2xl text-right text-slate-500 italic mt-2"> &#8212;Marvin The Martian &amp; K-9</figcaption>
          </figure>
          <figure className="my-12 ">
            <blockquote className=" bg-teal-700 dark:bg-gray-950 pl-14 pr-8 py-12 rounded-3xl relative shadow-slate-400 dark:shadow-slate-900 shadow-xl">
              <p className="text-center pl-4 text-slate-200 font-bold text-3xl mt-2 before:content-['\201C'] 
                before:top-0 before:left-0 before:absolute before:transform before:translate-x-2 
                before:translate-y-2 before:font-serif before:text-white before:opacity-25 before:text-9xl 
                after:content-['\201D'] after:right-3 after:absolute after:transform after:translate-x-2 
                after:translate-y-2 after:font-serif after:text-white after:opacity-25 after:text-9xl">
                I knew I not only wanted &#8212; <span class="italic">I needed</span> &#8212; Acme's Infinity
                Rocket for my mission in space. Acme delivered in one day! Nothing says <q class="italic">Take
                  me
                  to your leader</q> like Acme's Infinity Rocket! 💯
              </p>
            </blockquote>
            <figcaption className="text-2xl text-right text-slate-500 italic mt-2"> &#8212;Buzz Lightyear</figcaption>
          </figure>
          <figure className="my-12 ">
            <blockquote className=" bg-teal-700 dark:bg-gray-950 pl-14 pr-8 py-12 rounded-3xl relative shadow-slate-400 dark:shadow-slate-900 shadow-xl">
              <p className="text-center pl-4 text-slate-200 font-bold text-3xl mt-2 before:content-['\201C'] 
                before:top-0 before:left-0 before:absolute before:transform before:translate-x-2 
                before:translate-y-2 before:font-serif before:text-white before:opacity-25 before:text-9xl 
                after:content-['\201D'] after:right-3 after:absolute after:transform after:translate-x-2 
                after:translate-y-2 after:font-serif after:text-white after:opacity-25 after:text-9xl">
                The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several
                occassions. <span class="italic">This makes me very, very angry!</span> Nevertheless, K-9
                and I have awarded Acme the
                Martian contract for space exploration rockets based on Acme's quality and sturdy designs.
              </p>
            </blockquote>
            <figcaption className="text-2xl text-right text-slate-500 italic mt-2"> &#8212;Wile E. Coyote, Genius</figcaption>
          </figure>
        </section>
        <hr className="w-1/2 mx-auto dark:bg-white bg-black h-0.5"></hr>
        <section id="contact" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Contact Us
          </h2>
          <form action="" className="flex flex-col">
            <label for="submit" className="text-xl dark:text-slate-50 text-slate-900" >Subject:</label>
            <input type="text" className="border border-solid rounded-xl h-10 mx-auto p-3 w-full mt-2 text-slate-500 placeholder:font-bold" placeholder="Your Subject"></input>
            <label for="message" className="text-xl mt-5 dark:text-slate-50 text-slate-900">Message:</label>
            <textarea className="border border-solid rounded-xl mx-auto h-40 p-3 w-full mt-2 text-slate-500" placeholder="Your Message"></textarea>
            <button className="border border-teal-700 w-28 bg-teal-700 rounded-xl h-10 mt-4 mx-auto text-slate-50">Submit</button>
          </form>
        </section>
      </main>
      <footer id="footer" className="bg-teal-700 text-slate-100 pt-1">
        <section className="max-w-4xl mx-auto p-4 flex flex-row sm:justify-between">
          <address className="w-1/3">
            <p className="text-slate-100 font-bold">Sarvesh VK</p>
            <p>1234 Elm Street, Springfield, IL</p>
          </address>
          <nav className="items-center text-xl text-center flex flex-col w-1/3" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
            <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
            <a href="#contact" className="hover:opacity-90">Contact Us</a>
          </nav>
          <div class="flex flex-col w-1/3">
            <p class="text-right">Copyright &copy; <span id="year">2022</span></p>
            <p class="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
