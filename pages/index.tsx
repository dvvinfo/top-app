import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/HTag/Htag";
import P from "../components/P/P";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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
