import Link from "next/link";

interface LinkProps{    // linkprops according to the structure of the link-element in the strapi-api
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
            {navLinks.map((link)=>(     // renders links according to the mapped link-elements
                <Link href={link.href} key={link.href}>    
                    <p>{link.label}</p>
                    <br/>
                </Link>
            ))}
            
        </div>
    )
}