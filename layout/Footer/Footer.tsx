import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import {format} from 'date-fns'
export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop 2022 - {format(new Date(), "yyy")} все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
