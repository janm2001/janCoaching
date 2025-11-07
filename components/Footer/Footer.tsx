import Container from "../Container/Container";
import Divider from "../Divider/Divider";

const Footer = () => {
  return (
    <Container variant="muted">
      <div className="flex flex-col gap-2 p-4 mx-10 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">Jan Coaching</h2>
          <p>Helping you achieve your running goals</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact</h2>
          <p>Email: jmackovic2001@gmail.com</p>
          <p>Phone: +385919811873</p>
        </div>
        </div>
        <Divider />
        <p className="text-center py-2">
          &copy; {new Date().getFullYear()} Jan Coaching. All rights reserved.
        </p>
      
    </Container>
  );
};

export default Footer;
