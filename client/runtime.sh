echo "  "
echo "======= Removing NODE_OPTIONS environment variable ======================================================="
unset NODE_OPTIONS
echo "  "
echo "======= Installing Vercel Serve package ======================================================="
npm install -g serve
echo "  "
echo "======= Serving Dist folder ======================================================="
serve dist
exit