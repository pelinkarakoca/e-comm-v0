import { Button, buttonVariants } from "@/components/ui/button";

export default function ContactActionSection() {
  return (
    <div className="bg-white px-4 py-12">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-2xl font-bold">
          We Can't Wait To Meet You
        </h2>
        <h1 className="mb-8 text-center text-4xl font-bold">Let's Talk</h1>
        <div className="flex justify-center">
          <Button className="focus:shadow-outline rounded bg-primary px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
            Try it free now
          </Button>
        </div>
      </div>
    </div>
  );
}
