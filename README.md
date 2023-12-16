# Remix v2 crash course

## Notes

### File structure
- `root.tsx` root of app
- `entry.client` & `entry.server` don't have to touch usually
- `routes` dir is where all routes are stored
- for UI routes, must always do a `export default`

### Nested routes
- `routes/hello.tsx` would be /hello
- `routes/hello.one.tsx` would be /hello/one
- for a layout component, must add `<Outlet />`
- `dashboard.$id.tsx` is a dynamic route

## Prisma
- `npm i prisma --save-dev`
- `npm i @prisma/client`
- to generate schema, run `npx prisma init`

## Planetscale DB
- create db in planetscale (rollingsxshi)
- update .env with connection string
- copy prisma schema into `schema.prisma`
- `npx prisma db push` after creating custom models in `schema.prisma`
