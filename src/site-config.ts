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
            text: 'My journey',
            href: '/my-journey'
        },
        {
            text: 'Your journey',
            href: '/your-journey'
        },
        {
            text: 'Your words',
            href: '/your-words'
        }
    ],
    footerNavLinks: [
        {
            text: 'My journey',
            href: '/my-journey'
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
            href: 'https://www.instagram.com/kate.mas_/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/katemaslenkova/'
        }
    ]
};

export default siteConfig;
