import rosol from "../images/taiwanski-rosol.jpeg";
import dalkal from "../images/dal-kalafior.jpeg";
import awoczer from "../images/awo-czer.jpeg";
import bobawo from "../images/bob-awo.jpg";
import wegebur from "../images/wegebur.jpeg";
import kaszmlod from "../images/kasz-mloda.jpeg";
import tofuzmieniajacezycie from "../images/tofu-zmie.jpg";

export const dishes = [
  {
    name: "Tajwański pomidorowy rosół",
    url: "https://www.jadlonomia.com/przepisy/tajwanski-pomidorowy-rosol/",
    duration: 2,
    ingredients: ["cebula", "marchew", "por", "seler"],
    image: rosol,
  },
  {
    name: "Dal z kalafiora",
    url: "https://www.jadlonomia.com/przepisy/dal-z-kalafiora/",
    duration: 1,
    ingredients: ["kalafior", "soczewica"],
    image: dalkal,
  },
  {
    name: "Sałatka z czereśni i awokado",
    url: "https://www.jadlonomia.com/przepisy/salatka-z-czeresni-i-awokado/",
    duration: 0,
    ingredients: ["awokado", "cebula", "czereśnie", "pestki"],
    image: awoczer,
  },
  {
    name: "Mistrzowska sałatka z bobu i awokado",
    url: "https://www.jadlonomia.com/przepisy/mistrzowska-salatka-z-bobu-i-awokado/",
    duration: 1,
    ingredients: ["awokado", "bób"],
    image: bobawo,
  },
  {
    name: "Najlepsze wegeburgery na świecie",
    url: "https://www.jadlonomia.com/przepisy/najlepsze-wegeburgery-na-swiecie/",
    duration: 1,
    ingredients: [
      "cebula",
      "kasza jaglana",
      "marchew",
      "ogórek",
      "pestki",
      "pomidor",
    ],
    image: wegebur,
  },
  {
    name: "Kaszotto z młodą kapustą",
    url: "https://www.jadlonomia.com/przepisy/kaszotto-z-mloda-kapusta/",
    duration: 2,
    ingredients: ["cebula", "ciecierzyca", "kasza gryczana", "młoda kapusta"],
    image: kaszmlod,
  },
  {
    name: "Leniwe z tofu",
    url: "https://kuchnialidla.pl/kluski-leniwe-z-tofu",
    duration: 1,
    ingredients: ["mąka", "tofu"],
  },
  {
    name: "Pyszny makaron azjatycki",
    duration: 1,
    ingredients: ["makaron chow mein", "tofu"],
  },
  { name: "Teboki", duration: 0, ingredients: ["Teboki", "pasta Gochujang"] },
  { name: "Mutti", duration: 0, ingredients: ["Mutti", "parówki"] },
  {
    name: "Tofu zmieniające zycie",
    url: "https://www.jadlonomia.com/przepisy/tofu-zmieniajace-zycie/",
    duration: 0,
    ingredients: ["tofu"],
    image: tofuzmieniajacezycie,
  },
  {
    name: "Makaron z pesto z bobu",
    duration: 0,
    ingredients: ["makaron spagetti", "bób", "szpinak"],
    url: "https://kuchnialidla.pl/makaron-z-pesto-z-bobu",
  },
];
