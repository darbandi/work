import { NavbarComp } from "@/components/navbar";
import { useStore } from "@/lib/store";
import { Header } from "./Header.style";

export const HeaderComp = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment)

  return (
    <Header>
      <NavbarComp />
      <button onClick={increment}>+</button>
      {count}
    </Header>
  );
};
