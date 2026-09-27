UZHANDY V7 — HTML + Supabase-ready MVP

1. Open index.html for the public website.
2. Open admin/index.html for the current local demo admin.
3. To enable real estimate submissions:
   - Create a Supabase project.
   - Run supabase-schema.sql in Supabase SQL Editor.
   - Put Project URL and anon/publishable key into config.js.
   - Do NOT put the Supabase service_role key in HTML/JavaScript.
4. free-estimate.html will then insert requests into estimate_requests.
5. Until Supabase is configured, the form safely falls back to the local demo data.

Production next step:
- Add Supabase Auth to /admin.
- Replace localStorage reads/writes in admin/index.html with authenticated Supabase queries.
- Add private Storage bucket for customer project photos.
- Deploy to Vercel and connect uzhandy.us + www redirect.

Important: The admin page in this V7 package is still a demo and is NOT secure authentication.
