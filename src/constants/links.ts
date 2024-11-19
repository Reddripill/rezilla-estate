export type LinkType = {
   label: string;
   link: string;
   header?: boolean;
};

export type CountryLinkType = Omit<LinkType, "header">;

export const countries: CountryLinkType[] = [
   {
      label: "Canada",
      link: "/",
   },
   {
      label: "United States",
      link: "/",
   },
   {
      label: "Germany",
      link: "/",
   },
   {
      label: "Africa",
      link: "/",
   },
   {
      label: "India",
      link: "/",
   },
];
export const links: LinkType[] = [
   {
      label: "Home",
      link: "/",
      header: true,
   },
   {
      label: "About",
      link: "/",
      header: true,
   },
   {
      label: "Listings",
      link: "/",
      header: true,
   },
   {
      label: "Services",
      link: "/",
      header: true,
   },
   {
      label: "Blogs",
      link: "/",
      header: true,
   },
   {
      label: "Become a Agent",
      link: "/",
      header: false,
   },
];
