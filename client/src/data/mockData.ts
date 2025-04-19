// Game data
export const games = [
  {
    id: 1,
    title: 'Pixel Dungeon',
    description: 'Explore mysterious dungeons and fight pixel monsters!',
    coverImage: 'data:image/jpeg;base64,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',
    rating: 4.8,
    categories: ['Adventure', 'RPG'],
  },
  {
    id: 2,
    title: 'Space Invaders 2.0',
    description: 'Classic arcade action with modern pixel graphics!',
    coverImage: 'https://www.bing.com/th/id/OGC.1cc05088f42e3f3e0d6804859b23936c?pid=1.7&rurl=https%3a%2f%2fmedia2.giphy.com%2fmedia%2flqkOBtm8JSq3sIomhY%2fgiphy.gif&ehk=IFLB284rdxK0jWfuDJmh3jyJw2PWkf6jMy8hiTwXgek%3d',
    rating: 4.5,
    categories: ['Arcade', 'Action'],
  },
  {
    id: 3,
    title: 'Pixel Racer',
    description: 'High-speed racing with customizable pixel cars!',
    coverImage: 'https://www.bing.com/th/id/OGC.ad39d1de3c0f3cb653ebf5cfb59c7828?pid=1.7&rurl=https%3a%2f%2fi1.wp.com%2fi.pinimg.com%2foriginals%2f2c%2fc3%2f0f%2f2cc30fd4ebf01ecb0e6fe734805922b2.gif&ehk=bZJIP9nsHfwXU71sKZUXZxbeY5HqPQlC2m6CB35BEoQ%3d',
    rating: 4.2,
    categories: ['Racing', 'Multiplayer'],
  },
  {
    id: 4,
    title: 'Puzzle Quest',
    description: 'Brain-teasing puzzles with enchanting pixel art!',
    coverImage: 'https://www.bing.com/th/id/OGC.ca6fe019ffa9f36a506d98b54cb59833?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fuserupload%2f7303380%2ffile%2foriginal-01049b3acfc95b3ad592c646e787a16b.gif&ehk=FSgJdnmTKGTc2NQSFBIgSFLL43izeNSRfz168ucfBak%3d',
    rating: 4.9,
    categories: ['Puzzle', 'Strategy'],
  },
  {
    id: 5,
    title: 'Ninja Runner',
    description: 'Test your reflexes in this fast-paced platformer!',
    coverImage: 'https://www.bing.com/th/id/OGC.cda8903b90eda413eec06baadfad876a?pid=1.7&rurl=https%3a%2f%2fcdna.artstation.com%2fp%2fassets%2fimages%2fimages%2f018%2f467%2f944%2foriginal%2fivan-boyko-draft-ninja.gif%3f1559505826&ehk=W%2f%2bPT4mdiC9CRf2O1ysfrnrRahNA9Fk5MnNTZAeU998%3d',
    rating: 4.6,
    categories: ['Action', 'Platformer'],
  },
  {
    id: 6,
    title: 'Retro City',
    description: 'Open world adventure with retro GTA-style gameplay!',
    coverImage: 'https://www.bing.com/th/id/OGC.653ac7f4ecfe013c6efb2017a5807724?pid=1.7&rurl=https%3a%2f%2f66.media.tumblr.com%2ff7e32604293095cdfdacf9e8f4cbb27e%2ftumblr_ptb83wxJDS1y9u9sko1_500.gif&ehk=61u8Tu%2b4iONurrgczr3c6P6FryWyEnOIstYeiZSBQ4w%3d',
    rating: 4.7,
    categories: ['Adventure', 'Action'],
  },
  {
    id: 7,
    title: 'Block Builder',
    description: 'Create and share your own pixel world!',
    coverImage: 'https://www.bing.com/th/id/OGC.4d023ec755f1c0705b354ac2558848e0?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f26n6M1kRWEHytoK76%2fgiphy.gif&ehk=bC8UPuqgq5VqnjV4mhRpNka6jpNdsHDglj3e6uhsGiM%3d',
    rating: 4.4,
    categories: ['Sandbox', 'Multiplayer'],
  },
  {
    id: 8,
    title: 'Zombie Pixels',
    description: 'Survive the pixel zombie apocalypse!',
    coverImage: 'https://www.bing.com/th/id/OGC.a8de80553430b85d6b8128befdffd381?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fd4%2f1f%2f9d%2fd41f9d596799e030c536ada49ed9e267.gif&ehk=m%2bkMcmiW6z3Gw4QEDJ2t4RdfNV3aYx%2f%2f6m5jchcEPTk%3d',
    rating: 4.3,
    categories: ['Survival', 'Horror'],
  }
];

// User profile data
export const userProfile = {
  username: 'PixelMaster_42',
  level: 24,
  pixels: 1242,
  levelProgress: 65,
  avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
  gamesPlayed: 42,
  topAchievement: {
    title: 'Master Explorer',
    description: 'Found all secret areas'
  }
};

// User recent activity
export const userActivity = [
  {
    gameIcon: 'https://cdnb.artstation.com/p/assets/images/images/038/728/163/original/theodor-kipen-isometricruin108pbackground.gif?1623888620',
    description: 'Completed Pixel Dungeon Lvl 5',
    timeAgo: '2h ago'
  },
  {
    gameIcon: 'https://www.bing.com/th/id/OGC.1cc05088f42e3f3e0d6804859b23936c?pid=1.7&rurl=https%3a%2f%2fmedia2.giphy.com%2fmedia%2flqkOBtm8JSq3sIomhY%2fgiphy.gif&ehk=IFLB284rdxK0jWfuDJmh3jyJw2PWkf6jMy8hiTwXgek%3d',
    description: 'New high score: Space Invaders',
    timeAgo: '1d ago'
  },
  {
    gameIcon: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd',
    description: 'Unlocked achievement: Speed Runner',
    timeAgo: '3d ago'
  }
];

// Rewards data
export const rewards = [
  {
    id: 1,
    title: 'Cosmic Knight Skin',
    description: 'Exclusive character skin with special animations',
    image: 'https://i.makeagif.com/media/4-03-2023/r-Sxbz.gif',
    pixelCost: 500,
    type: 'skin'
  },
  {
    id: 2,
    title: 'Neon City Background',
    description: 'Cyberpunk-themed UI backdrop for your profile',
    image: 'https://media.giphy.com/media/NKEt9elQ5cR68/giphy.gif',
    pixelCost: 300,
    type: 'background'
  },
  {
    id: 3,
    title: 'Double Jump Power',
    description: 'Special ability usable in platform games',
    image: 'https://www.icegif.com/wp-content/uploads/2022/11/icegif-317.gif',
    pixelCost: 750,
    type: 'ability'
  },
  {
    id: 4,
    title: 'Secret Dungeon Level',
    description: 'Exclusive level with unique challenges and rewards',
    image: 'https://cdnb.artstation.com/p/assets/images/images/038/728/163/original/theodor-kipen-isometricruin108pbackground.gif?1623888620',
    pixelCost: 1000,
    type: 'level'
  },
  {
    id: 5,
    title: 'Rainbow Trail Effect',
    description: 'Colorful pixel trail follows your character',
    image: 'https://cdnb.artstation.com/p/assets/images/images/031/653/819/original/pixel-jeff-witch.gif?1604239834',
    pixelCost: 250,
    type: 'effect'
  },
  {
    id: 6,
    title: 'Golden Pixel Trophy',
    description: 'Rare collectible displayed on your profile',
    image: 'https://i2.wp.com/www.pixilart.com/images/art/40c77fce6fbb4c3.gif?v=1498055874',
    pixelCost: 1500,
    type: 'trophy'
  },
  {
    id: 7,
    title: 'Extra Lives Pack',
    description: 'Life is short, so live extra lives Get 5 extra lives for any game',
    image: 'https://staticg.sportskeeda.com/editor/2022/06/4dbd3-16545059408359.png',
    pixelCost: 400,
    type: 'powerup'
  },
  {
    id: 8,
    title: 'VIP Game Access',
    description: 'One week early access to new games',
    image: 'https://i.gifer.com/7c77.gif',
    pixelCost: 2000,
    type: 'access'
  }
];

// Leaderboard data
export const topPlayers = [
  {
    id: 1,
    username: 'PixelMaster_42',
    level: 24,
    points: 12450,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61'
  },
  {
    id: 2,
    username: 'RetroQueen',
    level: 22,
    points: 11280,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: 3,
    username: 'GameBoy99',
    level: 20,
    points: 10115,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    id: 4,
    username: 'PixelPrincess',
    level: 19,
    points: 9874,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];

// Friend challenges data
export const friendChallenges = [
  {
    id: 1,
    sender: {
      username: 'RetroQueen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    description: 'Beat my high score in Space Invaders 2.0',
    game: {
      title: 'Space Invaders 2.0',
      icon: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1'
    },
    targetScore: 8500,
    reward: null
  },
  {
    id: 2,
    sender: {
      username: 'GameBoy99',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    description: 'Complete Pixel Dungeon Level 8 in under 5 minutes',
    game: {
      title: 'Pixel Dungeon',
      icon: 'https://images.unsplash.com/photo-1552346154-21d32810aba3'
    },
    targetScore: null,
    reward: 250
  }
];

// Achievements data
export const achievements = [
  {
    id: 1,
    title: 'First Victory',
    description: 'Complete your first game',
    icon: '🏆',
    pixelReward: 50,
    unlocked: true,
    unlockedAt: '2023-06-15'
  },
  {
    id: 2,
    title: 'High Scorer',
    description: 'Score over 10,000 points in any game',
    icon: '🎯',
    pixelReward: 100,
    unlocked: true,
    unlockedAt: '2023-07-22'
  },
  {
    id: 3,
    title: 'Master Explorer',
    description: 'Found all secret areas in Pixel Dungeon',
    icon: '🗺️',
    pixelReward: 250,
    unlocked: true,
    unlockedAt: '2023-09-05'
  },
  {
    id: 4,
    title: 'Speed Demon',
    description: 'Complete Pixel Racer in under 2 minutes',
    icon: '⚡',
    pixelReward: 150,
    unlocked: false
  },
  {
    id: 5,
    title: 'Puzzle Master',
    description: 'Solve 50 puzzles in Puzzle Quest',
    icon: '🧩',
    pixelReward: 200,
    unlocked: false
  },
  {
    id: 6,
    title: 'Social Butterfly',
    description: 'Add 10 friends to your network',
    icon: '🦋',
    pixelReward: 75,
    unlocked: false
  }
];

// Game history data
export const gameHistory = [
  {
    id: 1,
    game: {
      id: 1,
      title: 'Pixel Dungeon',
      coverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3'
    },
    score: 8750,
    timePlayed: 45,
    completed: true,
    playedAt: '2023-10-15'
  },
  {
    id: 2,
    game: {
      id: 2,
      title: 'Space Invaders 2.0',
      coverImage: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1'
    },
    score: 12500,
    timePlayed: 30,
    completed: true,
    playedAt: '2023-10-14'
  },
  {
    id: 3,
    game: {
      id: 4,
      title: 'Puzzle Quest',
      coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd'
    },
    score: 5200,
    timePlayed: 25,
    completed: false,
    playedAt: '2023-10-12'
  },
  {
    id: 4,
    game: {
      id: 3,
      title: 'Pixel Racer',
      coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f'
    },
    score: 9300,
    timePlayed: 20,
    completed: true,
    playedAt: '2023-10-10'
  },
  {
    id: 5,
    game: {
      id: 5,
      title: 'Ninja Runner',
      coverImage: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24'
    },
    score: 7800,
    timePlayed: 35,
    completed: true,
    playedAt: '2023-10-08'
  }
];

// Friends data
export const friends = [
  {
    id: 1,
    username: 'RetroQueen',
    level: 22,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    status: 'online',
    lastPlayed: {
      game: 'Space Invaders 2.0',
      when: '2 hours ago'
    }
  },
  {
    id: 2,
    username: 'GameBoy99',
    level: 20,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    status: 'online',
    lastPlayed: {
      game: 'Pixel Dungeon',
      when: '5 hours ago'
    }
  },
  {
    id: 3,
    username: 'PixelPrincess',
    level: 19,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    status: 'offline',
    lastPlayed: {
      game: 'Puzzle Quest',
      when: '2 days ago'
    }
  },
  {
    id: 4,
    username: 'RetroGamer84',
    level: 15,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    status: 'offline',
    lastPlayed: {
      game: 'Block Builder',
      when: '1 week ago'
    }
  }
];
