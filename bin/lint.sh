#!/usr/bin/env bash

#
#   / /
#  / / \
# ( ( ) tangled
#  \ / /        untangles your strings…
#   / /           and maybe your hair, too.
#
#  This project is a part of the “Byte-Sized JavaScript” videocasts.
#  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#
#  MIT Licensed — See LICENSE.md
#
#  Send your comments, suggestions, and feedback to me@volkan.io
#

echo ""
echo "   / /"
echo "  / / \\"
echo " ( ( ) tangled"
echo "  \\ / /        untangles your strings…"
echo "   / /           and maybe your hair, too."
echo ""

sleep 2

eslint .

if [ $? -eq 1 ]
then
   echo "Error linting files"
   exit 1
fi

echo "Everything is awesome!"
