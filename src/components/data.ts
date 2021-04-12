import { IMenuItemProps } from "./HamburgerMenu/MenuItem/MenuItem";

export const headerMenuLinks: string[] = ["Product", "Company", "Connect", "Login", "Sign Up"]

export const propsMenuItems: IMenuItemProps[] = [
  {
    menuItemTitle: "Item 1",
    subMenuItems: [
      { title: "SubItem 1a", link: "#" },
      { title: "SubItem 1b", link: "#" }
    ]
  },
  {
    menuItemTitle: "Item 2",
    subMenuItems: [
      { title: "SubItem 2a", link: "#" },
      { title: "SubItem 2b", link: "#" },
      { title: "SubItem 3b", link: "#" }
    ]
  },
  {
    menuItemTitle: "Item 3",
    subMenuItems: [
      { title: "SubItem 3a", link: "#" },
      { title: "SubItem 3b", link: "#" },
      { title: "SubItem 3c", link: "#" },
      { title: "SubItem 3d", link: "#" }
    ]
  }
];