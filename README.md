# jsPsych Starter (Vite + GitHub Pages)

A minimal, production-ready jsPsych scaffold with:
- Vite dev server + bundling
- Clean src layout (blocks/timeline/utils)
- Version stamping in each row
- GitHub Actions auto-deploy to Pages

## node.js


🛠 Installing Node.js

This project uses Node.js to manage dependencies and run the development server.

1. Check if Node.js is installed

Open a terminal and run:

```bash
node -v
npm -v
```

If you see version numbers (e.g., v20.11.1 and 10.5.0), you already have Node.js and npm installed.

2. Install Node.js

If Node.js is not installed:
	•	Recommended: Install the LTS (Long Term Support) version from the official Node.js website[https://nodejs.org/en/].
	•	Choose LTS, not Current.
	•	Download the installer for your system (Windows, macOS, Linux).
	•	Run the installer and follow the prompts.
	•	macOS with Homebrew (alternative):

brew install node


	•	Linux (Debian/Ubuntu):

sudo apt update
sudo apt install -y nodejs npm

(Or use nvm for more flexibility.)

3. Verify installation

After installation, close and reopen your terminal, then run:

node -v
npm -v

You should now see valid version numbers.

⸻

✅ That’s it! You’re ready to install dependencies with:

npm install

and start the development server with:

npm run dev


⸻

Would you like me to also add a troubleshooting section (e.g., fixing “command not found” or using nvm for version management) so your README is foolproof for students?
## Quick start

```bash
# 1) Use this repo as a template (GitHub → "Use this template")
# 2) Clone it locally, then:
npm ci
npm run dev