interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === "/" ? "" : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: "Dennis Running Page",
  siteUrl: "https://run.domon.cn",
  logo: "https://domon.cn/content/images/2020/06/avatar_shiba-2.jpg",
  keywords: "workouts, running, cycling, riding, roadtrip, hiking, swimming",
  description: "在路上，跑起来",
  navLinks: [
    { name: "Blog", url: "https://www.domon.cn" },
    { name: "Summary", url: `${getBasePath()}/summary` },
    { name: "About", url: "https://www.domon.cn/about" },
  ],
};

export default data;
