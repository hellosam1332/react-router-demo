import {createContext, ReactNode, useState} from "react";

interface ContextProps {
  path: string;
  changePath(path: string): void;
}

export const RouterContext = createContext<ContextProps>({
  path: '',
  changePath: () => undefined,
});

interface Props {
  children: ReactNode;
}

export default function Router({children}: Props) {
  const [path, setPath] = useState(window.location.pathname);

  const defaultContextValue: ContextProps = {
    path,
    changePath: setPath,
  }

  return (
    <RouterContext.Provider value={defaultContextValue}>
      {children}
    </RouterContext.Provider>
  );
}
