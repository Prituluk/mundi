import { Copyright } from "./footerInterfaces";

interface Props {
  copyright: Copyright;
}
export const CopyrightSection = ({ copyright }: Props) => {

  return (
    <>

      <p>{copyright.data_notice}</p>
      <p>{copyright.text}</p>
    </>
  )
}