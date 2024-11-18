export interface ILink {
   label: string;
   link: string;
   header?: boolean;
}

export const links: ILink[] = [
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
