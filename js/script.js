// ============================================================================
// ANIME WORLD - STREAMING LIMPIO (REPRODUCTOR HD + ANIMEFLV + CRUNCHYROLL + API)
// ============================================================================

const DEFAULT_REAL_MP4_STREAMS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
];

const GENRE_TRANSLATIONS = {
  Action: "Acción",
  Adventure: "Aventura",
  Comedy: "Comedia",
  Drama: "Drama",
  Fantasy: "Fantasía",
  Horror: "Terror",
  Mystery: "Misterio",
  Romance: "Romance",
  "Sci-Fi": "Ciencia Ficción",
  "Slice of Life": "Recuentos de la Vida",
  Sports: "Deportes",
  Supernatural: "Sobrenatural",
  Suspense: "Suspenso"
};

// Catálogo base respaldo + Animes personalizados desde js/mis-animes.js
const FALLBACK_CATALOG = [
  ...(window.MIS_ANIMES_PERSONALIZADOS || []),
  {
    id: 6,
    mal_id: 21,
    title: "One Piece",
    animeflvSlug: "one-piece-tv",
    subtitle: "Sub | Dob",
    badge: "ARCO EGGHEAD",
    tag: "SIMULCAST SEMANAL",
    rating: "9.6",
    age: "+13",
    episodesCount: 1122,
    season: "Arco de Egghead",
    genres: ["Acción", "Aventura", "Fantasía", "Comedia"],
    poster: "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
    backdrop: "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
    trailerYoutubeId: "MCb13lbVGE0",
    crunchyrollUrl: "https://www.crunchyroll.com/es/series/GRMG8ZQZR/one-piece",
    isSimulcast: true,
    isPopular: true,
    isHero: false,
    synopsis:
      "Monkey D. Luffy y la tripulación del Sombrero de Paja llegan a Egghead, la isla del futuro donde habita el genio científico Dr. Vegapunk.",
    episodes: [
      { num: 1, title: "¡Soy Luffy! El hombre que se convertirá en el Rey de los Piratas", duration: "24m" },
      { num: 2, title: "¡Aparece el gran espadachín! El Cazador de Piratas Roronoa Zoro", duration: "24m" },
      { num: 3, title: "¡Morgan vs. Luffy! ¿Quién es esa hermosa joven?", duration: "24m" }
    ]
  },
  {
    id: 7,
    mal_id: 52991,
    title: "Frieren: Más allá del final del viaje",
    animeflvSlug: "sousou-no-frieren",
    subtitle: "Sub | Dob",
    badge: "OBRA MAESTRA",
    tag: "MEJOR CALIFICADO",
    rating: "9.8",
    age: "+13",
    episodesCount: 28,
    season: "Temporada 1",
    genres: ["Fantasía", "Aventura"],
    poster: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    backdrop: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    trailerYoutubeId: "Iwr1aLEDpe4",
    crunchyrollUrl: "https://www.crunchyroll.com/es/series/GG5H5XQX4/frieren-beyond-journeys-end",
    isSimulcast: false,
    isPopular: true,
    isHero: false,
    synopsis:
      "Tras derrotar al Rey Demonio junto al grupo del héroe Himmel, la maga elfa Frieren emprende un nuevo viaje décadas después para comprender mejor a los humanos.",
    episodes: [
      { num: 1, title: "El final de la aventura", duration: "25m" },
      { num: 2, title: "No tenía por qué ser magia", duration: "24m" },
      { num: 3, title: "Magia asesina", duration: "24m" }
    ]
  },
  {
    id: 8,
    mal_id: 52588,
    title: "Kaiju No. 8",
    animeflvSlug: "kaijuu-8-gou",
    subtitle: "Sub | Dob",
    badge: "SIMULCAST",
    tag: "EXCLUSIVO",
    rating: "9.0",
    age: "+16",
    episodesCount: 12,
    season: "Temporada 1",
    genres: ["Acción", "Ciencia Ficción"],
    poster: "https://cdn.myanimelist.net/images/anime/1370/140362l.jpg",
    backdrop: "https://cdn.myanimelist.net/images/anime/1370/140362l.jpg",
    trailerYoutubeId: "V0OZWzTAqHg",
    crunchyrollUrl: "https://www.crunchyroll.com/es/series/GG5H5XQ7D/kaiju-no-8",
    isSimulcast: true,
    isPopular: false,
    isHero: false,
    synopsis:
      "En un Japón invadido por monstruos colosales llamados Kaiju, Kafka Hibino obtiene el poder de transformarse en el temido Kaiju No. 8.",
    episodes: [
      { num: 1, title: "El hombre que se convirtió en Kaiju", duration: "23m" },
      { num: 2, title: "El Kaiju que derrota Kaijus", duration: "23m" }
    ]
  },
  {
    id: 9,
    mal_id: 44511,
    title: "Chainsaw Man",
    animeflvSlug: "chainsaw-man",
    subtitle: "Sub | Dob",
    badge: "DOBLAJE LATINO",
    tag: "ACCIÓN SANGRIENTA",
    rating: "9.2",
    age: "+18",
    episodesCount: 12,
    season: "Temporada 1",
    genres: ["Acción", "Sobrenatural", "Fantasía"],
    poster: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    backdrop: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    trailerYoutubeId: "q15CRdE5Bv0",
    crunchyrollUrl: "https://www.crunchyroll.com/es/series/GVDHX8QNW/chainsaw-man",
    isSimulcast: false,
    isPopular: true,
    isHero: false,
    synopsis:
      "Denji caza demonios junto a Pochita. Cuando es traicionado, Pochita se fusiona con su corazón convirtiéndolo en Chainsaw Man.",
    episodes: [
      { num: 1, title: "Perro y motosierra", duration: "25m" },
      { num: 2, title: "Llegada a Tokio", duration: "24m" }
    ]
  },
  {
    id: 10,
    mal_id: 16498,
    title: "Attack on Titan (Shingeki no Kyojin)",
    animeflvSlug: "shingeki-no-kyojin",
    subtitle: "Sub | Dob",
    badge: "FINALIZADO",
    tag: "SERIE LEGENDARIA",
    rating: "9.7",
    age: "+18",
    episodesCount: 94,
    season: "Saga Completa",
    genres: ["Acción", "Fantasía", "Aventura"],
    poster: "https://cdn.myanimelist.net/images/anime/1948/120625l.jpg",
    backdrop: "https://cdn.myanimelist.net/images/anime/1948/120625l.jpg",
    trailerYoutubeId: "M_OauHnAFc8",
    crunchyrollUrl: "https://www.crunchyroll.com/es/series/GR751KNZY/attack-on-titan",
    isSimulcast: false,
    isPopular: true,
    isHero: false,
    synopsis:
      "Tras descubrir la verdad más allá de las murallas, Eren Jaeger y la Legión de Reconocimiento enfrentan una guerra por el destino de la humanidad.",
    episodes: [
      { num: 1, title: "Para ti, dentro de 2000 años", duration: "24m" },
      { num: 2, title: "Aquel día", duration: "24m" }
    ]
  },
  {
    id: 11,
    mal_id: 50265,
    title: "Spy x Family",
    animeflvSlug: "spy-x-family",
    subtitle: "Sub | Dob",
    badge: "DOBLAJE LATINO",
    tag: "COMEDIA FAMILIAR",
    rating: "9.1",
    age: "+13",
    episodesCount: 37,
    season: "Temporada 1 - 2",
    genres: ["Comedia", "Acción"],
    poster: "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    backdrop: "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    trailerYoutubeId: "ofXigq9aIpo",
    crunchyrollUrl: "https://www.crunchyroll.com/es/series/G4PH0WXVJ/spy-x-family",
    isSimulcast: true,
    isPopular: false,
    isHero: false,
    synopsis:
      "El espía Twilight forma una familia falsa sin saber que la niña que adoptó, Anya, es telépata y su esposa Yor es una asesina.",
    episodes: [
      { num: 1, title: "Operación Strix", duration: "24m" },
      { num: 2, title: "Consigue una esposa", duration: "24m" }
    ]
  },
  {
    id: 12,
    mal_id: 41467,
    title: "Bleach: Thousand-Year Blood War",
    animeflvSlug: "bleach-sennen-kessen-hen",
    subtitle: "Sub | Dob",
    badge: "EN EMISIÓN",
    tag: "SIMULCAST",
    rating: "9.3",
    age: "+16",
    episodesCount: 40,
    season: "Guerra Sangrienta de los Mil Años",
    genres: ["Acción", "Sobrenatural", "Fantasía"],
    poster: "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
    backdrop: "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
    trailerYoutubeId: "e8YBesRKq_U",
    crunchyrollUrl: "https://www.crunchyroll.com/es/search?q=Bleach",
    isSimulcast: true,
    isPopular: false,
    isHero: false,
    synopsis:
      "Ichigo Kurosaki regresa al campo de batalla cuando Yhwach y el Wandenreich invaden la Sociedad de Almas.",
    episodes: [
      { num: 1, title: "The Blood Warfare", duration: "24m" },
      { num: 2, title: "Foundation Stones", duration: "24m" }
    ]
  }
];

const storedUserAnimes = JSON.parse(localStorage.getItem("animeWorld_userAnimes") || "[]");
const ANIME_CATALOG = [...storedUserAnimes, ...FALLBACK_CATALOG];

const customEpisodeSources = JSON.parse(
  localStorage.getItem("animeWorld_customEpSources") || "{}"
);

const DEFAULT_CONTINUE_WATCHING = [
  {
    animeId: 1,
    epNum: 1,
    epTitle: "E1 - Ya estoy acostumbrado",
    progress: 72,
    remaining: "Quedan 6m"
  },
  {
    animeId: 4,
    epNum: 1,
    epTitle: "E1 - Vuelta a casa",
    progress: 45,
    remaining: "Quedan 12m"
  },
  {
    animeId: 5,
    epNum: 1,
    epTitle: "E1 - Así es como empieza el amor, ¿no?",
    progress: 85,
    remaining: "Quedan 3m"
  },
  {
    animeId: 2,
    epNum: 1,
    epTitle: "E1 - Ryomen Sukuna",
    progress: 30,
    remaining: "Quedan 16m"
  }
];

const state = {
  heroList: ANIME_CATALOG.filter((a) => a.isHero),
  heroIndex: 0,
  heroTimer: null,
  selectedGenre: "Todos",
  selectedMalGenreId: "",
  apiCatalogPage: 1,
  isFetchingApi: false,
  watchlist: JSON.parse(localStorage.getItem("animeWorld_watchlist") || "[1, 4]"),
  continueList: JSON.parse(
    localStorage.getItem("animeWorld_continue") || JSON.stringify(DEFAULT_CONTINUE_WATCHING)
  ),
  userProfile: JSON.parse(
    localStorage.getItem("animeWorld_userProfile") ||
      JSON.stringify({
        username: "Plan Mega Fan Activo",
        platform: "anilist",
        avatar: "assets/img/hola.jpg",
        crunchyRegion: "es",
        episodesWatched: 48,
        animesCount: 12,
        linked: false
      })
  ),
  activeModalAnime: null,
  activeEpisodeNum: 1,
  activePlayerMode: "mp4", // 'mp4' | 'embed' | 'animeflv' | 'crunchyroll'
  localBlobUrl: null
};

// ============================================================================
// 1. GENERADORES DE ENLACES PARA ANIMEFLV Y CRUNCHYROLL
// ============================================================================
function buildAnimeFlvSlug(anime) {
  if (anime.animeflvSlug) return anime.animeflvSlug;
  const knownSlugs = {
    1: "solo-leveling",
    2: "jujutsu-kaisen-tv",
    3: "kimetsu-no-yaiba",
    4: "naruto-shippuden-hd",
    5: "dandadan"
  };
  if (knownSlugs[anime.id]) return knownSlugs[anime.id];

  return (anime.romajiTitle || anime.title || "anime")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getAnimeFlvLinks(anime, epNum = 1) {
  const slug = buildAnimeFlvSlug(anime);
  return {
    episodeUrl: `https://animeflv.or.at/ver/${slug}-${epNum}`,
    seriesUrl: `https://animeflv.or.at/anime/${slug}`,
    searchUrl: `https://animeflv.or.at/browse?q=${encodeURIComponent(anime.title)}`
  };
}

function getCrunchyrollUrl(anime, epNum = null) {
  if (!anime) return "https://www.crunchyroll.com/es";
  const region = state.userProfile?.crunchyRegion ?? "es";
  const regionPath = region ? `/${region}` : "";

  if (epNum && anime.episodes) {
    const epObj = anime.episodes.find((e) => e.num === epNum);
    if (epObj?.crunchyrollEpUrl) return epObj.crunchyrollEpUrl;
  }

  if (anime.crunchyrollUrl) {
    return anime.crunchyrollUrl.replace("/es/", `${regionPath || ""}/`);
  }

  return `https://www.crunchyroll.com${regionPath}/search?q=${encodeURIComponent(anime.title)}`;
}

// ============================================================================
// 2. LOADER DE PÁGINA
// ============================================================================
window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 550);
  }
});

// ============================================================================
// 3. CARGA AUTOMÁTICA DE ANIMES Y EPISODIOS REALES DESDE JIKAN API
// ============================================================================
function normalizeJikanAnime(item, extraFlags = {}) {
  const existing = ANIME_CATALOG.find(
    (a) => a.mal_id === item.mal_id || a.title.toLowerCase() === (item.title || "").toLowerCase()
  );
  if (existing) {
    if (extraFlags.isSimulcast) existing.isSimulcast = true;
    if (extraFlags.isPopular) existing.isPopular = true;
    return existing;
  }

  const translatedGenres = (item.genres || []).map(
    (g) => GENRE_TRANSLATIONS[g.name] || g.name
  );
  if (translatedGenres.length === 0) translatedGenres.push("Acción", "Fantasía");

  const epsCount = item.episodes || 12;
  const generatedEpisodes = [];
  const previewCount = Math.min(epsCount, 24);
  for (let i = 1; i <= previewCount; i++) {
    generatedEpisodes.push({
      num: i,
      title: `Episodio ${i}`,
      duration: "24m"
    });
  }

  const titleClean = item.title_english || item.title;
  const newAnime = {
    id: item.mal_id + 10000,
    mal_id: item.mal_id,
    title: titleClean,
    romajiTitle: item.title,
    subtitle: "Sub | Dob",
    badge: item.airing ? "EN EMISIÓN" : "SERIE COMPLETA",
    tag: item.season ? `${item.season.toUpperCase()} ${item.year || ""}` : "CATÁLOGO",
    rating: item.score ? String(item.score) : "8.9",
    age: item.rating?.includes("R") ? "+17" : "+13",
    episodesCount: epsCount,
    season: item.year ? `Temporada (${item.year})` : "Temporada 1",
    genres: translatedGenres,
    poster: item.images?.jpg?.large_image_url || "assets/img/hola.jpg",
    backdrop:
      item.trailer?.images?.maximum_image_url ||
      item.images?.jpg?.large_image_url ||
      "assets/img/hola.jpg",
    trailerYoutubeId: item.trailer?.youtube_id || "bssSj4cKsrI",
    crunchyrollUrl: `https://www.crunchyroll.com/es/search?q=${encodeURIComponent(titleClean)}`,
    isSimulcast: Boolean(extraFlags.isSimulcast),
    isPopular: Boolean(extraFlags.isPopular),
    isHero: false,
    episodesLoadedFromApi: false,
    synopsis:
      item.synopsis ||
      "Disfruta de todos los episodios de esta serie en alta definición en Anime World.",
    episodes: generatedEpisodes
  };

  ANIME_CATALOG.push(newAnime);
  return newAnime;
}

async function fetchInitialApiAnimes() {
  try {
    const seasonRes = await fetch("https://api.jikan.moe/v4/seasons/now?limit=18&sfw=true");
    if (seasonRes.ok) {
      const seasonData = await seasonRes.json();
      (seasonData.data || []).forEach((item) => {
        normalizeJikanAnime(item, { isSimulcast: true });
      });
      renderCarousels();
      renderCatalogByGenre(state.selectedGenre);
    }

    await new Promise((r) => setTimeout(r, 450));

    const topRes = await fetch(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=18&sfw=true"
    );
    if (topRes.ok) {
      const topData = await topRes.json();
      (topData.data || []).forEach((item) => {
        normalizeJikanAnime(item, { isPopular: true });
      });
      renderCarousels();
      renderCatalogByGenre(state.selectedGenre);
    }
  } catch (_) {}
}

async function loadMoreFromJikanApi() {
  if (state.isFetchingApi) return;
  state.isFetchingApi = true;

  const btn = document.getElementById("loadMoreCatalogBtn");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Cargando...';
  }

  try {
    state.apiCatalogPage += 1;
    const genreParam = state.selectedMalGenreId ? `&genres=${state.selectedMalGenreId}` : "";
    const url = `https://api.jikan.moe/v4/anime?page=${state.apiCatalogPage}&limit=24&order_by=popularity&sort=asc&sfw=true${genreParam}`;

    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      (data.data || []).forEach((item) => {
        const anime = normalizeJikanAnime(item);
        if (state.selectedGenre !== "Todos" && !anime.genres.includes(state.selectedGenre)) {
          anime.genres.push(state.selectedGenre);
        }
      });

      renderCatalogByGenre(state.selectedGenre);
      showToast("Nuevos animes añadidos al catálogo", "fa-check-circle");
    }
  } catch (_) {
    showToast("Intenta nuevamente en unos segundos", "fa-triangle-exclamation");
  } finally {
    state.isFetchingApi = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-plus"></i> Mostrar más animes';
    }
  }
}

async function fetchRealEpisodesForAnime(anime) {
  if (!anime.mal_id || anime.episodesLoadedFromApi) return;

  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}/episodes`);
    if (!res.ok) return;
    const data = await res.json();
    if (!data.data || data.data.length === 0) return;

    const existingMap = new Map((anime.episodes || []).map((ep) => [ep.num, ep]));

    anime.episodes = data.data.map((epItem, index) => {
      const epNum = epItem.mal_id || index + 1;
      const prev = existingMap.get(epNum) || {};
      return {
        num: epNum,
        title: epItem.title || epItem.title_romanji || prev.title || `Episodio ${epNum}`,
        duration: prev.duration || "24m",
        mp4: prev.mp4,
        embed: prev.embed,
        dubMp4: prev.dubMp4,
        crunchyrollEpUrl: prev.crunchyrollEpUrl,
        filler: epItem.filler || false
      };
    });

    anime.episodesLoadedFromApi = true;

    if (state.activeModalAnime && state.activeModalAnime.id === anime.id) {
      renderModalEpisodesList();
    }
  } catch (_) {}
}

// ============================================================================
// 4. WATCHLIST Y TOASTS
// ============================================================================
function isInWatchlist(animeId) {
  return state.watchlist.includes(Number(animeId));
}

function toggleWatchlist(animeId, event) {
  if (event) event.stopPropagation();
  const id = Number(animeId);
  const anime = ANIME_CATALOG.find((a) => a.id === id);
  const idx = state.watchlist.indexOf(id);

  if (idx > -1) {
    state.watchlist.splice(idx, 1);
    showToast(`Eliminado de Mi Lista: ${anime ? anime.title : "Anime"}`, "fa-bookmark");
  } else {
    state.watchlist.push(id);
    showToast(`Añadido a Mi Lista: ${anime ? anime.title : "Anime"}`, "fa-check-circle");
  }

  localStorage.setItem("animeWorld_watchlist", JSON.stringify(state.watchlist));
  updateWatchlistUI();
}

function updateWatchlistUI() {
  const statWatchlist = document.getElementById("statWatchlistCount");
  if (statWatchlist) {
    statWatchlist.textContent = state.watchlist.length;
  }

  const currentHero = state.heroList[state.heroIndex];
  if (currentHero) {
    updateHeroBookmarkButton(currentHero.id);
  }

  if (state.activeModalAnime) {
    updateModalBookmarkButton(state.activeModalAnime.id);
  }

  document.querySelectorAll("[data-bookmark-id]").forEach((btn) => {
    const id = Number(btn.getAttribute("data-bookmark-id"));
    const saved = isInWatchlist(id);
    btn.classList.toggle("in-list", saved);
    btn.innerHTML = saved
      ? '<i class="fa-solid fa-bookmark"></i>'
      : '<i class="fa-regular fa-bookmark"></i>';
    btn.title = saved ? "Quitar de Mi Lista" : "Añadir a Mi Lista";
  });

  renderWatchlistSection();
}

function showToast(message, iconClass = "fa-bolt") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

// ============================================================================
// 5. HERO BANNER CARRUSEL
// ============================================================================
function initHeroCarousel() {
  const indicatorsContainer = document.getElementById("heroIndicators");
  if (!indicatorsContainer) return;

  state.heroList = ANIME_CATALOG.filter((a) => a.isHero).slice(0, 5);
  if (state.heroList.length === 0) {
    state.heroList = ANIME_CATALOG.slice(0, 5);
  }

  indicatorsContainer.innerHTML = state.heroList
    .map(
      (anime, index) => `
      <button class="hero-tab ${index === 0 ? "active" : ""}" data-hero-idx="${index}">
        <span class="hero-tab__title">${anime.title}</span>
        <div class="hero-tab__progress"></div>
      </button>
    `
    )
    .join("");

  indicatorsContainer.querySelectorAll(".hero-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = Number(tab.getAttribute("data-hero-idx"));
      setHeroSlide(idx);
      resetHeroInterval();
    });
  });

  setHeroSlide(0);
  resetHeroInterval();
}

function setHeroSlide(index) {
  state.heroIndex = index;
  const anime = state.heroList[index];
  if (!anime) return;

  const backdrop = document.getElementById("heroBackdrop");
  const tag = document.getElementById("heroTag");
  const title = document.getElementById("heroTitle");
  const meta = document.getElementById("heroMeta");
  const synopsis = document.getElementById("heroSynopsis");
  const posterImg = document.getElementById("heroPosterImg");
  const posterCard = document.getElementById("heroPosterCard");
  const watchBtn = document.getElementById("heroWatchBtn");
  const bookmarkBtn = document.getElementById("heroBookmarkBtn");

  if (backdrop) {
    backdrop.style.backgroundImage = `url('${anime.backdrop}')`;
  }
  if (tag) tag.textContent = anime.tag;
  if (title) title.textContent = anime.title;
  if (meta) {
    meta.innerHTML = `
      <span class="badge-age">${anime.age}</span>
      <span class="badge-lang">${anime.subtitle.toUpperCase()}</span>
      <span class="badge-score"><i class="fa-solid fa-star"></i> ${anime.rating}</span>
      <span class="hero__genres">${anime.genres.join(" • ")}</span>
    `;
  }
  if (synopsis) synopsis.textContent = anime.synopsis;
  if (posterImg) {
    posterImg.src = anime.poster;
    posterImg.alt = anime.title;
  }

  if (watchBtn) {
    watchBtn.onclick = () => openAnimeModal(anime.id, 1);
  }
  if (posterCard) {
    posterCard.onclick = () => openAnimeModal(anime.id, 1);
  }
  if (bookmarkBtn) {
    bookmarkBtn.onclick = (e) => toggleWatchlist(anime.id, e);
    updateHeroBookmarkButton(anime.id);
  }

  document.querySelectorAll(".hero-tab").forEach((tab, idx) => {
    tab.classList.remove("active");
    void tab.offsetWidth;
    if (idx === index) {
      tab.classList.add("active");
    }
  });
}

function updateHeroBookmarkButton(animeId) {
  const bookmarkBtn = document.getElementById("heroBookmarkBtn");
  if (!bookmarkBtn) return;
  const saved = isInWatchlist(animeId);
  bookmarkBtn.classList.toggle("in-list", saved);
  bookmarkBtn.innerHTML = saved
    ? '<i class="fa-solid fa-bookmark"></i> EN MI LISTA'
    : '<i class="fa-regular fa-bookmark"></i> MI LISTA';
}

function resetHeroInterval() {
  if (state.heroTimer) clearInterval(state.heroTimer);
  state.heroTimer = setInterval(() => {
    const next = (state.heroIndex + 1) % state.heroList.length;
    setHeroSlide(next);
  }, 6000);
}

// ============================================================================
// 6. TARJETAS LIMPIAS Y CARRUSELES
// ============================================================================
function createAnimeCardHTML(anime) {
  const saved = isInWatchlist(anime.id);
  return `
    <article class="anime-card" data-anime-id="${anime.id}">
      <div class="anime-card__poster-wrap">
        <span class="anime-card__badge-top">${anime.badge}</span>
        <img
          class="anime-card__poster"
          src="${anime.poster}"
          alt="${anime.title}"
          loading="lazy"
          onerror="this.src='assets/img/hola.jpg'"
        />

        <div class="anime-card__hover-panel">
          <div class="hover-panel__top">
            <h3 class="hover-panel__title">${anime.title}</h3>
            <div class="hover-panel__stats">
              <span class="hover-panel__score"><i class="fa-solid fa-star"></i> ${anime.rating}</span>
              <span>•</span>
              <span class="hover-panel__eps">${anime.episodesCount} Episodios</span>
            </div>
            <p class="hover-panel__desc">${anime.synopsis}</p>
          </div>

          <div class="hover-panel__actions">
            <button
              class="card-action-btn play"
              data-play-id="${anime.id}"
              title="Ver episodios"
            >
              <i class="fa-solid fa-play"></i>
            </button>
            <button
              class="card-action-btn bookmark ${saved ? "in-list" : ""}"
              data-bookmark-id="${anime.id}"
              title="${saved ? "Quitar de Mi Lista" : "Añadir a Mi Lista"}"
            >
              <i class="fa-${saved ? "solid" : "regular"} fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="anime-card__info">
        <h3 class="anime-card__title">${anime.title}</h3>
        <span class="anime-card__sub">${anime.subtitle}</span>
      </div>
    </article>
  `;
}

function attachCardListeners(container) {
  if (!container) return;

  container.querySelectorAll(".anime-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-bookmark-id]")) return;
      const id = Number(card.getAttribute("data-anime-id"));
      openAnimeModal(id, 1);
    });
  });

  container.querySelectorAll("[data-bookmark-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(btn.getAttribute("data-bookmark-id"));
      toggleWatchlist(id, e);
    });
  });
}

function renderContinueWatching() {
  const row = document.getElementById("continueRow");
  if (!row) return;

  row.innerHTML = state.continueList
    .map((item) => {
      const anime = ANIME_CATALOG.find((a) => a.id === item.animeId) || ANIME_CATALOG[0];
      return `
        <article class="continue-card" data-continue-anime="${anime.id}" data-continue-ep="${item.epNum}">
          <div class="continue-card__thumb">
            <img src="${anime.poster}" alt="${anime.title}" loading="lazy" onerror="this.src='assets/img/hola.jpg'" />
            <div class="continue-card__play-overlay">
              <div class="continue-card__play-circle">
                <i class="fa-solid fa-play"></i>
              </div>
            </div>
            <span class="continue-card__duration">${item.remaining}</span>
            <div class="continue-card__progress">
              <div class="continue-card__progress-bar" style="width: ${item.progress}%;"></div>
            </div>
          </div>
          <div class="continue-card__body">
            <span class="continue-card__series">${anime.title}</span>
            <h3 class="continue-card__ep-title">${item.epTitle}</h3>
            <div class="continue-card__footer">
              <span>${anime.subtitle}</span>
              <span>HD</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  row.querySelectorAll(".continue-card").forEach((card) => {
    card.addEventListener("click", () => {
      const animeId = Number(card.getAttribute("data-continue-anime"));
      const epNum = Number(card.getAttribute("data-continue-ep"));
      openAnimeModal(animeId, epNum);
    });
  });
}

function renderCarousels() {
  const simulcastRow = document.getElementById("simulcastRow");
  const popularRow = document.getElementById("popularRow");

  if (simulcastRow) {
    const simulcasts = ANIME_CATALOG.filter((a) => a.isSimulcast);
    simulcastRow.innerHTML = simulcasts.map(createAnimeCardHTML).join("");
    attachCardListeners(simulcastRow);
  }

  if (popularRow) {
    const populars = ANIME_CATALOG.filter((a) => a.isPopular);
    popularRow.innerHTML = populars.map(createAnimeCardHTML).join("");
    attachCardListeners(popularRow);
  }
}

function initCarouselButtons() {
  document.querySelectorAll(".carousel-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-scroll-target");
      const dir = Number(btn.getAttribute("data-dir"));
      const row = document.getElementById(targetId);
      if (row) {
        row.scrollBy({ left: dir * (row.clientWidth * 0.75), behavior: "smooth" });
      }
    });
  });
}

function renderPromoBanner() {
  const promoBanner = document.getElementById("promoBanner");
  if (!promoBanner) return;
  const featured = ANIME_CATALOG.find((a) => a.id === 4) || ANIME_CATALOG[0];

  promoBanner.innerHTML = `
    <img class="promo-banner__poster" src="${featured.poster}" alt="${featured.title}" />
    <div class="promo-banner__info">
      <div class="promo-banner__tag">
        <img src="assets/img/alas.png" alt="Alas" width="28" height="22" />
        <span>COLECCIÓN DESTACADA</span>
      </div>
      <h2 class="promo-banner__title">${featured.title}</h2>
      <p class="promo-banner__desc">
        Revive los combates más legendarios del clan Uchiha y el despertar del Mangekyo Sharingan con audio original japonés y doblaje latino en alta definición.
      </p>
      <div class="hero__actions">
        <button class="btn-primary-crunchy" id="promoWatchBtn">
          <i class="fa-solid fa-play"></i> VER AHORA
        </button>
        <button class="btn-bookmark-crunchy" id="promoBookmarkBtn">
          <i class="fa-regular fa-bookmark"></i> MI LISTA
        </button>
      </div>
    </div>
  `;

  document.getElementById("promoWatchBtn")?.addEventListener("click", () => {
    openAnimeModal(featured.id, 1);
  });
  document.getElementById("promoBookmarkBtn")?.addEventListener("click", (e) => {
    toggleWatchlist(featured.id, e);
  });
}

function renderCatalogByGenre(genre = "Todos") {
  state.selectedGenre = genre;
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  const filtered =
    genre === "Todos"
      ? ANIME_CATALOG
      : ANIME_CATALOG.filter((anime) =>
          anime.genres.some((g) => g.toLowerCase() === genre.toLowerCase())
        );

  grid.innerHTML = filtered.map(createAnimeCardHTML).join("");
  attachCardListeners(grid);
}

function initGenreFilter() {
  const genreBar = document.getElementById("genreBar");
  if (!genreBar) return;

  genreBar.querySelectorAll(".genre-pill").forEach((pill) => {
    pill.addEventListener("click", async () => {
      genreBar.querySelectorAll(".genre-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const genre = pill.getAttribute("data-genre");
      const malGenreId = pill.getAttribute("data-mal-genre") || "";
      state.selectedMalGenreId = malGenreId;

      renderCatalogByGenre(genre);

      const currentFiltered = ANIME_CATALOG.filter((a) =>
        genre === "Todos" ? true : a.genres.includes(genre)
      );
      if (currentFiltered.length < 8 && malGenreId) {
        state.apiCatalogPage = 0;
        await loadMoreFromJikanApi();
      }
    });
  });

  renderCatalogByGenre("Todos");
}

function renderWatchlistSection() {
  const grid = document.getElementById("watchlistGrid");
  if (!grid) return;

  const savedAnimes = ANIME_CATALOG.filter((a) => state.watchlist.includes(a.id));

  if (savedAnimes.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; background: var(--bg-secondary); border: 1px dashed var(--border-subtle); border-radius: 8px; padding: 32px 20px; text-align: center; color: var(--text-secondary);">
        <p style="font-weight: 700; color: var(--text-primary);">Tu lista está vacía</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = savedAnimes.map(createAnimeCardHTML).join("");
  attachCardListeners(grid);
}

// ============================================================================
// 7. BUSCADOR EN TIEMPO REAL
// ============================================================================
let searchDebounce = null;

function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  const closeSearchBtn = document.getElementById("closeSearchBtn");
  const searchSection = document.getElementById("searchResultsSection");

  if (!searchInput || !searchSection) return;

  const hideSearch = () => {
    searchInput.value = "";
    clearBtn?.classList.remove("visible");
    searchSection.style.display = "none";
  };

  clearBtn?.addEventListener("click", hideSearch);
  closeSearchBtn?.addEventListener("click", hideSearch);

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    clearBtn?.classList.toggle("visible", query.length > 0);

    if (!query) {
      searchSection.style.display = "none";
      return;
    }

    searchSection.style.display = "block";
    performSearch(query);
  });
}

async function performSearch(query) {
  const searchTitle = document.getElementById("searchTitle");
  const searchSubtitle = document.getElementById("searchSubtitle");
  const searchGrid = document.getElementById("searchGrid");
  if (!searchGrid) return;

  const qLower = query.toLowerCase();
  const localMatches = ANIME_CATALOG.filter(
    (a) =>
      a.title.toLowerCase().includes(qLower) ||
      a.genres.some((g) => g.toLowerCase().includes(qLower))
  );

  if (searchTitle) searchTitle.textContent = `Resultados para "${query}"`;

  if (localMatches.length > 0) {
    if (searchSubtitle) {
      searchSubtitle.textContent = `${localMatches.length} anime(s) encontrados`;
    }
    searchGrid.innerHTML = localMatches.map(createAnimeCardHTML).join("");
    attachCardListeners(searchGrid);
  } else {
    if (searchSubtitle) {
      searchSubtitle.textContent = "Buscando en el catálogo...";
    }
    searchGrid.innerHTML = `<p style="color: var(--text-secondary);">Buscando "${query}"...</p>`;
  }

  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(async () => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=12&sfw=true`
      );
      if (!res.ok) return;
      const data = await res.json();
      if (!data.data) return;

      data.data.forEach((item) => normalizeJikanAnime(item));

      const updatedMatches = ANIME_CATALOG.filter(
        (a) =>
          a.title.toLowerCase().includes(qLower) ||
          a.genres.some((g) => g.toLowerCase().includes(qLower))
      );
      if (searchSubtitle) {
        searchSubtitle.textContent = `${updatedMatches.length} animes encontrados`;
      }
      searchGrid.innerHTML = updatedMatches.map(createAnimeCardHTML).join("");
      attachCardListeners(searchGrid);
    } catch (_) {}
  }, 380);
}

// ============================================================================
// 8. REPRODUCTOR MULTI-SERVIDOR + EXTRACTOR AUTOMÁTICO DE IFRAME ANIMEFLV
// ============================================================================
function convertToEmbedUrl(inputStr) {
  if (!inputStr) return "";
  let trimmed = inputStr.trim();

  // 1. Si el usuario pegó el código <iframe src="..."> completo desde el inspector de AnimeFLV
  const iframeSrcMatch = trimmed.match(/src=["']([^"']+)["']/i);
  if (iframeSrcMatch) {
    trimmed = iframeSrcMatch[1];
  }

  // 2. Convertir enlaces de MEGA (/file/ -> /embed/)
  if (trimmed.includes("mega.nz/file/")) {
    return trimmed.replace("mega.nz/file/", "mega.nz/embed/");
  }

  // 3. Convertir enlaces de OK.ru (/video/ -> /videoembed/)
  if (trimmed.includes("ok.ru/video/") && !trimmed.includes("videoembed")) {
    return trimmed.replace("ok.ru/video/", "ok.ru/videoembed/");
  }

  // 4. Convertir enlaces de YouTube a /embed/
  const ytMatch = trimmed.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }

  return trimmed;
}

function isDirectVideoFile(url) {
  if (!url) return false;
  const clean = url.split("?")[0].toLowerCase();
  return (
    clean.endsWith(".mp4") ||
    clean.endsWith(".webm") ||
    clean.endsWith(".ogg") ||
    clean.endsWith(".mkv") ||
    url.startsWith("blob:") ||
    url.startsWith("assets/")
  );
}

// Cache de servidores extraídos de AnimeFLV por episodio: { "slug_epNum": [ { title, code } ] }
const animeFlvServersCache = {};

async function fetchAnimeFlvInPageServers(anime, epNum) {
  const slug = buildAnimeFlvSlug(anime);
  const cacheKey = `${slug}_${epNum}`;
  if (animeFlvServersCache[cacheKey]) {
    return animeFlvServersCache[cacheKey];
  }

  const targetUrls = [
    `https://www3.animeflv.net/ver/${slug}-${epNum}`,
    `https://animeflv.or.at/ver/${slug}-${epNum}`
  ];

  const proxyBuilders = [
    (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    (u) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`
  ];

  for (const targetUrl of targetUrls) {
    for (const buildProxy of proxyBuilders) {
      try {
        const res = await fetch(buildProxy(targetUrl));
        if (!res.ok) continue;
        const html = await res.text();
        const match = html.match(/var\s+videos\s*=\s*(\{[\s\S]*?\});/);
        if (match && match[1]) {
          const parsed = JSON.parse(match[1]);
          const subList = parsed.SUB || parsed.LAT || [];
          const validServers = subList
            .filter((s) => s && s.code)
            .map((s) => ({
              title: s.title || s.server || "Servidor",
              code: convertToEmbedUrl(s.code)
            }));

          if (validServers.length > 0) {
            animeFlvServersCache[cacheKey] = validServers;
            return validServers;
          }
        }
      } catch (_) {}
    }
  }

  return null;
}

function getEpisodeCustomSource(animeId, epNum) {
  return customEpisodeSources[`${animeId}_${epNum}`] || null;
}

function openAnimeModal(animeId, episodeNum = 1) {
  const anime = ANIME_CATALOG.find((a) => a.id === Number(animeId));
  if (!anime) return;

  state.activeModalAnime = anime;
  state.activeEpisodeNum = episodeNum;
  state.activePlayerMode = "autostream";

  const overlay = document.getElementById("animeModalOverlay");
  if (!overlay) return;

  document.getElementById("modalTopSeriesTitle").textContent = anime.title;
  document.getElementById("modalTopEpBadge").textContent = `E${episodeNum}`;
  document.getElementById("modalPoster").src = anime.poster;
  document.getElementById("modalTitle").textContent = anime.title;
  document.getElementById("modalSeasonBadge").textContent = anime.season;
  document.getElementById("modalSynopsis").textContent = anime.synopsis;

  document.getElementById("modalMeta").innerHTML = `
    <span class="badge-age">${anime.age}</span>
    <span class="badge-lang">${anime.subtitle}</span>
    <span class="badge-score"><i class="fa-solid fa-star"></i> ${anime.rating}</span>
    <span>• ${anime.episodesCount} Episodios</span>
  `;

  document.getElementById("modalTags").innerHTML = anime.genres
    .map((g) => `<span class="tag-chip">${g}</span>`)
    .join("");

  updateModalBookmarkButton(anime.id);
  const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
  if (modalBookmarkBtn) {
    modalBookmarkBtn.onclick = (e) => toggleWatchlist(anime.id, e);
  }

  const customSrc = getEpisodeCustomSource(anime.id, episodeNum);
  if (customSrc) {
    state.activePlayerMode = customSrc.type === "embed" ? "embed" : "mp4";
  }

  syncCustomSourceInput();
  renderModalTabs();
  renderPlayerStage();
  renderModalEpisodesList();
  saveToContinueWatching(anime, episodeNum);

  fetchRealEpisodesForAnime(anime);

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function syncCustomSourceInput() {
  const anime = state.activeModalAnime;
  if (!anime) return;

  const epLabel = document.getElementById("customSourceEpLabel");
  const urlInput = document.getElementById("customSourceUrlInput");

  if (epLabel) epLabel.textContent = `E${state.activeEpisodeNum}`;

  const customSrc = getEpisodeCustomSource(anime.id, state.activeEpisodeNum);
  const epObj = anime.episodes.find((e) => e.num === state.activeEpisodeNum);
  if (urlInput) {
    urlInput.value = customSrc?.url || epObj?.mp4 || epObj?.embed || "";
  }
}

function updateModalBookmarkButton(animeId) {
  const btn = document.getElementById("modalBookmarkBtn");
  if (!btn) return;
  const saved = isInWatchlist(animeId);
  btn.classList.toggle("in-list", saved);
  btn.innerHTML = saved
    ? '<i class="fa-solid fa-bookmark"></i>'
    : '<i class="fa-regular fa-bookmark"></i>';
}

function renderModalTabs() {
  const selector = document.getElementById("audioSelector");
  if (!selector) return;

  selector.querySelectorAll(".audio-pill").forEach((pill) => {
    const mode = pill.getAttribute("data-mode");
    pill.classList.toggle("active", mode === state.activePlayerMode);
    pill.onclick = () => {
      state.activePlayerMode = mode;
      renderModalTabs();
      renderPlayerStage();
    };
  });
}

const FREE_DAILY_EPISODE_LIMIT = 3;

function getTodayDateString() {
  return new Date().toISOString().slice(0, 10);
}

function getDailyWatchData() {
  const today = getTodayDateString();
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem("animeWorld_dailyWatch") || "null");
  } catch (_) {}

  if (!saved || saved.date !== today || !Array.isArray(saved.episodes)) {
    saved = { date: today, episodes: [] };
    localStorage.setItem("animeWorld_dailyWatch", JSON.stringify(saved));
  }
  return saved;
}

function canWatchEpisodeNow(animeId, epNum) {
  // Si el usuario tiene cuenta iniciada, tiene acceso ilimitado
  if (state.userProfile?.loggedIn) {
    return { allowed: true, isUnlimited: true, watchedToday: 0, remaining: Infinity };
  }

  const daily = getDailyWatchData();
  const epKey = `${animeId}_${epNum}`;

  if (daily.episodes.includes(epKey)) {
    return {
      allowed: true,
      isUnlimited: false,
      watchedToday: daily.episodes.length,
      remaining: Math.max(0, FREE_DAILY_EPISODE_LIMIT - daily.episodes.length)
    };
  }

  if (daily.episodes.length < FREE_DAILY_EPISODE_LIMIT) {
    daily.episodes.push(epKey);
    localStorage.setItem("animeWorld_dailyWatch", JSON.stringify(daily));
    const rem = Math.max(0, FREE_DAILY_EPISODE_LIMIT - daily.episodes.length);
    showToast(
      `Capítulo gratis ${daily.episodes.length}/${FREE_DAILY_EPISODE_LIMIT} de hoy (${rem} restante${rem === 1 ? "" : "s"})`,
      "fa-circle-play"
    );
    updateProfileUI();
    return {
      allowed: true,
      isUnlimited: false,
      watchedToday: daily.episodes.length,
      remaining: rem
    };
  }

  return {
    allowed: false,
    isUnlimited: false,
    watchedToday: daily.episodes.length,
    remaining: 0
  };
}

async function renderPlayerStage() {
  const stage = document.getElementById("playerStage");
  const anime = state.activeModalAnime;
  if (!stage || !anime) return;

  const epObj =
    anime.episodes.find((e) => e.num === state.activeEpisodeNum) ||
    anime.episodes[0] || {
      num: state.activeEpisodeNum,
      title: `Episodio ${state.activeEpisodeNum}`,
      duration: "24m"
    };

  document.getElementById("modalTopEpBadge").textContent = `E${epObj.num}`;
  syncCustomSourceInput();

  // Verificar límite diario de 3 episodios gratis si no ha iniciado sesión
  const access = canWatchEpisodeNow(anime.id, epObj.num);
  if (!access.allowed) {
    stage.innerHTML = `
      <div class="custom-player" style="background-image: url('${anime.backdrop || anime.poster}');">
        <div class="custom-player__center">
          <div style="background: rgba(247, 51, 51, 0.2); border: 1px solid var(--accent-red); color: #ff8080; padding: 6px 14px; border-radius: 99px; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.8px; text-transform: uppercase;">
            <i class="fa-solid fa-lock"></i> Límite Diario Gratuito Alcanzado (3 / 3 Capítulos Hoy)
          </div>
          <h3 style="font-size: 1.4rem; font-weight: 900; max-width: 540px; text-shadow: 0 4px 16px #000;">
            Crea tu cuenta gratis para seguir viendo "${anime.title}" sin límite
          </h3>
          <p style="font-size: 0.88rem; color: #d5d7de; max-width: 480px; line-height: 1.5;">
            Como visitante puedes ver hasta 3 capítulos al día. Inicia sesión o regístrate en segundos para desbloquear todos los animes y episodios de forma ilimitada.
          </p>
          <div style="margin-top: 8px;">
            <button class="btn-primary-crunchy" id="unlockUnlimitedBtn">
              <i class="fa-solid fa-user-plus"></i> CREAR CUENTA / INICIAR SESIÓN (ILIMITADO)
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("unlockUnlimitedBtn")?.addEventListener("click", () => {
      updateProfileUI();
      document.getElementById("profileModalOverlay")?.classList.add("open");
    });
    return;
  }

  const customSrc = getEpisodeCustomSource(anime.id, epObj.num);
  const malId = anime.mal_id || 52299;

  // MODO 1: SERVIDOR 1 (EPISODIO SUB INTEGRADO EN LA PÁGINA)
  if (state.activePlayerMode === "autostream") {
    const streamUrl =
      customSrc?.url ||
      `https://vidlink.pro/anime/${malId}/${epObj.num}/sub?primaryColor=f73333&autoplay=true`;

    stage.innerHTML = `
      <iframe
        src="${streamUrl}"
        title="${anime.title} - Episodio ${epObj.num} (Sub)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    `;
    return;
  }

  // MODO 2: SERVIDOR 2 (DOBLAJE / ALTERNATIVO INTEGRADO EN LA PÁGINA)
  if (state.activePlayerMode === "autodub") {
    const altStreamUrl = `https://vidlink.pro/anime/${malId}/${epObj.num}/dub?primaryColor=f73333&fallback=true&autoplay=true`;

    stage.innerHTML = `
      <iframe
        src="${altStreamUrl}"
        title="${anime.title} - Episodio ${epObj.num} (Dub/Alt)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    `;
    return;
  }

  // MODO 3: SERVIDOR 3 (EXTRACTOR INTERNO AUTOMÁTICO DE SERVIDORES ANIMEFLV: MEGA, OK.RU, SW, YU)
  if (state.activePlayerMode === "animeflv") {
    stage.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-secondary);gap:10px;font-weight:700;">
        <i class="fa-solid fa-spinner fa-spin" style="color:var(--accent-red);font-size:1.3rem;"></i>
        <span>Cargando servidores internos de AnimeFLV (MEGA, OK.ru, Streamwish) para E${epObj.num}...</span>
      </div>
    `;

    const servers = await fetchAnimeFlvInPageServers(anime, epObj.num);
    if (state.activeModalAnime?.id !== anime.id || state.activePlayerMode !== "animeflv") {
      return;
    }

    if (servers && servers.length > 0) {
      const renderFlvServerFrame = (idx) => {
        const currentServer = servers[idx] || servers[0];
        stage.innerHTML = `
          <div style="position:relative;width:100%;height:100%;display:flex;flex-direction:column;">
            <div style="background:#0d0e12;padding:6px 12px;display:flex;align-items:center;gap:6px;overflow-x:auto;border-bottom:1px solid var(--border-subtle);">
              <span style="font-size:0.72rem;font-weight:800;color:var(--text-secondary);margin-right:4px;">Opción AnimeFLV:</span>
              ${servers
                .map(
                  (srv, i) => `
                  <button
                    class="audio-pill ${i === idx ? "active" : ""}"
                    data-flv-srv="${i}"
                    style="padding:3px 9px;font-size:0.72rem;"
                  >
                    ${srv.title}
                  </button>
                `
                )
                .join("")}
            </div>
            <iframe
              src="${currentServer.code}"
              style="flex:1;width:100%;border:none;"
              title="${anime.title} - E${epObj.num} (${currentServer.title})"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        `;

        stage.querySelectorAll("[data-flv-srv]").forEach((btn) => {
          btn.addEventListener("click", () => {
            renderFlvServerFrame(Number(btn.getAttribute("data-flv-srv")));
          });
        });
      };

      renderFlvServerFrame(0);
    } else {
      // Si el proxy tarda o el slug varía, reproducir inmediatamente con el embed interno de respaldo sin salir de la web
      const backupEmbed =
        customSrc?.url ||
        `https://vidlink.pro/anime/${malId}/${epObj.num}/sub?primaryColor=f73333&autoplay=true`;
      stage.innerHTML = `
        <iframe
          src="${backupEmbed}"
          title="${anime.title} - Episodio ${epObj.num}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      `;
    }
    return;
  }

  // MODO 4: SERVIDOR EMBED / YOUTUBE / MEGA PEGADO
  if (state.activePlayerMode === "embed") {
    const rawEmbed =
      (customSrc?.type === "embed" ? customSrc.url : null) ||
      epObj.embed ||
      `https://www.youtube.com/embed/${anime.trailerYoutubeId || "bssSj4cKsrI"}?autoplay=1&rel=0`;
    const embedUrl = convertToEmbedUrl(rawEmbed);

    stage.innerHTML = `
      <iframe
        src="${embedUrl}"
        title="${anime.title} - Episodio ${epObj.num}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    `;
    return;
  }

  // MODO 5: REPRODUCTOR DE VIDEO DIRECTO HTML5 (<video> MP4 / WebM / Local)
  const fallbackStream =
    DEFAULT_REAL_MP4_STREAMS[(anime.id + epObj.num) % DEFAULT_REAL_MP4_STREAMS.length];

  let videoSrc = fallbackStream;
  if (state.localBlobUrl) {
    videoSrc = state.localBlobUrl;
  } else if (customSrc?.url && isDirectVideoFile(customSrc.url)) {
    videoSrc = customSrc.url;
  } else if (epObj.mp4) {
    videoSrc = epObj.mp4;
  }

  stage.innerHTML = `
    <video
      id="realHtml5Video"
      src="${videoSrc}"
      poster="${anime.backdrop || anime.poster}"
      controls
      autoplay
      playsinline
    >
      Tu navegador no soporta la reproducción directa de video HTML5.
    </video>
  `;

  const videoEl = document.getElementById("realHtml5Video");
  if (videoEl) {
    videoEl.addEventListener("ended", () => {
      changeEpisodeByOffset(1);
    });
  }
}

function changeEpisodeByOffset(offset) {
  const anime = state.activeModalAnime;
  if (!anime || !anime.episodes?.length) return;
  const currentIndex = anime.episodes.findIndex((e) => e.num === state.activeEpisodeNum);
  const nextIndex = currentIndex + offset;
  if (nextIndex >= 0 && nextIndex < anime.episodes.length) {
    const targetEp = anime.episodes[nextIndex];
    state.activeEpisodeNum = targetEp.num;
    state.localBlobUrl = null;
    renderPlayerStage();
    renderModalEpisodesList();
    saveToContinueWatching(anime, targetEp.num);
  }
}

function renderModalEpisodesList() {
  const list = document.getElementById("modalEpisodesList");
  const anime = state.activeModalAnime;
  if (!list || !anime) return;

  list.innerHTML = anime.episodes
    .map((ep) => {
      return `
      <div class="episode-item ${ep.num === state.activeEpisodeNum ? "active" : ""}" data-ep-num="${ep.num}">
        <div class="episode-item__thumb">
          <img src="${anime.poster}" alt="E${ep.num}" loading="lazy" onerror="this.src='assets/img/hola.jpg'" />
          <span class="episode-item__num">E${ep.num}</span>
        </div>
        <div class="episode-item__info">
          <div class="episode-item__title">${ep.num}. ${ep.title}</div>
          <div class="episode-item__meta">
            ${ep.duration || "24m"}${ep.filler ? ' • <span style="color:#f5c518;">Relleno</span>' : ""}
          </div>
        </div>
        <div class="episode-item__play">
          <i class="fa-solid fa-play"></i>
        </div>
      </div>
    `;
    })
    .join("");

  list.querySelectorAll(".episode-item").forEach((item) => {
    item.addEventListener("click", () => {
      const epNum = Number(item.getAttribute("data-ep-num"));
      state.activeEpisodeNum = epNum;
      state.localBlobUrl = null;
      renderPlayerStage();
      renderModalEpisodesList();
      saveToContinueWatching(anime, epNum);
    });
  });
}

function saveToContinueWatching(anime, epNum) {
  const epObj =
    anime.episodes.find((e) => e.num === epNum) ||
    anime.episodes[0] || { num: epNum, title: `Episodio ${epNum}` };

  state.continueList = state.continueList.filter((item) => item.animeId !== anime.id);
  state.continueList.unshift({
    animeId: anime.id,
    epNum: epObj.num,
    epTitle: `E${epObj.num} - ${epObj.title}`,
    progress: 45,
    remaining: "Quedan 13m"
  });
  state.continueList = state.continueList.slice(0, 4);
  localStorage.setItem("animeWorld_continue", JSON.stringify(state.continueList));
  renderContinueWatching();
}

function closeAnimeModal() {
  const overlay = document.getElementById("animeModalOverlay");
  const stage = document.getElementById("playerStage");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (stage) stage.innerHTML = "";
}

// ============================================================================
// 9. SISTEMA DE CUENTA PROPIA (3 CAPÍTULOS GRATIS AL DÍA vs CUENTA ILIMITADA)
// ============================================================================
function updateProfileUI() {
  const p = state.userProfile;
  const isLogged = Boolean(p?.loggedIn);
  const daily = getDailyWatchData();
  const watchedToday = daily.episodes.length;
  const remainingToday = Math.max(0, FREE_DAILY_EPISODE_LIMIT - watchedToday);

  const modalAvatar = document.getElementById("profileModalAvatar");
  const modalName = document.getElementById("profileModalName");
  const modalStatus = document.getElementById("profileModalStatus");
  const modalBadge = document.getElementById("accountModalBadge");
  const statDaily = document.getElementById("statDailyRemaining");
  const statEps = document.getElementById("statEpisodesWatched");
  const statWatchlist = document.getElementById("statWatchlistCount");
  const authForm = document.getElementById("authAccountForm");
  const logoutBtn = document.getElementById("logoutAccountBtn");

  if (modalAvatar && p.avatar) modalAvatar.src = p.avatar;

  if (isLogged) {
    if (modalName) modalName.textContent = p.username || "Miembro Anime World";
    if (modalStatus) {
      modalStatus.style.color = "#4ade80";
      modalStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Cuenta activa (${p.email || "Verificada"}) • Animes y capítulos ilimitados`;
    }
    if (modalBadge) {
      modalBadge.style.background = "#16a34a";
      modalBadge.textContent = "CUENTA ILIMITADA ∞";
    }
    if (statDaily) statDaily.textContent = "∞ Ilimitado";
    if (authForm) authForm.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-flex";
  } else {
    if (modalName) modalName.textContent = "Visitante (Modo Gratis)";
    if (modalStatus) {
      modalStatus.style.color = "var(--text-secondary)";
      modalStatus.textContent = `Te quedan ${remainingToday} de ${FREE_DAILY_EPISODE_LIMIT} capítulos gratis hoy. Inicia sesión para ver sin límite.`;
    }
    if (modalBadge) {
      modalBadge.style.background = "var(--accent-red)";
      modalBadge.textContent = `GRATIS (${remainingToday}/${FREE_DAILY_EPISODE_LIMIT} HOY)`;
    }
    if (statDaily) statDaily.textContent = `${remainingToday} / ${FREE_DAILY_EPISODE_LIMIT}`;
    if (authForm) authForm.style.display = "grid";
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  if (statEps) statEps.textContent = watchedToday;
  if (statWatchlist) statWatchlist.textContent = state.watchlist.length;
}

function initProfileModal() {
  const overlay = document.getElementById("profileModalOverlay");
  const avatarBtn = document.getElementById("avatarBtn");
  const closeBtn = document.getElementById("closeProfileModalBtn");
  const authForm = document.getElementById("authAccountForm");
  const logoutBtn = document.getElementById("logoutAccountBtn");

  const openProfile = (e) => {
    if (e) e.preventDefault();
    updateProfileUI();
    overlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeProfile = () => {
    overlay?.classList.remove("open");
    if (!document.getElementById("animeModalOverlay")?.classList.contains("open")) {
      document.body.style.overflow = "";
    }
  };

  avatarBtn?.addEventListener("click", openProfile);
  closeBtn?.addEventListener("click", closeProfile);

  overlay?.addEventListener("click", (e) => {
    if (e.target.id === "profileModalOverlay") closeProfile();
  });

  authForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("authUsernameInput")?.value.trim();
    const email = document.getElementById("authEmailInput")?.value.trim();
    if (!username || !email) return;

    state.userProfile = {
      ...state.userProfile,
      username,
      email,
      loggedIn: true
    };
    localStorage.setItem("animeWorld_userProfile", JSON.stringify(state.userProfile));

    updateProfileUI();
    closeProfile();
    showToast(`¡Bienvenido, ${username}! Ahora tienes capítulos ilimitados`, "fa-unlock-keyhole");

    // Si estaba abierto el reproductor en la pantalla de límite diario, reproducir el capítulo de inmediato
    if (
      document.getElementById("animeModalOverlay")?.classList.contains("open") &&
      state.activeModalAnime
    ) {
      renderPlayerStage();
    }
  });

  logoutBtn?.addEventListener("click", () => {
    state.userProfile.loggedIn = false;
    localStorage.setItem("animeWorld_userProfile", JSON.stringify(state.userProfile));
    updateProfileUI();
    showToast("Sesión cerrada — Modo visitante (3 capítulos gratis/día)", "fa-user");
  });

  updateProfileUI();
}

// ============================================================================
// 10. BARRA DE FUENTE PERSONALIZADA POR EPISODIO (SOPORTA IFRAME DE ANIMEFLV)
// ============================================================================
function initCustomSourceControls() {
  const toggleBtn = document.getElementById("toggleCustomSourceBtn");
  const bar = document.getElementById("customSourceBar");
  const saveBtn = document.getElementById("saveCustomSourceBtn");
  const urlInput = document.getElementById("customSourceUrlInput");
  const fileInput = document.getElementById("localVideoFileInput");

  toggleBtn?.addEventListener("click", () => {
    bar?.classList.toggle("visible");
  });

  saveBtn?.addEventListener("click", () => {
    const anime = state.activeModalAnime;
    if (!anime || !urlInput) return;

    const rawUrl = urlInput.value.trim();
    if (!rawUrl) return;

    const cleanedUrl = convertToEmbedUrl(rawUrl);
    const type = isDirectVideoFile(cleanedUrl) ? "mp4" : "embed";
    customEpisodeSources[`${anime.id}_${state.activeEpisodeNum}`] = {
      url: cleanedUrl,
      type
    };
    localStorage.setItem("animeWorld_customEpSources", JSON.stringify(customEpisodeSources));

    state.localBlobUrl = null;
    state.activePlayerMode = type;
    bar?.classList.remove("visible");
    renderModalTabs();
    renderPlayerStage();
    renderModalEpisodesList();
    showToast(`Episodio ${state.activeEpisodeNum} actualizado`, "fa-check-circle");
  });

  fileInput?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (state.localBlobUrl) {
      URL.revokeObjectURL(state.localBlobUrl);
    }
    state.localBlobUrl = URL.createObjectURL(file);
    state.activePlayerMode = "mp4";
    bar?.classList.remove("visible");
    renderModalTabs();
    renderPlayerStage();
  });
}

// ============================================================================
// 11. INICIALIZACIÓN GENERAL
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroCarousel();
  renderContinueWatching();
  renderCarousels();
  initCarouselButtons();
  renderPromoBanner();
  initGenreFilter();
  updateWatchlistUI();
  initSearch();
  initCustomSourceControls();
  initProfileModal();

  document.getElementById("loadMoreCatalogBtn")?.addEventListener("click", loadMoreFromJikanApi);
  document.getElementById("prevEpTopBtn")?.addEventListener("click", () => changeEpisodeByOffset(-1));
  document.getElementById("nextEpTopBtn")?.addEventListener("click", () => changeEpisodeByOffset(1));

  fetchInitialApiAnimes();

  document.getElementById("closeModalBtn")?.addEventListener("click", closeAnimeModal);
  document.getElementById("animeModalOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "animeModalOverlay") closeAnimeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAnimeModal();
      document.getElementById("profileModalOverlay")?.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
});
