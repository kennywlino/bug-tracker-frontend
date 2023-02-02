import { Footer as MantineFooter } from '@mantine/core';
import './styles.css';

const Footer = () => {
  return(
    <MantineFooter
      height={0} 
      pb={45}
      pl='md'
    >
      <p> &copy;2023 VFT</p>
    </MantineFooter>
  );
};

export default Footer;
