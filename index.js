
const fromJson = ( data ) => {
    try {
        return JSON.stringify( data );
    } catch ( ignore ) {
        void ignore;

        return `${data}`;
    }
};

const slugify = ( str ) => ( '' + str )
    .toLowerCase()
    .replace( /\s+/g, '-' )
    .replace( /[^\w\-]+/g, '' )
    .replace( /\-\-+/g, '-' )
    .replace( /^-+/g, '' )
    .replace( /-+$/g, '' );

exports.fromJson = fromJson;
exports.slugify = slugify;
