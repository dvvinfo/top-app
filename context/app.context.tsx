import { createContext, ReactNode, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLeverCategory } from "../interfaces/page.intrefces";

export interface IAppContent {
  menu: MenuItem[];
  firstCategory: TopLeverCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContent>({
  menu: [],
  firstCategory: TopLeverCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: IAppContent & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };
  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
