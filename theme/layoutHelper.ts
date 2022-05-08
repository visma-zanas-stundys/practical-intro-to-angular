import type { CSSProperties } from "vue";

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith("/")) return import.meta.env.BASE_URL + url.slice(1);
  return url;
}

export function handleBackground(
  background?: string,
  backgroundPositionX?: string
): any {
  const isColor =
    background && ["#", "rgb", "hsl"].some((v) => background.indexOf(v) === 0);

  const style = {
    "--background": isColor ? background : undefined,
    "--color": background && !isColor ? "white" : undefined,
    "--background-position-x": backgroundPositionX || undefined,
    "--background-image": isColor
      ? undefined
      : background
      ? `url("${resolveAssetUrl(background)}")`
      : undefined,
    "--background-repeat": "no-repeat",
    "--background-position": "center",
    "--background-size": "cover",
  };

  if (!style["--background"]) delete style["--background"];

  return style;
}
