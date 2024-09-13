import { Button, buttonVariants } from "@/components/ui/button";

export default function ContactOfficeInfo() {
  return (
    <div className="flex flex-col space-y-10">
      <h5 className="text-center font-bold uppercase leading-6">
        Visit our office
      </h5>
      <h2 className="text-center text-3xl font-bold leading-6">
        We help small business with big ideas
      </h2>
      <div className="my-10 flex flex-col items-center justify-around space-y-2 px-6 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-4 p-4 text-center font-bold">
          <i className="fas fa-phone-alt text-4xl text-blue-500"></i>
          <p className="">georgia.young@example.com</p>
          <p>georgia.young@example.com</p>
          <p>Get Support</p>
          <Button
            variant="ghost"
            className="text-blue mt-4 rounded-full border-2 border-blue-500 px-4 py-2 hover:bg-blue-500"
          >
            Submit Request
          </Button>
        </div>
        <div className="flex flex-col space-y-4 bg-slate-800 p-4 text-center font-bold text-white">
          <i className="fas fa-map-marker-alt text-4xl text-blue-500"></i>
          <p>georgia.young@example.com</p>
          <p>georgia.young@example.com</p>
          <Button
            variant="ghost"
            className="text-blue mt-4 rounded-full border-2 border-blue-500 px-4 py-2 hover:bg-blue-500"
          >
            Submit Request
          </Button>
        </div>
        <div className="flex flex-col space-y-4 p-4 text-center font-bold">
          <i className="fas fa-envelope text-4xl text-blue-500"></i>
          <p>georgia.young@example.com</p>
          <p>georgia.young@example.com</p>
          <p>Get Support</p>
          <Button
            variant="ghost"
            className="text-blue mt-4 rounded-full border-2 border-blue-500 px-4 py-2 hover:bg-blue-500"
          >
            Submit Request
          </Button>
        </div>
      </div>
    </div>
  );
}
