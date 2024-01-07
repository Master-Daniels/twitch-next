import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    style: ["italic", "normal"],
});

const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-white rounded-full p-1">
                <Image src="/images/spooky.svg" alt="twitch-nextjs logo" height={80} width={80} />
            </div>
            <div className={cn("flex flex-col items-center", poppins.className)}>
                <p className="text-xl font-semibold">Twitch Next</p>
                <p className="text-sm text-muted-foreground">Let&apos;s play together!</p>
            </div>
        </div>
    );
};

export { Logo };
