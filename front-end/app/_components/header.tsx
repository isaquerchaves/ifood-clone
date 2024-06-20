"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Cart from "./cart/cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen ] = useState(false);

  return (
    <div className="flex justify-between pt-6 px-5">
      <Link href="/">
        <Image src="/logo.png" alt="FSW food" height={30} width={100} />
      </Link>

      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart />
      </Button>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetContent className="w-[90vw]">
            <SheetHeader>
              <SheetTitle className="text-left">Sacola</SheetTitle>
            </SheetHeader>

            <Cart />
          </SheetContent>
        </Sheet>
    </div>
  );
};

export default Header;
