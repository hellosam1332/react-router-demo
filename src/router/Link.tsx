import {ReactNode, useContext} from "react";
import {RouterContext} from "./Router";

interface Props {
  to: string;
  children: ReactNode;
}

export default function Link({to, children}: Props) {
  const {changePath} = useContext(RouterContext);

  return (
    <button type="button" onClick={() => changePath(to)}>
      {children}
    </button>
  );
}
