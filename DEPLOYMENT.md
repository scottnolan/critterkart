# Critter Kart Deployment

## Supabase

1. Open the Supabase project.
2. Go to SQL Editor.
3. Run the contents of `supabase-schema.sql`.
4. Go to Project Settings > API.
5. Copy the Project URL and anon public key.
6. Paste them into `supabaseConfig` at the top of `app.js`.

Only use the anon public key in this static site. Do not paste the service role key or database password into the app.

## GitHub Pages

1. Create a GitHub repository for this folder.
2. Upload `index.html`, `race.html`, `styles.css`, `app.js`, `assets/`, `supabase-schema.sql`, and this file.
3. In the repository, go to Settings > Pages.
4. Set Source to `Deploy from a branch`.
5. Select the `main` branch and `/root`.
6. Save. GitHub will publish the site at the Pages URL.

## Custom Domain

For a polished URL, use GitHub Pages custom domain rather than cPanel forwarding where possible.

Common setup:

- `www.yourdomain.com` as a CNAME pointing to your GitHub Pages host.
- Apex/root domain via your DNS provider's GitHub Pages A records.

If VentraIP says your hosting plan supports multiple websites, that is separate from GitHub Pages. You can still host Critter Kart on GitHub Pages and manage the domain DNS through VentraIP.
