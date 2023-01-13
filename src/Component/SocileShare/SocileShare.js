import React from 'react';
import './SocileShare.css'
import {
    FacebookShareButton,
    WhatsappShareButton,
    EmailShareButton,
    LinkedinShareButton,
    WhatsappIcon,
    FacebookIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';
const SocileShare = () => {
    const shareUrl = "https://fir-f28fd.web.app/"
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" id="fb">
                <FacebookShareButton
                    url={shareUrl}
                    quote={'Title or jo bhi aapko likhna ho'}
                    hashtag={'#portfolio...'}
                >
                    <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
            </a>
            <a href="#" id="wp">
                <WhatsappShareButton
                    url={shareUrl}

                >
                    <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
            </a>
            <a href="#" id="ln">
                <LinkedinShareButton
                    url={shareUrl}

                >
                    <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
            </a>
            <a href="#" id="el">
                <EmailShareButton
                    url={shareUrl}

                >
                    <EmailIcon size={40} round={true} />
                </EmailShareButton>
            </a>
        </div>
    );
};

export default SocileShare;