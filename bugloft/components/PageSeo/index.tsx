
import DEFAULT_SEO, { DEFAULT_OTHER_META_TAGS } from '../../config/seo/defautl-seo-config';
import { DefaultSeo } from "next-seo";
import React from "react";
import { Helmet } from "react-helmet";

interface IProps {
    metaConfig?: any;
}

const PageSeo = ({ metaConfig }: IProps) => {

    // return default SEO
    if (!metaConfig) {
        const otherMetaTags = DEFAULT_OTHER_META_TAGS;
        return (
            <>
                <DefaultSeo {...DEFAULT_SEO} />
                <Helmet>
                    {otherMetaTags && otherMetaTags.map((meta, i) => {
                        if (meta.content) {
                            if (meta.httpEquiv) {
                                return <meta key={i} httpEquiv={meta.httpEquiv} content={meta.content} />
                            }
                            if (meta.itemprop) {
                                return <meta key={i} itemProp={meta.itemprop} content={meta.content} />
                            }
                        }
                    })}
                </Helmet>
            </>
        );
    }

    // Return customize SEO
    const { title, linkCanonical, headerTags, metaTags } = metaConfig;
    if (metaTags && metaTags.length > 0) {
        const metaArray = new Array();
        metaTags.forEach(item => {
            if (item.name === 'description') {
                metaArray.push({
                    itemprop: item.name,
                    content: item.content
                });
            }
        });
        metaTags.concat(metaArray);
    }

    return (
        <Helmet>
            {title &&
                <title>{title}</title>
            }

            {linkCanonical && (
                <link rel="canonical" href={linkCanonical} />
            )}

            {headerTags && headerTags.map((tag, i) => {
                return tag.headerType === "LINK" ? (
                    <link key={i} rel={tag.code} href={tag.content} />
                ) : (
                    <script key={i} src={tag.content}></script>
                );
            })}

            {metaTags && metaTags.map((meta, i) => {
                if (meta.content) {
                    if (meta.name) {
                        return <meta key={i} name={meta.name} content={meta.content} />
                    }
                    if (meta.itemprop) {
                        return <meta key={i} itemProp={meta.itemprop} content={meta.content} />
                    }
                    if (meta.property) {
                        return <meta key={i} property={meta.property} content={meta.content} />
                    }
                }
            })}
        </Helmet>
    );

}

export default PageSeo;