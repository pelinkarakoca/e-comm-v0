export default function Footer() {
  const infoSections = [
    {
      id: 1,
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      id: 2,
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      id: 3,
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      id: 4,
      title: "Resources",
      links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];
  return (
    <footer className="w-full border-2 border-pink-400 bg-white px-4 py-6 shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between border-2 border-blue-400 md:flex-row">
        <div className="mb-4 flex flex-col space-x-4 md:mb-0 md:flex-row">
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold">Company Info</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold">Legal</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold">Features</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold">Get In Touch</h3>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-foreground"
              />
              <button className="ml-2 rounded-md bg-secondary-foreground px-4 py-2 text-white hover:bg-secondary">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm text-gray-500">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );

  /*
   
 */
}
