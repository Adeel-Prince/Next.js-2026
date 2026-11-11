What Is NEXT.JS?
---------------------------------------------------------------------
Next.js is a React framework for building full-stack web applications. Developed
by Vercel and first released as an open-source project on GitHub in 2016.

=> So it means you can write any React code inside Next.js - like
components, hooks, props, states - just like in a regular React app.

=> And on top of that, Next.js gives you everything that React doesn't
provide out of the box - like routing, server-side rendering, static site
generation, API routes, and even full backend logic - all in one powerful
framework
-----------------------------------------------------------------------
In Simple Words:
React give you the frontend, but Next.js gives you the complete structred and build production-ready apps.
------------------------------------------------------------------------
Why Use NEXT.JS?
-----------------------------------------------------------------------
1=> File-based Routing

No need for react-router-dom. Just create files inside the pages or app
folder, and boom - route ready!
------------------------------------------------------------------------
2=> Performance Optimized

Supports static generation (SSG) and server-side rendering (SSR) - fast page
loads and better SEO.
------------------------------------------------------------------------
3=> Built-in API Routes

You can write backend code (like APIs) right inside your Next.js project. No
need to set up a separate server.
-------------------------------------------------------------------------
4=> SEO Friendly

Since it supports server rendering, search engines can read your content
better.
------------------------------------------------------------------------
5=> Full-Stack Power

Use databases, authentication, file uploads - all inside Next.js. No
required separately.
------------------------------------------------------------------------
6=> Extra Optimization

Images, Fonts, Metadata, Preloading etc.
-------------------------------------------------------------------------
Who Uses NEXT.JS?
-------------------------------------------------------------------------
01) NETFLIX, HULU, HBO

02) TWITCH

03) ΤΙΚΤΟΚ

04) OPENAI, REPL.IT, CLAUDE

05) TED, AUDIBLE

06) NIKE

When To Choose NEXT.JS?--
---------------------------------------------------------------------------
Next.js is ideal for projects where you need SEO optimization, fast loading
times, or a mix of static and dynamic content. It's particularly well-suited for
e-commerce sites, blogs, marketing websites, and any application where
performance and search engine visibility matter.
The framework scales well from simple landing pages to complex
applications with thousands of pages.
----------------------------------------------------------------------------

You must learn before Next.JS!
----------------------------------------------------------------------------

01) HTML
Learn how to structure content on the web - it's the backbone of every webpage.
-----------------------------------------------------------------------------
02) CSS
Style your webpages and make them visually appealing and responsive.
-----------------------------------------------------------------------------
03) JAVASCRIPT
Add interactivity and logic - it's what makes your website dynamic.
-------------------------------------------------------------------------------
04) REACT
Build fast, reusable, and moderan components for complex web application.
-------------------------------------------------------------------------------

System Requirements!
------------------------------------------------------------------------------
Before you begin, make sure your system meets the following requirements:
. Node.js 18.18 or later.
. macOS, Windows, or Linux.
--------------------------------------------------------------------------------
> Automatic installation: 
npx create-next-app@latest
-------------------------------------------------------------------------------
Package.Json file in NEXT.JS.
------------------------------------------------------------------------------
These scripts refer to the different stages of developing an application:
------------------------------------------------------------------------------
next dev : Starts the development server.

next build : Builds the application for production.

next start : Starts the production server.

next lint : Runs ESLint.
----------------------------------------------------------------------------------

What is Layout File?
----------------------------------------------------------------------------------
In Next.js App Router, the layout.js (or layout.tsx) file is a special file used to
wrap pages and components with a shared structure-such as headers, footers,
or navigation bars. It plays a critical role in creating consistent layouts across
different routes of your app.

01) The layout. js in the app/ folder is the Root Layout.
02) You can have nested layouts per route (e.g., about/layout.js ).
--
-----------------------------------------------------------------------------------

What is Route Groups?
-----------------------------------------------------------------------------------
In Next.js App Router, Route Groups are a way to organize your routes without
affecting the URL structure. This helps separate pages logically (like admin,
user, auth, etc.) without showing these groups in the final route path.
-----------------------------------------------------------------------------------
Route Groups don't affect the final URL path.

#Syntax:
-----------------------------------------------------------------------------------
app/
(admin)/
dashboard/
page.tsx => /dashboard
(user)/
profile/
page.tsx => /profile
-------------------------------------------------------------------------------------

What is a "Subset"?
---------------------------------------------------------------------------------------
A subset in fonts refers to a specific group of characters (glyphs) based on a
language or script.
For example:
. Latin - includes basic English and Western European characters.
. Cyrillic - includes characters for Russian, Bulgarian, etc.
. Arabic - includes Arabic script.
. Greek, Hebrew, etc.

Instead of downloading all possible characters in every script, you specify
the subset(s) you need. This:

1) Reduces the font file size
2) Improves performance and loading times
3) Makes the font more focused on your audience's language
------------------------------------------------------------------------------------------

What is a " searchParams "?
-------------------------------------------------------------------------------------------
In Next.js (especially in App Router), searchParams is an optional prop you can
access in server components or via loader functions to read query parameters
directly from the URL. It's extremely useful for building features like filtering, sorting,
and pagination - all of which are essential in e-commerce (ecom) websites.

It refers to the query string parameters in the URL - like this:
/products?category=shoes&sort=price_asc&page=2
-------------------------------------------------------------------------------------------

Catch-all Segments? 
In Next.js, catch-all segments ([ ... slug]) are incredibly useful when you want to
handle dynamic nested routes without having to manually define each level
of the path.
------------------------------------------------------------------------------------------
Example 1:

Blog with Nested Categories
Path Example: /blog/technology/javascript
---------------------------------------------------------------------------------------------
Use Case:You may have blog categories and subcategories:
/blog
/blog/technology
/blog/technology/javascript
--------------------------------------------------------------------------------------------
Instead of creating separate [category]/[subcategory]/page.js, you can use:
app/blog/[ ... slug]/page.js
----------------------------------------------------------------------------------------------
what is <Suspense> ?
----------------------------------------------------------------------------------------------
<Suspense> lets you display a fallback until its children have finished loading.
----------------------------------------------------------------------------------------------
For example:
. Show a loading spinner for just part of the page
· Fetch server-side data inside a component (server component)
. Make your Ul feel more responsive without waiting for everything
-----------------------------------------------------------------------------------------
Static Route (Default Behavior)
-----------------------------------------------------------------------------------------
In Next.js, all routes are static by default.

For example:
. Page is generated once during npm run build.
. Doesn't change based on user or request data.
. Loads super fast and can be cached by CDNs.
-----------------------------------------------------------------------------------------
Dynamic Route
---------------------------------------------------------------------------------------
A route becomes dynamic when it depends on data that can change between
requests, like:

For example:
1) searchParams (e.g. ?user=thapa)
2) headers() function
3) cookies() function
4) useSearchParams() or usePathname()
5) fetch() with cache: 'no-store' or next: { revalidate: 0 }
6) Or when you manually mark a page as dynamic:
                        export const dynamic = 'force-dynamic';
--------------------------------------------------------------------------------------------
What is ISR? Incremental Static Regenration
-------------------------------------------------------------------------------------------
Let's say your page was built at 12:00 PM with 10 database entries:
-
Timeline:
12:00 PM: Build complete, page has 10 entries
12:30 PM: You delete 2 entries (now 8 in DB)
· 1:00 PM: User visits page (60+ seconds after build)

What the user sees:
. Immediately: The cached version with 10 entries (stale data)
. Background: Next.js triggers regeneration with current DB state (8 entries)
. Next visitor: Gets the fresh version with 8 entries.

Key Points:

. No automatic background updates - ISR only regenerates when someone requests the page after  the revalidate period
. Stale data is served first - Users never wait for regeneration
. Zero downtime - Page is always available, even during regeneration failures
----------------------------------------------------------------------------------------
What is React Cache?
----------------------------------------------------------------------------------------
cache() is a function introduced in React 18+ that allows you to memoize (store the
result of) a function based on its arguments so it doesn't run again if called with the
same arguments.

This is particularly useful on the server to avoid repeated data fetching for the same
input, especially during SSR or RSC rendering.

cache() works only in server components or in server environments like Next.js
app router.
----------------------------------------------------------------------------------------
Whats is On-Demand Revalidation ?
----------------------------------------------------------------------------------------
On-demand revalidation in Next.js 15 is a powerful caching feature that allows you
to manually clear and refresh cached data or pages in response to specific events,
rather than waiting for automatic time-based revalidation. This gives you precise
control over when your application's cache is updated, ensuring users see fresh
content immediately when changes occur.

Syntax:
----------------------------------------------------------------------------------------
export async function createPost() {// Invalidate the entire
/posts route cache
revalidatePath('/posts')
}
----------------------------------------------------------------------------------------
OtherUsefull libararies which are used for UI/UX Designing in Next.js:
1) Shandcn UI
2) Origin UI
----------------------------------------------------------------------------------------

Development with Deployment!
----------------------------------------------------------------------------------------
we can run this command to host same web project in our Mobile like App!
here you need to run: npm run dev -- --host
----------------------------------------------------------------------------------------