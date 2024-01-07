import { Logo } from "./_components/logo";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full w-full grid place-content-center space-y-6">
            <Logo />
            {children}
        </div>
    );
}
