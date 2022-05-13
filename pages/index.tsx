import Button from "../components/Button/Button";
import Htag from "../components/HTag/Htag";
import P from "../components/P/P";


export default function Home():JSX.Element  {
  return (
    <>
      <Htag tag ='h1'>text</Htag>
      <Button appearance='primary'>кнопка</Button>
      <Button appearance='ghost' arrow="right">кнопка</Button>
      <P size="l">Большой</P>
      <P size="m">средний</P>
      <P size="s">Маленький</P>

    </>
  )
}
