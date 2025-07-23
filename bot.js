const { Client, GatewayIntentBits } = require('discord.js');
const schedule = require('node-schedule');
const fs = require('fs');
const path = require('path');

const TOKEN = "enter your token id";
const CHANNEL_ID = "enter your channel id";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

// Load contests from JSON
function loadContests() {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'contests.json'), 'utf8');
    const contests = JSON.parse(data);
    return contests;
  } catch (err) {
    console.error("❌ Error reading contests.json:", err);
    return [];
  }
}

// Format contest message
function formatContestMessage(contest) {
  const timeString = new Date(contest.date).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return `📢 **Upcoming Contest!**\n\n🧠 **${contest.name}**\n⏰ **Time:** ${timeString} (IST)\n🔗 **Link:** ${contest.link}`;
}

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);

  const channel = client.channels.cache.get(CHANNEL_ID);
  if (!channel) {
    console.error("❌ Channel not found.");
    return;
  }

  const contests = loadContests();

  contests.forEach((contest) => {
    const contestDate = new Date(contest.date);

    // Schedule a job for the contest time
    schedule.scheduleJob(contestDate, () => {
      const message = formatContestMessage(contest);
      channel.send(message);
      console.log(`📨 Sent contest reminder: ${contest.name}`);
    });
  });
});

client.login(TOKEN);
