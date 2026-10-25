/**
 * Centralized image asset registry for the preschool website
 */

// export const siteImages = {
//   heroClassroom: '/src/assets/images/hero_preschool_classroom_1792569244406.jpg',
//   artsCrafts: '/src/assets/images/preschool_arts_crafts_1792569244421.jpg',
//   outdoorPlay: '/src/assets/images/preschool_outdoor_play_1792569244655.jpg',
//   daycareNap: '/src/assets/images/daycare_peaceful_nap_1792569246802.jpg',
//   daycareSnack: '/src/assets/images/daycare_healthy_snack_1792569245650.jpg',
  
//   // High quality SVG and vector fallbacks
//   logoSun: '/assets/logo.svg',
// };

// export default siteImages;


import heroClassroom from './images/hero_preschool_classroom_1792569244406.jpg';
import artsCrafts from './images/preschool_arts_crafts_1792569244421.jpg';
import outdoorPlay from './images/preschool_outdoor_play_1792569244655.jpg';
import daycareNap from './images/daycare_peaceful_nap_1792569246802.jpg';
import daycareSnack from './images/daycare_healthy_snack_1792569245650.jpg';

export const siteImages = {
  heroClassroom,
  artsCrafts,
  outdoorPlay,
  daycareNap,
  daycareSnack,

  // Keep the existing logo path if this file is in the public/assets directory.
  logoSun: '/assets/logo.svg',
};

export default siteImages;