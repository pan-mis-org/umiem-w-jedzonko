import rosol from "../images/taiwanski-rosol.jpeg";
import dalkal from "../images/dal-kalafior.jpeg";
import awoczer from "../images/awo-czer.jpeg";
import bobawo from "../images/bob-awo.jpg";
import wegebur from "../images/wegebur.jpeg";
import kaszmlod from "../images/kasz-mloda.jpeg";
import tofuzmieniajacezycie from "../images/tofu-zmie.jpg";
import { duration } from "@mui/material";

export const dishes = [
  {
    name: "Tajwański pomidorowy rosół",
    url: "https://www.jadlonomia.com/przepisy/tajwanski-pomidorowy-rosol/",
    duration: 2,
    ingredients: ["cebula", "marchew", "por", "seler"],
    image: rosol,
  },
{
  name: 'Ekspresowy ramen',
  duration: 1,
  ingredients: ["makaron", "tofu", "shitake", "proteina", "pomidor", "miso", "por", "ciecierzyca"],
},
{
  name: "Łazanki",
  duration: 1,
  ingredients: ["makaron", "kapusta", "shitake", "tofu"],
},{
  name: "Chili sin carne",
  duration: 2,
  ingredients: ["fasola", "cebula", "papryka", "awokado", "proteina", "Mutti", "kolendra", "jogurt"],
}, {
  name: "Makaron z białym sosem",
  duration: 1,
  ingredients: ["makaron", "nerkowce", "szpinak", "suszone pomidory", "klopsiki", "proteina", "cukinia", "brokuł"],
}, {
  name: "Makaron curry z mleczkiem kokosowym",
  duration: 1,
  ingredients: ["makaron", "mleczko kokosowe", "szpinak", "suszone pomidory", "tofu", "proteina", "gyros", "papryka"],
},
{
  name: "Klopsiki bezmięsne z airfryera *p",
  duration: 3,
  ingredients: ["proteina", "mąka z ciecierzycy", "cebula"]
}, {
  name: "Źurek z kapustą kiszoną",
  duration: 1,
  ingredients: ["kapusta kiszona", "ziemniaki", "tofu", "cebula", "proteina", "shitake"],
}, {
  name: "Zupa węgierska",
  duration: 0,
  ingredients: ["zupa węgierska mrożona", "proteina", "nerkowce"],
}, {
  name: "Pita bread (gyros) *p",
  duration: 3,
  ingredients: ["mąka keto", "drożdże", "olej kokosowy", "proteina", "gyros"],
},
{
 name: "Kotlety frosta",
 duration: 0,
  ingredients: ["kotlety frosta"],
}, {
  name: "Curry massaman",
  duration: 1,
  ingredients: ["mleczko kokosowe", "pasta massaman", "tofu", "proteina", "papryka", "cebula", "brukselka"],
}, {
  name: "Tajskie curry",
  duration: 1,
  ingredients: ["mleczko kokosowe", "pasta curry", "tofu", "proteina", "papryka", "cebula", "marchew", "ciecierzyca", "brokuł", "quinoa", "makaron", "kolendra", "limonka", "brukselka"],
},
 {
  name: "Bowl", 
  duration: 1,
  ingredients: ["tofu", "proteina", "papryka", "marchew", "brokuł", "quinoa", "suszone pomidory", "szpinak", "shitake", "cukinia", "ciecierzyca"],
 }, {
  name: "Socca",
  duration: 1,
  ingredients: ["mąka ciecierzycy"],
 }, {
  name: "Naleśniki z serkiem",
  duration: 3,
  ingredients: ["mąka", "tofu", "kasza jaglana", "mleczko kokosowe", "mleko sojowe"],
 }, 
 {
  name: "Zupa miso",
  duration: 1,
  ingredients: ["miso", "tofu", "wakame", "por", "shitake"],
 }, {
  name: "Nie-mięso sojowe",
  duration: 1,
  ingredients: ["kotlety sojowe", "brokuł", "brukselka", "kapusta kiszona", "ziemniaki", "frytki", "quinoa"],
 }, {
  name: "Brokuł z grepfrutem *RS.94",
  duration: 0,
  ingredients: ["brokuł", "grepfrut"],
 }, {
  name: "Brukselka z sosem orzechowym *RS.92",
  duration: 0,
  ingredients: ["brukselka", "masło orzechowe"],
 },
 {
  name: "Kapusta kiszona na 3 sposoby *RS.76",
  duration: 0,
  ingredients: ["kapusta kiszona", "pasta Gochujang", "musztarda", "imbir"],
 },
 {
  name: "Tajska surówka z kalarepy *RS.55",
  duration: 0,
  ingredients: ["kalarepa", "pasta Gochujang", "jabłko", "kolendra", "fistaszki", "masło orzechowe"],
 },
 {
  name: "Tofu jak halloumi *RS.82",
  duration: 1,
  ingredients: ["tofu", "miód"],
 },
 {
  name: "Kalarepa z bobem *RS.69",
  duration: 1,
  ingredients: ["kalarepa", "bób", "pestki dyni", "koperek"],
 },
 {
  name: "Kofty z wędzonego tofu *RS.85",
  duration: 1,
  ingredients: ["tofu wędzone", "słonecznik", "mąka"],
 },
 {
  name: "Syczuańska zielona fasolka w pomidorach *RS.90",
  duration: 1,
  ingredients: ["fasolka szparagowa", "pomidory", "cebula"],
 }, 
 {
  name: "Dahl *RS.98",
  duration: 1,
  ingredients: ["soczewica", "koncentrat pomidory", "cebula", "imbir"]
 }, {
  name: "Kalafior z daktylami i orzechami laskowymi *RS.155",
  duration: 2,
  ingredients: ["kalafior", "daktyle", "orzechy laskowe", "seler naciowy"]
 }, {
  name: "Zupa kimchi *RS.188",
  duration: 1,
  ingredients: ["kimchi", "tofu", "pasta Gochujang", "koncentrat pomidorowy"]
 }
  // {
  //   name: "Dal z kalafiora",
  //   url: "https://www.jadlonomia.com/przepisy/dal-z-kalafiora/",
  //   duration: 1,
  //   ingredients: ["kalafior", "soczewica"],
  //   image: dalkal,
  // },
  // {
  //   name: "Sałatka z czereśni i awokado",
  //   url: "https://www.jadlonomia.com/przepisy/salatka-z-czeresni-i-awokado/",
  //   duration: 0,
  //   ingredients: ["awokado", "cebula", "czereśnie", "pestki"],
  //   image: awoczer,
  // },
  // {
  //   name: "Sałatka z bobu i awokado",
  //   url: "https://www.jadlonomia.com/przepisy/mistrzowska-salatka-z-bobu-i-awokado/",
  //   duration: 1,
  //   ingredients: ["awokado", "bób"],
  //   image: bobawo,
  // },
  // {
  //   name: "Wegeburgery",
  //   url: "https://www.jadlonomia.com/przepisy/najlepsze-wegeburgery-na-swiecie/",
  //   duration: 1,
  //   ingredients: [
  //     "cebula",
  //     "kasza jaglana",
  //     "marchew",
  //     "ogórek",
  //     "pestki",
  //     "pomidor",
  //   ],
  //   image: wegebur,
  // },
  // {
  //   name: "Kaszotto z młodą kapustą",
  //   url: "https://www.jadlonomia.com/przepisy/kaszotto-z-mloda-kapusta/",
  //   duration: 2,
  //   ingredients: ["cebula", "ciecierzyca", "kasza gryczana", "młoda kapusta"],
  //   image: kaszmlod,
  // },
  {
    name: "Leniwe z tofu",
    url: "https://kuchnialidla.pl/kluski-leniwe-z-tofu",
    duration: 1,
    ingredients: ["mąka", "tofu"],
  },
  {
    name: "Makaron azjatycki",
    duration: 1,
    ingredients: ["makaron chow mein", "tofu"],
  },
  { name: "Teboki", duration: 0, ingredients: ["Teboki", "pasta Gochujang"] },
  { name: "Mutti", duration: 0, ingredients: ["Mutti", "parówki", "proteina", "suszone pomidory", "cukinia", "klopsiki"] },
  {
    name: "Tofu zmieniające zycie",
    url: "https://www.jadlonomia.com/przepisy/tofu-zmieniajace-zycie/",
    duration: 0,
    ingredients: ["tofu"],
    image: tofuzmieniajacezycie,
  },
  // {
  //   name: "Makaron z pesto z bobu",
  //   duration: 0,
  //   ingredients: ["makaron spagetti", "bób", "szpinak"],
  //   url: "https://kuchnialidla.pl/makaron-z-pesto-z-bobu",
  // },
  {
    name: "Kaszotto",
    duration: 0,
    ingredients: ["kasza", "proteina", "suszone pomidory", "cukinia", "tofu", "szpinak", "natka pietruszki"],
  },
  {
    name: "Gyros z frytkami",
    duration: 0,
    ingredients: ["frytki", "gyros", "proteina", "ziemniaki", "seler", "bakłażan", "marchew", "nerkowce", "jogurt"],
  },
  {
    name: "Dal soczewicowy ze Sri Lanki",
    duration: 0,
    ingredients: ["soczewica", "mleczko kokosowe", "cebula"],
    url: "https://www.jadlonomia.com/przepisy/dahl-soczewicowy-ze-sri-lanki/",
  },

  // {
  //   name: "Curry z dyni i nerkowców",
  //   duration: 1,
  //   ingredients: ["dynia", "bataty", "nerkowce"],
  //   url: "https://www.jadlonomia.com/przepisy/curry-z-dyni-i-nerkowcow/",
  // },
  // {
  //   name: "Sałatka z komosą ryżową",
  //   duration: 2,
  //   ingredients: ["pietruszka", "marchew", "burak", "jabłko", "laskowe"],
  //   url: "https://www.jadlonomia.com/przepisy/zimowa-saatka-z-komosa-ryzowa/",
  // },
  // {
  //   name: "Tajska brukselka",
  //   duration: 1,
  //   ingredients: ["nerkowce", "brukselka"],
  //   url: "https://www.jadlonomia.com/przepisy/bezglutenowa-sroda-tajska-brukselka/",
  // },
  // {
  //   name: "Dal z rabarbarem",
  //   duration: 1,
  //   ingredients: ["rabarbar", "soczewica"],
  //   url: "https://www.jadlonomia.com/przepisy/dal-z-rabarbarem/",
  // },
  // {
  //   name: "Pierogi z żabki",
  //   duration: 0,
  //   ingredients: ["pierogi z żabki"],
  // },
  // {
  //   name: "Pizka z żabki",
  //   duration: 0,
  //   ingredients: ["Picka z żabki"],
  // },
  // {
  //   name: "Mielone kalafiorowe",
  //   duration: 3,
  //   ingredients: ["kasz jaglana", "słonecznik", "kalafior"],
  //   url: "https://www.jadlonomia.com/przepisy/mielone-kalafiorowe/",
  // },
  // {
  //   name: "Bób z karczochami",
  //   duration: 1,
  //   ingredients: ["bób", "bulion", "mięta", "karczochy"],
  //   url: "https://www.jadlonomia.com/przepisy/dal-z-rabarbarem/",
  // },
];
