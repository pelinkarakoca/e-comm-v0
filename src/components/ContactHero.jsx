import {} from "@fortawesome/fontawesome-svg-core";

export default function ContactHero() {
  return (
    <section className="mt-28 flex flex-col items-center space-y-8 px-6 lg:ml-20 lg:items-start">
      <h5 className="font-bold uppercase leading-6">Contact Us</h5>
      <h1 className="text-6xl font-bold">Get in touch today!</h1>
      <p className="mt-4 text-xl leading-6 text-accent">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="mt-4 space-y-2 text-2xl font-semibold leading-8">
        <p>Phone: +451 215 215</p>
        <p>Fax: +451 215 215</p>
      </div>
      <div className="mt-6 flex space-x-6">
        <a href="#" className="text-3xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-3xl">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-3xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-3xl">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}
