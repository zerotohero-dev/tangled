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

rm -rf lib

if [ $? -gt 0 ]
then
  echo "Build failed: 000."
  exit 1
fi

flow-remove-types --pretty src/ -d lib/

if [ $? -gt 0 ]
then
  echo "Build failed: 001."
  exit 1
fi

flow-copy-source -v src lib

if [ $? -gt 0 ]
then
  echo "Build failed: 002."
  exit 1
fi

echo "Everything is awesome!"
