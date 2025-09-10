
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url?: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
  action?: () => void;
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
      action?: () => void;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/lovable-uploads/d94e1b20-0b59-4780-b234-09c04cff5b01.png",
    alt: "Israel Coworking",
    title: "Israel Coworking",
  },
  menu = [],
  mobileExtraLinks = [],
  auth = {
    login: { text: "Login", url: "#" },
    signup: { text: "Contrate Agora!", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden justify-between lg:flex h-20 lg:h-24">
          <div className="flex items-center">
            <Link to={logo.url} className="flex items-center">
              <img src={logo.src} className="w-32 h-32 object-contain" alt={logo.alt} />
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2 items-center">
            <Button 
              onClick={auth.signup.action}
              className="bg-company-orange hover:bg-company-orange-2 text-white font-bold px-6 py-2 rounded-full"
              size="sm"
            >
              {auth.signup.text}
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between h-16">
            <Link to={logo.url} className="flex items-center">
              <img src={logo.src} className="w-20 h-20 object-contain" alt={logo.alt} />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center">
                      <img src={logo.src} className="w-16 h-16 object-contain" alt={logo.alt} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  {mobileExtraLinks.length > 0 && (
                    <div className="border-t py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-company-blue hover:bg-gray-50 hover:text-company-orange transition-colors"
                            to={link.url}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-3">
                    <Button 
                      onClick={auth.signup.action}
                      className="bg-company-orange hover:bg-company-orange-2 text-white font-bold w-full"
                    >
                      {auth.signup.text}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-company-blue">
        <NavigationMenuTrigger className="text-company-blue hover:text-company-orange font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-company-orange active:text-company-orange focus:text-company-blue">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3 bg-white border shadow-lg rounded-md">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  {subItem.action ? (
                    <button
                      onClick={subItem.action}
                      className="flex w-full select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-company-orange text-left"
                    >
                      {subItem.icon}
                      <div>
                        <div className="text-sm font-semibold text-company-blue">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-sm leading-snug text-company-blue/70">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </button>
                  ) : (
                    <Link
                      className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-company-orange"
                      to={subItem.url}
                    >
                      {subItem.icon}
                      <div>
                        <div className="text-sm font-semibold text-company-blue">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-sm leading-snug text-company-blue/70">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  // Para itens com action (como Contato) - sem animação de sublinhado
  if (item.action) {
    return (
      <NavigationMenuItem key={item.title}>
        <button
          onClick={item.action}
          className="inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium text-company-blue transition-colors hover:text-company-orange bg-transparent focus:outline-none active:text-company-orange focus:text-company-blue"
        >
          {item.title}
        </button>
      </NavigationMenuItem>
    );
  }

  // Para itens com URL (como Blog) - sem animação de sublinhado
  return (
    <NavigationMenuItem key={item.title}>
      <Link
        className="inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium text-company-blue transition-colors hover:text-company-orange bg-transparent focus:outline-none active:text-company-orange focus:text-company-blue"
        to={item.url}
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline text-company-blue hover:text-company-orange active:text-company-orange focus:text-company-blue">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            subItem.action ? (
              <button
                key={subItem.title}
                onClick={subItem.action}
                className="flex w-full select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-gray-50 hover:text-company-orange text-left active:text-company-orange focus:text-company-blue"
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold text-company-blue">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-company-blue/70">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </button>
            ) : (
              <Link
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-gray-50 hover:text-company-orange active:text-company-orange focus:text-company-blue"
                to={subItem.url}
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold text-company-blue">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-company-blue/70">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            )
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  if (item.action) {
    return (
      <button 
        key={item.title} 
        onClick={item.action} 
        className="font-semibold text-company-blue hover:text-company-orange w-full text-left active:text-company-orange focus:text-company-blue"
      >
        {item.title}
      </button>
    );
  }

  return (
    <Link 
      key={item.title} 
      to={item.url} 
      className="font-semibold text-company-blue hover:text-company-orange active:text-company-orange focus:text-company-blue"
    >
      {item.title}
    </Link>
  );
};

export { Navbar1 };
