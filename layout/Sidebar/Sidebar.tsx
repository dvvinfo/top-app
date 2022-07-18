import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <>
      <div {...props}>Sidebar</div>
    </>
  );
};
