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

yarn run test

if [ $? -eq 1 ]
then
   echo "Tests failed!"
   exit 1
fi

lint-staged
