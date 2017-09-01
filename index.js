const GUID_SEPARATOR = '___';

const fromJson = ( data ) => {
    try {
        return JSON.stringify( data );
    } catch ( ignore ) {
        void ignore;

        return `${data}`;
    }
};

const slugify = ( str ) => ( `${str}` )
    .toLowerCase()
    .replace( /\s+/g, '-' )
    .replace( /[^\w\-]+/g, '' )
    .replace( /\-\-+/g, '-' )
    .replace( /^-+/g, '' )
    .replace( /-+$/g, '' );

/* eslint-disable no-bitwise */
const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, ( chr ) => {
    const rnd = Math.random() * 16 | 0;
    const val = chr === 'x' ? rnd : ( rnd & 0x3 | 0x8 );

    return val.toString( 16 );
} );
/* eslint-enable no-bitwise */

const timestamp = () => `${( new Date() ).getTime()}`;

const guidWithTimestamp = () => `${guid()}${GUID_SEPARATOR}${timestamp()}`;

const getTimestampFromGuid = ( timestampedGuid ) =>
parseInt( timestampedGuid.split( GUID_SEPARATOR )[ 1 ], 10 );

export {
    fromJson, slugify, guid, timestamp, guidWithTimestamp, getTimestampFromGuid
};
