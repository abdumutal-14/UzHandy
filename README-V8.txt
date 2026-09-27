UZHANDY V8

Connected to the supplied Supabase project using the publishable browser key.
Admin authentication is now real Supabase Auth.
/admin/login.html signs in, verifies public.admin_users membership, then opens the dashboard.
/admin/index.html reads real estimate_requests and can update request status.
Logout is implemented.

IMPORTANT:
- Never put a Supabase service_role/secret key in this static site.
- The previously shared simple password should not be used; set a new strong password in Supabase Auth.
- Current DB status constraint supports: new, contacted, scheduled, completed, cancelled.
- The website estimate form already posts to Supabase when config.js is configured.
- Domain is intentionally not required yet; deploy to Vercel preview first.

Next: test Free Estimate -> Supabase -> Admin, then GitHub/Vercel deployment.
