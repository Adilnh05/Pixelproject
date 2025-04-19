// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  currentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.currentId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  avatar: text("avatar"),
  level: integer("level").default(1),
  pixels: integer("pixels").default(0),
  createdAt: timestamp("created_at").defaultNow()
});
var games = pgTable("games", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  coverImage: text("cover_image").notNull(),
  rating: integer("rating"),
  categories: text("categories").array(),
  createdAt: timestamp("created_at").defaultNow()
});
var gameHistory = pgTable("game_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  gameId: integer("game_id").notNull().references(() => games.id),
  score: integer("score"),
  timePlayed: integer("time_played"),
  completed: boolean("completed").default(false),
  playedAt: timestamp("played_at").defaultNow()
});
var achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  pixelReward: integer("pixel_reward").default(0)
});
var userAchievements = pgTable("user_achievements", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  achievementId: integer("achievement_id").notNull().references(() => achievements.id),
  unlockedAt: timestamp("unlocked_at").defaultNow()
});
var rewards = pgTable("rewards", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  pixelCost: integer("pixel_cost").notNull(),
  type: text("type").notNull()
});
var userRewards = pgTable("user_rewards", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  rewardId: integer("reward_id").notNull().references(() => rewards.id),
  redeemedAt: timestamp("redeemed_at").defaultNow()
});
var friends = pgTable("friends", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  friendId: integer("friend_id").notNull().references(() => users.id),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});
var challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  senderId: integer("sender_id").notNull().references(() => users.id),
  receiverId: integer("receiver_id").notNull().references(() => users.id),
  gameId: integer("game_id").notNull().references(() => games.id),
  description: text("description").notNull(),
  targetScore: integer("target_score"),
  pixelReward: integer("pixel_reward").default(0),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  avatar: true
});
var insertGameSchema = createInsertSchema(games).pick({
  title: true,
  description: true,
  coverImage: true,
  categories: true
});
var insertGameHistorySchema = createInsertSchema(gameHistory).pick({
  userId: true,
  gameId: true,
  score: true,
  timePlayed: true,
  completed: true
});
var insertAchievementSchema = createInsertSchema(achievements).pick({
  title: true,
  description: true,
  icon: true,
  pixelReward: true
});
var insertUserAchievementSchema = createInsertSchema(userAchievements).pick({
  userId: true,
  achievementId: true
});
var insertRewardSchema = createInsertSchema(rewards).pick({
  title: true,
  description: true,
  image: true,
  pixelCost: true,
  type: true
});
var insertUserRewardSchema = createInsertSchema(userRewards).pick({
  userId: true,
  rewardId: true
});
var insertFriendSchema = createInsertSchema(friends).pick({
  userId: true,
  friendId: true,
  status: true
});
var insertChallengeSchema = createInsertSchema(challenges).pick({
  senderId: true,
  receiverId: true,
  gameId: true,
  description: true,
  targetScore: true,
  pixelReward: true,
  status: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const newUser = await storage.createUser(userData);
      const { password, ...userWithoutPassword } = newUser;
      res.status(201).json({
        message: "User registered successfully",
        user: userWithoutPassword
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid user data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to register user" });
      }
    }
  });
  app2.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json({
        message: "Login successful",
        user: userWithoutPassword,
        token: "jwt_token_would_go_here_in_production"

      });
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });
  app2.get("/api/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const { password, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app2.get("/api/games", (req, res) => {
    res.status(200).json({
      games: [
        {
          id: 1,
          title: "Pixel Dungeon",
          description: "Explore mysterious dungeons and fight pixel monsters!",
          coverImage: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
          rating: 4.8,
          categories: ["Adventure", "RPG"]
        },
        {
          id: 2,
          title: "Space Invaders 2.0",
          description: "Classic arcade action with modern pixel graphics!",
          coverImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
          rating: 4.5,
          categories: ["Arcade", "Action"]
        }
      ]
    });
  });
  app2.get("/api/games/:id", (req, res) => {
    const gameId = parseInt(req.params.id);
    if (isNaN(gameId)) {
      return res.status(400).json({ message: "Invalid game ID" });
    }
    res.status(200).json({
      id: gameId,
      title: "Pixel Dungeon",
      description: "Explore mysterious dungeons and fight pixel monsters!",
      coverImage: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      rating: 4.8,
      categories: ["Adventure", "RPG"]
    });
  });
  app2.get("/api/achievements", (req, res) => {
    res.status(200).json({
      achievements: [
        {
          id: 1,
          title: "First Victory",
          description: "Complete your first game",
          icon: "\u{1F3C6}",
          pixelReward: 50
        },
        {
          id: 2,
          title: "High Scorer",
          description: "Score over 10,000 points in any game",
          icon: "\u{1F3AF}",
          pixelReward: 100
        }
      ]
    });
  });
  app2.get("/api/rewards", (req, res) => {
    res.status(200).json({
      rewards: [
        {
          id: 1,
          title: "Cosmic Knight Skin",
          description: "Exclusive character skin with special animations",
          image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24",
          pixelCost: 500,
          type: "skin"
        },
        {
          id: 2,
          title: "Neon City Background",
          description: "Cyberpunk-themed UI backdrop for your profile",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
          pixelCost: 300,
          type: "background"
        }
      ]
    });
  });
  app2.get("/api/users/:userId/game-history", (req, res) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    res.status(200).json({
      gameHistory: [
        {
          id: 1,
          gameId: 1,
          score: 8750,
          timePlayed: 45,
          completed: true,
          playedAt: "2023-10-15"
        },
        {
          id: 2,
          gameId: 2,
          score: 12500,
          timePlayed: 30,
          completed: true,
          playedAt: "2023-10-14"
        }
      ]
    });
  });
  app2.get("/api/users/:userId/friends", (req, res) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    res.status(200).json({
      friends: [
        {
          id: 1,
          username: "RetroQueen",
          level: 22,
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          status: "online"
        },
        {
          id: 2,
          username: "GameBoy99",
          level: 20,
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
          status: "online"
        }
      ]
    });
  });
  app2.get("/api/users/:userId/challenges", (req, res) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    res.status(200).json({
      challenges: [
        {
          id: 1,
          senderId: 2,
          gameId: 2,
          description: "Beat my high score in Space Invaders 2.0",
          targetScore: 8500,
          status: "pending"
        },
        {
          id: 2,
          senderId: 3,
          gameId: 1,
          description: "Complete Pixel Dungeon Level 8 in under 5 minutes",
          pixelReward: 250,
          status: "pending"
        }
      ]
    });
  });
  app2.post("/api/challenges", (req, res) => {
    try {
      const { senderId, receiverId, gameId, description, targetScore, pixelReward } = req.body;
      if (!senderId || !receiverId || !gameId || !description) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      res.status(201).json({
        id: Math.floor(Math.random() * 1e3),
        senderId,
        receiverId,
        gameId,
        description,
        targetScore,
        pixelReward,
        status: "pending",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to create challenge" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => (

          m.cartographer()
        )
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),

      "@pixel/vite-plugin-shadcn-theme-json": "@replit/vite-plugin-shadcn-theme-json",
      "@pixel/vite-plugin-cartographer": "@replit/vite-plugin-cartographer",
      "@pixel/vite-plugin-runtime-error-modal": "@replit/vite-plugin-runtime-error-modal"
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = process.env.PORT || 3001;
  server.listen({ port, host: "0.0.0.0" }, () => {
    console.log("Server running on port ${port}");
  }).on("error", (err) => {
    console.error("Failed to start server:", err);
  });
})();
