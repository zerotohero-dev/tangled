/*
 *   / /
 *  / / \
 * ( ( ) tangled
 *  \ / /        Untangles your strings…
 *   / /           And maybe, your hair, too.
 *
 *  This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 *  MIT Licensed — See LICENSE.md
 *
 *  Send your comments, suggestions, and feedback to me@volkan.io
 */

// @flow

import showdown from 'showdown';

showdown.setFlavor('github');

const converter = new showdown.Converter({
  openLinksInNewWindow: true,
  ghMentions: false
});

const GUID_SEPARATOR = '___';

const fromJson = (data: any) => {
  try {
    return JSON.stringify(data);
  } catch (ignore) {
    void ignore;

    return `${data}`;
  }
};

const slugify = (str: string) =>
  `${str}`
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '');

/* eslint-disable no-bitwise */
const guid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, chr => {
    const rnd = (Math.random() * 16) | 0;
    const val = chr === 'x' ? rnd : (rnd & 0x3) | 0x8;

    return val.toString(16);
  });
/* eslint-enable no-bitwise */

const timestamp = () => `${new Date().getTime()}`;

const guidWithTimestamp = () => `${guid()}${GUID_SEPARATOR}${timestamp()}`;

const guidWithNegativeTimestamp = () =>
  `${guid()}${GUID_SEPARATOR}${-1 * parseInt(timestamp(), 10)}`;

const getTimestampFromGuid = (timestampedGuid: string) =>
  parseInt(timestampedGuid.split(GUID_SEPARATOR)[1], 10);

const markdown = (text: string): string => converter.makeHtml(text);

export {
  fromJson,
  slugify,
  guid,
  timestamp,
  guidWithTimestamp,
  guidWithNegativeTimestamp,
  getTimestampFromGuid,
  markdown
};
