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

yarn run test

if [ $? -gt 0 ]
then
  echo "Tests failed!"
  exit 1
fi

yarn run flow

if [ $? -gt 0 ]
then
  echo "Flowtype checks failed!"
  exit 1
fi

yarn run build

if [ $? -gt 0 ]
then
  echo "Build failed!"
  exit 1
fi

lint-staged

if [ $? -gt 0 ]
then
  echo "Problem in lint-staged!"
  exit 1
fi

echo "Everything is awesome!"
