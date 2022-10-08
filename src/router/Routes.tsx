import {ReactElement, useContext} from "react";
import {RouterContext} from "./Router";

interface Props {
  children: Iterable<ReactElement>
}

export default function Routes({children}: Props) {
  const {path} = useContext(RouterContext);

  const target = Array.from(children).find((node) => node.props.path === path);

  if (!target) {
    return null;
  }

  return (
    <>
      {target}
    </>
  );
}
