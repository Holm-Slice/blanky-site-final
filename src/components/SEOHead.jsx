import { Helmet } from "react-helmet-async";

export default function SEOHead({
  title = "Blanky - Shoegaze Band from Lawrence Kansas | Midwest Alternative Rock",
  description = "Blanky is a shoegaze, punk, and alternative rock band from Lawrence, Kansas. Experience lush reverb-soaked soundscapes and introspective lyrics.",
  keywords = "shoegaze, punk rock, alternative rock, DIY band, Lawrence Kansas, Kansas City music, Midwest music",
  canonicalUrl = "https://blankyband.com",
  ogImage = "https://blankyband.com/assets/true-assets/Website-Files/Blanky-Pastel-Trans.PNG",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
