import { GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button/Button";
import Htag from "../components/HTag/Htag";
import P from "../components/P/P";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" onClick={() => setCounter((x) => x + 1)}>
        кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        кнопка
      </Button>
      <P size="l">Большой</P>
      <P size="m">средний</P>
      <P size="s">Маленький</P>
      <Tag size="s" color="ghost">
        ghost
      </Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="s" color="green">
        green
      </Tag>
      <Tag size="m" color="primary">
        primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {firstCategory}
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
