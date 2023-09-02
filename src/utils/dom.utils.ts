export const UpdateFaviconIcon = (relativePathFavicon: string) => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = relativePathFavicon;
    document.getElementsByTagName("head")[0].appendChild(link);
};
