import {memo} from "react";

const Footer = memo(function Footer() {

    return (
        <footer>
            <p>&copy; Paws and Playdates {new Date().getFullYear()}</p>
        </footer>
    )
})

export default Footer