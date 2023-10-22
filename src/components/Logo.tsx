import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const Logo = () => {
    const [isFadeIn, setIsFadeIn] = useState(false);

    useEffect(() => {
        setIsFadeIn(true);
      }, []);
      
    return (
        <div>

        </div>
    )
}

export default Logo;