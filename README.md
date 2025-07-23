# Discord Contest Reminder Bot

A simple Discord bot that sends reminders for your coding contests to a specified channel. You update the contest schedule each week via a `contests.json` file.

---

## 🛠️ Stack Used
- **Node.js** (JavaScript)
- **discord.js** (v14)
- **node-schedule** (for scheduling reminders)
- **dotenv** (for environment variable management)

---

## 📋 Prerequisites
- Node.js (v16.9.0 or higher recommended)
- A Discord account and a server where you have permission to add bots
- A Discord bot application (create one at https://discord.com/developers/applications)

---

## 🚀 Setup Instructions

1. **Clone this repository**
   ```sh
   git clone <your-repo-url>
   cd cur-bot
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Create a file named `cred.env` in the project root:
     ```env
     DISCORD_TOKEN=your-bot-token-here
     CHANNEL_ID=your-channel-id-here
     ```
   - Replace `your-bot-token-here` with your Discord bot token.
   - Replace `your-channel-id-here` with the ID of the text channel where reminders should be sent.

4. **Prepare your contests.json**
   - Example format:
     ```json
     [
       {
         "name": "Weekly Codeforces",
         "date": "2024-06-15T15:00:00+05:30",
         "link": "https://codeforces.com/contest/1234"
       },
       {
         "name": "LeetCode Weekly",
         "date": "2024-06-17T12:00:00+05:30",
         "link": "https://leetcode.com/contest/weekly-contest-123"
       }
     ]
     ```
   - The `date` field should be in ISO format with timezone (e.g., `2024-06-15T15:00:00+05:30`).
   - Update this file each week with your upcoming contests.

5. **Run the bot**
   ```sh
   node bot.js
   ```
   - The bot will read `contests.json` and schedule reminders for each contest.
   - If you update `contests.json`, restart the bot to reschedule reminders.

---

## 📝 Notes
- The bot only schedules reminders when it starts. If you change `contests.json`, restart the bot.
- Make sure your bot has the following permissions in your Discord server and target channel:
  - View Channels
  - Send Messages
  - (Optional) Embed Links
- To get your channel ID: Enable Developer Mode in Discord → Right-click the channel → Copy Channel ID.

---


