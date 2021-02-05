export class Constants {
    public static themeNames = [
        { name: 'Batman', value: 'batman-dark-theme', image: '../assets/images/theme-select/bat-removebg-preview.png', bodyClass: 'batman-background' },
        { name: 'Harry Potter', value: 'harry-potter-theme', image: '../assets/images/theme-select/harry-removebg-preview.png', bodyClass: 'harry-background' }
    ];

    public static themeImages = {
        BATMAN_HOME: '../assets/images/screen-images/homepage-batman.png',
        HARRY_HOME: '../assets/images/screen-images/homepage-harry.png',
        BATMAN_ABOUT: '../assets/images/screen-images/about-batman.png',
        HARRY_ABOUT: '../assets/images/screen-images/about-harry.png',
        BATMAN_CONTACT: '../assets/images/screen-images/contact-batman.png',
        HARRY_CONTACT: '../assets/images/screen-images/contact-harry.png',
    }

    public static homePageTitles = {
        BATMAN_TITLE: 'Don’t let the muggles get you down.',
        HARRY_TITLE: 'I Solemnly Swear That I Am Up to No Good',
    };

    public static homePageBody = {
        BATMAN_BODY: 'I am the knight who improves performance of your application in the browser',
        HARRY_BODY: "I am not just a UI developer. I'm a wizard who brings magic to your application's front end.",
    };

    public static profileUrls = {
        GITHUB_URL: 'https://github.com/utkarsh2609',
        LINKED_IN_URL: 'https://www.linkedin.com/in/utkarsh-awasthi-2609',
        G_MAIL_URL: 'mailto:utkarsh.awasthi01@gmail.com'
    }

    public static routings = {
        HOME_PAGE: '',
        WORK: 'work',
        CONTACT: 'contact',
        ABOUT: 'about'
    }
};