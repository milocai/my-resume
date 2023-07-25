import Link from "next/link"

const navItems = [
    { name: 'About me', href: '/' },
    { name: 'Academic', href: '/academic' },
    { name: 'Soft Skills', href: '/soft-skills' },
    { name: 'Technical Skills', href: '/technical-skills' }
]

//['About me', 'Academic', 'Soft Skills', 'Technical Skills']


export function Navigation() {
    
    return (
        <nav>
            <ul className="nav justify-content-center bg-primary-subtle">
                {
                    navItems.map(({name, href}) => (
                        <li className="nav-item" style={{ listStyle: 'none', display: 'inline', margin: '10px' }} key={name}>
                            <Link className="nav-link" href={href}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
