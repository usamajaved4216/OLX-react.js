import React from 'react';

const Footer = () => {

    return (
        <>
            {/* <img src='https://tpc.googlesyndication.com/simgad/9072105082530633049' /> */}
        <div style={footerStyle}>
            <div style={containerStyle}>
                <div style={columnStyle}>
                    <h3>POPULAR CATEGORIES</h3>
                    <p><a href="#cars" style={linkStyle}>Cars</a></p>
                    <p><a href="#flats" style={linkStyle}>Flats for rent</a></p>
                    <p><a href="#phones" style={linkStyle}>Mobile Phones</a></p>
                    <p><a href="#jobs" style={linkStyle}>Jobs</a></p>
                </div>
                <div style={columnStyle}>
                    <h3>TRENDING SEARCHES</h3>
                    <p><a href="#bikes" style={linkStyle}>Bikes</a></p>
                    <p><a href="#watches" style={linkStyle}>Watches</a></p>
                    <p><a href="#books" style={linkStyle}>Books</a></p>
                    <p><a href="#dogs" style={linkStyle}>Dogs</a></p>
                </div>
                <div style={columnStyle}>
                    <h3>ABOUT US</h3>
                    <p><a href="#group" style={linkStyle}>About Dubizzle Group</a></p>
                    <p><a href="#blog" style={linkStyle}>OLX Blog</a></p>
                    <p><a href="#contact" style={linkStyle}>Contact Us</a></p>
                    <p><a href="#business" style={linkStyle}>OLX for Businesses</a></p>
                </div>
                <div style={columnStyle}>
                    <h3>OLX</h3>
                    <p><a href="#help" style={linkStyle}>Help</a></p>
                    <p><a href="#sitemap" style={linkStyle}>Sitemap</a></p>
                    <p><a href="#terms" style={linkStyle}>Terms of use</a></p>
                    <p><a href="#privacy" style={linkStyle}>Privacy Policy</a></p>
                </div>
                <div style={columnStyle}>
                    <h3>Follow US</h3>
                    <img style={BackgroundWidth} src='https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg' />
                    <img style={BackgroundWidth} src='https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg' />
                    <img style={BackgroundWidth} src='https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg' />
                    <img style={BackgroundWidth} src='https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg' />

                    <img style={linkStyle} src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg' />
                <img style={linkStyle} src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg' />
               <img style={linkStyle} src='https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg' />
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;

const footerStyle = {
    backgroundColor: '#002f34',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#61dafb',
width: '50%',

};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
};

const columnStyle = {
    flex: '1',
    textAlign: 'left',
    margin: '10px',

};

const BackgroundWidth = {
    backgroundColor:'grey',
width:'30px',
margin:'0 5px '
}