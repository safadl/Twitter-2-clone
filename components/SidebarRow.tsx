import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element | any;
  title: string;
}
function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="group cursor-pointer flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 group">
      <Icon className="h-6 w-6" />
      <p className="text-base font-light hidden group-hover:text-twitter md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
