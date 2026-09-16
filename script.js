/* ===========================================================
   FrameFlux — gallery logic
   ---------------------------------------------------------
   Everything on the page is built from the WALLPAPERS list
   below. To add an image: drop the file in IMAGE_DIR and add
   one entry. Nothing else needs editing.
   =========================================================== */

/* Folder the image files live in, relative to index.html.
   Leave as "" if the images sit next to index.html.        */
const IMAGE_DIR = "";

const WALLPAPERS = [
  /* ---------- Featured / mixed ---------- */
  { file: "https://i.pinimg.com/736x/78/e2/7d/78e27db876126e6dbc20fa756595038f.jpg", title: "The Hood", category: "Portraits", featured: true,
    desc: "A moody portrait bathed in shadow and neon glow, made for screens that lean dark." },
  { file: "https://i.pinimg.com/736x/8c/f7/1a/8cf71aa97d3cec2a23c057bea9d0e785.jpg", title: "Cosmic Wanderlust", category: "Abstract", featured: true,
    desc: "Deep space in a single frame — stars pulled across a midnight sky." },
  { file: "https://i.pinimg.com/736x/d3/aa/7b/d3aa7b22900fe653f85188caec2dbf08.jpg", title: "Icon", category: "Portraits", featured: true,
    desc: "Minimal and bold at once: a sleek character study that holds a home screen on its own." },
  { file: "https://i.pinimg.com/1200x/e3/ca/6a/e3ca6a44d066bb8029d67e2624730389.jpg", title: "High Contrast", category: "Abstract", featured: true,
    desc: "Hard light, hard shadow. Turns a plain desktop into something closer to a print." },
  { file: "https://i.pinimg.com/736x/5f/67/ad/5f67ada6081173900e1a1c8a9b8453d4.jpg", title: "Smooth Operator", category: "Portraits", featured: true,
    desc: "Wry expression, heavy contrast — personality for a screen that keeps going blank." },
  { file: "https://i.pinimg.com/1200x/3a/8a/b8/3a8ab8c86a4097e8456aa4221ff520fd.jpg", title: "Spider-Verse", category: "Anime", featured: true,
    desc: "Comic-book colour at full volume, with the motion lines to match." },
  { file: "https://i.pinimg.com/1200x/0d/03/30/0d03300b8171108642973cfd1d2583bb.jpg", title: "First Light", category: "Abstract",
    desc: "Soft gradients that stay quiet behind a wall of desktop icons." },
  { file: "https://i.pinimg.com/736x/92/e8/4f/92e84f567981b7b3a2a5c7938a1b1dcb.jpg", title: "Deep Field", category: "Abstract",
    desc: "A textured wash of colour for anyone who wants depth without a subject." },
  { file: "https://i.pinimg.com/736x/76/0d/d6/760dd6069e89044fce308fdcd2bcfdb4.jpg", title: "Undercurrent", category: "Abstract",
    desc: "Slow-moving shapes in cool tones — easy on the eyes on a big display." },
  { file: "https://i.pinimg.com/736x/35/79/74/3579745d741a2a293e6bb92ed0c5e993.jpg",
    title: "Rain Check", category: "Anime",
    desc: "A lone figure on a rooftop, neon bleeding into wet air below." },
  { file: "https://i.pinimg.com/1200x/0c/c5/d4/0cc5d4eb65d2d32d918c12c2eaa86a38.jpg", title: "Night Shift", category: "Abstract",
    desc: "Dark base, bright edges. Built for OLED panels and late hours." },
  { file: "https://i.pinimg.com/1200x/e8/76/bd/e876bd6eefe57effe4c28ad055f5671d.jpg", title: "Multiverse", category: "Anime",
    desc: "Layered comic panels collapsing into one another mid-swing." },

  /* ---------- Nature ---------- */
  { file: "https://i.pinimg.com/736x/cb/56/0a/cb560aaff76ad6a5f11dc361cbd00115.jpg", title: "Lone Tree, Golden Hour", category: "Nature",
    desc: "A seacoast at sunset with one tree holding the whole composition together." },
  { file: "https://i.pinimg.com/736x/8a/a2/8b/8aa28b0bce7ea9e221e8b59bd0616ddb.jpg", title: "Blue Ridges", category: "Nature",
    desc: "Layers of mountain fading into morning mist, each one a lighter blue than the last." },
  { file: "https://i.pinimg.com/736x/d2/37/b9/d237b90f4901b3307adad06fa5164dbe.jpg", title: "Clearing", category: "Nature",
    desc: "Sunlight dropping through trees onto an open floor of wildflowers." },
  { file: "https://i.pinimg.com/736x/1d/c2/a0/1dc2a0ef2c7622c3e48f66754f989c89.jpg", title: "Dune Light", category: "Nature",
    desc: "Wind-carved sand with a low sun raking across every ridge." },
  { file: "https://i.pinimg.com/736x/ed/47/26/ed47266bf0b45612afc466123d749936.jpg", title: "Southern Sky", category: "Nature",
    desc: "A wide open sky doing the thing skies do best over flat country." },
  { file: "https://i.pinimg.com/1200x/17/6d/05/176d05c3bf51baa00257b4d22936597e.jpg", title: "Falls", category: "Nature",
    desc: "Long exposure water against dark rock — cool tones, plenty of negative space." },

  /* ---------- Cars ---------- */
  { file: "https://i.pinimg.com/736x/4b/ed/a1/4beda1fc6a8c7f8b8665b1a5baebf6f9.jpg", title: "GT-R", category: "Cars",
    desc: "Wide stance, low light, no apologies." },
  { file: "https://i.pinimg.com/736x/f1/e0/b9/f1e0b992786da53cd35b8bba56beea30.jpg", title: "Night Run", category: "Cars",
    desc: "Illustrated street racing with the colour palette turned all the way up." },
  { file: "https://i.pinimg.com/1200x/f6/24/18/f6241875f03d513adb24bc3b2416ba63.jpg", title: "Chrome & Curves", category: "Cars",
    desc: "A vintage roadster with polished trim and an era's worth of confidence." },
  { file: "https://i.pinimg.com/736x/0b/b8/c2/0bb8c23350678b1ceb2424cb3c5788f0.jpg", title: "Red Serenity", category: "Cars",
    desc: "Hyperreal paintwork rendered clean enough to count the reflections." },
  { file: "https://i.pinimg.com/736x/2a/1c/e8/2a1ce8d4b4664d0d78afbda23823a119.jpg", title: "City Hatch", category: "Cars",
    desc: "Small, quick and photographed properly — a break from supercar posters." },
  { file: "https://i.pinimg.com/736x/dd/b3/e6/ddb3e633d5b3eae953988ad299428b6b.jpg", title: "Late Boulevard", category: "Cars",
    desc: "Deep black luxury under streetlight, quiet about how much it costs." },

  /* ---------- Anime ---------- */
  { file: "https://i.pinimg.com/736x/95/9d/b7/959db7d89792a53ae0414abaf7a2f3b4.jpg", title: "Demon Slayer", category: "Anime",
    desc: "A young hero against a setting sun and a city that goes on forever." },
  { file: "https://i.pinimg.com/736x/1e/c9/f8/1ec9f8f658cedc6f501e10aa25f4d8a2.jpg", title: "Good Company", category: "Anime",
    desc: "Bright eyes and a grin — the wallpaper equivalent of a good mood." },
  { file: "https://i.pinimg.com/736x/49/95/d2/4995d2bf2bcdfe547af56755b5657412.jpg", title: "Charge", category: "Anime",
    desc: "Energy crackling outward, frozen a second before it lands." },
  { file: "https://i.pinimg.com/736x/f4/77/d0/f477d012c47d36e7f24f2833d62c7cc8.jpg", title: "The Walls", category: "Anime",
    desc: "Scale done right: small figures, very large problem." },
  { file: "https://i.pinimg.com/736x/57/89/77/57897745fa9f0334c266c482c7e07600.jpg", title: "Leaf", category: "Anime",
    desc: "Warm palette, familiar silhouette, plenty of room for app icons." },
  { file: "https://i.pinimg.com/736x/07/20/05/072005e029e9fcb128ef78e8de063341.jpg", title: "Rain Alley", category: "Anime",
    desc: "Neon reflections in standing water while someone decides what to do next." },

  /* ---------- Cityscape ---------- */
  { file: "https://i.pinimg.com/736x/e5/16/e9/e516e981835de118b2ff3dd7d707299b.jpg",
    title: "Painted Rain", category: "Cityscape",
    desc: "Palette-knife impressionism: a wet street rebuilt out of blue and grey." },
  { file: "https://i.pinimg.com/736x/c1/97/a2/c197a2e7fa044c8c15091b2f07bce8cd.jpg", title: "Golden Hour Downtown", category: "Cityscape",
    desc: "Glass towers catching the last of the sun, long shadows down every avenue." },
  { file: "https://i.pinimg.com/736x/db/c7/9f/dbc79f09046a285b164d6f25c24371b2.jpg",
    title: "Streetlight", category: "Cityscape",
    desc: "Warm lamps on wet tarmac — a vertical crop that suits phones." },
  { file: "https://i.pinimg.com/736x/18/07/74/1807743f058ee895f77b09689656095c.jpg", title: "Neon Grid", category: "Cityscape",
    desc: "Electric light bouncing off glass and puddles in equal measure." },
  { file: "https://i.pinimg.com/736x/e2/2e/03/e22e03180d465db4036089810c2b0476.jpg", title: "Clean Skyline", category: "Cityscape",
    desc: "Geometry first: sharp edges, precise lights, nothing spare in the frame." },
  { file: "https://i.pinimg.com/736x/91/ac/c9/91acc90e291cc24c023830379d8d00bb.jpg", title: "From Above", category: "Cityscape",
    desc: "Streets and blocks read like a circuit board from a few thousand feet up." }
];

/* =========================================================
    Helpers
   ========================================================= */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const srcFor = (item) => encodeURI(IMAGE_DIR + item.file);

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const extOf = (file) => {
  const match = file.match(/\.([a-z0-9]+)$/i);
  return match ? match[1].toLowerCase() : "jpg";
};

const downloadName = (item) => `frameflux-${slugify(item.title)}.${extOf(item.file)}`;

/* Saved list — kept on this device only. */
const STORE_KEY = "frameflux:saved";

function readSaved(){
  try{
    return new Set(JSON.parse(localStorage.getItem(STORE_KEY)) || []);
  }catch(err){
    return new Set();
  }
}
function writeSaved(set){
  try{
    localStorage.setItem(STORE_KEY, JSON.stringify(Array.from(set)));
  }catch(err){
    /* private mode or storage disabled — the session still works */
  }
}

let saved = readSaved();

/* =========================================================
   Toast
   ========================================================= */

const toastEl = $("#toast");
let toastTimer;

function toast(message){
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 3400);
}

/* =========================================================
   Downloading
   ---------------------------------------------------------
   fetch → blob → object URL gives a true "save file" action
   instead of opening the image in a new tab. It needs the
   site to be served over http(s); on file:// the browser
   blocks the fetch, so we fall back to a plain link.
   ========================================================= */

function triggerSave(href, filename){
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function downloadWallpaper(item){
  const url = srcFor(item);
  const filename = downloadName(item);

  try{
    const response = await fetch(url);
    if(!response.ok) throw new Error(response.status);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerSave(objectUrl, filename);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
    toast(`Saved ${filename}`);
  }catch(err){
    triggerSave(url, filename);
    toast("Opened the full image — long-press or right-click to save it.");
  }
}

const HEART = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.7 1.1-1a5.5 5.5 0 0 0 0-7.7z"/></svg>`;

const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 3v13M6 11l6 6 6-6M4 21h16"/></svg>`;

/* =========================================================
   Grid
   ========================================================= */

const grid       = $("#grid");
const emptyState = $("#empty");
const resultLine = $("#result-line");
const filtersBox = $("#filters");
const gridSearch = $("#grid-search");
const heroSearch = $("#hero-search-input");
const savedCount = $("#saved-count");

const categories = ["All", ...new Set(WALLPAPERS.map(item => item.category))];

let activeFilter = "All";
let activeQuery  = "";
let visible      = [];

function matches(item){
  const inCategory =
    activeFilter === "All" ? true :
    activeFilter === "Saved" ? saved.has(item.file) :
    item.category === activeFilter;

  if(!inCategory) return false;
  if(!activeQuery) return true;

  const haystack = `${item.title} ${item.category} ${item.desc}`.toLowerCase();
  return haystack.includes(activeQuery);
}

function buildTile(item, index){
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.dataset.index = index;
  tile.tabIndex = 0;
  tile.setAttribute("role", "button");
  tile.setAttribute("aria-label", `Preview ${item.title}`);

  const isSaved = saved.has(item.file);

  tile.innerHTML = `
    <img src="${srcFor(item)}" alt="${item.title} — ${item.category} wallpaper" loading="lazy" decoding="async">
    <div class="tile-overlay">
      <span class="tile-name">${item.title}<span class="tile-cat">${item.category}</span></span>
      <span class="tile-buttons">
        <button class="icon-btn js-save" type="button" aria-pressed="${isSaved}"
                aria-label="${isSaved ? "Remove" : "Save"} ${item.title}">${HEART}</button>
        <button class="icon-btn js-download" type="button"
                aria-label="Download ${item.title}">${ARROW}</button>
      </span>
    </div>`;

  const img = tile.querySelector("img");
  img.addEventListener("error", () => {
    tile.classList.add("is-broken");
    tile.querySelector(".tile-name").insertAdjacentHTML(
      "beforeend", `<span class="tile-cat">File not found: ${item.file}</span>`);
  });

  return tile;
}

function render(){
  visible = WALLPAPERS.filter(matches);

  grid.innerHTML = "";
  visible.forEach((item, index) => grid.appendChild(buildTile(item, index)));

  emptyState.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;

  const scope = activeFilter === "All" ? "the full gallery" : `${activeFilter.toLowerCase()}`;
  resultLine.textContent = activeQuery
    ? `${visible.length} result${visible.length === 1 ? "" : "s"} for “${activeQuery}” in ${scope}`
    : `Showing ${visible.length} of ${WALLPAPERS.length} wallpapers`;
}

function renderFilters(){
  const list = [...categories, "Saved"];
  filtersBox.innerHTML = list.map(name => `
    <button class="chip" type="button" data-filter="${name}"
            aria-pressed="${name === activeFilter}">${name}</button>`).join("");
}

function setFilter(name){
  activeFilter = name;
  $$(".chip", filtersBox).forEach(chip =>
    chip.setAttribute("aria-pressed", chip.dataset.filter === name));
  render();
}

function updateSavedCount(){
  savedCount.textContent = saved.size;
}

function toggleSave(item, button){
  if(saved.has(item.file)){
    saved.delete(item.file);
    toast(`Removed ${item.title} from Saved`);
  }else{
    saved.add(item.file);
    toast(`Saved ${item.title}`);
  }
  writeSaved(saved);
  updateSavedCount();

  if(button){
    const now = saved.has(item.file);
    button.setAttribute("aria-pressed", now);
    button.setAttribute("aria-label", `${now ? "Remove" : "Save"} ${item.title}`);
  }
  if(activeFilter === "Saved") render();
  syncLightboxSave();
}

/* =========================================================
   Lightbox
   ========================================================= */

const lightbox = $("#lightbox");
const lbImage  = $("#lb-image");
const lbTitle  = $("#lb-title");
const lbDesc   = $("#lb-desc");
const lbSave   = $("#lb-save");
let lbIndex    = 0;
let lastFocus  = null;

function openLightbox(index){
  lbIndex = index;
  lastFocus = document.activeElement;
  paintLightbox();
  lightbox.hidden = false;
  document.body.classList.add("is-locked");
  $("#lb-close").focus();
}

function paintLightbox(){
  const item = visible[lbIndex];
  if(!item) return;
  lbImage.src = srcFor(item);
  lbImage.alt = `${item.title} — ${item.category} wallpaper`;
  lbTitle.textContent = item.title;
  lbDesc.textContent = item.desc;
  syncLightboxSave();
}

function syncLightboxSave(){
  const item = visible[lbIndex];
  if(!item || lightbox.hidden) return;
  lbSave.textContent = saved.has(item.file) ? "Saved" : "Save";
}

function closeLightbox(){
  lightbox.hidden = true;
  document.body.classList.remove("is-locked");
  if(lastFocus) lastFocus.focus();
}

function step(offset){
  if(!visible.length) return;
  lbIndex = (lbIndex + offset + visible.length) % visible.length;
  paintLightbox();
}

/* =========================================================
   Wiring
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderFilters();
  render();
  updateSavedCount();

  $("#stat-count").textContent = WALLPAPERS.length;
  $("#stat-cats").textContent  = categories.length - 1;
  $("#year").textContent = new Date().getFullYear();

  /* --- filters --- */
  filtersBox.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if(chip) setFilter(chip.dataset.filter);
  });

  /* --- search (both boxes stay in sync) --- */
  const applyQuery = (value) => {
    activeQuery = value.trim().toLowerCase();
    render();
  };

  gridSearch.addEventListener("input", (e) => {
    heroSearch.value = e.target.value;
    applyQuery(e.target.value);
  });

  heroSearch.addEventListener("input", (e) => {
    gridSearch.value = e.target.value;
    applyQuery(e.target.value);
  });

  const jumpToGallery = () => {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };

  $("#hero-search-go").addEventListener("click", jumpToGallery);
  heroSearch.addEventListener("keydown", (e) => {
    if(e.key === "Enter") jumpToGallery();
  });

  $("#reset-filters").addEventListener("click", () => {
    activeQuery = "";
    gridSearch.value = "";
    heroSearch.value = "";
    setFilter("All");
  });

  $("#saved-jump").addEventListener("click", () => {
    setFilter("Saved");
    jumpToGallery();
  });

  /* --- grid interactions --- */
  grid.addEventListener("click", (event) => {
    const tile = event.target.closest(".tile");
    if(!tile) return;
    const item = visible[Number(tile.dataset.index)];

    if(event.target.closest(".js-save")){
      toggleSave(item, event.target.closest(".js-save"));
      return;
    }
    if(event.target.closest(".js-download")){
      downloadWallpaper(item);
      return;
    }
    openLightbox(Number(tile.dataset.index));
  });

  grid.addEventListener("keydown", (event) => {
    const tile = event.target.closest(".tile");
    if(!tile || event.target !== tile) return;
    if(event.key === "Enter" || event.key === " "){
      event.preventDefault();
      openLightbox(Number(tile.dataset.index));
    }
  });

  /* --- lightbox --- */
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", () => step(-1));
  $("#lb-next").addEventListener("click", () => step(1));
  $("#lb-download").addEventListener("click", () => downloadWallpaper(visible[lbIndex]));
  lbSave.addEventListener("click", () => toggleSave(visible[lbIndex]));

  lightbox.addEventListener("click", (event) => {
    if(event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if(lightbox.hidden) return;
    if(event.key === "Escape") closeLightbox();
    if(event.key === "ArrowLeft") step(-1);
    if(event.key === "ArrowRight") step(1);
  });

  /* --- mobile nav --- */
  const hamburger = $("#hamburger");
  const nav = $("#nav");

  hamburger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", open);
  });

  nav.addEventListener("click", (event) => {
    if(event.target.tagName === "A"){
      nav.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  /* --- header state on scroll --- */
  const header = $("#site-header");
  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
