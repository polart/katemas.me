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
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'My journey',
            href: '/about'
        },
        {
            text: 'Your journey',
            href: '/blog'
        },
        {
            text: 'Your words',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'My journey',
            href: '/about'
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
    ],
    hero: {
        title: 'Take a step closer to a career and life you truly love',
        text: "I'm Kate, an ICF-certified coach with a tech leadership background, passionate about helping you unlock your potential and create a career and life you love. My journey has taken me across different countries, but one thing has always stayed the same: **my commitment to people and their growth**.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
