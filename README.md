# Wags and Wiggles — Go Live Guide
# wagsandwiggles.dog

Follow these steps exactly. No coding knowledge needed.
Takes about 20-30 minutes total.

---

## PART 1 — GitHub (5 minutes)
GitHub is where your website code lives online.

1. Go to github.com
2. Click "Sign up" — create a free account
3. Once logged in, click the green "New" button (top left)
4. Name your repository: wags-and-wiggles
5. Set it to "Private"
6. Click "Create repository"
7. On the next screen, click "uploading an existing file"
8. Drag and drop the ENTIRE "wags-deploy" folder contents:
   - public/ folder
   - src/ folder
   - package.json
9. Click "Commit changes" (green button at bottom)

Your code is now saved on GitHub!

---

## PART 2 — Vercel (5 minutes)
Vercel is what turns your code into a live website — for free.

1. Go to vercel.com
2. Click "Sign Up" — choose "Continue with GitHub"
   (This connects Vercel to your GitHub automatically)
3. Click "Add New Project"
4. You'll see "wags-and-wiggles" in the list — click "Import"
5. Leave ALL settings as they are (Vercel detects React automatically)
6. Click "Deploy"
7. Wait about 60 seconds — you'll see confetti when it's done!

Your site is now live at a temporary address like:
wags-and-wiggles.vercel.app

---

## PART 3 — Connect wagsandwiggles.dog (10 minutes)
This is where you point your domain to your Vercel site.

### Step A — Add domain in Vercel
1. In Vercel, go to your project dashboard
2. Click "Settings" tab at the top
3. Click "Domains" in the left menu
4. Type: wagsandwiggles.dog — click "Add"
5. Also add: www.wagsandwiggles.dog — click "Add"
6. Vercel will show you two values — keep this tab open, you'll need them

### Step B — Update your domain DNS
(Go to wherever you bought wagsandwiggles.dog — GoDaddy, Namecheap, Google Domains, etc.)

1. Log in to your domain registrar
2. Find "DNS Settings" or "Manage DNS" for wagsandwiggles.dog
3. Delete any existing A records or CNAME records
4. Add these new records:

   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600

5. Save changes

### Step C — Wait and verify
- DNS changes take 15 minutes to 24 hours to fully spread
- Go back to Vercel > Settings > Domains
- When it shows a green checkmark next to wagsandwiggles.dog, you're live!
- Visit wagsandwiggles.dog in your browser

---

## MAKING UPDATES LATER
Whenever you want to change something on your site:
1. Ask Claude to update your wags-wiggles.jsx file
2. Download the new file
3. Go to github.com > your wags-and-wiggles repo
4. Click on src/App.jsx
5. Click the pencil icon (edit)
6. Paste the new code
7. Click "Commit changes"
Vercel automatically rebuilds and updates your live site within 60 seconds!

---

## NEED HELP?
- Vercel support: vercel.com/help
- Your email: wagsandwigglesstamford@gmail.com
- Your phone: 347-457-0974
