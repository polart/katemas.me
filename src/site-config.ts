export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'KateMas.me',
    description: '',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About me',
            href: '/about-me'
        },
        {
            text: 'Services',
            href: '/services'
        },
        {
            text: 'Client stories',
            href: '/client-love'
        }
    ],
    footerNavLinks: [
        {
            text: 'About me',
            href: '/about-me'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/messycareers/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/kate-mas/'
        }
    ]
};

export default siteConfig;
