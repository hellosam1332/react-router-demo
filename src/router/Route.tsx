import {ReactNode} from "react";

interface Props {
  path: string;
  component: ReactNode;
}

export default function Route({component}: Props) {
  return (
    <>
      {component}
    </>
  );
}
