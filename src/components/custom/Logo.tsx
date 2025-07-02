import { StaticImageData } from "next/image";


const Logo = ({logo}:{logo:StaticImageData}) => {
    return (
        <div>
            <img src={logo.src} alt="logo" width="100" height="90" />
        </div>
    );
};

export default Logo;