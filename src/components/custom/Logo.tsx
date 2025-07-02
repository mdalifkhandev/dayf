import Image, { StaticImageData } from "next/image";


const Logo = ({logo}:{logo:StaticImageData}) => {
    return (
        <div>
            <Image src={logo.src} alt="logo" width="100" height="90" />
        </div>
    );
};

export default Logo;