import Link from "next/link";

const footer = {
    position: 'fixed',
    bottom: 0,
    margin: 0,
    width: '100vw',
    height: '56px',
    backgroundColor: '$Light'
};

const name = {
    position: 'fixed',
    bottom: 20,
    margin: 0,
    left: 20
};

const info = {
    position: 'fixed',
    bottom: 20,
    margin: 0,
    right: 20
};

const Footer = () => (
    <div style={footer}>
      <div style={name}>
      James Oh
      </div>
      <div style={info}>
        <a>Info</a>
      </div>
    </div>
);

export default Footer;
