import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ShopPageHeaderRunner from "./ShopPageHeaderRunner";
export default function ShopPageHeader() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center justify-between space-y-10 lg:flex-row lg:px-5 lg:py-7">
        <h3 className="font-mono text-2xl font-bold leading-8">Shop</h3>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-sm font-semibold text-black"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm font-semibold text-gray-300">
                  Shop
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <ShopPageHeaderRunner />
    </div>
  );
}
