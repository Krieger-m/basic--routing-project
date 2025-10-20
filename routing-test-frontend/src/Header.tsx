import Link from "next/link";

interface LinkProps{
    label: string;
    description: string;
    href: string;
}

interface HeaderProps{
    navLinks: LinkProps[];
}

export const Header =({
    navLinks,
}: HeaderProps)=>{
    return (
        <div>
            {navLinks.map((link)=>(
                <Link href={link.href} key={link.href}>
                    <p>{link.label}</p>
                    <br/>
                </Link>
            ))}
            
        </div>
    )
}