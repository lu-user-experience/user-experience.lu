export const url = process.env.URL || 'http://localhost:8080';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Interfaces After Troy';
export const siteDescription = 'A blog about what remains after digital systems break their original promise of being human-centered.';
export const siteType = 'Person'; // schema
export const locale = 'en_UK';
export const lang = 'en';
export const skipContent = 'Skip to content';
// for the site content author, used in <head> meta and post h-card microformat
export const author = {
  name: 'Len Dierckx', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  // fediverse: '@lene@front-end.social', // used for highlighting journalism on the fediverse. Can be Mastodon, Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, etc. https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
  me: [
    // loop over verified rel=me profiles in the HTML <head>
    'https://astuanax.com'
  ]
};
// for the site developer, used for footer credits and humans.txt info
export const creator = {
    name: 'Len Dierckx', // i.e. Lene Saile - page / blog author's name. Must be set.
    avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
    // fediverse: '@lene@front-end.social', // used for highlighting journalism on the fediverse. Can be Mastodon, Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, etc. https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
    me: [
        // loop over verified rel=me profiles in the HTML <head>
        'https://astuanax.com'
    ]
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#FF165D'; // used in manifest, for example primary color value
export const themeLight = '#F6F7D7'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Interfaces After Troy is a blog about what remains after digital systems break their original promise of being human-centered. It looks at user experience through an old-school human–computer interaction lens: information architecture, cognitive structure, and the way meaning is organized in interfaces. The focus is not visual polish or conversion tactics, but the underlying systems that make software understandable—or incomprehensible. The “Troy” in the name is a metaphor for UX as it evolved in modern product organizations: a field that began with strong roots in information architecture and usability, but increasingly operates inside incentive structures driven by metrics, growth, and optimization. What gets lost in that shift is often the quiet work of structure, clarity, and sense-making. After Troy” means after the fall of that original alignment—when interfaces are no longer assumed to be primarily about understanding users, but about performance, persuasion, and scale.The blog revisits those foundations. It treats interfaces as systems of cognition rather than surfaces of design, and asks what it would take to rebuild them when clarity matters more than persuasion."; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Interfaces After Troy',
  description: 'A blog about what remains after digital systems break their original promise of being human-centered.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const tests = {
  pa11y: {
    // keep customPaths empty if you want to test all pages
    customPaths: ['/', '/about/', '/blog/', '/styleguide/'],
    globalIgnore: []
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: false,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
