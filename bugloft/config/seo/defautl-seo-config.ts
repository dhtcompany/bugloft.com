import { MetaTag } from "next-seo/lib/types";

const additionalMetaTags: Array<MetaTag> = [
    {
        property: 'og:title',
        content: 'Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống'
    }, {
        property: 'og:url',
        content: 'https://bugloft.com/'
    }, {
        property: 'og:image',
        content: 'https://bugloft.com/images/imgsseo.jpg'
    }, {
        property: 'og:image:alt',
        content: 'Vinshop'
    }, {
        property: 'og:site_name',
        content: 'bugloft.com'
    }, {
        property: 'og:locale',
        content: 'vi_VN'
    }, {
        property: 'og:description',
        content: 'Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống: văn hóa, kinh tế, sản phẩm, công nghệ, loại hình giải trí ... Đánh giá khách quan nhằm hổ trợ người dùng thông tin trc khi tiếp cận thực tế.'
    }, {
        name: 'keywords',
        content: 'Diễn đàn đánh giá, chia sẻ trải nghiệm, văn hóa, kinh tế, sản phẩm, công nghệ, loại hình giải trí'
    }, {
        name: 'author',
        content: 'bugloft.com'
    }, {
        name: 'copyright',
        content: 'bugloft.com'
    }, {
        name: 'image',
        content: 'https://bugloft.com/images/imgsseo.jpg'
    }];

const additionalLinkTags: Array<any> = [
    {
        rel: 'icon',
        href: 'images/Icon-16.png',
        type: "image/png",
        sizes: '16x16'
    },
    {
        rel: 'icon',
        href: 'images/Icon-32.png',
        type: "image/png",
        sizes: '32x32'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-57.png',
        sizes: '57x57'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-60.png',
        sizes: '60x60'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-72.png',
        sizes: '72x72'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-76.png',
        sizes: '76x76'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-114.png',
        sizes: '114x114'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-120.png',
        sizes: '120x120'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-144.png',
        sizes: '144x144'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-152.png',
        sizes: '152x152'
    }, {
        rel: 'apple-touch-icon',
        href: 'images/Icon-180.png',
        sizes: '180x180'
    }, {
        rel: 'icon',
        href: 'images/Icon-196.png',
        type: "image/png",
        sizes: '196x196'
    }];

const DEFAULT_SEO = {
    title: "Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống",
    defaultTitle: "Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống",
    description: "Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống: văn hóa, kinh tế, sản phẩm, công nghệ, loại hình giải trí ... Đánh giá khách quan nhằm hổ trợ người dùng thông tin trc khi tiếp cận thực tế.",
    canonical: "https://bugloft.com/",
    noindex: false,
    nofollow: false,
    additionalMetaTags,
    additionalLinkTags
};

export default DEFAULT_SEO;

// define metaTag khác
export const DEFAULT_OTHER_META_TAGS = [
    {
        itemprop: 'name',
        content: 'Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống'
    }, {
        itemprop: 'image',
        content: 'https://bugloft.com/images/imgsseo.jpg'
    },
    {
        httpEquiv: 'cache-control',
        content: 'no-cache'
    }, {
        httpEquiv: 'expires',
        content: '0'
    }, {
        httpEquiv: 'pragma',
        content: 'no-cache'
    }
];