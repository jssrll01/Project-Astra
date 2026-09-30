// Automatically finds every Cloudinary image URL used in the app
// and prefetches them during idle time.

const ALL_IMAGES = [
  // Collection (28)
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689227/Messenger_creation_E7A34F76-00FA-4627-BADD-61F04072D22D.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689227/Messenger_creation_65B44506-DAF5-411A-BAA7-8FD2F42D47F8.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689227/LivePhoto_1790477088349_MP.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689220/20260927_104326.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689218/20260929_141627.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689220/20260927_104208.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689219/LivePhoto_1790476474170_MP.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689220/20260927_103247.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689218/20260927_105111.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260927_105051.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260915_084029.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260915_084051.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260911_121428.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260926_120736.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260911_125359.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260915_193932.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260927_104954.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260915_053749.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260911_110317.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692087/Messenger_creation_97341421-AA6A-4CA6-B905-0ECC86B5B742.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692087/20260911_125124.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747514/20260915_141227.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747514/20260915_144411.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747514/20260915_142756.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747515/20260915_144417.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747515/20260915_150237.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747515/20260915_144440.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747516/20260915_150741.jpg',
  // Gallery (13)
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727121/Screenshot_20260930_080340_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727121/Screenshot_20260930_080404_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727120/Screenshot_20260930_080249_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727120/Screenshot_20260930_080322_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727120/Screenshot_20260930_080438_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727119/Screenshot_20260930_080412_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080022_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260920_113600_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080224_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080209_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260920_113541_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080109_Chrome.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727117/Screenshot_20260920_082105_My_Files.jpg',
  // Certifications
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692470/Messenger_creation_5F992C73-5D0F-4A8B-BBDD-9CE642D2F697.jpg',
  // Achievements
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692518/Messenger_creation_F35F533B-F04C-45F1-B690-37A23002E63F.jpg',
  // Game Space
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749164/Screenshot_20260930_093954_Minecraft.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749165/Screenshot_20260925_222503_Minecraft.jpg',
  // Vault (12)
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747642/file_000000005a908211a754d87dd38fae2f.png',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747640/6c9d0f24-f010-480e-bd96-59a100838ba7.png',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747640/12171024-8be0-4396-9b67-7f0d2d1fba5d.png',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747640/2eae83c7-456c-4b90-9934-140433093f61.png',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747642/file_00000000a8f882468fbb27fbf60e438d.png',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747641/782c393d-3088-46ec-bc10-7ec5e3278352.png',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747645/Messenger_creation_652F11ED-2240-444B-81D7-F41742F71D77.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747644/Messenger_creation_2D9E5A0B-C871-4B6D-A450-CD3F89FA790B.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747643/IMG_20260625_093543.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747644/IMG_20260625_093557.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747650/Screenshot_20260817_063721.jpg',
  'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747651/Screenshot_20260817_063751.jpg',
];

let started = false;

export function prefetchAll() {
  if (started) return;
  started = true;

  const run = () => {
    ALL_IMAGES.forEach((src, i) => {
      setTimeout(() => {
        const img = new window.Image();
        img.decoding = 'async';
        img.src = src.replace('/upload/', '/upload/f_auto,q_auto,w_600/');
      }, i * 40);
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 2000 });
  } else {
    setTimeout(run, 2000);
  }
}

export function prefetchLightboxSizes() {
  const slice = ALL_IMAGES.slice(0, 20);
  slice.forEach((src, i) => {
    setTimeout(() => {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = src.replace('/upload/', '/upload/f_auto,q_auto,w_1200/');
    }, 5000 + i * 60);
  });
}
