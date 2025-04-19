import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {

  app.post('/api/auth/register', async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const newUser = await storage.createUser(userData);
      

      const { password, ...userWithoutPassword } = newUser;
      
      res.status(201).json({
        message: 'User registered successfully',
        user: userWithoutPassword
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: 'Invalid user data', errors: error.errors });
      } else {
        res.status(500).json({ message: 'Failed to register user' });
      }
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }
      
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      const { password: _, ...userWithoutPassword } = user;
      
      res.status(200).json({
        message: 'Login successful',
        user: userWithoutPassword,
        token: 'jwt_token_would_go_here_in_production' 
      });
    } catch (error) {
      res.status(500).json({ message: 'Login failed' });
    }
  });


  app.get('/api/users/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
      
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
    
      const { password, ...userWithoutPassword } = user;
      
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch user' });
    }
  });


  app.get('/api/games', (req, res) => {

    res.status(200).json({
      games: [
        {
          id: 1,
          title: 'Pixel Dungeon',
          description: 'Explore mysterious dungeons and fight pixel monsters!',
          coverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3',
          rating: 4.8,
          categories: ['Adventure', 'RPG']
        },
        {
          id: 2,
          title: 'Space Invaders 2.0',
          description: 'Classic arcade action with modern pixel graphics!',
          coverImage: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1',
          rating: 4.5,
          categories: ['Arcade', 'Action']
        }
      ]
    });
  });

  app.get('/api/games/:id', (req, res) => {
    const gameId = parseInt(req.params.id);
    
    if (isNaN(gameId)) {
      return res.status(400).json({ message: 'Invalid game ID' });
    }
    

    res.status(200).json({
      id: gameId,
      title: 'Pixel Dungeon',
      description: 'Explore mysterious dungeons and fight pixel monsters!',
      coverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3',
      rating: 4.8,
      categories: ['Adventure', 'RPG']
    });
  });


  app.get('/api/achievements', (req, res) => {

    res.status(200).json({
      achievements: [
        {
          id: 1,
          title: 'First Victory',
          description: 'Complete your first game',
          icon: '🏆',
          pixelReward: 50
        },
        {
          id: 2,
          title: 'High Scorer',
          description: 'Score over 10,000 points in any game',
          icon: '🎯',
          pixelReward: 100
        }
      ]
    });
  });


  app.get('/api/rewards', (req, res) => {

    res.status(200).json({
      rewards: [
        {
          id: 1,
          title: 'Cosmic Knight Skin',
          description: 'Exclusive character skin with special animations',
          image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24',
          pixelCost: 500,
          type: 'skin'
        },
        {
          id: 2,
          title: 'Neon City Background',
          description: 'Cyberpunk-themed UI backdrop for your profile',
          image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
          pixelCost: 300,
          type: 'background'
        }
      ]
    });
  });


  app.get('/api/users/:userId/game-history', (req, res) => {
    const userId = parseInt(req.params.userId);
    
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    

    res.status(200).json({
      gameHistory: [
        {
          id: 1,
          gameId: 1,
          score: 8750,
          timePlayed: 45,
          completed: true,
          playedAt: '2023-10-15'
        },
        {
          id: 2,
          gameId: 2,
          score: 12500,
          timePlayed: 30,
          completed: true,
          playedAt: '2023-10-14'
        }
      ]
    });
  });


  app.get('/api/users/:userId/friends', (req, res) => {
    const userId = parseInt(req.params.userId);
    
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    

    res.status(200).json({
      friends: [
        {
          id: 1,
          username: 'RetroQueen',
          level: 22,
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          status: 'online'
        },
        {
          id: 2,
          username: 'GameBoy99',
          level: 20,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
          status: 'online'
        }
      ]
    });
  });


  app.get('/api/users/:userId/challenges', (req, res) => {
    const userId = parseInt(req.params.userId);
    
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    

    res.status(200).json({
      challenges: [
        {
          id: 1,
          senderId: 2,
          gameId: 2,
          description: 'Beat my high score in Space Invaders 2.0',
          targetScore: 8500,
          status: 'pending'
        },
        {
          id: 2,
          senderId: 3,
          gameId: 1,
          description: 'Complete Pixel Dungeon Level 8 in under 5 minutes',
          pixelReward: 250,
          status: 'pending'
        }
      ]
    });
  });

  app.post('/api/challenges', (req, res) => {

    try {

      const { senderId, receiverId, gameId, description, targetScore, pixelReward } = req.body;
      
      if (!senderId || !receiverId || !gameId || !description) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      
      res.status(201).json({
        id: Math.floor(Math.random() * 1000),
        senderId,
        receiverId,
        gameId,
        description,
        targetScore,
        pixelReward,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create challenge' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
