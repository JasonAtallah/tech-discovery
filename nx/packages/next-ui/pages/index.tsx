import {
  Avatar,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from '@nextui-org/react';
import Image from 'next/image';

export default function Index() {
  return (
    <div>
      <Navbar position="floating">
        <NavbarBrand>
          <div className="flex gap-2 items-center">
            <Image
              width={64}
              height={64}
              src="/mntn-logo.png"
              alt="MNTN logo"
            ></Image>
            <p>Marketplace</p>
          </div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Avatar
            isBordered
            color="primary"
            showFallback
            src="https://images.unsplash.com/broken"
            className="cursor-not-allowed"
          />
        </NavbarContent>
      </Navbar>
      <Button className="text-cyan-400" color="secondary">
        Click me
      </Button>
    </div>
  );
}
