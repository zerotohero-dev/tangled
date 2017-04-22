
const slugify = function( str ) {
    return ( '' + str )
        .toLowerCase()
        .replace( /\s+/g, '-' )
        .replace( /[^\w\-]+/g, '' )
        .replace( /\-\-+/g, '-' )
        .replace( /^-+/g, '' )
        .replace( /-+$/g, '' );
}

exports.slugify = slugify;

//const slugify = ( str ) => ( '' + str )
//    .toLowerCase()
//	    .replace( /\s+/g, '-' )
//	        .replace( /[^\w\-]+/g, '' )
//		    .replace( /\-\-+/g, '-' )
//		        .replace( /^-+/g, '' )
//			    .replace( /-+$/g, '' );
//

exports.slugify = slugify;

