export type siteDataType = {
    siteName: string;
    siteUrl: string;
    pageName: string;
    title: string;
    description: string;
    ogpImage: string;
    type: string;
    path: string;
    ldJSON: {
        '@context': string;
        '@type': string;
        itemListElement: {
            '@type': string;
            position: number;
            item: {
                '@id': string;
                name: string;
            };
        }[];
    };
};
