import Button from "../components/Button/Button";
import Htag from "../components/HTag/Htag";


export default function Home():JSX.Element  {
  return (
    <>
      <Htag tag ='h1'>text</Htag>
      <Button appearance='primary'>кнопка</Button>
      <Button appearance='ghost'>кнопка</Button>

    </>
  )
}
