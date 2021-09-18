const ArtGust = [
  {
    image: {
      imageUrl: './Imgs/Akilgust.png',
      imageAlt: 'Akil Ajmad',
    },
    name: 'Akil Ahmad',
    shortDescription: 'Fine artist',
    profile: `Akil Ahmad is a Syrian Fine artist, Winner of the 2019 Al Burda Award for Arabic Calligraphy, He participated in many art exhibitions around the world
      his paintings have been sold in a large number of countries around the world.`,
  },

  {
    image: {
      imageUrl: './Imgs/SirDon.png',
      imageAlt: 'Sir Don McCullin',
    },
    name: 'Sir Don McCullin',
    shortDescription: 'war photographer',
    profile: `Don McCullin is one of the world’s greatest war photographers. The impact of his black-and-white images is 
      immeasurable, as the British photographer traveled the planet to shed light on extremely perilous situations, uncover hidden truths
       and relentlessly denounce injustice. McCullin depicts his subjects with empathy and compassion, and celebrates the dignity and 
       resilience of mankind under the harshest circumstances. His work is in a class with the likes of Robert Capa, Henri Cartier-Bresson,
        Robert Frank, W. Eugene Smith, and Gilles Caron.
      `,
  },

  {
    image: {
      imageUrl: './Imgs/rayan.png',
      imageAlt: 'Rayan',
    },
    name: 'Rayan Markley',
    shortDescription: 'CEO of creative commons, ex COO of the mozilla Foundation',
    profile: `Rayan had been leading open-source projects at the Mozilla Foundation such as the open
      the Open source movement.`,
  },

  {
    image: {
      imageUrl: './Imgs/laila.png',
      imageAlt: 'Laila',
    },
    name: 'Laila Tretikova',
    shortDescription: 'Photographer and visual artist',
    profile: `Art Consultant and Curator. was born in Lebanon but grew up in Paris, grew up surrounded by artists,
      her paintings have been sold in a large number of countries around the world
      and she has a famous galury in Beirut, now in Lebanon she considred as one of the most importance artist.`,
  },

  {
    image: {
      imageUrl: './Imgs/julia.png',
      imageAlt: 'Julia',
    },
    name: 'Dr. Marie Tomb',
    shortDescription: 'Art historian turned writer',
    profile: `Trained as a historian of the Modern and Contemporary arts and visual culture, she
       straddle the worlds of art, education, publishing and communications.`,
  },
];

function showArtist(guest) {
  const guestCard = `<div class="guest">
    <div class="image_design">
      <img src="${guest.image.imageUrl}" alt="${guest.image.imageAlt}">
    </div>
    <aside>
      <div>
        <h4>${guest.name}</h4>
        <p>${guest.shortDescription}</p>
        <hr width="30">
      </div>
      <span>${guest.profile}</span>
    </aside>
  </div>`;
  return guestCard;
}

const sectionForGuests = document.querySelector('.guest_list');

function showMyGuests() {
  const guestKeys = Object.keys(ArtGust);
  const guestKeysLength = Object.keys(ArtGust).length;
  for (let i = 0; i < guestKeysLength; i += 1) {
    sectionForGuests.innerHTML += showArtist(ArtGust[guestKeys[i]], i);
  }
}

sectionForGuests.onresize = showMyGuests();