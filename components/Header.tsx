import { BananaIcon } from "./icons/BananaIcon";
import HeaderClient from "./HeaderClient";
import ConnectButton from "./ConnectButton";

export default function Header() {
  return (
    <HeaderClient>
      <div className="flex items-center space-x-2">
        <BananaIcon className="h-12 w-12 text-yellow-600" />
        <span className="hidden md:block text-md md:text-xl font-bold tracking-wider text-white">
          BananaSwap
        </span>
      </div>
      <ConnectButton />
    </HeaderClient>
  );
}
