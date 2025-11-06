// Local Business and Music Venue Schema for Better Local SEO
export const LocalMusicSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://blankyband.com/#musicgroup",
        name: "Blanky",
        alternateName: ["Blanky Band", "Blanky Lawrence KS"],
        description:
          "Shoegaze, punk, and alternative rock band from Lawrence, Kansas, crafting lush reverb-soaked soundscapes and introspective lyrics.",
        genre: [
          "Shoegaze",
          "Alternative Rock",
          "Punk Rock",
          "DIY",
          "Indie Rock",
          "Dream Pop",
          "Noise Rock",
          "Dark Orchestral",
          "Dark Country",
        ],
        foundingLocation: {
          "@type": "Place",
          name: "Lawrence, Kansas",
          addressLocality: "Lawrence",
          addressRegion: "KS",
          addressCountry: "US",
        },
        url: "https://blankyband.com",
        image:
          "https://blankyband.com/assets/true-assets/Website-Files/Blanky-Pastel-Trans.PNG",
        sameAs: [
          "https://open.spotify.com/artist/blanky",
          "https://music.apple.com/artist/blanky",
          "https://soundcloud.com/blanky",
          "https://blanky.bandcamp.com",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://blankyband.com/#localbusiness",
        name: "Blanky - Lawrence Kansas Music",
        description:
          "DIY shoegaze and alternative rock band performing in Lawrence, Kansas City, Chicago, and major US music markets.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lawrence",
          addressRegion: "Kansas",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "38.9717",
          longitude: "-95.2353",
        },
        areaServed: [
          "Lawrence, KS",
          "Kansas City, MO",
          "Chicago, IL",
          "New York, NY",
          "Philadelphia, PA",
          "Los Angeles, CA",
          "San Diego, CA",
          "Midwest United States",
        ],
        keywords:
          "shoegaze Lawrence Kansas, punk rock Kansas City, alternative rock Midwest, DIY music scene, indie rock Lawrence KS",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
    />
  );
};

export default LocalMusicSchema;
