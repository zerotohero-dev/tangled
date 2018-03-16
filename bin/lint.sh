#!/usr/bin/env bash

#
#   / /
#  / / \
# ( ( ) tangled
#  \ / /        Untangles your strings…
#   / /           And maybe, your hair, too.
#
#  This project is a part of the “Byte-Sized JavaScript” videocasts.
#  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#
#  MIT Licensed — See LICENSE.md
#
#  Send your comments, suggestions, and feedback to me@volkan.io
#

eslint .

if [ $? -gt 0 ]
then
  echo "Error linting files!"
  exit 1
fi

echo "Everything is awesome!"
