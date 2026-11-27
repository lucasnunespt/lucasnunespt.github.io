/* vueling-espanha.js — os aeroportos espanhóis da Vueling, para estudo (nov 2026).
   Fonte: a lista "Spain" da página de ofertas da Vueling (vueling.com/en-us/cheap-flights),
   consultada a 27 de novembro de 2026: 35 cidades (Tenerife tem dois aeroportos). A rede muda
   com as temporadas; confirmar sempre em vueling.com. Coordenadas aproximadas dos aeroportos.
   Formato igual ao das cidades da Terra: { id, nome, pais, regiao, lat, lon } + iata e aeroporto. */
const A = (iata, nome, regiao, aeroporto, lat, lon) => ({ id: iata, iata, nome, pais: "ES", regiao, aeroporto, lat, lon });
export const AEROPORTOS_VUELING = [
  // Galiza, Astúrias, Cantábria, País Basco, Navarra, La Rioja
  A("LCG", "A Coruña", "Galicia", "Aeropuerto de A Coruña", 43.30, -8.38),
  A("SCQ", "Santiago de Compostela", "Galicia", "Santiago-Rosalía de Castro", 42.90, -8.42),
  A("VGO", "Vigo", "Galicia", "Aeropuerto de Vigo", 42.23, -8.63),
  A("OVD", "Asturias", "Asturias", "Aeropuerto de Asturias", 43.56, -6.03),
  A("SDR", "Santander", "Cantabria", "Seve Ballesteros-Santander", 43.43, -3.82),
  A("BIO", "Bilbao", "País Vasco", "Aeropuerto de Bilbao", 43.30, -2.91),
  A("EAS", "San Sebastián", "País Vasco", "Aeropuerto de San Sebastián", 43.36, -1.79),
  A("PNA", "Pamplona", "Navarra", "Aeropuerto de Pamplona", 42.77, -1.65),
  A("RJL", "Logroño", "La Rioja", "Logroño-Agoncillo", 42.46, -2.32),
  // Castela e Leão, Aragão, Madrid, Estremadura
  A("LEN", "León", "Castilla y León", "Aeropuerto de León", 42.59, -5.66),
  A("VLL", "Valladolid", "Castilla y León", "Aeropuerto de Valladolid", 41.71, -4.85),
  A("ZAZ", "Zaragoza", "Aragón", "Aeropuerto de Zaragoza", 41.67, -1.04),
  A("MAD", "Madrid", "Comunidad de Madrid", "Adolfo Suárez Madrid-Barajas", 40.47, -3.56),
  A("BJZ", "Badajoz", "Extremadura", "Aeropuerto de Badajoz", 38.89, -6.82),
  // Catalunha
  A("BCN", "Barcelona", "Cataluña", "Josep Tarradellas Barcelona-El Prat (base principal)", 41.30, 2.08),
  A("REU", "Reus", "Cataluña", "Aeropuerto de Reus", 41.15, 1.17),
  A("LEU", "Andorra–La Seu d'Urgell", "Cataluña", "Andorra-La Seu d'Urgell (Montferrer i Castellbò)", 42.34, 1.41),
  // Comunidade Valenciana
  A("VLC", "Valencia", "Comunidad Valenciana", "Aeropuerto de Valencia", 39.49, -0.48),
  A("ALC", "Alicante", "Comunidad Valenciana", "Alicante-Elche Miguel Hernández", 38.28, -0.56),
  A("CDT", "Castellón", "Comunidad Valenciana", "Aeropuerto de Castellón", 40.21, 0.07),
  // Andaluzia e Melilla
  A("SVQ", "Sevilla", "Andalucía", "Aeropuerto de Sevilla", 37.42, -5.90),
  A("AGP", "Málaga", "Andalucía", "Málaga-Costa del Sol", 36.67, -4.50),
  A("GRX", "Granada", "Andalucía", "Federico García Lorca Granada-Jaén", 37.19, -3.78),
  A("ODB", "Córdoba", "Andalucía", "Aeropuerto de Córdoba", 37.84, -4.85),
  A("XRY", "Jerez", "Andalucía", "Aeropuerto de Jerez", 36.74, -6.06),
  A("LEI", "Almería", "Andalucía", "Aeropuerto de Almería", 36.84, -2.37),
  A("MLN", "Melilla", "Melilla", "Aeropuerto de Melilla", 35.28, -2.96),
  // Baleares
  A("PMI", "Palma de Mallorca", "Illes Balears", "Aeropuerto de Palma de Mallorca", 39.55, 2.74),
  A("IBZ", "Ibiza", "Illes Balears", "Aeropuerto de Ibiza", 38.87, 1.37),
  A("MAH", "Menorca", "Illes Balears", "Aeropuerto de Menorca (Mahón)", 39.86, 4.22),
  // Canárias
  A("LPA", "Gran Canaria", "Canarias", "Aeropuerto de Gran Canaria", 27.93, -15.39),
  A("TFN", "Tenerife Norte", "Canarias", "Tenerife Norte-Ciudad de La Laguna", 28.48, -16.34),
  A("TFS", "Tenerife Sur", "Canarias", "Tenerife Sur", 28.04, -16.57),
  A("ACE", "Lanzarote", "Canarias", "César Manrique-Lanzarote", 28.95, -13.61),
  A("FUE", "Fuerteventura", "Canarias", "Aeropuerto de Fuerteventura", 28.45, -13.86),
  A("SPC", "La Palma", "Canarias", "Aeropuerto de La Palma", 28.63, -17.76)
];
/* A Espanha no globo, com zoom que deixa ver a península e as ilhas Baleares. */
export const ESPANHA = [{ id: "ES", lat: 38.5, lon: -4.5, zoom: 2.6 }];
