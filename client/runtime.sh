#!/bin/bash

echo "  "
echo "======= Installing Vercel Serve package ======================================================="
npm install -g serve
echo "  "
echo "======= Serving Dist folder ======================================================="
serve dist
exit